const fs = require('fs');
const path = require('path');

const CONSOLE_SCRIPT = `<script src="/dashboard-console-capture.js"></script>`;

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('dashboard-console-capture.js')) {
    console.log(`✓ ${filePath} already includes console capture script`);
    return;
  }
  
  if (content.includes('</head>')) {
    content = content.replace('</head>', `  ${CONSOLE_SCRIPT}\n</head>`);
    fs.writeFileSync(filePath, content);
    console.log(`✓ Injected console capture script into ${filePath}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

const outDir = path.join(process.cwd(), '.next');
if (fs.existsSync(outDir)) {
  console.log('Injecting console capture script into build files...');
  processDirectory(outDir);
  console.log('Done!');
} else {
  console.log('No build directory found. Skipping injection.');
}