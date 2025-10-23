# 📝 cSpell Configuration Guide

Complete guide for managing spelling checks in the Liberty Ridge project using cSpell (Code Spell Checker).

## 🎯 Overview

cSpell is configured to check spelling across all markdown, JavaScript, CSS, and HTML files while intelligently handling technical terms, brand names, and domain-specific vocabulary.

## 📊 Current Status

- **Dictionary Size**: 320+ technical terms and project-specific words
- **Coverage**: All file types (`.md`, `.js`, `.css`, `.html`)
- **Unknown Words**: 0 (fully resolved as of setup)
- **False Positives**: Eliminated through comprehensive custom dictionary

## 🚀 Quick Commands

```bash
# Check spelling across all files
npm run spell:check

# Interactive spelling fix (recommended)
npm run spell:fix

# Show dictionary statistics
npm run spell:stats

# Clean and organize dictionary
npm run spell:clean

# Add a single word
python3 scripts/cspell-manager.py add "newword"
```

## 📁 Files and Configuration

### Core Files

- **`.cspell.json`** - Main configuration file with custom dictionary
- **`scripts/cspell-manager.py`** - Python script for managing the dictionary
- **`package.json`** - Contains npm scripts for easy access

### Dictionary Categories

The custom dictionary includes 320+ words organized by category:

| Category | Examples | Count |
|----------|----------|-------|
| **Technical** | `API`, `CSS`, `HTML`, `JSON`, `URL` | ~21 |
| **Brand** | `liberty-ridge`, `Ramsey`, `Zach`, `Roboto` | ~6 |
| **Web Dev** | `srcset`, `rgba`, `webp`, `avif`, `woff2` | ~12 |
| **JavaScript** | `async`, `await`, `console`, `querySelector` | ~50+ |
| **CSS** | `flexbox`, `rem`, `vh`, `vw`, `keyframes` | ~25+ |
| **Liberty Ridge** | `firearms`, `marksmanship`, `tactical` | ~15+ |
| **Tools** | `eslint`, `webpack`, `firebase`, `lighthouse` | ~30+ |
| **Other** | File extensions, acronyms, common terms | ~150+ |

## 🛠️ Using the cSpell Manager

### Interactive Mode (Recommended)

```bash
# Run interactive mode to handle all unknown words
npm run spell:fix

# Or directly:
python3 scripts/cspell-manager.py add-multiple
```

This will:

1. Scan all files for spelling errors
2. Present each unknown word
3. Let you choose: `y` (add), `n` (skip), `q` (quit), `a` (add all)
4. Automatically save changes

### Manual Commands

```bash
# Check current spelling status
python3 scripts/cspell-manager.py check

# List all unknown words
python3 scripts/cspell-manager.py list-unknown

# Add a specific word
python3 scripts/cspell-manager.py add "newword"

# Show statistics
python3 scripts/cspell-manager.py stats

# Clean dictionary (remove duplicates, sort)
python3 scripts/cspell-manager.py clean
```

## 📝 Word Addition Guidelines

### When to Add Words

✅ **DO ADD**:

- Technical terms: `srcset`, `webp`, `avif`
- Brand names: `Liberty Ridge`, `Ramsey`
- Project-specific terms: `firearms`, `marksmanship`
- Valid abbreviations: `WCAG`, `API`, `CSS`
- JavaScript/Web terms: `querySelector`, `addEventListener`

❌ **DON'T ADD**:

- Actual typos or misspellings
- Random strings or gibberish
- Temporary placeholder text
- Personal names not related to the project

### Adding Words Strategically

1. **Review Context**: Check if the word is actually used correctly
2. **Check Variations**: Consider if you need both `api` and `API`
3. **Group Similar**: Add related terms together for consistency
4. **Document Purpose**: Know why you're adding each word

## 🔧 Configuration Details

### File Patterns

cSpell checks these file patterns:

```json
"**/*.md"    // All Markdown files
"**/*.js"    // All JavaScript files
"**/*.css"   // All CSS files
"**/*.html"  // All HTML files
```

