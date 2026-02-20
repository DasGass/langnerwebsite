# Hero Images Folder

Place your hero section image here.

## Required File:
- **Filename:** `hero-main.jpg`
- **Format:** JPG or WebP
- **Size:** 1200 x 800px (3:2 aspect ratio recommended)
- **Max file size:** 500KB (optimize for web)

## Image Suggestions:
- Professional water damage restoration work
- Clean, modern equipment in use
- Team photo with company branding
- Before/after split view
- Professional technician at work

## How to Add:
1. Save your hero image as `hero-main.jpg`
2. Optimize it for web (compress to ~200-400KB)
3. Copy it to this folder

## File Path:
```
C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\hero\hero-main.jpg
```

## After Adding:
Update the image path in:
- `index-standalone.html` (line ~424)
- `src/components/HeroSection.jsx` (line 25)

Change from:
```html
src="/path/to/hero-image.jpg"
```

To:
```html
src="/images/hero/hero-main.jpg"
```

## Image Optimization:
Use these free tools to compress your image:
- TinyJPG: https://tinyjpg.com/
- Squoosh: https://squoosh.app/
