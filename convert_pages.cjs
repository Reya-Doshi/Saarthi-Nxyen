const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const pagesDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
}

function kebabToPascal(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

let routesCode = [];
let importsCode = [];

files.forEach(file => {
    const baseName = file.replace('.html', '');
    const componentName = kebabToPascal(baseName);
    
    let routePath = `/${baseName}`;
    if (baseName === 'index') {
        routePath = '/';
    }
    
    routesCode.push(`        <Route path="${routePath}" element={<${componentName} />} />`);
    importsCode.push(`import ${componentName} from './pages/${componentName}';`);

    const filePath = path.join(publicDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Extract body more robustly
    let bodyContent = html;
    const bodyStart = html.match(/<body[^>]*>/i);
    if (bodyStart) {
        bodyContent = html.substring(bodyStart.index + bodyStart[0].length);
    }
    const bodyEnd = bodyContent.match(/<\/body>/i);
    if (bodyEnd) {
        bodyContent = bodyContent.substring(0, bodyEnd.index);
    }

    // Remove script tags
    bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove HTML comments
    bodyContent = bodyContent.replace(/<!--[\s\S]*?-->/g, '');

    // Convert standard tags
    let jsx = bodyContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/<(img|input|br|hr|source)\s*([^>]*?)>/gi, (match, tag, attrs) => {
            if (attrs.endsWith('/')) return match;
            return `<${tag} ${attrs} />`;
        })
        .replace(/viewbox=/gi, 'viewBox=');

    // Convert SVG attributes
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/stroke-linecap=/g, 'strokeLinecap=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');

    // Convert inline styles to JSX objects
    jsx = jsx.replace(/style="([^"]+)"/g, (match, styles) => {
        const styleObj = {};
        styles.split(';').forEach(s => {
            if (!s.trim()) return;
            const [k, v] = s.split(':');
            if (k && v) {
                const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                styleObj[camelK] = v.trim();
            }
        });
        return `style={${JSON.stringify(styleObj)}}`;
    });

    // Convert anchors to React Router Links
    jsx = jsx.replace(/<a\b/g, '<Link');
    jsx = jsx.replace(/<\/a>/g, '</Link>');
    jsx = jsx.replace(/href=/g, 'to=');
    jsx = jsx.replace(/to="([^"]+)\.html(#?[^"]*)"/g, (match, page, hash) => {
        return `to="${page === 'index' ? '/' : '/' + page}${hash}"`;
    });
    
    const componentCode = `import React from 'react';
import { Link } from 'react-router-dom';

export default function ${componentName}() {
    return (
        <>
            ${jsx}
        </>
    );
}
`;
    fs.writeFileSync(path.join(pagesDir, `${componentName}.jsx`), componentCode);
});

// Update App.jsx
const appJsx = `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LegacyScript from './LegacyScript';
${importsCode.join('\n')}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
${routesCode.join('\n')}
            </Routes>
            <LegacyScript />
        </BrowserRouter>
    );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx);
console.log('Conversion complete!');
