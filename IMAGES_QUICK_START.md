# 🚀 Quick Start Guide - Adding Images to Your Website

## ✅ Image Folders Created!

Your images folder is now ready at:
```
C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\
```

---

## 📁 Folder Structure

```
public/images/
├── logo/           ← Add your company logo here
├── hero/           ← Add your main hero image here
├── services/       ← Optional service photos
└── gallery/        ← Future: before/after photos
```

---

## 🎯 Step-by-Step: Add Your Images

### Step 1: Add Your Logo

1. **Prepare your logo file:**
   - Format: PNG (with transparent background) or SVG
   - Size: 200-300px width
   - Name it: `langner-logo.png`

2. **Copy to folder:**
   ```
   C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\logo\langner-logo.png
   ```

3. **Update the code:**
   - Open `index-standalone.html`
   - Find line ~407 (search for "logo-text")
   - Replace:
     ```html
     <span class="logo-text">Langner GM</span>
     ```
   - With:
     ```html
     <img src="images/logo/langner-logo.png" alt="Langner GM Logo" style="height: 40px;">
     ```

---

### Step 2: Add Your Hero Image

1. **Prepare your hero image:**
   - Format: JPG
   - Size: 1200 x 800px (recommended)
   - Compress to ~200-400KB
   - Name it: `hero-main.jpg`

2. **Copy to folder:**
   ```
   C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\hero\hero-main.jpg
   ```

3. **Update the code:**
   - Open `index-standalone.html`
   - Find line ~424 (search for "hero-image-placeholder")
   - Replace:
     ```html
     <div class="hero-image-placeholder">Hero Image</div>
     ```
   - With:
     ```html
     <img src="images/hero/hero-main.jpg" alt="Wasserschadensanierung" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;">
     ```

---

## 🔄 After Adding Images

1. **Save the HTML file**
2. **Refresh your browser** (F5 or Ctrl+R)
3. **Your images should now appear!**

---

## 📸 Image Optimization Tools (Free)

Before adding images, compress them:

- **TinyPNG/TinyJPG**: https://tinypng.com/
- **Squoosh**: https://squoosh.app/
- **Compressor.io**: https://compressor.io/

---

## 🎨 Where to Find Stock Photos (if needed)

**Free Stock Photo Sites:**
- Unsplash: https://unsplash.com/
- Pexels: https://pexels.com/
- Pixabay: https://pixabay.com/

**Search terms:**
- "water damage restoration"
- "professional cleaning"
- "home repair"
- "construction worker"

---

## ✅ Checklist

- [ ] Logo added to `public/images/logo/`
- [ ] Hero image added to `public/images/hero/`
- [ ] Images optimized (compressed)
- [ ] Code updated in `index-standalone.html`
- [ ] Browser refreshed
- [ ] Images display correctly

---

## 📋 File Paths Reference

### Logo:
- **Folder:** `C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\logo\`
- **Filename:** `langner-logo.png`
- **Code path:** `images/logo/langner-logo.png`

### Hero Image:
- **Folder:** `C:\Users\elchi\.gemini\antigravity\Langner_Website\public\images\hero\`
- **Filename:** `hero-main.jpg`
- **Code path:** `images/hero/hero-main.jpg`

---

## 🆘 Troubleshooting

**Images not showing?**
1. Check file names match exactly (case-sensitive)
2. Make sure files are in correct folders
3. Refresh browser (Ctrl+F5 for hard refresh)
4. Check file paths in HTML are correct

**Logo too big/small?**
- Adjust the `height: 40px` value in the img tag
- Try `height: 50px` or `height: 30px`

**Hero image looks stretched?**
- Make sure image is at least 1200px wide
- Use `object-fit: cover` (already in code)

---

## 📞 Need Help?

Check the detailed README files in each folder:
- `public/images/README.md` - Main guide
- `public/images/logo/README.md` - Logo instructions
- `public/images/hero/README.md` - Hero image instructions

---

**Ready to add your images? The File Explorer window is now open!** 🎉
