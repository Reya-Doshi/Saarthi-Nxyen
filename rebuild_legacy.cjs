const fs = require('fs');
const path = require('path');

const publicScriptPath = path.join(__dirname, 'public', 'script.js');
const targetScriptPath = path.join(__dirname, 'src', 'LegacyScript.jsx');

let rawContent = fs.readFileSync(publicScriptPath, 'utf8');

// 1. Refactor event listeners in rawContent
rawContent = rawContent.replace(
    /document\.addEventListener\("click", \(event\) => \{([\s\S]*?)\}\);/g,
    `const clickHandler = (event) => {$1};\n    document.addEventListener("click", clickHandler);`
);

rawContent = rawContent.replace(
    /window\.addEventListener\("scroll", \(\) => \{([\s\S]*?)\}\);/g,
    `const scrollHandler = () => {$1};\n    window.addEventListener("scroll", scrollHandler);`
);

// We need to return a cleanup function at the end
let newContent = `import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function LegacyScript() {
    const location = useLocation();

    useEffect(() => {
        return (function() {
${rawContent}

            return () => {
                if (typeof clickHandler !== 'undefined') document.removeEventListener("click", clickHandler);
                if (typeof scrollHandler !== 'undefined') window.removeEventListener("scroll", scrollHandler);
                if (typeof revealObserver !== 'undefined') revealObserver.disconnect();
                if (typeof counterObserver !== 'undefined') counterObserver.disconnect();
            };
        })();
    }, [location.pathname]);

    return null;
}
`;

fs.writeFileSync(targetScriptPath, newContent);
console.log('LegacyScript.jsx rebuilt from public/script.js!');
