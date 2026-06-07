const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'src', 'LegacyScript.jsx');
let content = fs.readFileSync(scriptPath, 'utf8');

// The file got messed up around document.addEventListener("keydown"
// Let's find document.addEventListener("keydown" and ensure it's closed properly.
// The corrupted part starts around `document.addEventListener("keydown", (event) => {\n    if (event.key === "Escape") {\nconst moodGrid = document.getElementById("moodGrid");`

const corruptedRegex = /document\.addEventListener\("keydown", \(event\) => \{\n    if \(event\.key === "Escape"\) \{\nconst moodGrid/g;

if (corruptedRegex.test(content)) {
    content = content.replace(corruptedRegex, `document.addEventListener("keydown", (event) => {\n    if (event.key === "Escape") {\n        closeExercise();\n        navDropdownItems.forEach((item) => item.classList.remove("open"));\n        if (profileMenu) profileMenu.classList.remove("open");\n    }\n});\n\nconst moodGrid`);
}

// Ensure the end is correct
// Let's remove the duplicated tail and add the correct tail
content = content.replace(/initTheme\(\);\nenforceAuth\(\);\n\nreturn \(\) => \{[\s\S]*$/, '');

content += `initTheme();\nenforceAuth();\n\n    return () => {\n        document.removeEventListener("click", clickHandler);\n        window.removeEventListener("scroll", scrollHandler);\n        revealObserver.disconnect();\n        counterObserver.disconnect();\n    };\n    })();\n  }, [location.pathname]);\n  return null;\n}\n`;

// Make sure the useEffect actually returns the IIFE
content = content.replace(/useEffect\(\(\) => \{\n\n    \/\/ We wrap this inside a try-catch and IIFE to isolate scope\n    \(function\(\) \{/, `useEffect(() => {\n    return (function() {`);

fs.writeFileSync(scriptPath, content);
console.log('LegacyScript.jsx repaired successfully.');
