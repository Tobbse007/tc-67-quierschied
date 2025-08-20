# TC 67 Quierschied - Comprehensive Website Style Guide

## 📖 Table of Contents
1. [Brand Identity](#brand-identity)
2. [Design System](#design-system)
3. [Layout Architecture](#layout-architecture)
4. [Typography System](#typography-system)
5. [Color Palette](#color-palette)
6. [Navigation System](#navigation-system)
7. [Component Library](#component-library)
8. [Section Patterns](#section-patterns)
9. [Mobile Design](#mobile-design)
10. [Icon System](#icon-system)
11. [Animation & Interactions](#animation--interactions)
12. [Content Guidelines](#content-guidelines)
13. [SEO & Performance](#seo--performance)
14. [Code Standards](#code-standards)
15. [Accessibility](#accessibility)
16. [VereinsWeb Attribution](#vereinsweb-attribution)
17. [Development Checklist](#development-checklist)

---

## 🎨 Brand Identity

### Brand Positioning
**TC 67 Quierschied** ist ein traditioneller Tennisverein mit modernem Auftreten. Das Design sollte:
- 🏆 **Sportlichkeit** und **Professionalität** vermitteln
- 🤝 **Gemeinschaft** und **Tradition** widerspiegeln
- 📱 **Modern** und **zugänglich** für alle Altersgruppen sein
- 🎾 **Tennis-Atmosphäre** durch passende Farben und Bilder schaffen

### Brand Voice & Tone
- **Freundlich** aber **professionell**
- **Einladend** für neue Mitglieder
- **Stolz** auf Tradition und Erfolge
- **Aktivierend** - motiviert zum Mitmachen

### Visual Personality
- **Clean & Modern**: Minimalistisches Design mit viel Weißraum
- **Energetic**: Orange als dynamische Akzentfarbe
- **Professional**: Hochwertige Typografie und Layouts
- **Accessible**: Klar strukturiert und benutzerfreundlich

---

## 🎯 Design System

### Design Principles

#### 1. Clarity First
```css
/* Beispiel: Klare Hierarchie */
.heading-primary   { @apply text-4xl md:text-6xl font-bold; }
.heading-secondary { @apply text-3xl md:text-4xl font-semibold; }
.heading-tertiary  { @apply text-2xl md:text-3xl font-medium; }
```

#### 2. Consistent Spacing
```css
/* Spacing Scale (8px base) */
.space-xs   { @apply p-2;  }    /* 8px */
.space-sm   { @apply p-4;  }    /* 16px */
.space-md   { @apply p-6;  }    /* 24px */
.space-lg   { @apply p-8;  }    /* 32px */
.space-xl   { @apply p-12; }    /* 48px */
.space-2xl  { @apply p-16; }    /* 64px */
.space-3xl  { @apply p-24; }    /* 96px */

/* Section Spacing */
.section-spacing-sm { @apply py-12; }       /* Kleine Sections */
.section-spacing-md { @apply py-16; }       /* Standard Sections */
.section-spacing-lg { @apply py-20 lg:py-24; } /* Große Sections */
.section-spacing-xl { @apply py-24 lg:py-32; } /* Hero Sections */
```

#### 3. Responsive Design
```css
/* Mobile First Approach */
.responsive-text {
  @apply text-base sm:text-lg md:text-xl lg:text-2xl;
}

.responsive-spacing {
  @apply px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16;
}

.responsive-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
```

---

## 🎨 Color Palette

### Primary Colors
```css
/* Orange Spectrum - Hauptfarben */
--primary-50:  #FFF7ED;   /* Sehr helles Orange - Backgrounds */
--primary-100: #FFEDD5;   /* Helles Orange - Subtle Highlights */
--primary-200: #FED7AA;   /* Light Orange - Hover States */
--primary-300: #FDBA74;   /* Medium Orange - Accents */
--primary-400: #FB923C;   /* Orange - Secondary Actions */
--primary-500: #F97316;   /* PRIMARY - Main Brand Color */
--primary-600: #EA580C;   /* SECONDARY - Hover/Active States */
--primary-700: #C2410C;   /* Dark Orange - Pressed States */
--primary-800: #9A3412;   /* Darker Orange - Text on Light */
--primary-900: #7C2D12;   /* Darkest Orange - High Contrast */
```

### Neutral Colors
```css
/* Gray Spectrum - Neutral Palette */
--gray-50:  #F9FAFB;   /* Off-white - Light Backgrounds */
--gray-100: #F3F4F6;   /* Very Light Gray - Cards, Inputs */
--gray-200: #E5E7EB;   /* Light Gray - Borders, Dividers */
--gray-300: #D1D5DB;   /* Gray - Disabled States */
--gray-400: #9CA3AF;   /* Medium Gray - Placeholder Text */
--gray-500: #6B7280;   /* Gray - Secondary Text */
--gray-600: #4B5563;   /* Dark Gray - Body Text */
--gray-700: #374151;   /* Darker Gray - Headings */
--gray-800: #1F2937;   /* DARK - Primary Text Color */
--gray-900: #111827;   /* Black - High Contrast Text */
```

### Semantic Colors
```css
/* Success States */
--success-50:  #F0FDF4;
--success-500: #22C55E;   /* Success Green */
--success-700: #15803D;

/* Warning States */
--warning-50:  #FFFBEB;
--warning-500: #F59E0B;   /* Warning Amber */
--warning-700: #B45309;

/* Error States */
--error-50:  #FEF2F2;
--error-500: #EF4444;     /* Error Red */
--error-700: #B91C1C;

/* Info States */
--info-50:  #EFF6FF;
--info-500: #3B82F6;      /* Info Blue */
--info-700: #1D4ED8;
```

### Color Usage Guidelines

#### Primary Orange Usage
```css
/* ✅ Richtige Verwendung */
.cta-buttons     { color: var(--primary-500); }
.active-states   { background: var(--primary-500); }
.brand-accents   { border-color: var(--primary-500); }
.hover-effects   { background: var(--primary-600); }

/* ❌ Falsche Verwendung */
.large-backgrounds { background: var(--primary-500); } /* Zu dominant */
.body-text         { color: var(--primary-500); }      /* Schlechte Lesbarkeit */
```

#### Text Color Hierarchy
```css
.text-primary   { @apply text-gray-800; }  /* Haupttext */
.text-secondary { @apply text-gray-600; }  /* Sekundärtext */
.text-tertiary  { @apply text-gray-500; }  /* Hilfstext */
.text-disabled  { @apply text-gray-400; }  /* Deaktiviert */
.text-accent    { @apply text-primary; }   /* Akzentfarbe */
```

---

## 📝 Typography System

### Font Stack
```css
/* Primary Fonts */
--font-heading: 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
--font-body: 'Inter', 'Segoe UI', 'Roboto', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;

/* Font Loading */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@400;500;600;700;900&display=swap');
```

### Type Scale
```css
/* Heading Scale */
.text-6xl { font-size: 3.75rem; line-height: 1; }      /* 60px - Hero Headlines */
.text-5xl { font-size: 3rem; line-height: 1; }         /* 48px - Page Headlines */
.text-4xl { font-size: 2.25rem; line-height: 2.5rem; } /* 36px - Section Headlines */
.text-3xl { font-size: 1.875rem; line-height: 2.25rem; } /* 30px - Subsection Headlines */
.text-2xl { font-size: 1.5rem; line-height: 2rem; }    /* 24px - Card Headlines */
.text-xl  { font-size: 1.25rem; line-height: 1.75rem; } /* 20px - Large Text */

/* Body Scale */
.text-lg   { font-size: 1.125rem; line-height: 1.75rem; } /* 18px - Large Body */
.text-base { font-size: 1rem; line-height: 1.5rem; }      /* 16px - Standard Body */
.text-sm   { font-size: 0.875rem; line-height: 1.25rem; } /* 14px - Small Text */
.text-xs   { font-size: 0.75rem; line-height: 1rem; }     /* 12px - Captions */
```

### Font Weights
```css
.font-light     { font-weight: 300; } /* Light - Elegant Headlines */
.font-normal    { font-weight: 400; } /* Normal - Body Text */
.font-medium    { font-weight: 500; } /* Medium - Emphasized Text */
.font-semibold  { font-weight: 600; } /* Semibold - Subheadings */
.font-bold      { font-weight: 700; } /* Bold - Headlines */
.font-extrabold { font-weight: 800; } /* Extra Bold - Hero Text */
.font-black     { font-weight: 900; } /* Black - Impact Headlines */
```

### Typography Components
```css
/* Heading Styles */
.heading-hero {
  @apply font-heading font-bold text-4xl md:text-6xl leading-tight text-white;
}

.heading-page {
  @apply font-heading font-bold text-3xl md:text-5xl leading-tight text-gray-800;
}

.heading-section {
  @apply font-heading font-semibold text-2xl md:text-4xl leading-tight text-gray-800;
}

.heading-card {
  @apply font-heading font-semibold text-xl md:text-2xl leading-tight text-gray-800;
}

/* Body Text Styles */
.body-large {
  @apply font-body font-normal text-lg md:text-xl leading-relaxed text-gray-600;
}

.body-normal {
  @apply font-body font-normal text-base leading-relaxed text-gray-600;
}

.body-small {
  @apply font-body font-normal text-sm leading-relaxed text-gray-500;
}

/* Special Text Styles */
.text-accent {
  @apply font-body font-medium text-primary hover:text-secondary transition-colors;
}

.text-muted {
  @apply font-body font-normal text-gray-500 text-sm;
}

.text-caption {
  @apply font-body font-normal text-gray-400 text-xs uppercase tracking-wide;
}
```

---

## 📐 Layout Architecture

### Grid System
```css
/* Container System */
.container-sm  { max-width: 640px; }   /* Small content */
.container-md  { max-width: 768px; }   /* Medium content */
.container-lg  { max-width: 1024px; }  /* Large content */
.container-xl  { max-width: 1280px; }  /* Extra large content */
.container-2xl { max-width: 1536px; }  /* Maximum content */

/* Standard Container */
.container {
  @apply mx-auto px-4 sm:px-6 lg:px-8;
  max-width: 1280px; /* Default max-width */
}

/* Fluid Container */
.container-fluid {
  @apply w-full px-4 sm:px-6 lg:px-8;
}
```

### Grid Layouts
```css
/* Responsive Grid Patterns */
.grid-auto {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.grid-featured {
  @apply grid grid-cols-1 lg:grid-cols-2;
}

.grid-content {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}

.grid-news {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.grid-sponsors {
  @apply grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6;
}

/* Grid Gaps */
.gap-section { @apply gap-8 lg:gap-12; }   /* Between major components */
.gap-content { @apply gap-6 lg:gap-8; }    /* Between content items */
.gap-tight   { @apply gap-4 lg:gap-6; }    /* Between related items */
```

### Flexbox Patterns
```css
/* Common Flex Layouts */
.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex items-center justify-between;
}

.flex-start {
  @apply flex items-center justify-start;
}

.flex-column {
  @apply flex flex-col;
}

.flex-wrap {
  @apply flex flex-wrap;
}

/* Responsive Flex */
.flex-responsive {
  @apply flex flex-col md:flex-row;
}

.flex-reverse-mobile {
  @apply flex flex-col-reverse md:flex-row;
}
```

### Z-Index Scale
```css
/* Z-Index Hierarchy */
.z-dropdown  { z-index: 1000; }  /* Dropdown Menus */
.z-sticky    { z-index: 1020; }  /* Sticky Headers */
.z-fixed     { z-index: 1030; }  /* Fixed Elements */
.z-modal     { z-index: 1040; }  /* Modal Backdrops */
.z-popover   { z-index: 1050; }  /* Popovers */
.z-tooltip   { z-index: 1060; }  /* Tooltips */
.z-toast     { z-index: 1070; }  /* Toast Notifications */
```

---

## 🧭 Navigation System

### Header Architecture
```html
<!-- Complete Header Structure -->
<header class="header-main">
  <div class="header-container">
    <div class="header-content">
      
      <!-- Brand Section -->
      <div class="header-brand">
        <div class="brand-logo">
          <svg class="logo-icon"><!-- Tennis Ball/Racket Icon --></svg>
        </div>
        <div class="brand-text">
          <h1 class="brand-title">TC 67 Quierschied</h1>
          <p class="brand-subtitle">Tennisclub mit Tradition</p>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-list">
          <li><a href="/" class="nav-link nav-link-active">Home</a></li>
          <li><a href="/news" class="nav-link">News & Events</a></li>
          <li><a href="/anlage" class="nav-link">Unsere Anlage</a></li>
          <li><a href="/sponsoren" class="nav-link">Sponsoren</a></li>
          <li><a href="/kontakt" class="nav-link">Kontakt</a></li>
        </ul>
      </nav>

      <!-- Desktop CTA -->
      <div class="nav-cta">
        <a href="/buchung" class="btn-primary-nav">
          <svg class="btn-icon"><!-- Calendar Icon --></svg>
          Platz buchen
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="nav-toggle" id="mobile-menu-button" aria-label="Menü öffnen">
        <svg class="toggle-icon"><!-- Hamburger Icon --></svg>
      </button>

    </div>
  </div>
</header>
```

### Header Styles
```css
/* Header Layout */
.header-main {
  @apply sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 
         shadow-sm transition-all duration-300;
}

.header-container {
  @apply container mx-auto px-4 sm:px-6 lg:px-8;
}

.header-content {
  @apply flex items-center justify-between h-20;
}

/* Brand Section */
.header-brand {
  @apply flex items-center flex-shrink-0;
}

.brand-logo {
  @apply flex-shrink-0;
}

.logo-icon {
  @apply h-10 w-auto text-primary;
}

.brand-text {
  @apply ml-3;
}

.brand-title {
  @apply text-xl font-heading font-bold text-gray-800 leading-tight;
}

.brand-subtitle {
  @apply text-sm font-body text-gray-600 leading-tight;
}

/* Desktop Navigation */
.nav-desktop {
  @apply hidden md:flex;
}

.nav-list {
  @apply flex space-x-8 list-none;
}

.nav-link {
  @apply relative inline-block font-heading font-medium text-gray-700 py-2 px-2 
         transition-all duration-300 hover:text-primary focus:outline-none
         focus:text-primary;
         
  /* Animated Underline */
  @apply after:content-[''] after:absolute after:bottom-1.5 after:left-2 
         after:right-2 after:h-0.5 after:bg-primary after:scale-x-0 
         after:origin-center after:transition-transform after:duration-300 
         after:rounded-full hover:after:scale-x-100;
}

.nav-link-active {
  @apply text-primary after:scale-x-100;
}

/* Desktop CTA */
.nav-cta {
  @apply hidden md:block;
}

.btn-primary-nav {
  @apply bg-primary hover:bg-secondary text-white font-semibold py-2.5 px-6 
         rounded-md transition-all duration-300 shadow hover:shadow-lg 
         hover:shadow-primary/20 flex items-center group;
}

.btn-icon {
  @apply w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110;
}

/* Mobile Toggle */
.nav-toggle {
  @apply md:hidden text-gray-700 hover:text-primary focus:outline-none 
         focus:text-primary bg-gray-100 p-2 rounded-lg hover:bg-gray-200 
         transition-colors duration-200;
}

.toggle-icon {
  @apply w-6 h-6;
}
```

### Navigation States
```css
/* Scroll States */
.header-scrolled {
  @apply bg-white/98 shadow-md;
}

.header-scrolled .brand-title {
  @apply text-lg; /* Slightly smaller when scrolled */
}

/* Active States */
.nav-link:focus {
  @apply outline-none ring-2 ring-primary/20 rounded;
}

.nav-toggle:focus {
  @apply outline-none ring-2 ring-primary/20;
}

/* Hover Effects */
.nav-link:hover {
  @apply text-primary;
}

.nav-toggle:hover .toggle-icon {
  @apply text-primary;
}
```

---

## 📱 Mobile Navigation System

### Mobile Menu Structure
```html
<!-- Mobile Menu (Generated by JavaScript) -->
<div id="mobile-menu-panel" class="mobile-panel">
  <div class="mobile-content">
    
    <!-- Mobile Navigation Links -->
    <a href="/" class="mobile-link mobile-link-active">
      <svg class="mobile-icon"><!-- Home Icon --></svg>
      Home
    </a>
    
    <a href="/news" class="mobile-link">
      <svg class="mobile-icon"><!-- News Icon --></svg>
      News & Events
    </a>
    
    <a href="/anlage" class="mobile-link">
      <svg class="mobile-icon"><!-- Building Icon --></svg>
      Unsere Anlage
    </a>
    
    <a href="/sponsoren" class="mobile-link">
      <svg class="mobile-icon"><!-- Users Icon --></svg>
      Sponsoren
    </a>
    
    <a href="/kontakt" class="mobile-link">
      <svg class="mobile-icon"><!-- Mail Icon --></svg>
      Kontakt
    </a>
    
    <!-- Mobile CTA -->
    <a href="/buchung" class="mobile-cta">
      <svg class="mobile-cta-icon"><!-- Calendar Icon --></svg>
      Platz buchen
    </a>
    
  </div>
</div>

<!-- Mobile Overlay -->
<div id="mobile-menu-overlay" class="mobile-overlay"></div>
```

### Mobile Styles
```css
/* Mobile Panel */
.mobile-panel {
  @apply md:hidden absolute left-0 right-0 mx-4 bg-white rounded-2xl 
         shadow-2xl border border-gray-100 px-3 pt-3 pb-4 z-50
         transform scale-95 opacity-0 transition-all duration-300;
  top: calc(100% + 12px);
}

.mobile-panel.open {
  @apply scale-100 opacity-100;
}

.mobile-content {
  @apply flex flex-col space-y-1.5;
}

/* Mobile Links */
.mobile-link {
  @apply font-heading font-medium px-4 py-3 text-gray-700 hover:bg-primary 
         hover:text-white rounded-md transition-all duration-200 flex items-center
         focus:outline-none focus:bg-primary focus:text-white;
}

.mobile-link-active {
  @apply bg-primary/10 text-primary;
}

.mobile-link:hover .mobile-icon {
  @apply text-white;
}

.mobile-icon {
  @apply w-5 h-5 mr-3 opacity-70 transition-colors duration-200;
}

/* Mobile CTA */
.mobile-cta {
  @apply font-semibold px-4 py-3 bg-primary hover:bg-secondary text-white 
         rounded-md transition-all duration-200 flex items-center shadow-md
         focus:outline-none focus:ring-2 focus:ring-primary/20;
}

.mobile-cta-icon {
  @apply w-4 h-4 mr-2 transition-transform duration-200;
}

.mobile-cta:hover .mobile-cta-icon {
  @apply scale-110;
}

/* Mobile Overlay */
.mobile-overlay {
  @apply fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40
         opacity-0 transition-opacity duration-300;
}

.mobile-overlay.show {
  @apply opacity-100;
}

/* Body Lock (when mobile menu is open) */
.mobile-menu-open {
  @apply overflow-hidden;
}
```

### Mobile Animation Keyframes
```css
/* Staggered Link Animation */
@keyframes menuLinkFade {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-link {
  animation: menuLinkFade 0.3s ease-out forwards;
}

.mobile-link:nth-child(1) { animation-delay: 0.05s; }
.mobile-link:nth-child(2) { animation-delay: 0.1s; }
.mobile-link:nth-child(3) { animation-delay: 0.15s; }
.mobile-link:nth-child(4) { animation-delay: 0.2s; }
.mobile-link:nth-child(5) { animation-delay: 0.25s; }
.mobile-cta { animation-delay: 0.3s; }

/* Panel Slide Animation */
@keyframes panelSlide {
  0% {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.mobile-panel.open {
  animation: panelSlide 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
```

---

## 🎛️ Component Library

### Button System

#### Primary Buttons
```css
/* Primary Button Base */
.btn-primary {
  @apply bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 
         rounded-md transition-all duration-300 shadow hover:shadow-lg 
         hover:shadow-primary/20 flex items-center justify-center
         focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2
         disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary;
}

/* Primary Button Sizes */
.btn-primary-sm {
  @apply btn-primary py-2 px-4 text-sm;
}

.btn-primary-lg {
  @apply btn-primary py-4 px-8 text-lg;
}

.btn-primary-xl {
  @apply btn-primary py-5 px-10 text-xl;
}

/* Primary Button with Icon */
.btn-primary-icon {
  @apply btn-primary;
}

.btn-primary-icon svg {
  @apply w-4 h-4 mr-2 transition-transform duration-300;
}

.btn-primary-icon:hover svg {
  @apply scale-110;
}
```

#### Secondary Buttons
```css
/* Secondary Button Base */
.btn-secondary {
  @apply bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 
         font-medium py-3 px-6 rounded-md transition-all duration-300 
         shadow-sm hover:shadow flex items-center justify-center
         focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2
         disabled:opacity-50 disabled:cursor-not-allowed;
}

/* Secondary Button Variants */
.btn-secondary-primary {
  @apply btn-secondary border-primary text-primary hover:bg-primary hover:text-white;
}

.btn-secondary-outline {
  @apply bg-transparent border-2 border-primary text-primary hover:bg-primary 
         hover:text-white font-semibold py-3 px-6 rounded-md transition-all 
         duration-300 focus:outline-none focus:ring-2 focus:ring-primary/20;
}
```

#### Ghost Buttons
```css
.btn-ghost {
  @apply bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-800 
         font-medium py-3 px-6 rounded-md transition-all duration-300
         focus:outline-none focus:bg-gray-100 focus:text-gray-800;
}

.btn-ghost-primary {
  @apply bg-transparent hover:bg-primary/10 text-primary hover:text-primary 
         font-medium py-3 px-6 rounded-md transition-all duration-300
         focus:outline-none focus:bg-primary/10;
}
```

#### Button Groups
```css
.btn-group {
  @apply flex flex-col sm:flex-row gap-3 sm:gap-4;
}

.btn-group-center {
  @apply btn-group justify-center;
}

.btn-group-start {
  @apply btn-group justify-start;
}

.btn-group-end {
  @apply btn-group justify-end;
}
```

### Card System

#### Base Card
```css
.card {
  @apply bg-white rounded-xl shadow-md hover:shadow-lg transition-all 
         duration-300 overflow-hidden border border-gray-100;
}

.card-interactive {
  @apply card cursor-pointer hover:scale-[1.02] hover:-translate-y-1;
}

.card-content {
  @apply p-6;
}

.card-header {
  @apply pb-4 border-b border-gray-100 mb-4;
}

.card-footer {
  @apply pt-4 border-t border-gray-100 mt-4;
}
```

#### Card Variants
```css
/* News Card */
.card-news {
  @apply card;
}

.card-news-image {
  @apply w-full h-48 object-cover;
}

.card-news-content {
  @apply card-content;
}

.card-news-meta {
  @apply flex items-center text-sm text-gray-500 mb-2;
}

.card-news-title {
  @apply text-xl font-heading font-semibold text-gray-800 mb-2 line-clamp-2;
}

.card-news-excerpt {
  @apply text-gray-600 mb-4 line-clamp-3;
}

.card-news-link {
  @apply text-primary hover:text-secondary font-medium transition-colors 
         duration-200 flex items-center;
}

/* Feature Card */
.card-feature {
  @apply card text-center;
}

.card-feature-icon {
  @apply w-16 h-16 mx-auto mb-4 text-primary;
}

.card-feature-title {
  @apply text-xl font-heading font-semibold text-gray-800 mb-3;
}

.card-feature-text {
  @apply text-gray-600 leading-relaxed;
}

/* Testimonial Card */
.card-testimonial {
  @apply card;
}

.card-testimonial-quote {
  @apply text-lg text-gray-700 italic mb-4 leading-relaxed;
}

.card-testimonial-author {
  @apply flex items-center;
}

.card-testimonial-avatar {
  @apply w-12 h-12 rounded-full object-cover mr-3;
}

.card-testimonial-name {
  @apply font-semibold text-gray-800;
}

.card-testimonial-role {
  @apply text-sm text-gray-500;
}
```

### Form Elements

#### Input Fields
```css
.form-group {
  @apply mb-6;
}

.form-label {
  @apply block text-sm font-medium text-gray-700 mb-2;
}

.form-input {
  @apply w-full px-4 py-3 border border-gray-200 rounded-md 
         focus:outline-none focus:ring-2 focus:ring-primary/20 
         focus:border-primary transition-colors duration-200
         placeholder:text-gray-400;
}

.form-input-error {
  @apply form-input border-red-300 focus:ring-red-200 focus:border-red-500;
}

.form-textarea {
  @apply form-input resize-vertical min-h-[120px];
}

.form-select {
  @apply form-input appearance-none bg-white 
         background-image: url("data:image/svg+xml;base64,..."); /* Custom dropdown arrow */
}

.form-error {
  @apply text-sm text-red-600 mt-2;
}

.form-help {
  @apply text-sm text-gray-500 mt-2;
}
```

#### Checkbox & Radio
```css
.form-checkbox {
  @apply w-4 h-4 text-primary border-gray-300 rounded 
         focus:ring-primary/20 focus:ring-2;
}

.form-radio {
  @apply w-4 h-4 text-primary border-gray-300 
         focus:ring-primary/20 focus:ring-2;
}

.form-check-label {
  @apply ml-3 text-sm text-gray-700;
}
```

---

## 🖼️ Section Patterns & Templates

### Hero Section Variants

#### Full-Screen Hero
```html
<section class="hero-fullscreen">
  <div class="hero-background">
    <img src="hero-image.jpg" alt="Hero Background" class="hero-image">
    <div class="hero-overlay"></div>
  </div>
  
  <div class="hero-content">
    <div class="container">
      <div class="hero-text">
        <h1 class="hero-title">Willkommen beim TC 67 Quierschied</h1>
        <p class="hero-subtitle">Seit 1967 Ihr Tennisverein mit Tradition und Leidenschaft</p>
        <div class="hero-actions">
          <a href="/buchung" class="btn-primary-lg">
            <svg class="btn-icon"><!-- Calendar --></svg>
            Platz buchen
          </a>
          <a href="/anlage" class="btn-secondary-outline">Anlage entdecken</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.hero-fullscreen {
  @apply relative min-h-screen flex items-center justify-center overflow-hidden;
}

.hero-background {
  @apply absolute inset-0;
}

.hero-image {
  @apply w-full h-full object-cover object-center;
}

.hero-overlay {
  @apply absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60;
}

.hero-content {
  @apply relative z-10 text-center text-white px-4;
}

.hero-text {
  @apply max-w-4xl mx-auto;
}

.hero-title {
  @apply font-heading font-bold text-4xl md:text-6xl lg:text-7xl 
         leading-tight mb-6 drop-shadow-lg;
}

.hero-subtitle {
  @apply font-body text-lg md:text-xl lg:text-2xl 
         leading-relaxed mb-8 drop-shadow-md;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center items-center;
}
```

#### Split Hero
```html
<section class="hero-split">
  <div class="container">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      
      <div class="hero-content-left">
        <h1 class="hero-title-dark">Tennis spielen in Quierschied</h1>
        <p class="hero-text-dark">Entdecken Sie unsere moderne Anlage mit 6 Sandplätzen, 
           Clubhaus und professionellem Training für alle Altersgruppen.</p>
        <div class="hero-actions-left">
          <a href="/buchung" class="btn-primary">Platz reservieren</a>
          <a href="/kontakt" class="btn-ghost-primary">Mitglied werden</a>
        </div>
      </div>
      
      <div class="hero-image-right">
        <img src="tennis-court.jpg" alt="Tennis Court" class="hero-image-split">
      </div>
      
    </div>
  </div>
</section>
```

```css
.hero-split {
  @apply py-20 lg:py-32;
}

.hero-content-left {
  @apply space-y-6;
}

.hero-title-dark {
  @apply font-heading font-bold text-4xl md:text-5xl lg:text-6xl 
         text-gray-800 leading-tight;
}

.hero-text-dark {
  @apply font-body text-lg md:text-xl text-gray-600 leading-relaxed;
}

.hero-actions-left {
  @apply flex flex-col sm:flex-row gap-4;
}

.hero-image-right {
  @apply relative;
}

.hero-image-split {
  @apply w-full h-full object-cover rounded-2xl shadow-2xl;
}
```

### Content Section Templates

#### Feature Grid Section
```html
<section class="section-features">
  <div class="container">
    
    <div class="section-header">
      <h2 class="section-title">Unsere Angebote</h2>
      <p class="section-subtitle">Alles was Sie für perfektes Tennis brauchen</p>
    </div>
    
    <div class="features-grid">
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg><!-- Tennis Court Icon --></svg>
        </div>
        <h3 class="feature-title">6 Sandplätze</h3>
        <p class="feature-text">Professionelle Sandplätze mit optimaler Bewässerung</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg><!-- Training Icon --></svg>
        </div>
        <h3 class="feature-title">Professionelles Training</h3>
        <p class="feature-text">Qualifizierte Trainer für alle Altersgruppen</p>
      </div>
      
      <div class="feature-card">
        <div class="feature-icon">
          <svg><!-- Calendar Icon --></svg>
        </div>
        <h3 class="feature-title">Online Buchung</h3>
        <p class="feature-text">Einfache Platzreservierung rund um die Uhr</p>
      </div>
      
    </div>
    
  </div>
</section>
```

```css
.section-features {
  @apply py-16 lg:py-24 bg-gray-50;
}

.section-header {
  @apply text-center mb-16;
}

.section-title {
  @apply font-heading font-bold text-3xl md:text-4xl text-gray-800 mb-4;
}

.section-subtitle {
  @apply font-body text-lg md:text-xl text-gray-600 max-w-3xl mx-auto;
}

.features-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

.feature-card {
  @apply bg-white p-8 rounded-xl shadow-md hover:shadow-lg 
         transition-all duration-300 text-center group;
}

.feature-icon {
  @apply w-16 h-16 mx-auto mb-6 text-primary group-hover:scale-110 
         transition-transform duration-300;
}

.feature-title {
  @apply font-heading font-semibold text-xl text-gray-800 mb-3;
}

.feature-text {
  @apply font-body text-gray-600 leading-relaxed;
}
```

#### Stats Section
```html
<section class="section-stats">
  <div class="container">
    <div class="stats-grid">
      
      <div class="stat-item">
        <div class="stat-number">57</div>
        <div class="stat-label">Jahre Tradition</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-number">300+</div>
        <div class="stat-label">Aktive Mitglieder</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-number">6</div>
        <div class="stat-label">Sandplätze</div>
      </div>
      
      <div class="stat-item">
        <div class="stat-number">12</div>
        <div class="stat-label">Trainer</div>
      </div>
      
    </div>
  </div>
</section>
```

```css
.section-stats {
  @apply py-16 lg:py-20 bg-primary;
}

.stats-grid {
  @apply grid grid-cols-2 lg:grid-cols-4 gap-8 text-center;
}

.stat-item {
  @apply text-white;
}

.stat-number {
  @apply font-heading font-bold text-4xl md:text-5xl mb-2;
}

.stat-label {
  @apply font-body text-lg md:text-xl opacity-90;
}
```

### News & Events Section
```html
<section class="section-news">
  <div class="container">
    
    <div class="section-header">
      <h2 class="section-title">Aktuelle News & Events</h2>
      <p class="section-subtitle">Bleiben Sie über alle Aktivitäten informiert</p>
    </div>
    
    <div class="news-grid">
      
      <article class="news-card-featured">
        <div class="news-image-wrapper">
          <img src="news-featured.jpg" alt="Featured News" class="news-image">
          <div class="news-category">Turnier</div>
        </div>
        <div class="news-content">
          <div class="news-meta">
            <span class="news-date">15. März 2024</span>
          </div>
          <h3 class="news-title">Frühjahrsturnier 2024</h3>
          <p class="news-excerpt">Das große Frühjahrsturnier steht vor der Tür...</p>
          <a href="/news/fruehjahrsturnier-2024" class="news-link">Weiterlesen</a>
        </div>
      </article>
      
      <div class="news-sidebar">
        
        <article class="news-card-small">
          <div class="news-content-small">
            <div class="news-meta-small">10. März 2024</div>
            <h4 class="news-title-small">Saisonstart verschoben</h4>
            <a href="/news/saisonstart" class="news-link-small">Lesen</a>
          </div>
        </article>
        
        <article class="news-card-small">
          <div class="news-content-small">
            <div class="news-meta-small">5. März 2024</div>
            <h4 class="news-title-small">Neue Trainingszeiten</h4>
            <a href="/news/trainingszeiten" class="news-link-small">Lesen</a>
          </div>
        </article>
        
      </div>
      
    </div>
    
    <div class="section-footer">
      <a href="/news" class="btn-secondary">Alle News anzeigen</a>
    </div>
    
  </div>
</section>
```

```css
.section-news {
  @apply py-16 lg:py-24;
}

.news-grid {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12;
}

.news-card-featured {
  @apply lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden
         hover:shadow-lg transition-shadow duration-300;
}

.news-image-wrapper {
  @apply relative;
}

.news-image {
  @apply w-full h-64 object-cover;
}

.news-category {
  @apply absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium;
}

.news-content {
  @apply p-6;
}

.news-meta {
  @apply mb-3;
}

.news-date {
  @apply text-sm text-gray-500;
}

.news-title {
  @apply font-heading font-semibold text-2xl text-gray-800 mb-3;
}

.news-excerpt {
  @apply text-gray-600 mb-4 leading-relaxed;
}

.news-link {
  @apply text-primary hover:text-secondary font-medium transition-colors 
         duration-200 flex items-center;
}

.news-sidebar {
  @apply space-y-6;
}

.news-card-small {
  @apply bg-white p-6 rounded-xl shadow-md hover:shadow-lg 
         transition-shadow duration-300;
}

.news-meta-small {
  @apply text-xs text-gray-500 mb-2;
}

.news-title-small {
  @apply font-heading font-medium text-lg text-gray-800 mb-3;
}

.news-link-small {
  @apply text-primary hover:text-secondary text-sm font-medium;
}

.section-footer {
  @apply text-center;
}
```

---

## 🎨 Icon System & Visual Elements

### Icon Categories

#### Navigation Icons
```html
<!-- Home -->
<svg class="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
</svg>

<!-- News -->
<svg class="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
</svg>

<!-- Building/Facility -->
<svg class="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
</svg>

<!-- Users/Sponsors -->
<svg class="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
</svg>

<!-- Contact/Mail -->
<svg class="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
</svg>

<!-- Calendar -->
<svg class="icon-nav" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
</svg>
```

#### Feature Icons
```html
<!-- Tennis Court -->
<svg class="icon-feature" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
  <line x1="12" y1="3" x2="12" y2="21"/>
  <line x1="3" y1="9" x2="21" y2="9"/>
  <line x1="3" y1="15" x2="21" y2="15"/>
</svg>

<!-- Trophy -->
<svg class="icon-feature" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
</svg>

<!-- Training/Education -->
<svg class="icon-feature" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
</svg>
```

### Icon Usage Guidelines
```css
/* Icon Size Classes */
.icon-xs  { @apply w-3 h-3; }   /* 12px - Tiny indicators */
.icon-sm  { @apply w-4 h-4; }   /* 16px - Buttons, small UI */
.icon-md  { @apply w-5 h-5; }   /* 20px - Navigation, cards */
.icon-lg  { @apply w-6 h-6; }   /* 24px - Headers, prominent UI */
.icon-xl  { @apply w-8 h-8; }   /* 32px - Feature icons */
.icon-2xl { @apply w-12 h-12; } /* 48px - Large feature icons */
.icon-3xl { @apply w-16 h-16; } /* 64px - Hero icons */

/* Icon Context Classes */
.icon-nav     { @apply icon-md text-gray-600; }
.icon-button  { @apply icon-sm text-current; }
.icon-feature { @apply icon-2xl text-primary; }
.icon-social  { @apply icon-lg text-gray-400 hover:text-primary; }

/* Icon States */
.icon-interactive {
  @apply transition-all duration-200 hover:scale-110;
}

.icon-loading {
  @apply animate-spin;
}
```

---

## ✨ Animation & Interactions

### Scroll Animations (AOS Library)
```html
<!-- Fade Animations -->
<div data-aos="fade-up" data-aos-duration="800">Content</div>
<div data-aos="fade-down" data-aos-duration="600">Content</div>
<div data-aos="fade-left" data-aos-duration="700">Content</div>
<div data-aos="fade-right" data-aos-duration="700">Content</div>

<!-- Slide Animations -->
<div data-aos="slide-up" data-aos-duration="800">Content</div>
<div data-aos="slide-down" data-aos-duration="600">Content</div>

<!-- Zoom Animations -->
<div data-aos="zoom-in" data-aos-duration="600">Content</div>
<div data-aos="zoom-out" data-aos-duration="700">Content</div>

<!-- Custom Delays -->
<div data-aos="fade-up" data-aos-delay="100">Item 1</div>
<div data-aos="fade-up" data-aos-delay="200">Item 2</div>
<div data-aos="fade-up" data-aos-delay="300">Item 3</div>
```

### Custom CSS Animations
```css
/* Hover Animations */
.hover-lift {
  @apply transition-all duration-300 hover:-translate-y-2 hover:shadow-xl;
}

.hover-scale {
  @apply transition-transform duration-300 hover:scale-105;
}

.hover-glow {
  @apply transition-all duration-300 hover:shadow-lg hover:shadow-primary/25;
}

/* Loading Animations */
@keyframes pulse-primary {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.pulse-primary {
  animation: pulse-primary 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(-50px);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.bounce-in {
  animation: bounce-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* Stagger Animations */
.stagger-children > * {
  opacity: 0;
  transform: translateY(20px);
  animation: stagger-fade-in 0.6s ease-out forwards;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
.stagger-children > *:nth-child(4) { animation-delay: 0.4s; }
.stagger-children > *:nth-child(5) { animation-delay: 0.5s; }

@keyframes stagger-fade-in {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Interaction States
```css
/* Button Interactions */
.btn-interactive {
  @apply transition-all duration-300 transform active:scale-95;
}

.btn-interactive:hover {
  @apply shadow-lg shadow-primary/25;
}

/* Card Interactions */
.card-interactive {
  @apply transition-all duration-300 hover:-translate-y-1 hover:shadow-xl;
}

.card-interactive:hover .card-image {
  @apply scale-105;
}

/* Link Interactions */
.link-interactive {
  @apply relative transition-colors duration-300;
}

.link-interactive::after {
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300;
  content: '';
}

.link-interactive:hover::after {
  @apply w-full;
}

/* Focus States */
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2;
}

.focus-ring-inset {
  @apply focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-inset;
}
```

---

## 📱 Mobile Navigation

### Mobile Menu Structure
Das mobile Menü wird dynamisch via JavaScript erstellt:

```javascript
// Mobile Menu Panel (automatisch generiert)
<div id="mobile-menu-panel" class="mobile-panel">
  <div class="flex flex-col space-y-1.5">
    
    <!-- Standard Menu Links -->
    <a href="#" class="mobile-link">
      <svg class="w-5 h-5 mr-3 opacity-70"><!-- Icon --></svg>
      Link Text
    </a>
    
    <!-- CTA Button (Platz buchen) -->
    <a href="pages/buchung.html" class="mobile-cta">
      <svg class="w-4 h-4 mr-2"><!-- Kalender Icon --></svg>
      Platz buchen
    </a>
    
  </div>
</div>

<!-- Overlay (automatisch generiert) -->
<div id="mobile-menu-overlay" class="mobile-overlay"></div>
```

### Mobile Styles
```css
/* Mobile Panel */
.mobile-panel {
  @apply md:hidden absolute left-0 right-0 mx-4 bg-white rounded-2xl 
         shadow-2xl border border-gray-100 px-3 pt-3 pb-4 z-50;
  top: calc(100% + 12px); /* 12px Abstand zur Navbar */
}

/* Mobile Links */
.mobile-link {
  @apply font-heading font-medium px-4 py-3 text-dark hover:bg-primary 
         hover:text-white rounded-md transition-all duration-200 flex items-center;
}

/* Mobile CTA */
.mobile-cta {
  @apply font-semibold px-4 py-3 bg-primary hover:bg-secondary text-white 
         rounded-md transition-all duration-200 flex items-center shadow-md;
}

/* Mobile Overlay */
.mobile-overlay {
  @apply fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40;
}
```

---

## 🖼️ Section Patterns

### Hero Section
```html
<section class="hero-section">
  <div class="hero-background">
    <img src="hero-image.jpg" alt="Hero" class="hero-image">
    <div class="hero-overlay"></div>
  </div>
  
  <div class="hero-content">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="hero-text">
        <h1 class="hero-title">Hauptüberschrift</h1>
        <p class="hero-subtitle">Untertitel oder Beschreibung</p>
        <div class="hero-actions">
          <a href="#" class="btn-primary">Primärer CTA</a>
          <a href="#" class="btn-secondary">Sekundärer CTA</a>
        </div>
      </div>
    </div>
  </div>
</section>
```

```css
.hero-section {
  @apply relative min-h-screen flex items-center justify-center overflow-hidden;
}

.hero-background {
  @apply absolute inset-0;
}

.hero-image {
  @apply w-full h-full object-cover;
}

.hero-overlay {
  @apply absolute inset-0 bg-black/40;
}

.hero-content {
  @apply relative z-10 text-center text-white;
}

.hero-title {
  @apply text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight;
}

.hero-subtitle {
  @apply text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed;
}

.hero-actions {
  @apply flex flex-col sm:flex-row gap-4 justify-center;
}
```

### Content Section
```html
<section class="content-section">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Section Header -->
    <div class="section-header">
      <h2 class="section-title">Section Title</h2>
      <p class="section-subtitle">Optional subtitle</p>
    </div>
    
    <!-- Section Content -->
    <div class="section-content">
      <!-- Grid Layout für Cards/Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Content Items -->
      </div>
    </div>
    
  </div>
</section>
```

```css
.content-section {
  @apply py-16 lg:py-24;
}

.section-header {
  @apply text-center mb-12;
}

.section-title {
  @apply text-3xl md:text-4xl font-heading font-bold text-dark mb-4;
}

.section-subtitle {
  @apply text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed;
}
```

---

## 🏃‍♂️ Animation System

### Scroll Animations (AOS)
```html
<!-- Fade In -->
<div data-aos="fade-up" data-aos-duration="800">Content</div>

<!-- Slide In -->
<div data-aos="slide-left" data-aos-duration="600">Content</div>

<!-- Zoom In -->
<div data-aos="zoom-in" data-aos-duration="700">Content</div>
```

### CSS Transitions
```css
/* Standard Transitions */
.transition-smooth {
  @apply transition-all duration-300 ease-in-out;
}

.transition-fast {
  @apply transition-all duration-200 ease-in-out;
}

.transition-slow {
  @apply transition-all duration-500 ease-in-out;
}
```

---

## 📋 Footer Structure

```html
<footer class="footer">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    
    <!-- Footer Main -->
    <div class="footer-main">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <!-- Logo Column -->
        <div class="footer-brand">
          <div class="footer-logo">
            <svg class="h-10 w-auto text-primary"><!-- Logo --></svg>
            <div class="ml-3">
              <h3 class="footer-brand-title">TC 67 Quierschied</h3>
              <p class="footer-brand-subtitle">Tennisclub mit Tradition</p>
            </div>
          </div>
        </div>
        
        <!-- Navigation Columns -->
        <div class="footer-links">
          <h4 class="footer-heading">Navigation</h4>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Link</a></li>
          </ul>
        </div>
        
      </div>
    </div>
    
    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="footer-copyright">
        <p>&copy; 2024 TC 67 Quierschied. Alle Rechte vorbehalten.</p>
      </div>
    </div>
    
  </div>
</footer>
```

```css
.footer {
  @apply bg-gray-900 text-white;
}

.footer-main {
  @apply py-12;
}

.footer-brand-title {
  @apply text-lg font-bold;
}

.footer-brand-subtitle {
  @apply text-gray-400 text-sm;
}

.footer-heading {
  @apply text-lg font-semibold mb-4;
}

.footer-link {
  @apply text-gray-400 hover:text-white transition-colors duration-200;
}

.footer-bottom {
  @apply border-t border-gray-800 py-6;
}

.footer-copyright {
  @apply text-center text-gray-400 text-sm;
}
```

---

## 📐 Icon System

### Icon Größen
```css
.icon-sm { @apply w-4 h-4; }    /* 16px */
.icon-md { @apply w-5 h-5; }    /* 20px */
.icon-lg { @apply w-6 h-6; }    /* 24px */
.icon-xl { @apply w-8 h-8; }    /* 32px */
```

### Standard Icons
- **Home**: Haus-Icon für Navigation
- **News**: Zeitungs-Icon für News/Events
- **Anlage**: Gebäude-Icon für Facility-Info
- **Sponsoren**: Personen-Icon für Partner
- **Kontakt**: Mail-Icon für Kontakt
- **Kalender**: Für Buchungs-CTAs
- **Pfeil**: Für Links und Navigation

---

## 🎯 Usage Guidelines

### Neue Seite erstellen:

1. **Header kopieren** von index.html (Zeilen 1-80)
2. **Footer kopieren** von index.html (letzte ~50 Zeilen)
3. **Hero Section** anpassen mit eigenem Content
4. **Content Sections** mit Grid-Layouts hinzufügen
5. **Mobile Menu** in HTML einbauen (wird automatisch von JS verwaltet)

### Wichtige Regeln:

- ✅ **Immer** `container mx-auto px-4 sm:px-6 lg:px-8` für Content-Breite
- ✅ **Immer** `py-16 lg:py-24` für Section-Abstände
- ✅ **Primärfarbe** nur für wichtige CTAs und Akzente
- ✅ **Konsistente** Schriftgrößen und Abstände
- ✅ **Mobile-first** Approach bei allen Komponenten
- ❌ **Niemals** feste Pixel-Werte außerhalb von Tailwind
- ❌ **Niemals** Custom CSS ohne Tailwind-Klassen

---

## 📱 Responsive Design Guidelines

### Mobile-First Breakpoint Strategy
```css
/* Breakpoint Scale */
/* xs: 0px - 639px    (Mobile Portrait) */
/* sm: 640px - 767px  (Mobile Landscape / Small Tablet) */
/* md: 768px - 1023px (Tablet Portrait) */
/* lg: 1024px - 1279px (Tablet Landscape / Small Desktop) */
/* xl: 1280px - 1535px (Desktop) */
/* 2xl: 1536px+        (Large Desktop) */

/* Responsive Typography Scale */
.text-responsive-hero {
  @apply text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl;
}

.text-responsive-heading {
  @apply text-2xl sm:text-3xl md:text-4xl lg:text-5xl;
}

.text-responsive-subheading {
  @apply text-xl sm:text-2xl md:text-3xl;
}

.text-responsive-body {
  @apply text-base sm:text-lg md:text-xl;
}

/* Responsive Spacing */
.spacing-responsive-section {
  @apply py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32;
}

.spacing-responsive-element {
  @apply p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12;
}

/* Responsive Grid Patterns */
.grid-responsive-cards {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}

.grid-responsive-features {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
}

.grid-responsive-content {
  @apply grid grid-cols-1 lg:grid-cols-2;
}
```

### Touch & Mobile Interactions
```css
/* Touch Target Sizing */
.touch-target {
  @apply min-h-[44px] min-w-[44px]; /* iOS/Android minimum */
}

.touch-target-large {
  @apply min-h-[48px] min-w-[48px]; /* Comfortable size */
}

/* Mobile-Specific Styles */
@media (max-width: 767px) {
  .mobile-full-width {
    @apply w-full;
  }
  
  .mobile-center {
    @apply text-center;
  }
  
  .mobile-stack {
    @apply flex-col space-y-4 space-x-0;
  }
  
  .mobile-hide {
    @apply hidden;
  }
  
  .mobile-show {
    @apply block;
  }
}

/* Desktop-Specific Styles */
@media (min-width: 768px) {
  .desktop-hide {
    @apply hidden;
  }
  
  .desktop-show {
    @apply block;
  }
}
```

---

## 🔍 SEO & Performance Standards

### Meta Tags Template
```html
<!-- Essential Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="TC 67 Quierschied - Ihr Tennisverein mit Tradition seit 1967. 6 Sandplätze, professionelles Training und moderne Anlage in Quierschied.">
<meta name="keywords" content="Tennis, Tennisverein, Quierschied, Sandplätze, Training, Mitgliedschaft">

<!-- Open Graph Tags -->
<meta property="og:title" content="TC 67 Quierschied - Tennisverein mit Tradition">
<meta property="og:description" content="Entdecken Sie unseren traditionsreichen Tennisverein mit 6 Sandplätzen und professionellem Training für alle Altersgruppen.">
<meta property="og:image" content="/img/og-image.jpg">
<meta property="og:url" content="https://tc67-quierschied.de">
<meta property="og:type" content="website">

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="TC 67 Quierschied - Tennisverein mit Tradition">
<meta name="twitter:description" content="Entdecken Sie unseren traditionsreichen Tennisverein mit 6 Sandplätzen und professionellem Training.">
<meta name="twitter:image" content="/img/twitter-image.jpg">

<!-- Favicon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
```

### Performance Guidelines
```html
<!-- Critical CSS Inline -->
<style>
  /* Critical above-the-fold styles here */
  .header-main { /* ... */ }
  .hero-section { /* ... */ }
</style>

<!-- Preload Important Resources -->
<link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/fonts/roboto.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/img/hero-tennis.jpg" as="image">

<!-- Lazy Loading Images -->
<img src="/img/placeholder.jpg" 
     data-src="/img/actual-image.jpg" 
     alt="Description" 
     class="lazy-load">

<!-- Optimized Script Loading -->
<script src="/js/critical.js"></script>
<script src="/js/main.js" defer></script>
<script src="/js/analytics.js" async></script>
```

---

## ♿ Accessibility Standards

### ARIA Labels & Roles
```html
<!-- Navigation -->
<nav role="navigation" aria-label="Hauptnavigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/news">News</a></li>
  </ul>
</nav>

<!-- Buttons -->
<button aria-label="Menü öffnen" aria-expanded="false" aria-controls="mobile-menu">
  <svg aria-hidden="true"><!-- Icon --></svg>
</button>

<!-- Forms -->
<label for="email">E-Mail-Adresse *</label>
<input type="email" id="email" name="email" required aria-describedby="email-help">
<div id="email-help">Wir verwenden Ihre E-Mail nur für wichtige Vereinsmitteilungen</div>

<!-- Images -->
<img src="tennis-court.jpg" alt="Sandplatz mit Netz des TC 67 Quierschied">

<!-- Skip Link -->
<a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
```

### Accessibility CSS
```css
/* Skip Link */
.skip-link {
  @apply absolute top-0 left-0 bg-primary text-white px-4 py-2 
         transform -translate-y-full focus:translate-y-0 z-50;
}

/* Focus States */
.focus-visible {
  @apply focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50;
}

/* High Contrast Support */
@media (prefers-contrast: high) {
  .text-gray-600 {
    @apply text-gray-800;
  }
  
  .border-gray-200 {
    @apply border-gray-400;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Screen Reader Only */
.sr-only {
  @apply absolute w-px h-px p-0 -m-px overflow-hidden 
         whitespace-nowrap border-0;
}
```

---

## 📋 Content Guidelines

### Writing Style
- **Ton**: Freundlich, professionell, einladend
- **Sprache**: Klares Deutsch, keine Fachbegriffe ohne Erklärung
- **Anrede**: Sie (formal) in offiziellen Bereichen, Du (informal) in Community-Bereichen
- **Länge**: Kurze, prägnante Sätze; max. 20 Wörter pro Satz

### Content Struktur
```html
<!-- Überschriften-Hierarchie -->
<h1>Seitentitel (nur einmal pro Seite)</h1>
<h2>Hauptabschnitt</h2>
<h3>Unterabschnitt</h3>
<h4>Detail-Überschrift</h4>

<!-- Call-to-Action Formulierungen -->
"Platz jetzt buchen"           <!-- Direkt, actionable -->
"Jetzt Mitglied werden"        <!-- Urgency + Benefit -->
"Kostenlos testen"             <!-- Value proposition -->
"Mehr erfahren"                <!-- Soft CTA -->
```

### Image Guidelines
```html
<!-- Optimale Bildgrößen -->
Hero Images:     1920x1080px (16:9)
Card Images:     800x600px   (4:3)
Gallery Images:  1200x800px  (3:2)
Profile Images:  400x400px   (1:1)

<!-- Alt-Text Beispiele -->
<img src="tennis-court.jpg" 
     alt="Sandplatz 1 des TC 67 Quierschied mit grünem Netz und Windschutz">

<img src="member-training.jpg" 
     alt="Trainer erklärt Vorhand-Technik einer Jugendgruppe auf dem Tennisplatz">

<!-- Lazy Loading -->
<img src="placeholder.jpg" 
     data-src="actual-image.jpg" 
     alt="Description" 
     class="lazy-load">
```

---

## 💻 Code Standards & Best Practices

### HTML Structure
```html
<!DOCTYPE html>
<html lang="de">
<head>
  <!-- Meta Tags -->
  <!-- Stylesheets -->
  <!-- Preloads -->
</head>
<body class="font-body bg-gray-50">
  
  <!-- Skip Link -->
  <a href="#main-content" class="skip-link">Zum Hauptinhalt springen</a>
  
  <!-- Header -->
  <header class="header-main">
    <!-- Navigation -->
  </header>
  
  <!-- Main Content -->
  <main id="main-content">
    <!-- Page Content -->
  </main>
  
  <!-- Footer -->
  <footer class="footer-main">
    <!-- Footer Content -->
  </footer>
  
  <!-- Scripts -->
  <script src="/js/main.js" defer></script>
</body>
</html>
```

### CSS Architecture
```css
/* 1. Tailwind Base */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 2. Custom Components */
@layer components {
  .btn-primary {
    @apply bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 
           rounded-md transition-all duration-300 shadow hover:shadow-lg;
  }
}

/* 3. Custom Utilities */
@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
}

/* 4. Custom Animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### JavaScript Standards
```javascript
// Modern ES6+ Syntax
document.addEventListener('DOMContentLoaded', () => {
  // DOM Ready Code
  initMobileMenu();
  initScrollAnimations();
});

// Error Handling
const initMobileMenu = () => {
  try {
    const menuButton = document.getElementById('mobile-menu-button');
    if (!menuButton) {
      console.warn('Mobile menu button not found');
      return;
    }
    // Menu logic
  } catch (error) {
    console.error('Mobile menu initialization failed:', error);
  }
};

// Performance Optimization
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
```

---

## 📚 Usage Examples & Templates

### Neue Seite erstellen
```html
<!-- 1. Header kopieren -->
<!-- 2. Basis-Template verwenden -->
<main id="main-content">
  
  <!-- Hero Section -->
  <section class="hero-split">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        <div class="hero-content-left">
          <h1 class="hero-title-dark">Seitentitel</h1>
          <p class="hero-text-dark">Beschreibung</p>
          <div class="hero-actions-left">
            <a href="#" class="btn-primary">Hauptaktion</a>
          </div>
        </div>
        <div class="hero-image-right">
          <img src="hero-image.jpg" alt="Alt Text" class="hero-image-split">
        </div>
      </div>
    </div>
  </section>
  
  <!-- Content Sections -->
  <section class="section-features">
    <!-- Section Content -->
  </section>
  
</main>
<!-- 3. Footer kopieren -->
```

### Komponenten verwenden
```html
<!-- Button Gruppe -->
<div class="btn-group-center">
  <a href="/buchung" class="btn-primary">
    <svg class="btn-icon"><!-- Calendar --></svg>
    Platz buchen
  </a>
  <a href="/kontakt" class="btn-secondary">Kontakt</a>
</div>

<!-- Card Grid -->
<div class="features-grid">
  <div class="feature-card">
    <div class="feature-icon">
      <svg><!-- Icon --></svg>
    </div>
    <h3 class="feature-title">Titel</h3>
    <p class="feature-text">Beschreibung</p>
  </div>
</div>

<!-- Form -->
<form class="space-y-6">
  <div class="form-group">
    <label for="name" class="form-label">Name *</label>
    <input type="text" id="name" class="form-input" required>
  </div>
  <button type="submit" class="btn-primary w-full">Absenden</button>
</form>
```

---

## 🏷️ VereinsWeb Attribution

### Übersicht
Die VereinsWeb-Attribution ist eine professionelle, designorientierte Box, die auf allen Seiten im Footer-Bereich unter den Social Media Icons platziert wird. Sie dient als Qualitätssiegel und Verweis auf die Website-Erstellung.

### Design-Prinzipien
- **Premium-Erscheinung**: Hochwertige Gradient-Effekte und Hover-Animationen
- **Markenkonform**: Nutzt die gleichen Farben wie das Haupt-Design (Primary/Secondary)
- **Diskret aber sichtbar**: Auffällig genug als Qualitätsmerkmal, aber nicht störend
- **Interaktiv**: Vollständig klickbar mit External-Link-Indikator

### Positionierung
- **Location**: Footer-Bereich, Club Info Sektion
- **Platzierung**: Direkt unter den Social Media Icons
- **Spacing**: `mt-4` (16px Abstand nach oben)
- **Breite**: Maximal `max-w-xs` (320px) für optimale Proportionen

### Technische Spezifikationen

#### HTML-Struktur
```html
<!-- VereinsWeb Attribution Box -->
<div class="relative bg-gradient-to-br from-primary via-secondary to-primary/80 rounded-xl p-4 mt-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 max-w-xs">
    <!-- Glanz-Effekt -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-xl"></div>
    
    <div class="relative z-10">
        <p class="text-sm text-white/70 font-medium tracking-wide uppercase mb-2">Website erstellt von</p>
        <a href="https://vereins-web.de" target="_blank" class="group block hover:scale-105 transition-transform duration-200">
            <span class="text-white font-bold text-xl tracking-tight">Vereins</span><span class="text-yellow-200 font-bold text-2xl">Web</span>
            <svg class="inline w-4 h-4 ml-1 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
        </a>
    </div>
</div>
```

#### CSS-Klassen Breakdown

**Container-Klassen:**
```css
/* Hauptcontainer */
.relative                    /* Positionierung für absolute Elemente */
.bg-gradient-to-br          /* Diagonaler Gradient */
.from-primary               /* Gradient-Start: Orange (#FF6B35) */
.via-secondary              /* Gradient-Mitte: Helleres Orange (#FF8C42) */
.to-primary/80              /* Gradient-Ende: Orange mit 80% Opazität */
.rounded-xl                 /* 12px border-radius */
.p-4                        /* 16px padding */
.mt-4                       /* 16px margin-top */
.shadow-lg                  /* Große Schatten */
.hover:shadow-xl            /* Extra große Schatten bei Hover */
.transition-all             /* Alle Eigenschaften animieren */
.duration-300               /* 300ms Animationsdauer */
.border                     /* Border aktivieren */
.border-white/10            /* Weißer Rand mit 10% Opazität */
.max-w-xs                   /* Maximale Breite: 320px */
```

**Glanz-Effekt:**
```css
/* Overlay für Glanz-Effekt */
.absolute                   /* Absolute Positionierung */
.inset-0                    /* Füllt kompletten Container */
.bg-gradient-to-r           /* Horizontaler Gradient */
.from-transparent           /* Start: Transparent */
.via-white/10               /* Mitte: Weiß mit 10% Opazität */
.to-transparent             /* Ende: Transparent */
.rounded-xl                 /* Gleiche border-radius wie Container */
```

**Content-Styling:**
```css
/* Content Container */
.relative                   /* Über Glanz-Effekt positionieren */
.z-10                       /* Z-index für Layering */

/* Label Text */
.text-sm                    /* 14px Schriftgröße */
.text-white/70              /* Weiß mit 70% Opazität */
.font-medium                /* 500 font-weight */
.tracking-wide              /* Erweiterte Buchstabenabstände */
.uppercase                  /* Großbuchstaben */
.mb-2                       /* 8px margin-bottom */

/* Link Container */
.group                      /* Für Gruppen-Hover-Effekte */
.block                      /* Block-Element */
.hover:scale-105            /* 5% Vergrößerung bei Hover */
.transition-transform       /* Transform-Animationen */
.duration-200               /* 200ms Animationsdauer */

/* Markenname "Vereins" */
.text-white                 /* Weiße Schrift */
.font-bold                  /* 700 font-weight */
.text-xl                    /* 20px Schriftgröße */
.tracking-tight             /* Engere Buchstabenabstände */

/* Markenname "Web" */
.text-yellow-200            /* Helles Gelb (#FEF08A) */
.font-bold                  /* 700 font-weight */
.text-2xl                   /* 24px Schriftgröße */

/* External Link Icon */
.inline                     /* Inline-Element */
.w-4                        /* 16px Breite */
.h-4                        /* 16px Höhe */
.ml-1                       /* 4px margin-left */
.text-white/70              /* Weiß mit 70% Opazität */
.group-hover:text-white     /* Voll weiß bei Link-Hover */
.group-hover:translate-x-1  /* 4px nach rechts bei Hover */
.transition-all             /* Alle Eigenschaften animieren */
.duration-200               /* 200ms Animationsdauer */
```

### Design-Details

#### Farb-Hierarchie
1. **Hauptgradient**: Primary → Secondary → Primary/80
2. **Text-Primär**: Weiß (100% für Marke, 70% für Label)
3. **Akzent**: Gelb-200 für "Web" 
4. **Rahmen**: Weiß/10% für subtile Abgrenzung

#### Typografie-System
- **Label**: Small (14px), Medium Weight, Uppercase, Wide Tracking
- **"Vereins"**: XL (20px), Bold, Tight Tracking
- **"Web"**: 2XL (24px), Bold, Gelb-Akzent
- **Icon**: 16px, proportional zum Text

#### Hover-Interaktionen
1. **Container**: Schatten verstärkt sich (lg → xl)
2. **Link**: Skaliert auf 105% (scale-105)
3. **Icon**: Färbt sich vollweiß und bewegt sich 4px nach rechts
4. **Timing**: Gestaffelte Animationen (200ms/300ms)

#### Responsive Verhalten
- **Alle Breakpoints**: Konsistente Darstellung
- **Mobile**: Volle Funktionalität erhalten
- **Touch**: Hover-Effekte für Touch-Geräte optimiert

### Implementierungs-Guidelines

#### Platzierung-Regeln
```html
<!-- Korrekte Positionierung im Footer -->
<div class="flex space-x-4">
    <!-- Social Media Icons -->
    <a href="#" class="text-white hover:text-secondary transition">
        <!-- Facebook SVG -->
    </a>
    <a href="#" class="text-white hover:text-secondary transition">
        <!-- Instagram SVG -->
    </a>
</div>

<!-- VereinsWeb Box NACH Social Media Icons -->
<div class="relative bg-gradient-to-br from-primary via-secondary to-primary/80...">
    <!-- VereinsWeb Content -->
</div>
```

#### Technische Anforderungen
- **External Link**: `target="_blank"` für neue Tab-Öffnung
- **URL**: Genau `https://vereins-web.de` (keine Trailing Slashes)
- **Accessibility**: Vollständige Link-Beschreibung über Text-Content
- **SEO**: External Link ohne `rel="nofollow"` für SEO-Benefit

#### Qualitätskontrolle
- ✅ **Konsistenz**: Identisch auf allen Seiten (index.html, anlage.html, news.html, sponsoren.html)
- ✅ **Interaktivität**: Alle Hover-Effekte funktional
- ✅ **Performance**: Keine zusätzlichen Assets erforderlich
- ✅ **Accessibility**: Screen-Reader kompatibel
- ✅ **Cross-Browser**: Funktioniert in allen modernen Browsern

### Varianten & Anpassungen

#### Standard-Variante (Aktuell verwendet)
- Vollständiger Gradient-Hintergrund
- Glanz-Overlay-Effekt
- Zwei-Farben-Typografie (Weiß/Gelb)
- External-Link-Icon

#### Alternative für spezielle Layouts
```html
<!-- Kompakte Variante (falls benötigt) -->
<div class="bg-primary/20 rounded-lg p-3 border border-primary/30">
    <p class="text-xs text-white/60 mb-1">Website von</p>
    <a href="https://vereins-web.de" target="_blank" class="text-primary font-bold">
        VereinsWeb
    </a>
</div>
```

### Wartung & Updates
- **Keine Änderungen** an der Box ohne Rücksprache
- **URL bleibt konstant**: `https://vereins-web.de`
- **Design-Updates** nur bei größeren Website-Redesigns
- **Testing**: Nach Updates auf allen Seiten überprüfen

---

## 🔧 Development Checklist

### Pre-Launch Checklist

#### ✅ Design & Layout
- [ ] Responsive Design getestet (Mobile, Tablet, Desktop)
- [ ] Cross-Browser Kompatibilität (Chrome, Firefox, Safari, Edge)
- [ ] Print-Styles implementiert
- [ ] Dark Mode Support (optional)

#### ✅ Performance
- [ ] Bilder optimiert (WebP Format wenn möglich)
- [ ] CSS/JS minifiziert
- [ ] Lazy Loading implementiert
- [ ] Core Web Vitals getestet
- [ ] Lighthouse Score > 90

#### ✅ SEO
- [ ] Meta Tags vollständig
- [ ] Structured Data implementiert
- [ ] Sitemap erstellt
- [ ] robots.txt konfiguriert
- [ ] Alt-Texte für alle Bilder

#### ✅ Accessibility
- [ ] WCAG 2.1 AA konform
- [ ] Keyboard Navigation funktional
- [ ] Screen Reader getestet
- [ ] Color Contrast > 4.5:1
- [ ] Focus States sichtbar

#### ✅ Content
- [ ] Rechtschreibung geprüft
- [ ] Links funktional
- [ ] Kontaktdaten aktuell
- [ ] Impressum und Datenschutz

---

**🎾 Mit diesem umfassenden Style Guide können Sie konsistente, professionelle und benutzerfreundliche Seiten für TC 67 Quierschied erstellen. Jede Komponente ist durchdacht, getestet und optimiert für beste Performance und Accessibility.**

---

*Style Guide Version 2.1 - Letzte Aktualisierung: August 2025*
*Erstellt für TC 67 Quierschied by VereinsWeb*
