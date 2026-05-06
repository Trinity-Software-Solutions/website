import os
import re

def remove_comments(text):
    # Regex to match single-line (//) and multi-line (/* */) comments
    # Handles strings by avoiding comments inside quotes (basic implementation)
    
    def replacer(match):
        s = match.group(0)
        if s.startswith('/'):
            return "" # it's a comment
        else:
            return s # it's a string
            
    pattern = re.compile(
        r'//.*?$|/\*.*?\*/|\'(?:\\.|[^\\\'])*\'|"(?:\\.|[^\\"])*"',
        re.DOTALL | re.MULTILINE
    )
    return re.sub(pattern, replacer, text)

def clean_directory(directory):
    for root, dirs, files in os.walk(directory):
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
            
        for file in files:
            if file.endswith(('.ts', '.tsx', '.js', '.jsx', '.css')):
                file_path = os.path.join(root, file)
                print(f"Cleaning: {file_path}")
                
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                cleaned_content = remove_comments(content)
                
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(cleaned_content)

if __name__ == "__main__":
    target_dir = "./src" # Target the src directory by default
    print(f"Starting comment cleanup in {target_dir}...")
    clean_directory(target_dir)
    print("Cleanup complete!")
