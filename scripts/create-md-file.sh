#!/bin/bash

# Liberty Ridge Markdown File Creator
# Ensures all new markdown files follow the style guide

# Check if filename provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 <filename> [title] [subtitle]"
    echo "Example: $0 NEW-FEATURE-PLAN 'New Feature Plan' 'Implementation Guide'"
    exit 1
fi

FILENAME="$1"
TITLE="${2:-${FILENAME//-/ }}"  # Convert hyphens to spaces if no title provided
SUBTITLE="${3:-Documentation}"

# Ensure .md extension
if [[ ! "$FILENAME" =~ \.md$ ]]; then
    FILENAME="${FILENAME}.md"
fi

# Full path
FILEPATH="docs/$FILENAME"

# Check if file already exists
if [ -f "$FILEPATH" ]; then
    echo "Error: File $FILEPATH already exists"
    exit 1
fi

# Create the file with proper template
cat > "$FILEPATH" << EOF
# $TITLE 📝

> $SUBTITLE

*Brief description of the document's purpose and scope*

---

## 🎯 Overview

Brief overview section explaining the document's purpose and key points.

### Key Points

- First key point
- Second key point
- Third key point

---

## 📋 Main Content

### Section One

Content with proper formatting and spacing.

### Section Two

More content following style guidelines.

#### Subsection

Detailed content with proper hierarchy.

---

## 📞 Support & Resources

### Related Documentation

- [Documentation Index](./DOCS-INDEX.md)
- [Style Guide](./MARKDOWN-STYLE-GUIDE.md)

### Additional Resources

- External links and references
- Contact information if applicable

---

**Liberty Ridge Training Grounds**  
*Professional Excellence Through Documentation*

---

*This document follows the Liberty Ridge markdown style guide for consistent,
lint-free documentation.*

EOF

echo "Created: $FILEPATH"
echo "Remember to:"
echo "1. Replace template content with actual content"
echo "2. Run: npx markdownlint $FILEPATH"
echo "3. Follow the style guide: docs/MARKDOWN-STYLE-GUIDE.md"