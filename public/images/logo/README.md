# Logo Folder

Place your Langner GM logo file here.

## Required File:
- **Filename:** `langner-logo.png` (or `langner-logo.svg`)
- **Format:** PNG with transparent background (recommended) or SVG
- **Size:** 200-300px width
- **Max file size:** 100KB

## How to Add:
1. Save your logo file as `langner-logo.png`
2. Copy it to this folder
3. The website will automatically display it in the header

## File Path:
```
C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\logo\langner-logo.png
```

## After Adding:
Update the image path in:
- `index-standalone.html` (line ~407)
- `src/components/Header.jsx` (line 11)

Change from:
```html
src="/path/to/your/logo.png"
```

To:
```html
src="/images/logo/langner-logo.png"
```
