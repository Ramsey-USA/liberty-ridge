# 🔧 Markdown Lint Auto-Fix Script

A comprehensive script to automatically fix common markdown linting issues across your workspace.

## 📋 Overview

This script was created based on real-world lint issues encountered during the Liberty Ridge project. It automatically fixes the most common markdown formatting problems to ensure your documentation meets linting standards.

## 🚀 Usage

### Basic Commands

```bash
# Fix all markdown files in the workspace
npm run fix:markdown-lint

# Preview what would be fixed (dry run)
npm run fix:markdown-lint:dry

# Fix with detailed output
npm run fix:markdown-lint:verbose

# Direct script usage
node scripts/fix-markdown-lint.js
node scripts/fix-markdown-lint.js docs/
node scripts/fix-markdown-lint.js --dry-run --verbose
```text
### Command Options

| Option | Description |
|--------|-------------|
| `--dry-run` | Show what would be fixed without making changes |
| `--verbose` | Show detailed output for each file processed |
| `--help` | Display help information |

## 🛠️ Rules Fixed

### MD040 - Fenced Code Language

**Issue**: Fenced code blocks without language specification

```markdown
<!-- ❌ Before -->
```text
Some code here

```text
<!-- ✅ After -->
```text
Some code here
```text
```text
### MD034 - Bare URLs
**Issue**: URLs not wrapped in angle brackets
```markdown
<!-- ❌ Before -->
Visit <http://localhost:8080> for testing

<!-- ✅ After -->
Visit <http://localhost:8080> for testing
```text
### MD047 - File Ending

**Issue**: Files not ending with single newline

```markdown
<!-- ❌ Before -->
Last line of file
<!-- ✅ After -->
Last line of file
[newline character]
```text
### MD009 - Trailing Spaces

**Issue**: Extra spaces at end of lines

```markdown
<!-- ❌ Before -->
Text with spaces

<!-- ✅ After -->
Text with spaces
```text
### MD036 - Emphasis as Heading

**Issue**: Bold text used instead of proper headings

```markdown
<!-- ❌ Before -->
#### Important Section
<!-- ✅ After -->
#### Important Section
```text
### MD026 - Heading Punctuation

**Issue**: Headings with trailing punctuation

```markdown
<!-- ❌ Before -->
## Getting Started
<!-- ✅ After -->
## Getting Started
```text
## 📊 Output Example

🔧 Starting Markdown Lint Auto-Fix...

📁 Found 8 markdown files to process:

   - docs/LINTING_COMPLETION_SUMMARY.md
   - docs/optimization/CLEANUP_COMPLETE.md
   - docs/setup/FIREBASE_INTEGRATION_GUIDE.md
   - README.md

✅ Fixed: docs/optimization/CLEANUP_COMPLETE.md (6 issues)
✅ Fixed: docs/setup/LINTING_GUIDE.md (1 issues)
✅ Fixed: docs/LINTING_COMPLETION_SUMMARY.md (2 issues)

==================================================
📊 MARKDOWN LINT FIX SUMMARY
==================================================
Files processed: 8
Files fixed: 3
Total fixes applied: 9

Fixes by type:
   MD040: 4 (Fenced code blocks missing language)
   MD034: 2 (Bare URLs wrapped in angle brackets)
   MD047: 3 (Files ensured to end with newline)

✅ All fixes applied successfully
==================================================
```text
## 🔧 Configuration

The script can be customized by modifying the `MarkdownLintFixer` constructor options:

```javascript
const fixer = new MarkdownLintFixer({
    dryRun: false,
    verbose: false,
    extensions: ['.md', '.markdown'],
    excludePatterns: [
        'node_modules/**',
        '.git/**',
        'dist/**',
        'build/**'
    ]
});
```text
## 🎯 Integration

### Pre-commit Hook

Add to your git pre-commit hook:

```bash
#!/bin/sh
npm run fix:markdown-lint
git add docs/**/*.md *.md
```text
### CI/CD Pipeline

```yaml
- name: Fix Markdown Lint Issues
  run: |
    npm run fix:markdown-lint
    git add -A
    git diff --staged --quiet || git commit -m "Auto-fix markdown lint issues"
```text
### VSCode Integration

Add to `.vscode/tasks.json`:

```json
{
    "label": "Fix Markdown Lint",
    "type": "shell",
    "command": "npm run fix:markdown-lint:verbose",
    "group": "build",
    "presentation": {
        "echo": true,
        "reveal": "always"
    }
}
```text
## 🚨 Best Practices

1. **Always test first**: Use `--dry-run` to preview changes
2. **Review changes**: Check git diff before committing
3. **Backup important files**: The script modifies files in-place
4. **Run regularly**: Include in your development workflow
5. **Combine with linting**: Use alongside markdownlint-cli for comprehensive checking

## 🔍 Troubleshooting

### Common Issues

#### Permission Denied

```bash
chmod +x scripts/fix-markdown-lint.js
```text
#### No Files Found

- Check your file extensions match the default patterns
- Verify you're in the correct directory
- Use absolute paths if needed

#### Unexpected Fixes

- Review the regex patterns in the script
- Use `--dry-run` first to preview changes
- Customize the script for your specific needs

### Debug Mode

Run with verbose output to see detailed processing:

```bash
npm run fix:markdown-lint:verbose
```text
## 📚 Related Tools

- **markdownlint-cli**: For comprehensive linting checks
- **prettier**: For general markdown formatting
- **remark**: For advanced markdown processing
- **textlint**: For prose and writing style checks

## 🤝 Contributing

To add new fix rules:

1. Add the rule to `fixesApplied` object
2. Create a fix function following the pattern:

   ```javascript
   fixNewRule(content) {
       let count = 0;
       // Apply fixes and increment count
       return { content: fixedContent, count };
   }
   ```

1. Add to the fixes array in `fixFile()`
2. Update documentation and tests

---

*This script is battle-tested on the Liberty Ridge project and handles real-world markdown linting scenarios.*