### Ignored Patterns

These are automatically ignored:

```json
"node_modules/**"
".git/**"
"dist/**"
"build/**"
"*.min.js"
"*.min.css"
"*.bundle.js"
"package-lock.json"
"yarn.lock"
```

### Language Settings

- **Compound Words**: Allowed (e.g., `JavaScript`, `WebKit`)
- **Case Sensitivity**: Disabled (matches both `api` and `API`)
- **Built-in Dictionaries**: English, software terms, companies, web technologies

## 🎯 Integration

### Pre-commit Hooks

Add to your git hooks:

```bash
#!/bin/bash
echo "🔍 Checking spelling..."
npm run spell:check
if [ $? -ne 0 ]; then
    echo "❌ Spelling errors found. Run 'npm run spell:fix' to resolve."
    exit 1
fi
```

### CI/CD Pipeline

```yaml
- name: Check Spelling
  run: |
    npm run spell:check
    if [ $? -ne 0 ]; then
      echo "Spelling errors found. Please fix before merging."
      exit 1
    fi
```

### VSCode Integration

Install the "Code Spell Checker" extension and it will automatically use your `.cspell.json` configuration.

## 📊 Monitoring and Maintenance

### Regular Maintenance

1. **Weekly Review**: Check for new unknown words
2. **Monthly Cleanup**: Run `npm run spell:clean` to organize dictionary
3. **Quarterly Audit**: Review dictionary for outdated terms

### Adding New Team Members

When onboarding new developers:

1. Share this guide
2. Install cSpell: `npm install`
3. Install VSCode extension: "Code Spell Checker"
4. Run initial check: `npm run spell:check`

## 🚨 Troubleshooting

### Common Issues

#### Too Many False Positives

```bash
# Check if words are properly categorized
npm run spell:stats

# Add legitimate words interactively
npm run spell:fix
```

#### VSCode Not Using Configuration

- Restart VSCode after modifying `.cspell.json`
- Check that "Code Spell Checker" extension is enabled
- Verify `.cspell.json` is in workspace root

#### Performance Issues

- Use `ignorePaths` to exclude large directories
- Consider splitting very large dictionaries
- Run checks on specific file patterns when needed

### Dictionary Corruption

If `.cspell.json` becomes corrupted:

```bash
# Clean and reorganize
npm run spell:clean

# Or restore from git
git checkout .cspell.json
```

## 📈 Best Practices

### Development Workflow

1. **Write Code**: Focus on functionality first
2. **Check Spelling**: Run `npm run spell:check` regularly
3. **Fix Issues**: Use `npm run spell:fix` for new terms
4. **Review**: Ensure added words are legitimate
5. **Commit**: Include spelling fixes in your commits

### Team Collaboration

- **Standardize**: Everyone uses the same `.cspell.json`
- **Communicate**: Discuss questionable word additions
- **Document**: Update this guide when adding new categories
- **Review**: Include spelling checks in PR reviews

### Performance Optimization

- **Target Specific Files**: Use patterns like `docs/**/*.md` for focused checks
- **Exclude Generated Files**: Keep `ignorePaths` updated
- **Batch Operations**: Add multiple related words at once

## 🔍 Advanced Usage

### Custom Dictionaries

You can create specialized dictionaries for different areas:

```json
{
  "dictionaryDefinitions": [
    {
      "name": "firearms-terms",
      "path": "./dictionaries/firearms.txt"
    }
  ]
}
```

### Project-Specific Settings

Different file types can have different rules:

```json
{
  "overrides": [
    {
      "filename": "src/admin/**/*.js",
      "words": ["admin-specific", "terms"]
    }
  ]
}
```

---

## 📚 Resources

- [cSpell Documentation](https://cspell.org/)
- [VS Code Extension](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Configuration Options](https://cspell.org/configuration/)

---

*This configuration successfully reduced spelling errors from 73+ unknown words to 0, providing a clean foundation for maintaining high-quality documentation and code in the Liberty Ridge project.*
