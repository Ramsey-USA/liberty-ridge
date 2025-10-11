# Markdown Style Guide 📝

> Liberty Ridge Training Grounds - Markdown Documentation Standards

> Comprehensive guidelines for creating lint-free, professional markdown files

---

## 🎯 Overview

This style guide ensures all markdown documentation follows consistent,
professional standards that pass linting checks and maintain the Liberty Ridge
quality standards.

### Purpose

- Prevent markdown linting errors
- Ensure consistent formatting
- Maintain professional presentation
- Enable easy maintenance and updates

---

## 🛠️ Technical Setup

### Markdown Linting Configuration

We use `.markdownlint.json` with these settings:

```json
{
  "default": true,
  "MD013": {
    "line_length": 120,
    "heading_line_length": 120,
    "code_block_line_length": 120,
    "code_blocks": false,
    "tables": false,
    "headings": false
  },
  "MD024": {
    "siblings_only": true
  },
  "MD036": false,
  "MD028": false
}
```

### Required Tools

```bash
# Install markdown linting
npm install --save-dev markdownlint-cli

# Check files
npx markdownlint docs/*.md

# Check with custom config
npx markdownlint -c .markdownlint.json docs/*.md
```

---

## 📖 Formatting Standards

### File Structure

Every markdown file must follow this structure:

1. **Title and Subtitle** (using `>` for subtitles, not `**bold**`)
2. **Separator** (`---`)
3. **Overview Section** with key points
4. **Main Content** with proper sections
5. **Support/Resources** section
6. **Summary** section
7. **Footer** with project branding
8. **Final separator** (`---`)
9. **Trailing newline** (critical for linting)

### Headings

```markdown
# Main Title (H1 - only one per document)

## Section Title (H2 - main sections)

### Subsection Title (H3 - subsections)

#### Detail Section (H4 - detailed content)
```

**Critical Rules:**

- Always add blank lines before and after headings
- Don't use emphasis (`**text**`) as headings
- Use emojis consistently in main headings
- Keep headings descriptive but concise

### Emphasis and Formatting

**Correct:**

```markdown
# Document Title 🎯

> Subtitle using blockquote format

**Important Note**: Use bold for emphasis within content

*Italic text* for subtle emphasis
```

**Incorrect Examples:**

- Using `**Subtitle as bold heading**` (causes MD036 error)
- Using `***Bold italic combo***` (avoid this pattern)

### Lists

**Always add blank lines around lists:**

```markdown
Text before list.

- First item
- Second item
- Third item

Text after list.
```

**Numbered lists:**

```markdown
Setup process:

1. First step
2. Second step
3. Third step

Continue with next section.
```

### Code Blocks

**Always specify language and add blank lines:**

Good example - TypeScript:

```typescript
interface Example {
  property: string;
}
```

Good example - Bash commands:

```bash
npm install package
```

Good example - Plain text (for configs, file structures):

```text
project/
├── src/
└── docs/
```

**Critical Rules:**

- Always specify language after opening backticks
- Add blank lines before and after code blocks
- Use `text` for plain content without syntax highlighting

### Links

**Internal documentation links:**

```markdown
See [Related Document](./related-document.md) for details.

Main navigation: [Documentation Index](./DOCS-INDEX.md)
```

**External links:**

```markdown
Visit [Liberty Ridge](https://libertyridegetraininggrounds.com) website.
```

---

## 🚫 Common Linting Errors and Fixes

### MD036: Emphasis as Heading

**Problem:**

```markdown
**Section Title**
```

**Solution:**

```markdown
## Section Title
```

### MD032: Lists Need Blank Lines

**Problem:** Lists immediately following or preceding text without blank line separation

**Solution:** Always surround lists with blank lines

**Common Pattern from Recent Fixes:**

When adding lists after headings or before text, ensure proper spacing:

```text
#### Button Classes
- List item 1
- List item 2
```

Should be:

