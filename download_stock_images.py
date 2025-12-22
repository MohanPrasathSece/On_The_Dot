import requests
import os
import time
import re
from pathlib import Path

# Pexels API - Free tier allows 200 requests per hour
# Get your free API key from: https://www.pexels.com/api/
PEXELS_API_KEY = "YOUR_PEXELS_API_KEY_HERE"  # Replace with your API key

# Configuration
OUTPUT_DIR = "public/images/stock"
NUM_IMAGES = 100
IMAGES_PER_QUERY = 20

# Search queries for diverse business/finance/office images
SEARCH_QUERIES = [
    "business meeting",
    "office workspace", 
    "laptop desk",
    "finance chart",
    "business team",
    "corporate office",
    "financial analysis",
    "business presentation",
    "office technology",
    "professional workspace",
    "business success",
    "teamwork office",
    "financial planning",
    "business strategy",
    "modern office"
]

def download_images_from_pexels():
    """Download images from Pexels API"""
    
    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    headers = {
        "Authorization": PEXELS_API_KEY
    }
    
    downloaded = 0
    
    for query in SEARCH_QUERIES:
        if downloaded >= NUM_IMAGES:
            break
            
        print(f"\nSearching for: {query}")
        
        # Search for images
        url = f"https://api.pexels.com/v1/search?query={query}&per_page={IMAGES_PER_QUERY}&orientation=landscape"
        
        try:
            response = requests.get(url, headers=headers)
            response.raise_for_status()
            data = response.json()
            
            photos = data.get('photos', [])
            
            for photo in photos:
                if downloaded >= NUM_IMAGES:
                    break
                
                # Get medium size image URL
                image_url = photo['src']['large']
                photo_id = photo['id']
                
                # Create filename
                safe_query = re.sub(r'[^a-z0-9]+', '-', query.lower())
                filename = f"stock-{safe_query}-{photo_id}.jpg"
                filepath = os.path.join(OUTPUT_DIR, filename)
                
                # Skip if already downloaded
                if os.path.exists(filepath):
                    print(f"  Skipping {filename} (already exists)")
                    downloaded += 1
                    continue
                
                # Download image
                print(f"  Downloading {filename}...")
                img_response = requests.get(image_url)
                img_response.raise_for_status()
                
                with open(filepath, 'wb') as f:
                    f.write(img_response.content)
                
                downloaded += 1
                print(f"  ✓ Downloaded ({downloaded}/{NUM_IMAGES})")
                
                # Rate limiting - be nice to the API
                time.sleep(0.5)
                
        except requests.exceptions.RequestException as e:
            print(f"  Error downloading from query '{query}': {e}")
            continue
    
    print(f"\n✓ Downloaded {downloaded} images to {OUTPUT_DIR}")
    return downloaded

def update_feature_data():
    """Update featureData.tsx to use the new stock images"""
    
    # Get all downloaded images
    stock_images = []
    if os.path.exists(OUTPUT_DIR):
        for file in os.listdir(OUTPUT_DIR):
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
                # Path relative to public/
                stock_images.append(f"/images/stock/{file}")
    
    if not stock_images:
        print("No stock images found. Please run download first.")
        return
    
    print(f"\nFound {len(stock_images)} stock images")
    
    # Read featureData.tsx
    feature_data_path = 'src/data/featureData.tsx'
    with open(feature_data_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Track usage to distribute evenly
    usage_counts = {img: 0 for img in stock_images}
    
    # Keep track of special/unique images that shouldn't be replaced
    keep_images = {
        '/images/invoicing.png',
        '/images/reminders.png', 
        '/images/cashflow.png',
        '/images/team.png',
        '/images/mascot.png',
        '/images/freelancer-workspace.png',
        '/images/cashflow-dashboard.png',
        '/images/payment-sync-dashboard.png',
        '/images/realtime-sync.png',
        '/images/team-invite-dashboard.png'
    }
    
    def replace_image(match):
        current_img = match.group(1)
        
        # Keep special images
        if current_img in keep_images:
            return match.group(0)
        
        # Replace duplicates and placeholders with stock images
        # Find least used image
        min_usage_img = min(stock_images, key=lambda x: usage_counts[x])
        usage_counts[min_usage_img] += 1
        
        return f'image: "{min_usage_img}"'
    
    # Replace images
    new_content = re.sub(r'image:\s*["\']([^"\']+)["\']', replace_image, content)
    
    # Write back
    with open(feature_data_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    max_usage = max(usage_counts.values()) if usage_counts else 0
    print(f"✓ Updated featureData.tsx")
    print(f"  Max image usage: {max_usage} times")
    print(f"  Image distribution: {len([v for v in usage_counts.values() if v > 0])} images used")

def main():
    print("=" * 60)
    print("Stock Image Downloader for OTD Project")
    print("=" * 60)
    
    if PEXELS_API_KEY == "YOUR_PEXELS_API_KEY_HERE":
        print("\n⚠️  Please set your Pexels API key first!")
        print("   1. Go to https://www.pexels.com/api/")
        print("   2. Sign up for free")
        print("   3. Copy your API key")
        print("   4. Replace 'YOUR_PEXELS_API_KEY_HERE' in this script")
        print("\nAlternatively, manually download 100 images to public/images/stock/")
        print("and run this script with option 2 only.\n")
        
        choice = input("Continue anyway? (y/n): ").lower()
        if choice != 'y':
            return
    
    print("\nOptions:")
    print("1. Download images from Pexels")
    print("2. Update featureData.tsx with existing stock images")
    print("3. Both (download + update)")
    
    choice = input("\nSelect option (1/2/3): ").strip()
    
    if choice in ['1', '3']:
        download_images_from_pexels()
    
    if choice in ['2', '3']:
        update_feature_data()
    
    print("\n✅ Done!")

if __name__ == "__main__":
    main()
