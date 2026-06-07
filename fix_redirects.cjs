const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'LegacyScript.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace currentPage logic to use React Router location instead of window.location
content = content.replace(
    /return window\.location\.pathname;/g,
    'return location.pathname;'
);

// Replace hard redirects with hash redirects to trigger HashRouter instead of a full page reload
content = content.replace(
    /window\.location\.href = "\/auth";/g,
    'window.location.hash = "/auth";'
);

content = content.replace(
    /window\.location\.href = "\/";/g,
    'window.location.hash = "/";'
);

fs.writeFileSync(filePath, content);
console.log('LegacyScript.jsx updated with HashRouter-compatible redirects.');
