#!/usr/bin/env python3
"""
cSpell Word Manager

Helps manage the cSpell custom dictionary for the Liberty Ridge project.
Provides easy commands to add words, check unknown words, and maintain the dictionary.

Usage:
    python3 scripts/cspell-manager.py [command] [args]

Commands:
    check           - Check for spelling errors
    list-unknown    - List all unknown words found
    add WORD        - Add a word to the dictionary
    add-multiple    - Add multiple words interactively
    clean           - Remove duplicates and sort dictionary
    stats           - Show dictionary statistics
"""

import json
import re
import subprocess
import sys
from pathlib import Path

class CSpellManager:
    def __init__(self):
        self.config_path = Path('.cspell.json')
        self.load_config()

    def load_config(self):
        """Load the cSpell configuration"""
        if not self.config_path.exists():
            print("❌ .cspell.json not found!")
            sys.exit(1)

        with open(self.config_path, 'r') as f:
            self.config = json.load(f)

    def save_config(self):
        """Save the cSpell configuration"""
        with open(self.config_path, 'w') as f:
            json.dump(self.config, f, indent=2)
        print("✅ Configuration saved")

    def check_spelling(self):
        """Run cSpell check and return results"""
        try:
            result = subprocess.run([
                'npx', 'cspell',
                '**/*.md', '**/*.js', '**/*.css', '**/*.html',
                '--no-progress'
            ], capture_output=True, text=True, timeout=60)

            return result.stdout + result.stderr
        except subprocess.TimeoutExpired:
            return "⏱️ Spelling check timed out"
        except Exception as e:
            return f"❌ Error running cSpell: {e}"

    def get_unknown_words(self):
        """Extract unknown words from cSpell output"""
        output = self.check_spelling()

        # Pattern to match: "Unknown word (word)"
        pattern = r'Unknown word \(([^)]+)\)'
        words = re.findall(pattern, output)

        # Remove duplicates and sort
        unique_words = sorted(list(set(words)))
        return unique_words

    def add_word(self, word):
        """Add a word to the dictionary"""
        if 'words' not in self.config:
            self.config['words'] = []

        word = word.strip().lower()

        if word in self.config['words']:
            print(f"📝 Word '{word}' already in dictionary")
            return False

        self.config['words'].append(word)
        self.config['words'].sort()
        print(f"✅ Added '{word}' to dictionary")
        return True

    def add_multiple_words(self):
        """Interactive mode to add multiple words"""
        unknown_words = self.get_unknown_words()

        if not unknown_words:
            print("🎉 No unknown words found!")
            return

        print(f"📝 Found {len(unknown_words)} unknown words:\n")

        added_count = 0

        for i, word in enumerate(unknown_words, 1):
            print(f"{i}/{len(unknown_words)}: '{word}'")
            choice = input("Add this word? (y/n/q/a): ").lower().strip()

            if choice == 'q':
                break
            elif choice == 'a':
                # Add all remaining words
                for remaining_word in unknown_words[i-1:]:
                    if self.add_word(remaining_word):
                        added_count += 1
                break
            elif choice == 'y':
                if self.add_word(word):
                    added_count += 1
            elif choice == 'n':
                print(f"⏩ Skipped '{word}'")
            else:
                print("❓ Please enter y/n/q/a")
                continue

        if added_count > 0:
            self.save_config()
            print(f"\n🎉 Added {added_count} words to dictionary")

    def clean_dictionary(self):
        """Remove duplicates and sort the dictionary"""
        if 'words' not in self.config:
            return

        original_count = len(self.config['words'])

        # Remove duplicates, strip whitespace, convert to lowercase, and sort
        cleaned_words = sorted(list(set(
            word.strip().lower() for word in self.config['words'] if word.strip()
        )))

        self.config['words'] = cleaned_words
        removed_count = original_count - len(cleaned_words)

        print(f"🧹 Dictionary cleaned: {removed_count} duplicates removed")
        print(f"📊 Dictionary now has {len(cleaned_words)} words")

    def show_stats(self):
        """Show dictionary statistics"""
        words = self.config.get('words', [])

        print("📊 cSpell Dictionary Statistics")
        print("=" * 40)
        print(f"Total words: {len(words)}")

        if words:
            # Categorize words
            categories = {
                'technical': 0,
                'brand': 0,
                'web': 0,
                'javascript': 0,
                'css': 0,
                'other': 0
            }

            technical_terms = ['api', 'css', 'html', 'js', 'http', 'json', 'url', 'dom']
            brand_terms = ['liberty', 'ridge', 'ramsey', 'zach', 'roboto', 'segoe']
            web_terms = ['srcset', 'rgba', 'webp', 'avif', 'woff', 'svg']
            js_terms = ['async', 'await', 'console', 'function', 'const', 'let']
            css_terms = ['flexbox', 'grid', 'rem', 'vh', 'vw', 'rgba']

            for word in words:
                word_lower = word.lower()
                if any(term in word_lower for term in technical_terms):
                    categories['technical'] += 1
                elif any(term in word_lower for term in brand_terms):
                    categories['brand'] += 1
                elif any(term in word_lower for term in web_terms):
                    categories['web'] += 1
                elif any(term in word_lower for term in js_terms):
                    categories['javascript'] += 1
                elif any(term in word_lower for term in css_terms):
                    categories['css'] += 1
                else:
                    categories['other'] += 1

            print("\nWord categories:")
            for category, count in categories.items():
                percentage = (count / len(words)) * 100
                print(f"  {category.title()}: {count} ({percentage:.1f}%)")

        # Check for current unknown words
        unknown_words = self.get_unknown_words()
        print(f"\nCurrent unknown words: {len(unknown_words)}")

        if unknown_words and len(unknown_words) <= 10:
            print("Unknown words:", ", ".join(unknown_words))

    def run_check(self):
        """Run a spelling check and show results"""
        print("🔍 Running spelling check...")
        output = self.check_spelling()

        if "Unknown word" in output:
            unknown_words = self.get_unknown_words()
            print(f"\n❌ Found {len(unknown_words)} spelling errors")

            if unknown_words:
                print("\nFirst 10 unknown words:")
                for word in unknown_words[:10]:
                    print(f"  - {word}")

                if len(unknown_words) > 10:
                    print(f"  ... and {len(unknown_words) - 10} more")

                print(f"\n💡 Run 'python3 scripts/cspell-manager.py add-multiple' to add words interactively")
        else:
            print("✅ No spelling errors found!")

def main():
    if len(sys.argv) < 2:
        print(__doc__)
        return

    manager = CSpellManager()
    command = sys.argv[1].lower()

    if command == 'check':
        manager.run_check()
    elif command == 'list-unknown':
        words = manager.get_unknown_words()
        if words:
            print(f"Found {len(words)} unknown words:")
            for word in words:
                print(f"  - {word}")
        else:
            print("✅ No unknown words found!")
    elif command == 'add':
        if len(sys.argv) < 3:
            print("❌ Please provide a word to add: python3 scripts/cspell-manager.py add WORD")
            return
        word = sys.argv[2]
        if manager.add_word(word):
            manager.save_config()
    elif command == 'add-multiple':
        manager.add_multiple_words()
    elif command == 'clean':
        manager.clean_dictionary()
        manager.save_config()
    elif command == 'stats':
        manager.show_stats()
    else:
        print(f"❌ Unknown command: {command}")
        print(__doc__)

if __name__ == '__main__':
    main()
