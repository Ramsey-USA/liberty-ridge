#!/usr/bin/env node

/**
 * Advanced Markdown Lint Fix Script
 *
 * Fixes MD022, MD031, and MD032 violations by ensuring proper spacing
 * around headings, code blocks, and lists.
 */

const fs = require('fs');
const path = require('path');

/**
 * Simple but effective markdown fixer
 * @param {string} content - The markdown content to fix
 * @returns {string} - Fixed markdown content
 */
function fixMarkdownLinting(content) {
  const lines = content.split('\n');
  const result = [];

  for (let i = 0; i < lines.length; i++) {
    const current = lines[i];
    const prev = i > 0 ? lines[i - 1] : null;
    const next = i < lines.length - 1 ? lines[i + 1] : null;

    const isHeading = current.match(/^#{1,6}\s/);
    const isCodeFence = current.trim().match(/^```/);
    const isList = current.match(/^\s*[-*+]\s/) || current.match(/^\s*\d+\.\s/);

    // Handle headings (MD022)
    if (isHeading) {
      // Need blank line before heading?
      if (prev !== null && prev.trim() !== '') {
        result.push('');
      }
      result.push(current);
      // Need blank line after heading?
      if (next !== null && next.trim() !== '') {
        result.push('');
      }
    } else if (isCodeFence) {
      // Need blank line before code block?
      if (prev !== null && prev.trim() !== '') {
        result.push('');
      }
      result.push(current);
      // Need blank line after code block?
      if (next !== null && next.trim() !== '') {
        result.push('');
      }
    } else if (isList) {
      const prevIsList = prev && (prev.match(/^\s*[-*+]\s/) || prev.match(/^\s*\d+\.\s/));
      const nextIsList = next && (next.match(/^\s*[-*+]\s/) || next.match(/^\s*\d+\.\s/));

      // First item in list - need blank line before?
      if (!prevIsList && prev !== null && prev.trim() !== '') {
        result.push('');
      }
      result.push(current);
      // Last item in list - need blank line after?
      if (!nextIsList && next !== null && next.trim() !== '') {
        result.push('');
      }
    } else {
      result.push(current);
    }
  }

  // Clean up any double blank lines that might have been created
  const cleaned = [];
  for (let i = 0; i < result.length; i++) {
    const current = result[i];
    const prev = i > 0 ? result[i - 1] : null;

    // Skip if this creates consecutive blank lines
    if (current.trim() === '' && prev !== null && prev.trim() === '') {
      continue;
    }
    cleaned.push(current);
  }

  return cleaned.join('\n');
}

/**
 * Process a single markdown file
 * @param {string} filePath - Path to the markdown file
 */
function processMarkdownFile(filePath) {
  try {
    console.log(`📝 Processing: ${filePath}`);

    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMarkdownLinting(content);

    // Only write if content changed
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`✨ Already clean: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Find all markdown files in a directory recursively
 * @param {string} dir - Directory to search
 * @returns {string[]} - Array of markdown file paths
 */
function findMarkdownFiles(dir) {
  const files = [];

  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        searchDir(fullPath);
      } else if (item.endsWith('.md')) {
        files.push(fullPath);
      }
    }
  }

  searchDir(dir);
  return files;
}

/**
 * Main execution
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length > 0) {
    // Process specific file
    const filePath = args[0];
    if (!fs.existsSync(filePath)) {
      console.error(`❌ File not found: ${filePath}`);
      process.exit(1);
    }
    const wasFixed = processMarkdownFile(filePath);
    console.log(`\n${wasFixed ? '🎉' : '✨'} Processing complete!`);
  } else {
    // Process all markdown files in docs/
    const docsDir = path.join(__dirname, '..', 'docs');
    if (!fs.existsSync(docsDir)) {
      console.error(`❌ Docs directory not found: ${docsDir}`);
      process.exit(1);
    }

    console.log('🔧 Fixing markdown linting issues in all documentation files...\n');

    const markdownFiles = findMarkdownFiles(docsDir);

    if (markdownFiles.length === 0) {
      console.log('📄 No markdown files found in docs/');
      return;
    }

    console.log(`📋 Found ${markdownFiles.length} markdown files:\n`);

    let fixedCount = 0;
    for (const filePath of markdownFiles) {
      if (processMarkdownFile(filePath)) {
        fixedCount++;
      }
    }

    console.log(`\n🎉 Completed processing ${markdownFiles.length} files!`);
    console.log(
      `🔧 Fixed ${fixedCount} files, ${markdownFiles.length - fixedCount} were already clean.`
    );
    console.log('\n💡 Run "npm run lint" to verify all issues are fixed.');
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixMarkdownLinting, processMarkdownFile };
