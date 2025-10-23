#!/usr/bin/env node

/* eslint-disable no-console */
/**
 * Comprehensive Lint Script for Liberty Ridge Training Grounds
 *
 * This script provides multiple linting modes:
 * - lint: Basic linting check
 * - lint:fix: Auto-fix issues where possible
 * - lint:staged: Lint only staged files (for pre-commit hooks)
 * - lint:check: Check formatting without fixing
 * - lint:report: Generate detailed lint report
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ANSI color codes for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  bold: '\x1b[1m'
};

class LintScript {
  constructor() {
    this.projectRoot = process.cwd();
    this.mode = process.argv[2] || 'lint';
    this.verbose = process.argv.includes('--verbose') || process.argv.includes('-v');
    this.fix = process.argv.includes('--fix');
    this.staged = process.argv.includes('--staged');

    // File patterns to lint
    this.jsPatterns = [
      'src/js/**/*.js',
      'src/admin/**/*.js',
      'src/service-worker.js',
      'scripts/**/*.js',
      '*.js'
    ];

    // Patterns to exclude
    this.excludePatterns = ['src/js/dist/**/*.js', '*.min.js', '*.bundle.js'];

    this.cssPatterns = ['src/css/**/*.css', 'src/admin/**/*.css'];

    this.htmlPatterns = ['src/**/*.html'];
  }

  log(message, color = 'white') {
    console.log(`${colors[color]}${message}${colors.reset}`);
  }

  logHeader(message) {
    console.log(`\n${colors.bold}${colors.cyan}=== ${message} ===${colors.reset}\n`);
  }

  logSuccess(message) {
    this.log(`✅ ${message}`, 'green');
  }

  logError(message) {
    this.log(`❌ ${message}`, 'red');
  }

  logWarning(message) {
    this.log(`⚠️  ${message}`, 'yellow');
  }

  logInfo(message) {
    this.log(`ℹ️  ${message}`, 'blue');
  }

  // Get list of staged files (for pre-commit hooks)
  getStagedFiles() {
    try {
      const staged = execSync('git diff --cached --name-only --diff-filter=ACM', {
        encoding: 'utf-8',
        cwd: this.projectRoot
      });
      return staged
        .trim()
        .split('\n')
        .filter((file) => file);
    } catch (error) {
      this.logWarning('Unable to get staged files, linting all files instead');
      return [];
    }
  }

  // Filter files by pattern and staging status
  getFilesToLint(patterns) {
    if (this.staged) {
      const stagedFiles = this.getStagedFiles();
      return stagedFiles.filter((file) =>
        patterns.some((pattern) => file.match(pattern.replace('**/', '').replace('*', '.*')))
      );
    }

    // Return patterns for glob matching
    return patterns;
  }

  // Run ESLint on JavaScript files
  async lintJavaScript() {
    this.logHeader('JavaScript Linting (ESLint)');

    const filesToLint = this.getFilesToLint(this.jsPatterns);

    if (this.staged && filesToLint.length === 0) {
      this.logInfo('No staged JavaScript files to lint');
      return { success: true, fixable: 0, errors: 0, warnings: 0 };
    }

    const eslintArgs = ['eslint', '--format=stylish', '--max-warnings=0'];

    if (this.fix || this.mode === 'fix') {
      eslintArgs.push('--fix');
    }

    if (this.verbose) {
      eslintArgs.push('--debug');
    }

    // Add file patterns or specific files
    if (this.staged && filesToLint.length > 0) {
      eslintArgs.push(...filesToLint);
    } else {
      eslintArgs.push(...this.jsPatterns);
    }

    try {
      const result = execSync(eslintArgs.join(' '), {
        encoding: 'utf-8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      if (result.trim()) {
        console.log(result);
      }

      this.logSuccess('JavaScript linting completed successfully');
      return { success: true, fixable: 0, errors: 0, warnings: 0 };
    } catch (error) {
      const output = error.stdout || error.message;
      console.log(output);

      // Parse ESLint output to get statistics
      const stats = this.parseEslintOutput(output);

      if (this.fix || this.mode === 'fix') {
        this.logInfo(`Auto-fixed ${stats.fixable} issues`);
      }

      if (stats.errors > 0) {
        this.logError(`Found ${stats.errors} errors and ${stats.warnings} warnings`);
        return { success: false, ...stats };
      } else if (stats.warnings > 0) {
        this.logWarning(`Found ${stats.warnings} warnings`);
        return { success: true, ...stats };
      }

      return { success: false, fixable: 0, errors: 1, warnings: 0 };
    }
  }

  // Parse ESLint output to extract statistics
  parseEslintOutput(output) {
    const lines = output.split('\n');
    let errors = 0;
    let warnings = 0;
    let fixable = 0;

    lines.forEach((line) => {
      // Look for summary lines like "✖ 1277 problems (1273 errors, 4 warnings)"
      const problemMatch = line.match(/✖ (\d+) problems \((\d+) errors?, (\d+) warnings?\)/);
      if (problemMatch) {
        errors = parseInt(problemMatch[2]);
        warnings = parseInt(problemMatch[3]);
      }

      // Look for fixable issues line
      const fixableMatch = line.match(/(\d+) errors? and \d+ warnings? potentially fixable/);
      if (fixableMatch) {
        fixable = parseInt(fixableMatch[1]);
      }
    });

    return { errors, warnings, fixable };
  }

  // Run Prettier on all supported files
  async formatCode() {
    this.logHeader('Code Formatting (Prettier)');

    const prettierArgs = ['prettier', '--config', path.join(this.projectRoot, 'package.json')];

    if (this.fix || this.mode === 'fix' || this.mode === 'format') {
      prettierArgs.push('--write');
    } else {
      prettierArgs.push('--check');
    }

    const patterns = ['src/**/*.{js,html,css,json,md}', 'scripts/**/*.js', '*.{js,json,md}'];

    if (this.staged) {
      const stagedFiles = this.getStagedFiles().filter((file) =>
        /\.(js|html|css|json|md)$/.test(file)
      );

      if (stagedFiles.length === 0) {
        this.logInfo('No staged files to format');
        return { success: true };
      }

      prettierArgs.push(...stagedFiles);
    } else {
      prettierArgs.push(...patterns);
    }

    try {
      const result = execSync(prettierArgs.join(' '), {
        encoding: 'utf-8',
        cwd: this.projectRoot,
        stdio: 'pipe'
      });

      if (result.trim()) {
        console.log(result);
      }

      if (this.fix || this.mode === 'fix' || this.mode === 'format') {
        this.logSuccess('Code formatting completed');
      } else {
        this.logSuccess('Code formatting check passed');
      }

      return { success: true };
    } catch (error) {
      const output = error.stdout || error.message;
      console.log(output);

      if (this.fix || this.mode === 'fix' || this.mode === 'format') {
        this.logError('Code formatting failed');
      } else {
        this.logError('Code formatting check failed - run with --fix to auto-format');
      }

      return { success: false };
    }
  }

  // Generate a comprehensive lint report
  async generateReport() {
    this.logHeader('Generating Lint Report');

    const reportPath = path.join(this.projectRoot, 'lint-report.json');

    try {
      const eslintArgs = [
        'eslint',
        '--format=json',
        '--output-file',
        reportPath,
        ...this.jsPatterns
      ];

      execSync(eslintArgs.join(' '), {
        cwd: this.projectRoot,
        stdio: 'ignore'
      });
    } catch (error) {
      // ESLint exits with error code when issues are found, but still generates report
    }

    if (fs.existsSync(reportPath)) {
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

      let totalErrors = 0;
      let totalWarnings = 0;
      let totalFixable = 0;

      report.forEach((file) => {
        totalErrors += file.errorCount;
        totalWarnings += file.warningCount;
        totalFixable += file.fixableErrorCount + file.fixableWarningCount;
      });

      console.log('\n📊 Lint Report Summary:');
      console.log(`   Files analyzed: ${report.length}`);
      console.log(`   Total errors: ${totalErrors}`);
      console.log(`   Total warnings: ${totalWarnings}`);
      console.log(`   Auto-fixable issues: ${totalFixable}`);

      if (totalErrors > 0 || totalWarnings > 0) {
        console.log(`\n📁 Report saved to: ${reportPath}`);
        this.logInfo('Run "npm run lint:fix" to auto-fix issues');
      }

      return { success: totalErrors === 0, report };
    }

    return { success: false };
  }

  // Check if required dependencies are installed
  checkDependencies() {
    const requiredDeps = ['eslint', 'prettier'];
    const missing = [];

    requiredDeps.forEach((dep) => {
      try {
        execSync(`npm list ${dep}`, { stdio: 'ignore', cwd: this.projectRoot });
      } catch (error) {
        missing.push(dep);
      }
    });

    if (missing.length > 0) {
      this.logError(`Missing dependencies: ${missing.join(', ')}`);
      this.logInfo('Run: npm install --save-dev ' + missing.join(' '));
      return false;
    }

    return true;
  }

  // Main execution method
  async run() {
    this.logHeader(`Liberty Ridge Lint Script - Mode: ${this.mode}`);

    if (!this.checkDependencies()) {
      process.exit(1);
    }

    let jsResult = { success: true };
    let formatResult = { success: true };

    switch (this.mode) {
      case 'check': {
        jsResult = await this.lintJavaScript();
        formatResult = await this.formatCode();
        break;
      }

      case 'fix': {
        formatResult = await this.formatCode();
        jsResult = await this.lintJavaScript();
        break;
      }

      case 'format': {
        formatResult = await this.formatCode();
        break;
      }

      case 'report': {
        const reportResult = await this.generateReport();
        jsResult = reportResult;
        break;
      }

      case 'staged': {
        this.staged = true;
        formatResult = await this.formatCode();
        jsResult = await this.lintJavaScript();
        break;
      }

      default: {
        // 'lint'
        jsResult = await this.lintJavaScript();
        break;
      }
    }

    // Summary
    console.log('\n' + '='.repeat(50));
    if (jsResult.success && formatResult.success) {
      this.logSuccess('All linting checks passed! 🎉');
      process.exit(0);
    } else {
      this.logError('Linting failed - please fix the issues above');

      if (jsResult.fixable && jsResult.fixable > 0) {
        this.logInfo(`💡 Tip: Run "npm run lint:fix" to auto-fix ${jsResult.fixable} issues`);
      }

      process.exit(1);
    }
  }
}

// Run the script
if (require.main === module) {
  const linter = new LintScript();
  linter.run().catch((error) => {
    console.error('❌ Lint script failed:', error.message);
    process.exit(1);
  });
}

module.exports = LintScript;
