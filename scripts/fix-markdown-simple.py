#!/usr/bin/env python3
"""
Simple Markdown Lint Auto-Fix Script

A lightweight Python script to fix common markdown linting issues.
No external dependencies required - uses only Python standard library.

Usage:
    python3 scripts/fix-markdown-simple.py [path] [--dry-run] [--verbose]

Based on real-world lint issues from Liberty Ridge project.
"""

import os
import re
import sys
import glob
import argparse
from pathlib import Path

class SimpleMarkdownFixer:
    def __init__(self, dry_run=False, verbose=False):
        self.dry_run = dry_run
        self.verbose = verbose
        self.fixes_applied = {
            'MD040': 0,  # Fenced code language
            'MD034': 0,  # Bare URLs
            'MD047': 0,  # Single trailing newline
            'MD009': 0,  # Trailing spaces
            'MD036': 0,  # Emphasis as heading
            'MD026': 0   # Trailing punctuation in heading
        }

    def find_markdown_files(self, target_path='.'):
        """Find all markdown files in target path"""
        files = []

        # If target_path is a single file, return it if it's a markdown file
        if os.path.isfile(target_path) and target_path.endswith(('.md', '.markdown')):
            return [target_path]

        # Otherwise, search for markdown files
        if os.path.isdir(target_path):
            for root, dirs, filenames in os.walk(target_path):
                # Skip exclude directories
                dirs[:] = [d for d in dirs if d not in ['node_modules', '.git', 'dist', 'build']]

                for filename in filenames:
                    if filename.endswith(('.md', '.markdown')):
                        files.append(os.path.join(root, filename))

        return sorted(files)

    def fix_fenced_code_language(self, content):
        """MD040: Add language to fenced code blocks"""
        count = 0
        # Match ``` at start of line with optional whitespace, followed by newline
        pattern = r'^```\s*\n'

        def replacer(match):
            nonlocal count
            count += 1
            return '```text\n'

        fixed_content = re.sub(pattern, replacer, content, flags=re.MULTILINE)
        return fixed_content, count

    def fix_bare_urls(self, content):
        """MD034: Wrap bare URLs in angle brackets"""
        count = 0
        # Match HTTP/HTTPS URLs not already in brackets or parentheses
        pattern = r'(?<![<\[\(])(https?://[^\s\)>\]]+)(?![>\]\)])'

        def replacer(match):
            nonlocal count
            url = match.group(1)
            # Don't fix if already wrapped
            if url.startswith('<') and url.endswith('>'):
                return url
            count += 1
            return f'<{url}>'

        fixed_content = re.sub(pattern, replacer, content)
        return fixed_content, count

    def fix_trailing_spaces(self, content):
        """MD009: Remove trailing spaces"""
        count = 0
        lines = content.split('\n')
        fixed_lines = []

        for line in lines:
            original_line = line
            fixed_line = line.rstrip()
            if fixed_line != original_line:
                count += 1
            fixed_lines.append(fixed_line)

        return '\n'.join(fixed_lines), count

    def fix_emphasis_as_heading(self, content):
        """MD036: Convert bold emphasis to headings"""
        count = 0
        # Match lines that are just **text**
        pattern = r'^\*\*([^*]+)\*\*\s*$'

        def replacer(match):
            nonlocal count
            text = match.group(1).strip()
            # Only convert if it looks like a heading (short, starts with capital)
            if len(text) < 100 and text and text[0].isupper():
                count += 1
                return f'#### {text}'
            return match.group(0)

        fixed_content = re.sub(pattern, replacer, content, flags=re.MULTILINE)
        return fixed_content, count

    def fix_trailing_punctuation(self, content):
        """MD026: Remove trailing punctuation from headings"""
        count = 0
        # Match headings with trailing punctuation
        pattern = r'^(#{1,6}\s+.+?)([.!?:;,]+)\s*$'

        def replacer(match):
            nonlocal count
            count += 1
            return match.group(1).rstrip()

        fixed_content = re.sub(pattern, replacer, content, flags=re.MULTILINE)
        return fixed_content, count

    def fix_ordered_list_prefix(self, content):
        """MD029: Fix ordered list item prefixes to be sequential"""
        count = 0
        lines = content.split('\n')
        fixed_lines = []
        list_number = 1
        in_list = False

        for line in lines:
            # Check if this line starts an ordered list item
            ol_match = re.match(r'^(\s*)(\d+)\.\s+(.*)$', line)
            if ol_match:
                indent, current_num, text = ol_match.groups()
                if not in_list:
                    # Starting a new list
                    list_number = 1
                    in_list = True

                if int(current_num) != list_number:
                    count += 1
                    fixed_line = f"{indent}{list_number}. {text}"
                else:
                    fixed_line = line

                list_number += 1
                fixed_lines.append(fixed_line)
            else:
                # Check if we're still in a list context (indented continuation)
                if in_list and line.strip() == '':
                    # Empty line might continue the list
                    fixed_lines.append(line)
                elif in_list and re.match(r'^\s+\S', line):
                    # Indented content continues the list
                    fixed_lines.append(line)
                else:
                    # Not a list item, reset list tracking
                    in_list = False
                    list_number = 1
                    fixed_lines.append(line)

        return '\n'.join(fixed_lines), count

    def fix_trailing_newline(self, content):
        """MD047: Ensure file ends with single newline"""
        count = 0
        # Remove all trailing newlines then add exactly one
        trimmed = content.rstrip('\n')

        if content != trimmed + '\n':
            count = 1
            return trimmed + '\n', count

        return content, count

    def fix_file(self, file_path):
        """Fix a single markdown file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                original_content = f.read()

            content = original_content
            total_fixes = 0

            if self.verbose:
                print(f"🔍 Processing: {os.path.relpath(file_path)}")

            # Apply fixes in order
            fixes = [
                ('MD040', self.fix_fenced_code_language),
                ('MD034', self.fix_bare_urls),
                ('MD009', self.fix_trailing_spaces),
                ('MD036', self.fix_emphasis_as_heading),
                ('MD026', self.fix_trailing_punctuation),
                ('MD029', self.fix_ordered_list_prefix),
                ('MD047', self.fix_trailing_newline)
            ]

            for rule_name, fix_func in fixes:
                content, count = fix_func(content)
                if count > 0:
                    total_fixes += count
                    self.fixes_applied[rule_name] += count
                    if self.verbose:
                        print(f"   ✅ {rule_name}: {count} fixes applied")

            # Write file if changes were made
            if content != original_content:
                if not self.dry_run:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✅ Fixed: {os.path.relpath(file_path)} ({total_fixes} issues)")
                else:
                    print(f"🔍 Would fix: {os.path.relpath(file_path)} ({total_fixes} issues)")
                return total_fixes

            return 0

        except Exception as e:
            print(f"❌ Error processing {file_path}: {e}")
            return 0

    def print_summary(self, files_fixed, total_files):
        """Print summary of fixes applied"""
        total_fixes = sum(self.fixes_applied.values())

        print('\n' + '=' * 50)
        print('📊 MARKDOWN LINT FIX SUMMARY')
        print('=' * 50)
        print(f"Files processed: {total_files}")
        print(f"Files fixed: {files_fixed}")
        print(f"Total fixes applied: {total_fixes}")
        print('')

        if total_fixes > 0:
            print('Fixes by type:')
            descriptions = {
                'MD040': 'Fenced code blocks missing language',
                'MD034': 'Bare URLs wrapped in angle brackets',
                'MD009': 'Trailing spaces removed',
                'MD036': 'Bold emphasis converted to headings',
                'MD026': 'Trailing punctuation removed from headings',
                'MD047': 'Files ensured to end with newline'
            }

            for rule, count in self.fixes_applied.items():
                if count > 0:
                    print(f"   {rule}: {count} ({descriptions[rule]})")

        if self.dry_run:
            print('\n🔍 DRY RUN - No files were modified')
        else:
            print('\n✅ All fixes applied successfully')
        print('=' * 50)

    def fix_all(self, target_path='.'):
        """Main entry point"""
        print('🔧 Starting Markdown Lint Auto-Fix...\n')

        files = self.find_markdown_files(target_path)

        if not files:
            print('❌ No markdown files found.')
            return

        print(f"📁 Found {len(files)} markdown files to process:")
        for file in files:
            print(f"   - {os.path.relpath(file)}")
        print('')

        files_fixed = 0
        for file_path in files:
            fixes = self.fix_file(file_path)
            if fixes > 0:
                files_fixed += 1

        self.print_summary(files_fixed, len(files))

def main():
    parser = argparse.ArgumentParser(
        description='Fix common markdown linting issues automatically'
    )
    parser.add_argument(
        'path',
        nargs='?',
        default='.',
        help='Target path to process (default: current directory)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show what would be fixed without making changes'
    )
    parser.add_argument(
        '--verbose',
        action='store_true',
        help='Show detailed output for each file'
    )

    args = parser.parse_args()

    fixer = SimpleMarkdownFixer(dry_run=args.dry_run, verbose=args.verbose)
    fixer.fix_all(args.path)

if __name__ == '__main__':
    main()
