#!/usr/bin/env node

/**
 * Markdown Lint Auto-Fix Script
 *
 * Automatically fixes common markdown linting issues across the workspace.
 * Based on patterns discovered during Liberty Ridge lint repair process.
 *
 * Usage:
 *   node scripts/fix-markdown-lint.js [path]
 *   npm run fix:markdown
 *
 * Fixes Applied:
 * - MD040: Adds language tags to fenced code blocks
 * - MD034: Wraps bare URLs in angle brackets
 * - MD047: Ensures files end with single newline
 * - MD009: Removes trailing spaces
 * - MD036: Converts bold emphasis to proper headings
 * - MD026: Removes trailing punctuation from headings
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

class MarkdownLintFixer {
  constructor(options = {}) {
    this.options = {
      dryRun: options.dryRun || false,
      verbose: options.verbose || false,
      extensions: options.extensions || ['.md', '.markdown'],
      excludePatterns: options.excludePatterns || [
        'node_modules/**',
        '.git/**',
        'dist/**',
        'build/**'
      ]
    };

    this.fixesApplied = {
      MD040: 0, // Fenced code language
      MD034: 0, // Bare URLs
      MD047: 0, // Single trailing newline
      MD009: 0, // Trailing spaces
      MD036: 0, // Emphasis as heading
      MD026: 0 // Trailing punctuation in heading
    };
  }

  /**
     * Main entry point - find and fix all markdown files
     */
  async fixAll(targetPath = '.') {
    console.log('🔧 Starting Markdown Lint Auto-Fix...\n');

    const files = await this.findMarkdownFiles(targetPath);

    if (files.length === 0) {
      console.log('❌ No markdown files found.');
      return;
    }

    console.log(`📁 Found ${files.length} markdown files to process:`);
    files.forEach(file => console.log(`   - ${file}`));
    console.log('');

    let totalFilesFixed = 0;

    for (const file of files) {
      const fixes = await this.fixFile(file);
      if (fixes > 0) {
        totalFilesFixed++;
      }
    }

    this.printSummary(totalFilesFixed, files.length);
  }

  /**
     * Find all markdown files matching criteria
     */
  async findMarkdownFiles(targetPath) {
    const patterns = this.options.extensions.map(ext =>
      path.join(targetPath, `**/*${ext}`)
    );

    let files = [];
    for (const pattern of patterns) {
      const matches = glob.sync(pattern, {
        ignore: this.options.excludePatterns,
        absolute: true
      });
      files = files.concat(matches);
    }

    // Remove duplicates and sort
    return [...new Set(files)].sort();
  }

  /**
     * Fix a single markdown file
     */
  async fixFile(filePath) {
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      let content = originalContent;
      let fixCount = 0;

      if (this.options.verbose) {
        console.log(`🔍 Processing: ${path.relative('.', filePath)}`);
      }

      // Apply all fixes in order
      const fixes = [
        { name: 'MD040', fn: this.fixFencedCodeLanguage.bind(this) },
        { name: 'MD034', fn: this.fixBareUrls.bind(this) },
        { name: 'MD009', fn: this.fixTrailingSpaces.bind(this) },
        { name: 'MD036', fn: this.fixEmphasisAsHeading.bind(this) },
        { name: 'MD026', fn: this.fixTrailingPunctuation.bind(this) },
        { name: 'MD047', fn: this.fixTrailingNewline.bind(this) }
      ];

      for (const fix of fixes) {
        const result = fix.fn(content);
        if (result.content !== content) {
          content = result.content;
          fixCount += result.count;
          this.fixesApplied[fix.name] += result.count;

          if (this.options.verbose && result.count > 0) {
            console.log(`   ✅ ${fix.name}: ${result.count} fixes applied`);
          }
        }
      }

      // Write file if changes were made and not dry run
      if (content !== originalContent) {
        if (!this.options.dryRun) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✅ Fixed: ${path.relative('.', filePath)} (${fixCount} issues)`);
        } else {
          console.log(`🔍 Would fix: ${path.relative('.', filePath)} (${fixCount} issues)`);
        }
        return fixCount;
      }

      return 0;
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      return 0;
    }
  }

  /**
     * MD040: Fix fenced code blocks missing language specification
     */
  fixFencedCodeLanguage(content) {
    let count = 0;

    // Match fenced code blocks without language specification
    const fencedCodeRegex = /^```(\s*)\n/gm;

    const fixedContent = content.replace(fencedCodeRegex, (match, whitespace) => {
      count++;
      // Default to 'text' for generic content, could be made smarter
      return '```text\n';
    });

    return { content: fixedContent, count };
  }

  /**
     * MD034: Fix bare URLs by wrapping in angle brackets
     */
  fixBareUrls(content) {
    let count = 0;

    // Match bare HTTP/HTTPS URLs that aren't already in markdown link syntax
    const bareUrlRegex = /(?<![[()])(https?:\/\/[^\s)>\]]+)(?![)\]])/g;

    const fixedContent = content.replace(bareUrlRegex, (match) => {
      // Don't fix if already in angle brackets
      if (match.startsWith('<') && match.endsWith('>')) {
        return match;
      }
      count++;
      return `<${match}>`;
    });

    return { content: fixedContent, count };
  }

  /**
     * MD009: Remove trailing spaces from lines
     */
  fixTrailingSpaces(content) {
    let count = 0;

    const lines = content.split('\n');
    const fixedLines = lines.map(line => {
      const trimmed = line.replace(/\s+$/, '');
      if (trimmed !== line) {
        count++;
      }
      return trimmed;
    });

    return { content: fixedLines.join('\n'), count };
  }

  /**
     * MD036: Convert bold emphasis used as headings to proper headings
     */
  fixEmphasisAsHeading(content) {
    let count = 0;

    // Match lines that start with **text** and are likely headings
    const emphasisHeadingRegex = /^\*\*([^*]+)\*\*\s*$/gm;

    const fixedContent = content.replace(emphasisHeadingRegex, (match, text) => {
      // Only convert if it looks like a heading (short, title-case, etc.)
      if (text.length < 100 && /^[A-Z]/.test(text.trim())) {
        count++;
        return `#### ${text.trim()}`;
      }
      return match;
    });

    return { content: fixedContent, count };
  }

  /**
     * MD026: Remove trailing punctuation from headings
     */
  fixTrailingPunctuation(content) {
    let count = 0;

    // Match headings with trailing punctuation
    const headingPunctuationRegex = /^(#{1,6}\s+.+?)([.!?:;,]+)\s*$/gm;

    const fixedContent = content.replace(headingPunctuationRegex, (match, heading, punctuation) => {
      count++;
      return heading.trimEnd();
    });

    return { content: fixedContent, count };
  }

  /**
     * MD047: Ensure file ends with single newline
     */
  fixTrailingNewline(content) {
    let count = 0;

    // Remove all trailing newlines then add exactly one
    const trimmed = content.replace(/\n*$/, '');

    if (content !== trimmed + '\n') {
      count = 1;
      return { content: trimmed + '\n', count };
    }

    return { content, count };
  }

  /**
     * Print summary of fixes applied
     */
  printSummary(filesFixed, totalFiles) {
    const totalFixes = Object.values(this.fixesApplied).reduce((sum, count) => sum + count, 0);

    console.log('\n' + '='.repeat(50));
    console.log('📊 MARKDOWN LINT FIX SUMMARY');
    console.log('='.repeat(50));
    console.log(`Files processed: ${totalFiles}`);
    console.log(`Files fixed: ${filesFixed}`);
    console.log(`Total fixes applied: ${totalFixes}`);
    console.log('');

    if (totalFixes > 0) {
      console.log('Fixes by type:');
      Object.entries(this.fixesApplied).forEach(([rule, count]) => {
        if (count > 0) {
          const descriptions = {
            MD040: 'Fenced code blocks missing language',
            MD034: 'Bare URLs wrapped in angle brackets',
            MD009: 'Trailing spaces removed',
            MD036: 'Bold emphasis converted to headings',
            MD026: 'Trailing punctuation removed from headings',
            MD047: 'Files ensured to end with newline'
          };
          console.log(`   ${rule}: ${count} (${descriptions[rule]})`);
        }
      });
    }

    if (this.options.dryRun) {
      console.log('\n🔍 DRY RUN - No files were modified');
    } else {
      console.log('\n✅ All fixes applied successfully');
    }
    console.log('='.repeat(50));
  }
}

