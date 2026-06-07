const fs = require('fs');

try {
    // 1. App.jsx
    const html = fs.readFileSync('index_backup.html', 'utf8');
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : '';
    
    // Remove script tag for script.js
    bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Basic JSX conversions
    let jsxContent = bodyContent
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        // Add self closing to typical unclosed tags
        .replace(/<(img|input|br|hr)([^>]*[^\/])>/gi, '<$1$2 />')
        // viewBox is case sensitive in React
        .replace(/viewbox=/gi, 'viewBox=');

    const appJsx = `import React from 'react';
import LegacyScript from './LegacyScript';
import './style.css';

export default function App() {
  return (
    <>
      ${jsxContent}
      <LegacyScript />
    </>
  );
}
`;
    fs.writeFileSync('src/App.jsx', appJsx);

    // 2. LegacyScript.jsx
    const js = fs.readFileSync('script.js', 'utf8');
    const legacyJsx = `import { useEffect } from 'react';

export default function LegacyScript() {
  useEffect(() => {
    // We wrap this inside a try-catch and IIFE to isolate scope
    (function() {
${js}
    })();
  }, []);
  return null;
}
`;
    fs.writeFileSync('src/LegacyScript.jsx', legacyJsx);

    // 3. main.jsx
    const mainJsx = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
`;
    fs.writeFileSync('src/main.jsx', mainJsx);
    
    console.log("Conversion successful");
} catch(e) {
    console.error(e);
}
