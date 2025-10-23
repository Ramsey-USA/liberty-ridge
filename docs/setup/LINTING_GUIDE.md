# Liberty Ridge Linting Setup

This document outlines the comprehensive linting setup for the Liberty Ridge Training Grounds project.

## Overview

Our linting setup includes:

- **ESLint** for JavaScript code quality and style
- **Prettier** for consistent code formatting
- **Custom lint script** with multiple modes
- **Pre-commit hooks** to catch issues early
- **Automated fixing** for most common issues

## Available Scripts

### Primary Lint Commands

```bash

# Run basic linting check

npm run lint

# Fix auto-fixable issues (recommended)

npm run lint:fix

# Check both linting and formatting

npm run lint:check

# Run linting on staged files only (for pre-commit)

npm run lint:staged

# Generate detailed lint report

npm run lint:report

# Format all files with Prettier

npm run format

# Check if files are properly formatted

npm run format:check

```

### Script Details

| Command | Description | When to Use |
|---------|-------------|-------------|
| `npm run lint` | Basic ESLint check | Quick validation |
| `npm run lint:fix` | Auto-fix ESLint issues + format | **Most common use** |
| `npm run lint:check` | Comprehensive check without fixing | CI/CD pipelines |
| `npm run lint:staged` | Lint only staged files | Pre-commit hooks |
| `npm run lint:report` | Generate JSON report | Code quality analysis |
| `npm run format` | Format with Prettier | Code formatting |

## Common Issues and Fixes

### 1. Spacing and Formatting Issues

**Problem:** Operators, commas, and brackets need proper spacing

```javascript

// ❌ Bad
const obj={key:value,other:"test"};
if(condition){}

// ✅ Good
const obj = { key: value, other: 'test' };
if (condition) {}

```

**Fix:** Run `npm run lint:fix` - these are auto-fixable

### 2. Quote Consistency

**Problem:** Mix of single and double quotes

```javascript

// ❌ Bad
const message = "Hello World";
const name = 'John';

// ✅ Good (single quotes preferred)
const message = 'Hello World';
const name = 'John';

```

**Fix:** Run `npm run lint:fix` - auto-fixable

### 3. Variable Declaration

**Problem:** Using `var` instead of `const`/`let`

```javascript

// ❌ Bad
var count = 0;
var name = 'test';

// ✅ Good
let count = 0;        // if reassigned
const name = 'test';  // if not reassigned

```

**Fix:** Run `npm run lint:fix` - partially auto-fixable

### 4. Missing Semicolons

**Problem:** Missing semicolons at end of statements

```javascript

// ❌ Bad
const result = getData()
doSomething()

// ✅ Good
const result = getData();
doSomething();

```

**Fix:** Run `npm run lint:fix` - auto-fixable

## Installation and Setup

### 1. Install Dependencies

```bash

npm install --save-dev \
  eslint-plugin-html \
  eslint-plugin-import \
  eslint-plugin-n \
  eslint-plugin-promise \
  husky \
  lint-staged

```

### 2. Set up Pre-commit Hooks

```bash

# Initialize husky

npx husky install

# Create pre-commit hook

npx husky add .husky/pre-commit "npm run lint:staged"

```

### 3. Run Initial Fix

```bash

# Fix all existing issues

npm run lint:fix

# Check results

npm run lint:check

```

## ESLint Configuration

Our ESLint configuration (`.eslintrc.json`):

```json

{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["standard"],
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "globals": {
    "firebase": "readonly",
    "gtag": "readonly",
    "process": "readonly"
  },
  "rules": {
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "no-unused-vars": "error",
    "prefer-const": "error",
    "semi": ["error", "always"],
    "quotes": ["error", "single", { "avoidEscape": true }]
  },
  "ignorePatterns": [
    "src/js/dist/",
    "*.min.js",
    "*.bundle.js",
    "build/",
    "dist/",
    "public/"
  ]
}

```

## Prettier Configuration

Our Prettier configuration in `package.json`:

```json

{
  "prettier": {
    "semi": true,
    "singleQuote": true,
    "tabWidth": 2,
    "trailingComma": "es5",
    "printWidth": 100
  }
}

```

## VS Code Integration

Add to your VS Code settings (`.vscode/settings.json`):

```json

{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html"
  ]
}

```

## CI/CD Integration

For continuous integration, add to your workflow:

```yaml

# .github/workflows/lint.yml

name: Lint

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:

      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2

        with:
          node-version: '16'

      - run: npm ci
      - run: npm run lint:check

```

## Troubleshooting

### Common Errors

1. **"eslint: command not found"**

   ```bash

   npm install --save-dev eslint

   ```

2. **"prettier: command not found"**

   ```bash

   npm install --save-dev prettier

   ```

3. **Too many linting errors**

   ```bash

   # Fix issues gradually
   npm run lint:fix
   npm run lint:report  # See remaining issues

   ```

4. **Pre-commit hook not working**

   ```bash

   npx husky install
   npx husky add .husky/pre-commit "npm run lint:staged"

   ```

### Performance Optimization

For large codebases:

1. **Use `--staged` for pre-commit**

   ```bash

   npm run lint:staged

   ```

2. **Enable ESLint cache**

   ```bash

   npm run lint -- --cache

   ```

3. **Ignore build directories**
   - Already configured in `.eslintrc.json`

## Best Practices

1. **Run `lint:fix` before committing**
2. **Use pre-commit hooks** to catch issues early
3. **Address warnings** before they become errors
4. **Review lint reports** regularly for code quality insights
5. **Keep configuration consistent** across team members

## File Structure

```

liberty-ridge/
├── scripts/
│   └── lint.js              # Custom lint script
├── .eslintrc.json           # ESLint configuration
├── .prettierrc              # Prettier configuration (or in package.json)
├── .husky/                  # Git hooks
│   └── pre-commit
├── package.json             # Script definitions
└── lint-report.json         # Generated lint report

```

## Getting Help

1. **Check this documentation** first
2. **Run `npm run lint:report`** for detailed analysis
3. **Use `--verbose` flag** for debugging: `npm run lint -- --verbose`
4. **Review ESLint rules** at [eslint.org/docs/rules](https://eslint.org/docs/rules/)

## Migration Guide

If upgrading from basic linting:

1. **Backup current code**
2. **Install new dependencies** (see Installation section)
3. **Run `npm run lint:fix`** to fix auto-fixable issues
4. **Manually fix remaining issues**
5. **Set up pre-commit hooks**
6. **Update CI/CD pipelines**

---

*This linting setup ensures consistent, high-quality code across the Liberty Ridge Training Grounds project.*
