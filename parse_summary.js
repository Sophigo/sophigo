const fs = require('fs');
const path = require('path');

const summaryPath = path.join(__dirname, 'docs/courses/fab-course/SUMMARY.md');
const content = fs.readFileSync(summaryPath, 'utf-8');
const lines = content.split('\n');

function cleanLink(link) {
  if (!link) return '';
  const trimmed = link.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  let cleaned = trimmed.replace(/\.md$/, '');
  if (cleaned.startsWith('/')) {
    cleaned = cleaned.slice(1);
  }
  cleaned = cleaned.replace(/^docs\/courses\/fab-course\//, '');
  return '/courses/fab-course/' + cleaned;
}

const linkRegex = /\[([^\]]+)\]\(([^)]*)\)/;

const sections = {
  lab: {
    text: 'Lab Management',
    collapsed: false,
    items: []
  },
  tutorials: {
    text: 'Core Tutorials',
    collapsed: false,
    items: []
  },
  fabs: {
    text: 'FABS & Student Works',
    collapsed: true,
    items: []
  }
};

let currentSection = null;
let stack = []; // Stack of active nodes

for (let line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  // Header 2 (## Title)
  if (line.startsWith('## ')) {
    const titleText = trimmed.slice(3).trim();
    let text = titleText;
    let link = '';
    const match = titleText.match(linkRegex);
    if (match) {
      text = match[1];
      link = cleanLink(match[2]);
    }

    if (text.toLowerCase().includes('manage')) {
      currentSection = sections.lab;
      if (link) {
        currentSection.items.push({ text: 'Overview', link });
      }
    } else if (text.toLowerCase().includes('tutorial')) {
      currentSection = sections.tutorials;
    } else if (text.toLowerCase().includes('fab')) {
      currentSection = sections.fabs;
    } else {
      currentSection = null;
    }
    stack = []; // Clear stack for new section
    continue;
  }

  // List item
  if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
    const itemText = trimmed.slice(2).trim();
    let text = itemText;
    let link = '';
    const match = itemText.match(linkRegex);
    if (match) {
      text = match[1];
      link = cleanLink(match[2]);
    }

    const indent = line.length - line.trimStart().length;

    if (!currentSection) continue;

    const node = { text };
    if (link) {
      node.link = link;
    }
    node.indent = indent;

    // Pop nodes from stack that are at same or deeper indentation
    while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
      stack.pop();
    }

    if (stack.length > 0) {
      // Add as child to the parent at the top of the stack
      const parent = stack[stack.length - 1];
      if (!parent.items) {
        parent.items = [];
        parent.collapsed = true; // Make parent collapsible since it has children
      }
      parent.items.push(node);
    } else {
      // Top-level item in the section
      currentSection.items.push(node);
    }

    stack.push(node);
  }
}

// Clean up: remove indent properties from final JSON output
function removeIndentProp(node) {
  delete node.indent;
  if (node.items) {
    node.items.forEach(removeIndentProp);
  }
}

const finalSidebar = [];
for (const key in sections) {
  const section = sections[key];
  section.items.forEach(removeIndentProp);
  
  // Filter out empty groups/subgroups
  section.items = section.items.filter(item => {
    if (item.items) {
      return item.items.length > 0;
    }
    return true;
  });

  if (section.items.length > 0) {
    finalSidebar.push(section);
  }
}

const outputPath = path.join(__dirname, 'docs/.vitepress/fab_sidebar.js');
const fileContent = `// Automatically generated from SUMMARY.md. Do not edit directly.\nexport default ${JSON.stringify(finalSidebar, null, 2)};\n`;
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log('Sidebar configuration successfully written to:', outputPath);
