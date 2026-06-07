const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'src', 'LegacyScript.jsx');
let content = fs.readFileSync(scriptPath, 'utf8');

// 1. Import useLocation
content = content.replace(
    /import \{ useEffect \} from 'react';/,
    `import { useEffect } from 'react';\nimport { useLocation } from 'react-router-dom';`
);

// 2. Add useLocation and update dependency array
content = content.replace(
    /export default function LegacyScript\(\) \{\n  useEffect\(\(\) => \{/,
    `export default function LegacyScript() {\n  const location = useLocation();\n\n  useEffect(() => {\n`
);

// Add dependency array at the end
// Find:     })();
//       });
// Replace:     })();
//           return cleanup;
//       }, [location.pathname]);
content = content.replace(
    /    \}\)\(\);\n  \}\);/,
    `    })();\n    return window.__saarthiCleanup;\n  }, [location.pathname]);`
);

// 3. Refactor global event listeners to be cleanable
// Replace document click listener
content = content.replace(
    /document\.addEventListener\("click", \(event\) => \{([\s\S]*?)\}\);/g,
    `const clickHandler = (event) => {$1};\n    document.addEventListener("click", clickHandler);`
);

// Replace window scroll listener
content = content.replace(
    /window\.addEventListener\("scroll", \(\) => \{([\s\S]*?)\}\);/g,
    `const scrollHandler = () => {$1};\n    window.addEventListener("scroll", scrollHandler);`
);

// 4. Create the cleanup function just before the IIFE ends
content = content.replace(
    /    initTheme\(\);\n    enforceAuth\(\);\n    initAuthPage\(\);\n    renderJournal\(\);/g,
    `    initTheme();\n    enforceAuth();\n    initAuthPage();\n    renderJournal();\n\n    window.__saarthiCleanup = () => {\n        document.removeEventListener("click", clickHandler);\n        window.removeEventListener("scroll", scrollHandler);\n        revealObserver.disconnect();\n        counterObserver.disconnect();\n    };\n`
);

fs.writeFileSync(scriptPath, content);
console.log('LegacyScript.jsx updated with proper React effect cleanup.');
