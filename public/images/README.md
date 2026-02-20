# 📸 Images Folder - Langner GM Website

This folder contains all images used on the Langner GM website.

## 📁 Folder Structure

```
public/images/
├── logo/           # Company logo files
├── hero/           # Hero section images
├── services/       # Service-related images
└── gallery/        # Before/after photos, project gallery
```

---

## 🎯 Required Images

### 1. **Logo** (`public/images/logo/`)

**File to add:** `langner-logo.png` or `langner-logo.svg`

**Specifications:**
- **Format:** PNG (with transparent background) or SVG
- **Recommended size:** 200-300px width
- **Aspect ratio:** Maintain original proportions
- **File size:** Keep under 100KB for fast loading

**Used in:**
- Header (sticky navigation)
- Footer
- Favicon (optional)

**How to add:**
1. Save your logo file as `langner-logo.png` (or `.svg`)
2. Place it in `C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\logo\`
3. The website will automatically use it

---

### 2. **Hero Image** (`public/images/hero/`)

**File to add:** `hero-main.jpg`

**Specifications:**
- **Format:** JPG or WebP
- **Recommended size:** 1200 x 800px (3:2 aspect ratio)
- **File size:** Optimize to 200-500KB
- **Subject:** Professional water damage restoration work, clean workspace, or team photo

**Suggestions for hero image:**
- Professional technician working on water damage
- Clean, modern equipment
- Before/after split view
- Team photo with company van

**Used in:**
- Hero section (right side on desktop, below headline on mobile)

---

### 3. **Service Images** (`public/images/services/`) - Optional

**Files to add:**
- `wasserschaden.jpg` - Water damage restoration
- `bautrocknung.jpg` - Construction drying equipment
- `schimmel.jpg` - Mold remediation
- `renovierung.jpg` - Complete renovation work

**Specifications:**
- **Format:** JPG or WebP
- **Recommended size:** 600 x 400px
- **File size:** 100-200KB each

**Note:** Currently using SVG icons. These images are optional for future enhancements.

---

### 4. **Gallery Images** (`public/images/gallery/`) - Future Use

**Files to add:**
- Before/after photos
- Project showcase images
- Equipment photos
- Team photos

**Specifications:**
- **Format:** JPG or WebP
- **Recommended size:** 800 x 600px
- **File size:** 150-300KB each

---

## 🖼️ Image Optimization Tips

### Before Adding Images:

1. **Resize images** to recommended dimensions (don't use oversized images)
2. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com/)
   - Squoosh (https://squoosh.app/)
   - ImageOptim (Mac)
   - RIOT (Windows)

3. **Use appropriate formats:**
   - **JPG** - Photos, complex images
   - **PNG** - Logos, graphics with transparency
   - **SVG** - Icons, simple graphics (best for logos)
   - **WebP** - Modern format, best compression (if supported)

4. **Name files clearly:**
   - Use lowercase
   - Use hyphens instead of spaces
   - Be descriptive: `hero-water-damage.jpg` not `IMG_1234.jpg`

---

## 🔧 How to Update Image Paths

### For the Standalone HTML (`index-standalone.html`):

**Logo:**
```html
<!-- Find this line (around line 407) -->
<span class="logo-text">Langner GM</span>

<!-- Replace with: -->
<img src="images/logo/langner-logo.png" alt="Langner GM Logo" style="height: 40px;">
```

**Hero Image:**
```html
<!-- Find this line (around line 424) -->
<div class="hero-image-placeholder">Hero Image</div>

<!-- Replace with: -->
<img src="images/hero/hero-main.jpg" alt="Wasserschadensanierung" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;">
```

### For React Components:

**Logo** (`src/components/Header.jsx`):
```jsx
// Line 11 - Update the src path:
src="/images/logo/langner-logo.png"
```

**Hero Image** (`src/components/HeroSection.jsx`):
```jsx
// Line 25 - Update the src path:
src="/images/hero/hero-main.jpg"
```

---

## 📋 Image Checklist

- [ ] Add company logo to `public/images/logo/`
- [ ] Add hero image to `public/images/hero/`
- [ ] Update image paths in HTML/React files
- [ ] Test images display correctly
- [ ] Optimize all images for web
- [ ] Add alt text for accessibility

---

## 🎨 Recommended Image Sources (if you need stock photos)

**Free Stock Photos:**
- Unsplash (https://unsplash.com/)
- Pexels (https://pexels.com/)
- Pixabay (https://pixabay.com/)

**Search terms:**
- "water damage restoration"
- "construction worker"
- "home repair"
- "professional cleaning"
- "building maintenance"

---

## 📐 Current Image Paths in Code

### Standalone HTML:
- Logo: Line ~407
- Hero: Line ~424

### React Components:
- Logo: `src/components/Header.jsx` (line 11)
- Hero: `src/components/HeroSection.jsx` (line 25)

---

## ✅ Quick Start

1. **Add your logo:**
   - Save as `langner-logo.png`
   - Place in `public/images/logo/`
   - File path: `C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\logo\langner-logo.png`

2. **Add your hero image:**
   - Save as `hero-main.jpg`
   - Place in `public/images/hero/`
   - File path: `C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\hero\hero-main.jpg`

3. **Refresh your browser** to see the changes!

---

**Need help?** Check the main README.md in the components folder for more details.
