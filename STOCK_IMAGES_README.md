# Stock Image Downloader for OTD Project

This script downloads 100 high-quality stock images and replaces duplicate images in your project.

## Quick Start

### Option 1: Use Pexels API (Recommended)

1. **Get a free API key:**
   - Go to https://www.pexels.com/api/
   - Sign up (it's free!)
   - Copy your API key

2. **Set up the script:**
   ```bash
   # Open download_stock_images.py and replace:
   PEXELS_API_KEY = "YOUR_PEXELS_API_KEY_HERE"
   # with your actual key:
   PEXELS_API_KEY = "your-actual-key-here"
   ```

3. **Install requirements:**
   ```bash
   pip install requests
   ```

4. **Run the script:**
   ```bash
   python download_stock_images.py
   # Select option 3 (Both - download + update)
   ```

### Option 2: Manual Download

If you don't want to use the API:

1. **Create the directory:**
   ```bash
   mkdir -p public/images/stock
   ```

2. **Manually download ~100 images** from:
   - https://www.pexels.com/search/office/
   - https://www.pexels.com/search/business/
   - https://www.pexels.com/search/finance/
   - https://www.pexels.com/search/workspace/
   
   Save them to `public/images/stock/` with names like:
   - stock-office-1.jpg
   - stock-business-2.jpg
   - stock-finance-3.jpg
   - etc.

3. **Run the update:**
   ```bash
   python download_stock_images.py
   # Select option 2 (Update only)
   ```

## What It Does

1. **Downloads 100 images** with diverse business/office/finance themes
2. **Saves to** `public/images/stock/` directory
3. **Updates** `src/data/featureData.tsx` to use these images
4. **Preserves** special images like logos and custom dashboards
5. **Distributes images evenly** to minimize duplication

## Keywords Used

The script searches for:
- business meeting
- office workspace
- laptop desk
- finance chart
- business team
- corporate office
- financial analysis
- business presentation
- office technology
- professional workspace
- ...and more!

## Rate Limiting

The script respects Pexels API limits:
- Free tier: 200 requests/hour
- Script includes 0.5s delay between downloads
- Downloads ~100 images in about 1-2 minutes

## After Running

Your `featureData.tsx` will have:
- ✅ No duplicate images (or minimal duplication)
- ✅ Professional stock photos throughout
- ✅ Consistent visual quality
- ✅ Better user experience

## Troubleshooting

**"No stock images found"**
- Make sure you ran option 1 or manually added images first

**API errors**
- Check your API key is correct
- Ensure you haven't exceeded rate limits (200/hour)

**Import errors**
- Run: `pip install requests`
