
import re
import os

file_path = 'src/data/featureData.tsx'
images_dir = 'public/images'

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = set(re.findall(r'image:\s*["\']([^"\']+)["\']', content))
    
    existing_files = set()
    for root, dirs, files in os.walk(images_dir):
        for file in files:
            # normalize path to forward slashes and relative to public
            rel_path = os.path.relpath(os.path.join(root, file), 'public').replace('\\', '/')
            existing_files.add('/' + rel_path)

    missing = matches - existing_files
    # Also check if matches are just filenames without /images/ prefix (though code seems to use absolute paths)
    
    print("Missing images (used in code but not found in public/images):")
    for m in missing:
        print(m)

except Exception as e:
    print(f"Error: {e}")