```text
#### Button Classes

- List item 1
- List item 2
```

**In Examples and Documentation:**

```text
**Examples:**
- Example 1
- Example 2
```

Should be:

```text
**Examples:**

- Example 1
- Example 2
```

### MD022: Headings Need Blank Lines

**Problem:**

```markdown
Previous content.
## Heading
Content immediately after.
```

**Solution:**

```markdown
Previous content.

## Heading

Content after proper spacing.
```

### MD047: Missing Trailing Newline

**Problem:** File ends without newline

**Solution:** Always end files with single newline:

```bash
echo "" >> filename.md
```

### MD040: Fenced Code Language

**Rule:** Always specify language after opening backticks

**Problem:** Code blocks without language specification  
**Solution:** Add language identifier: `typescript`, `bash`, `text`, `json`, etc.

### MD031: Fenced Code Blank Lines

**Rule:** Always add blank lines before and after code blocks

**Example structure:**

- Text content before
- Blank line
- Code block with language
- Blank line  
- Text content after

### MD009: Trailing Spaces

**Rule:** Remove all trailing spaces from lines

**Fix:** Configure your editor to remove trailing spaces automatically

### MD013: Line Length

**Rule:** Keep lines under 120 characters

**Most Common Violations:**

- Long descriptive text in documentation
- Long blockquotes and examples  
- URL links and file paths
- Table content and code comments

**Solutions:**

**For Long Text:** Break at natural points like commas or conjunctions

**For Long Blockquotes:** Continue quote formatting on multiple lines using `>` prefix

**For Documentation Descriptions:** Break long titles and descriptions into multiple lines

**Key Techniques:**

- Break after commas, conjunctions, or prepositions
- Maintain meaning and readability
- Use continuation characters for quotes and code
- Keep related concepts together when possible

### Special Case: Documenting Markdown Syntax

**The Irony Problem:** When writing documentation about markdown, showing
markdown examples can create linting violations.

**Solutions:**

1. **Avoid nested code blocks** - describe syntax instead of showing it
2. **Use text format** for markdown examples when possible
3. **Break examples into separate sections** rather than nesting
4. **Use description** instead of literal examples for complex cases

**Example - Instead of showing nested code blocks:**

- Describe the pattern: "Use three backticks followed by language name"
- Reference the structure: "Add blank lines before and after code blocks"
- Show the result rather than the markdown source

---

## ✅ Checklist for New Markdown Files

### Document Creation Checklist

**Before Publishing:**

- [ ] Lines under 120 characters (break long descriptions and quotes)
- [ ] Blank lines around all lists
- [ ] Blank lines around code blocks
- [ ] No trailing spaces
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Consistent formatting throughout
- [ ] All links functional
- [ ] Proper emphasis usage (**bold** vs *italic*)
- [ ] Break long blockquotes across multiple lines with `>` prefix
- [ ] Add blank lines between headings and lists
- [ ] Check "Examples" and "When to Use" sections for proper list spacing
- [ ] Wrap long documentation descriptions at natural break points

### Final Verification

```bash
# Lint the file
npx markdownlint -c .markdownlint.json docs/new-document.md

# Check for common issues
grep -n "^**.*\*\*$" docs/new-document.md  # Bold as heading
grep -n "  $" docs/new-document.md          # Trailing spaces
```

---

## 📂 File Organization

### Naming Conventions

- Use `UPPERCASE-WITH-HYPHENS.md` for documentation files
- Use descriptive names: `COMPONENT-GUIDELINES.md`
- Keep names concise but clear

### Location Standards

```text
docs/
├── DOCS-INDEX.md           # Main navigation
├── MARKDOWN-TEMPLATE.md    # Template for new files  
├── MARKDOWN-STYLE-GUIDE.md # This file
├── DEVELOPMENT.md          # Technical guidelines
├── PROJECT-SETUP.md        # Setup instructions
├── CONTENT-GUIDELINES.md   # Writing standards
├── COMPONENTS.md           # Component documentation
├── TESTING.md              # Testing procedures
└── LR-BRANDING.md          # Design system
```

