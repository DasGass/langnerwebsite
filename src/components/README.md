# Langner GM Landing Page - React Components

This directory contains the React component structure for the Langner GM landing page, generated from the Stitch design.

## 📁 Component Structure

```
src/components/
├── LangnerLandingPage.jsx    # Main landing page component
├── LangnerLandingPage.css    # Global styles
├── Header.jsx                 # Sticky header with logo and CTA
├── Header.css
├── HeroSection.jsx            # Hero section with headline and CTA
├── HeroSection.css
├── ServicesGrid.jsx           # 2x2 grid of services
├── ServicesGrid.css
├── ServiceCard.jsx            # Individual service card
├── ServiceCard.css
├── TrustBanner.jsx            # Trust & insurance banner
├── TrustBanner.css
├── Footer.jsx                 # Footer with contact info
└── Footer.css
```

## 🎨 Design Specifications

### Color Palette (Strictly Enforced)
- **Corporate Blue**: `#0066CC` - Primary CTA buttons and accents
- **Light Grey**: `#F5F5F5` - Section backgrounds
- **Dark Grey**: `#333333` - Text and footer background
- **White**: `#FFFFFF` - Card backgrounds
- **Light Blue**: `#E6F2FF` - Trust banner background

### Typography
- **Font Family**: Inter (with system font fallbacks)
- **Responsive**: Mobile-first design with breakpoint at 768px

## 🚀 Usage

### Import the main component:

```jsx
import LangnerLandingPage from './components/LangnerLandingPage';

function App() {
  return <LangnerLandingPage />;
}
```

## 📝 Customization Guide

### 1. Replace the Logo (IMPORTANT!)

**File**: `src/components/Header.jsx`

**Lines to modify**: 8-15

Replace the placeholder with your actual logo:

```jsx
<div className="logo">
  <img 
    src="/path/to/your/logo.png"  // ← Update this path
    alt="Langner GM Logo" 
    className="logo-image"
  />
  {/* Remove the fallback text below once logo is added */}
  <span className="logo-text">Langner GM</span>
</div>
```

**Steps:**
1. Place your logo file in your `public` folder (e.g., `public/images/langner-logo.png`)
2. Update the `src` attribute to `/images/langner-logo.png`
3. Remove or comment out the `<span className="logo-text">` line

### 2. Replace the Hero Image

**File**: `src/components/HeroSection.jsx`

**Lines to modify**: 23-29

```jsx
<img 
  src="/path/to/hero-image.jpg"  // ← Update this path
  alt="Wasserschadensanierung" 
  className="hero-image"
/>
```

### 3. Update Phone Number

**File**: `src/components/Header.jsx`

**Line to modify**: 11

```jsx
<button className="cta-button" onClick={() => window.location.href = 'tel:+49XXXXXXXXXX'}>
  Notdienst Anrufen
</button>
```

Replace `+49XXXXXXXXXX` with your actual emergency phone number.

### 4. Add Form Functionality

**File**: `src/components/HeroSection.jsx`

**Lines to modify**: 5-8

Replace the console.log with your actual form logic:

```jsx
const handleCTA = () => {
  // Option 1: Navigate to contact form
  window.location.href = '/contact';
  
  // Option 2: Open modal
  // setShowModal(true);
  
  // Option 3: Scroll to form section
  // document.getElementById('contact-form').scrollIntoView();
};
```

## 🔧 Component Details

### Header Component
- **Sticky positioning** - Stays at top when scrolling
- **Responsive** - Adapts to mobile screens
- **Logo placeholder** - Ready for your logo image
- **CTA button** - "Notdienst Anrufen" with phone link

### Hero Section
- **Split layout** - Text on left, image on right
- **Bold headline** - "Wasserschaden? Wir retten Ihr Zuhause."
- **Subheadline** - Local expertise message
- **Primary CTA** - "Hilfe anfordern" button
- **Image placeholder** - Ready for hero image

### Services Grid
- **2x2 Grid layout** - Responsive to 1 column on mobile
- **4 Services**:
  1. Wasserschadensanierung (water droplet icon)
  2. Bautrocknung (fan icon)
  3. Schimmelsanierung (shield icon)
  4. Komplette Renovierung (tools icon)
- **Custom SVG icons** - Corporate Blue color
- **Hover effects** - Cards lift on hover

### Trust Banner
- **Light blue background** - #E6F2FF
- **Insurance message** - Builds trust
- **5-star rating** - 4.8/5 display
- **Centered layout** - Clean and professional

### Footer
- **Dark grey background** - #333333
- **Contact information**:
  - Company name: Langner GM
  - Address: Siebigteroth 25, 53783 Eitorf
- **White text** - High contrast

## 📱 Responsive Design

All components are mobile-first and responsive:
- **Desktop**: Full layout with grid and split sections
- **Mobile** (< 768px): Single column, stacked layout

## 🎯 Next Steps

1. ✅ **Replace logo** in `Header.jsx`
2. ✅ **Add hero image** in `HeroSection.jsx`
3. ✅ **Update phone number** in `Header.jsx`
4. ✅ **Add form logic** in `HeroSection.jsx`
5. Consider adding:
   - Contact form section
   - Customer testimonials
   - Before/after gallery
   - FAQ section

## 📦 Dependencies

This component structure uses:
- React (JSX)
- CSS Modules (or standard CSS imports)
- No external UI libraries required

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11 not supported (uses CSS Grid and modern features)

---

**Generated from Stitch Project**: Langner_GM_Redesign  
**Project ID**: 5905882120516089322  
**Screen ID**: d2ec919acb3244099b7a582b14c18180