// CLI Interface
if (require.main === module) {
  const args = process.argv.slice(2);

  const options = {
    dryRun: args.includes('--dry-run'),
    verbose: args.includes('--verbose') || args.includes('-v')
  };

  const targetPath = args.find(arg => !arg.startsWith('--')) || '.';

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Markdown Lint Auto-Fix Script

Usage:
  node scripts/fix-markdown-lint.js [path] [options]

Options:
  --dry-run     Show what would be fixed without making changes
  --verbose     Show detailed output for each file
  -v           Same as --verbose
  --help       Show this help message
  -h           Same as --help

Examples:
  node scripts/fix-markdown-lint.js                    # Fix all markdown files
  node scripts/fix-markdown-lint.js docs/             # Fix only docs folder
  node scripts/fix-markdown-lint.js --dry-run         # Preview fixes without applying
  node scripts/fix-markdown-lint.js docs/ --verbose   # Fix docs with detailed output

Supported Rules:
  MD040 - Fenced code blocks should have a language specified
  MD034 - Bare URL used (wraps in angle brackets)
  MD047 - Files should end with a single newline character
  MD009 - Trailing spaces (removes them)
  MD036 - Emphasis used instead of a heading (converts to heading)
  MD026 - Trailing punctuation in heading (removes it)
        `);
    process.exit(0);
  }

  const fixer = new MarkdownLintFixer(options);
  fixer.fixAll(targetPath).catch(error => {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  });
}

module.exports = MarkdownLintFixer;
