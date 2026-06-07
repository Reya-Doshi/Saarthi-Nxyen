const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

let routesCode = [];
let importsCode = [];

files.forEach(file => {
    const componentName = file.replace('.jsx', '');
    
    // convert PascalCase to kebab-case
    const baseName = componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

    let routePath = `/${baseName}`;
    if (componentName === 'Index') {
        routePath = '/';
    }
    
    routesCode.push(`        <Route path="${routePath}" element={<${componentName} />} />`);
    importsCode.push(`import ${componentName} from './pages/${componentName}';`);
});

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
console.log('App.jsx regenerated successfully!');
