const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, 'src', 'LegacyScript.jsx');
let content = fs.readFileSync(scriptPath, 'utf8');

// Replace standard links
content = content.replace(/href="([a-z-]+)\.html(#?.*?)"/g, (match, p1, hash) => {
    return p1 === 'index' ? `href="/${hash}"` : `href="/${p1}${hash}"`;
});

content = content.replace(/href='([a-z-]+)\.html(#.*?)?'/g, (match, p1, hash) => {
    return p1 === 'index' ? `href='/${hash || ''}'` : `href='/${p1}${hash || ''}'`;
});

// Replace window.location.href
content = content.replace(/window\.location\.href\s*=\s*"([a-z-]+)\.html(#?.*?)"/g, (match, p1, hash) => {
    return p1 === 'index' ? `window.location.href = "/${hash}"` : `window.location.href = "/${p1}${hash}"`;
});

// Replace currentPage comparison
content = content.replace(/=== "([a-z-]+)\.html"/g, (match, p1) => {
    return p1 === 'index' ? `=== "/"` : `=== "/${p1}"`;
});
content = content.replace(/!== "([a-z-]+)\.html"/g, (match, p1) => {
    return p1 === 'index' ? `!== "/"` : `!== "/${p1}"`;
});

// Fix currentPage() logic to return the path instead of the file
content = content.replace(
    /function currentPage\(\) \{\s*const parts = window\.location\.pathname\.split\("\/"\);\s*return parts\[parts\.length - 1\] \|\| "index\.html";\s*\}/g,
    `function currentPage() {
    return window.location.pathname;
}`
);

fs.writeFileSync(scriptPath, content);
console.log('LegacyScript.jsx updated successfully.');