### Cross-Reference Standards

- Always link back to `DOCS-INDEX.md`
- Use relative paths: `./other-document.md`
- Verify all links work after creation

---

## 🔧 Linting Integration

### VS Code Setup

Install recommended extensions:

- `markdownlint` by David Anson
- `Markdown All in One` by Yu Zhang

### Pre-commit Hooks (Optional)

```bash
# Add to package.json scripts
"lint:md": "markdownlint docs/*.md",
"lint:md:fix": "markdownlint docs/*.md --fix"
```

### CI/CD Integration

```yaml
# GitHub Actions example
- name: Lint Markdown
  run: |
    npm install markdownlint-cli
    npx markdownlint docs/*.md
```

---

## 📋 Quick Reference

### Template Command

```bash
# Create new document from template
cp docs/MARKDOWN-TEMPLATE.md docs/NEW-DOCUMENT.md
```

### Linting Commands

```bash
# Check all documentation
npx markdownlint docs/*.md

# Check specific file
npx markdownlint docs/SPECIFIC-FILE.md

# Auto-fix issues (when possible)
npx markdownlint docs/*.md --fix
```

### Common Fixes

```bash
# Add trailing newline to all markdown files
find docs -name "*.md" -exec sh -c 'echo "" >> "$1"' _ {} \;

# Remove trailing spaces
sed -i 's/[[:space:]]*$//' docs/*.md
```

### The Meta-Documentation Challenge

**Problem:** When writing documentation about markdown syntax, showing literal
markdown examples can violate linting rules (nested code blocks, etc.).

**Solutions Applied in This Guide:**

1. **Describe instead of show** - explain syntax patterns rather than display them
2. **Use result examples** - show the formatted output instead of the source
3. **Separate problematic examples** - break complex examples into simpler parts
4. **Use alternative formats** - describe structure with bullet points

**Example:** Instead of showing nested code blocks within markdown examples,
this guide describes the pattern: "Use three backticks followed by a language
identifier."

---

## 🎯 Prevention Patterns

Based on recent linting fixes, here are the most important patterns to follow:

### Long Description Text

**Pattern:** Break long descriptive sentences at natural points

**Example Context:** Documentation index entries and file descriptions
**Common Length:** Descriptions over 130-140 characters need wrapping

### Blockquote Formatting

**Pattern:** Continue blockquotes with `>` prefix on each line

**Best Practice:**

- Break quotes at logical points (end of sentences, after commas)
- Maintain quote formatting with `>` on continuation lines
- Keep related thoughts together

### List Spacing After Headings

**Pattern:** Always add blank line between heading and list

**Critical Rule:** Always include blank line between headings and lists

### Example Sections

**Pattern:** Add blank line before lists in example sections

**Common Issue:** Examples and "When to Use" sections often violate MD032

**Template Prevention:** Use proper spacing in all template structures

This approach maintains linting compliance while still providing clear guidance.

---

## 🎖️ Quality Standards

### Liberty Ridge Documentation Principles

- **Professional**: Clean, consistent formatting
- **Accessible**: Clear structure and navigation
- **Maintainable**: Easy to update and extend
- **Compliant**: Passes all linting checks
- **Useful**: Provides actionable information

### Success Criteria

A quality markdown file:

- ✅ Passes `markdownlint` with zero errors
- ✅ Follows template structure
- ✅ Uses consistent formatting
- ✅ Has proper cross-references
- ✅ Maintains professional tone
- ✅ Serves its intended purpose

---

**Liberty Ridge Training Grounds**  
*Professional Excellence Through Documentation*

---

*This style guide ensures all markdown documentation maintains the highest
standards of quality and consistency. Follow these guidelines for lint-free,
professional documentation.*
