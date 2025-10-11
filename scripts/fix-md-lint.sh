#!/bin/bash

# Liberty Ridge Markdown Linting Auto-Fix Tool
# Automatically fixes common markdown linting errors

if [ $# -eq 0 ]; then
    echo "Usage: $0 <markdown-file>"
    echo "Example: $0 docs/EXAMPLE.md"
    exit 1
fi

FILEPATH="$1"

if [ ! -f "$FILEPATH" ]; then
    echo "Error: File $FILEPATH does not exist"
    exit 1
fi

echo "Fixing common markdown linting errors in: $FILEPATH"

# Create a temporary file for processing
TMPFILE=$(mktemp)
cp "$FILEPATH" "$TMPFILE"

# Fix trailing spaces (MD009)
sed -i 's/[[:space:]]*$//' "$TMPFILE"

# Add blank lines around headings where missing (MD022)
# This is a simplified fix - may need manual adjustment for complex cases
sed -i '/^#/{
    x
    /^$/!{
        x
        i\

        x
    }
    x
}' "$TMPFILE"

# Add blank lines around lists (MD032) - simplified fix
sed -i '/^[-*+] /{
    x
    /^$/!{
        x
        i\

        x
    }
    x
}' "$TMPFILE"

sed -i '/^[0-9]\+\. /{
    x
    /^$/!{
        x
        i\

        x
    }
    x
}' "$TMPFILE"

# Ensure single trailing newline (MD047)
# Remove all trailing newlines and add exactly one
sed -i -e :a -e '/^\s*$/N;ba' -e 's/\n\s*$//' "$TMPFILE"
echo "" >> "$TMPFILE"

# Copy the fixed content back
cp "$TMPFILE" "$FILEPATH"
rm "$TMPFILE"

echo "Basic fixes applied. Please check the file and run markdownlint for remaining issues:"
echo "npx markdownlint $FILEPATH"

# Run markdownlint to show remaining issues
if command -v markdownlint >/dev/null 2>&1; then
    echo ""
    echo "Remaining linting issues:"
    npx markdownlint "$FILEPATH" || echo "Some issues still remain - may need manual fixing"
else
    echo "markdownlint not found. Install with: npm install -g markdownlint-cli"
fi