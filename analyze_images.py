
import re
import os
from collections import Counter

file_path = 'src/data/featureData.tsx'
try:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # regex for image: "..." or image: '...'
    matches = re.findall(r'image:\s*["\']([^"\']+)["\']', content)
    
    total_slots = len(matches)
    counts = Counter(matches)
    duplicates = {k: v for k, v in counts.items() if v > 1}
    
    print(f"Total slots: {total_slots}")
    print(f"Unique images used: {len(counts)}")
    print(f"Duplicates found: {len(duplicates)}")
    print("Duplicate details:")
    for img, count in duplicates.items():
        print(f"{img}: {count}")

except Exception as e:
    print(f"Error: {e}")
