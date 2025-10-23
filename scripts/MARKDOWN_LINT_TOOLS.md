# 🔧 Markdown Lint Auto-Fix Tools

Two powerful scripts to automatically fix markdown linting issues across your workspace, created based on real-world experience fixing the Liberty Ridge project documentation.

## 🚀 Quick Start

```bash
# Python version (no dependencies)
npm run fix:markdown-simple

# Node.js version (requires node_modules)
npm run fix:markdown-lint

# Preview changes without applying them
npm run fix:markdown-simple:dry
npm run fix:markdown-lint:dry
```text
## 📋 Available Scripts

### Python Script (Recommended)
- **File**: `scripts/fix-markdown-simple.py`
- **Dependencies**: None (Python 3 standard library only)
- **Performance**: Fast and lightweight
- **Portability**: Works anywhere Python 3 is available

### Node.js Script
- **File**: `scripts/fix-markdown-lint.js`
- **Dependencies**: Requires `glob` package (already in project)
- **Features**: More advanced regex patterns and reporting
- **Performance**: Slightly slower due to Node.js overhead

## 🛠️ Rules Fixed

Both scripts fix these common markdown linting issues:

| Rule | Description | Example Fix |
|------|-------------|-------------|
| **MD040** | Fenced code blocks missing language | ```` ``` ```` → ```` ```text ```` |
| **MD034** | Bare URLs | `<http://example.com`> → `<http://example.com>` |
| **MD047** | Missing trailing newline | Adds newline at end of file |
| **MD009** | Trailing spaces | Removes spaces at end of lines |
| **MD036** | Bold emphasis as heading | `**Title**` → `#### Title` |
| **MD026** | Heading punctuation | `## Title!` → `## Title` |

## 📊 Usage Examples

### Fix All Files
```bash
# Python version
python3 scripts/fix-markdown-simple.py
npm run fix:markdown-simple

# Node.js version
node scripts/fix-markdown-lint.js
npm run fix:markdown-lint
```text
### Fix Specific Directory
```bash
# Python version
python3 scripts/fix-markdown-simple.py docs/
python3 scripts/fix-markdown-simple.py docs/setup/

# Node.js version
node scripts/fix-markdown-lint.js docs/
```text
### Fix Single File
```bash
# Python version only
python3 scripts/fix-markdown-simple.py README.md
python3 scripts/fix-markdown-simple.py docs/GUIDE.md
```text
### Preview Changes (Dry Run)
```bash
# Python version
python3 scripts/fix-markdown-simple.py --dry-run
npm run fix:markdown-simple:dry

# Node.js version
node scripts/fix-markdown-lint.js --dry-run
npm run fix:markdown-lint:dry
```text
### Verbose Output
```bash
# See detailed fixes for each file
python3 scripts/fix-markdown-simple.py --verbose
npm run fix:markdown-simple:verbose
```text
### Combined Options
```bash
# Preview fixes with detailed output
python3 scripts/fix-markdown-simple.py docs/ --dry-run --verbose
```text
## 🎯 Integration Examples

### Pre-commit Hook
Add to `.git/hooks/pre-commit`:
```bash
#!/bin/bash
echo "🔧 Auto-fixing markdown lint issues..."
python3 scripts/fix-markdown-simple.py --verbose
git add docs/**/*.md *.md 2>/dev/null || true
echo "✅ Markdown fixes applied"
```text
### VSCode Task
Add to `.vscode/tasks.json`:
```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Fix Markdown Lint",
            "type": "shell",
            "command": "python3",
            "args": ["scripts/fix-markdown-simple.py", "--verbose"],
            "group": "build",
            "presentation": {
                "echo": true,
                "reveal": "always",
                "panel": "new"
            }
        }
    ]
}
```text
### GitHub Actions
Add to `.github/workflows/lint.yml`:
```yaml
- name: Fix Markdown Lint Issues
  run: |
    python3 scripts/fix-markdown-simple.py --verbose
    if ! git diff --quiet; then
      git config --local user.email "action@github.com"
      git config --local user.name "GitHub Action"
      git add -A
      git commit -m "Auto-fix markdown lint issues"
      git push
    fi
```text
## 📈 Real-World Results

Based on the Liberty Ridge project cleanup:

```text
📊 MARKDOWN LINT FIX SUMMARY
==================================================
Files processed: 20
Files fixed: 20
Total fixes applied: 317

Fixes by type:
   MD040: 224 (Fenced code blocks missing language)
   MD034: 33 (Bare URLs wrapped in angle brackets)
   MD047: 1 (Files ensured to end with newline)
   MD009: 32 (Trailing spaces removed)
   MD036: 14 (Bold emphasis converted to headings)
   MD026: 13 (Trailing punctuation removed from headings)
```text
## 🔍 Script Comparison

| Feature | Python Script | Node.js Script |
|---------|---------------|----------------|
| **Dependencies** | None | Requires glob package |
| **File Support** | Single files + directories | Directories only |
| **Performance** | ⚡ Faster startup | Slower startup |
| **Portability** | ✅ Works everywhere | Requires node_modules |
| **Regex Engine** | Python re module | JavaScript regex |
| **Error Handling** | Basic | More comprehensive |
| **Output Format** | Clean and simple | More detailed |

## 🚨 Important Notes

### Before Running
1. **Backup your files** or commit to git first
2. **Test with --dry-run** to preview changes
3. **Review the diff** before committing changes

### What Gets Fixed
- ✅ Missing language tags on code blocks
- ✅ Bare URLs wrapped in angle brackets
- ✅ Trailing spaces removed from all lines
- ✅ Bold emphasis converted to proper headings
- ✅ Punctuation removed from heading text
- ✅ Files ensured to end with single newline

### What Doesn't Get Fixed
- ❌ Complex markdown structure issues
- ❌ Content formatting (use prettier for that)
- ❌ Spelling or grammar
- ❌ Link validation
- ❌ Image optimization

## 🛡️ Safety Features

Both scripts include safety measures:
- **Dry run mode** to preview changes
- **Encoding detection** (UTF-8)
- **Error handling** for file access issues
- **Exclude patterns** for common directories
- **Backup recommendations** in documentation

## 🔧 Customization

### Exclude Patterns
Both scripts automatically skip:
- `node_modules/`
- `.git/`
- `dist/`
- `build/`

### Language Detection
For MD040 fixes, both scripts default to `text` language. You can modify the scripts to:
- Detect language based on content
- Use specific language for certain file patterns
- Skip certain code blocks entirely

### Rule Configuration
You can comment out rules in the fix functions to disable specific fixes.

## 🚀 Advanced Usage

### Batch Processing
```bash
# Fix docs in multiple projects
for project in project1 project2 project3; do
    echo "Fixing $project..."
    python3 scripts/fix-markdown-simple.py "$project/docs/" --verbose
done
```text
### Custom Wrapper Script
Create `fix-all-markdown.sh`:
```bash
#!/bin/bash
echo "🔧 Starting comprehensive markdown fixes..."
python3 scripts/fix-markdown-simple.py --verbose
echo "✅ Running prettier for additional formatting..."
npx prettier --write "**/*.md"
echo "🎉 All markdown fixes complete!"
```text
## 📚 Related Tools

These scripts work well with:
- **markdownlint-cli**: For comprehensive linting rules
- **prettier**: For consistent formatting
- **remark**: For advanced markdown processing
- **textlint**: For writing style checking
- **vale**: For prose quality checking

---

*These tools were battle-tested on the Liberty Ridge project, fixing 317+ real lint issues across 20+ documentation files.*
