# Component Hierarchy & Structure

## Visual Component Tree

```
LangnerLandingPage (Main Container)
│
├── Header (Sticky Navigation)
│   ├── Logo (Image + Text Fallback)
│   └── CTA Button ("Notdienst Anrufen")
│
├── Main Content
│   │
│   ├── HeroSection
│   │   ├── Hero Content (Left)
│   │   │   ├── Headline
│   │   │   ├── Subheadline
│   │   │   └── CTA Button ("Hilfe anfordern")
│   │   └── Hero Image (Right)
│   │
│   ├── ServicesGrid
│   │   ├── ServiceCard (Wasserschadensanierung)
│   │   ├── ServiceCard (Bautrocknung)
│   │   ├── ServiceCard (Schimmelsanierung)
│   │   └── ServiceCard (Komplette Renovierung)
│   │
│   └── TrustBanner
│       ├── Headline ("Sorgenfreie Abwicklung")
│       ├── Description Text
│       └── Rating (5 stars + 4.8/5)
│
└── Footer
    ├── Company Name
    └── Address
```

## File Locations for Key Customizations

### 🎯 Logo Replacement
**File**: `src/components/Header.jsx`  
**Lines**: 8-15  
**What to change**: Update `src="/path/to/your/logo.png"` with your actual logo path

### 📸 Hero Image
**File**: `src/components/HeroSection.jsx`  
**Lines**: 23-29  
**What to change**: Update `src="/path/to/hero-image.jpg"` with your hero image path

### 📞 Phone Number
**File**: `src/components/Header.jsx`  
**Line**: 11  
**What to change**: Update `tel:+49` with your actual emergency phone number

### 🎨 Colors (If needed)
All color values are in the respective `.css` files:
- Corporate Blue: `#0066CC`
- Light Grey: `#F5F5F5`
- Dark Grey: `#333333`
- White: `#FFFFFF`
- Light Blue: `#E6F2FF`

## Import Structure

```jsx
// In your App.jsx or index.jsx
import LangnerLandingPage from './components/LangnerLandingPage';

function App() {
  return (
    <div className="App">
      <LangnerLandingPage />
    </div>
  );
}

export default App;
```

## Component Props (Future Extensibility)

Currently, all components are self-contained with no props. To make them more flexible:

### Example: Making Header configurable
```jsx
// Future enhancement
<Header 
  logoSrc="/images/logo.png"
  ctaText="Notdienst Anrufen"
  ctaPhone="+49XXXXXXXXXX"
/>
```

### Example: Making ServiceCard dynamic
```jsx
// Already implemented in ServicesGrid.jsx
<ServiceCard 
  title="Wasserschadensanierung"
  icon="water"
  description="Professionelle Beseitigung von Wasserschäden"
/>
```
