# 🚀 Luxury Distribution Website - Setup Guide

Your complete Next.js luxury website is ready! All files have been created.

## 📁 Project Structure

```
my-website/
├── app/
│   ├── globals.css          # Global styles with luxury theme
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page integrating all sections
├── components/
│   ├── About.tsx             # About section with image & content
│   ├── Contact.tsx           # Contact section with WhatsApp, map
│   ├── Footer.tsx            # Footer with newsletter & links
│   ├── Hero.tsx              # Full-screen hero section
│   ├── Navigation.tsx        # Sticky navigation with mobile menu
│   ├── Products.tsx          # Product grid with hover effects
│   ├── TrustBrands.tsx       # Brand logos with stats
│   └── WhyChooseUs.tsx       # Benefits section with icons
├── tailwind.config.ts        # Tailwind configuration with luxury colors
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies

```

## ⚡ Quick Start

### 1. Install Dependencies

```bash
npm install
```

**Note:** If you encounter peer dependency issues, use:
```bash
npm install --legacy-peer-deps
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Update Contact Information

Edit `components/Contact.tsx`:

```typescript
// Line 34: WhatsApp link
href="https://wa.me/YOUR_PHONE_NUMBER"

// Line 45: Phone number display
<p className="text-sm text-luxury-gray-dark">YOUR_PHONE</p>

// Line 59: Email
href="mailto:YOUR_EMAIL"

// Line 89: Google Maps embed
src="YOUR_GOOGLE_MAPS_EMBED_URL"

// Line 113: Address
<p className="mt-1 text-sm text-luxury-gray-dark">YOUR_ADDRESS</p>
```

### Update Brand Logos

Edit `components/TrustBrands.tsx` (line 6):

```typescript
const brands = [
  { name: 'Your Brand 1', logo: 'BRAND1' },
  { name: 'Your Brand 2', logo: 'BRAND2' },
  // Add more brands...
]
```

### Change Product Categories

Edit `components/Products.tsx` (line 6):

```typescript
const products = [
  {
    category: 'Your Category',
    image: 'your-image-url',
    items: ['Item 1', 'Item 2', 'Item 3'],
  },
  // Add more products...
]
```

### Replace Images

All images use Unsplash placeholders. Replace with your own:

- **Hero**: `components/Hero.tsx` line 12
- **About**: `components/About.tsx` line 21
- **Products**: `components/Products.tsx` line 9 (and other product entries)

If using external images, update `next.config.js`:

```javascript
images: {
  domains: ['your-image-domain.com', 'images.unsplash.com'],
}
```

### Customize Colors

Edit `tailwind.config.ts` (line 10):

```typescript
colors: {
  luxury: {
    black: '#0A0A0A',        // Main dark color
    gold: '#D4AF37',         // Primary accent
    'gold-light': '#F4E5C2', // Light gold
    'gold-dark': '#B8941E',  // Dark gold
    white: '#FAFAFA',        // Main light color
    gray: '#E5E5E5',         // Light gray
    'gray-dark': '#707070',  // Dark gray
  },
}
```

### Update Company Name & Logo

Edit `components/Navigation.tsx` (line 49):

```typescript
<span className="font-display text-2xl font-bold text-luxury-black">YOUR_INITIAL</span>
<p className="font-display text-2xl font-bold text-luxury-white">Your Company</p>
<p className="text-xs uppercase tracking-widest text-luxury-gold">Tagline</p>
```

## 🌟 Features Included

✅ **Full-screen Hero** with animated text and CTAs
✅ **Brand Trust Section** with logo grid and stats
✅ **About Section** with premium imagery
✅ **Product Grid** with 6 categories and hover effects
✅ **Why Choose Us** with 6 benefit cards
✅ **Contact Section** with WhatsApp, phone, email, map
✅ **Sticky Navigation** with mobile menu
✅ **Premium Footer** with newsletter and social links
✅ **Smooth Animations** with Framer Motion
✅ **Fully Responsive** mobile-first design
✅ **SEO Optimized** with metadata

## 🎯 Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Custom Fonts** - Playfair Display + Inter

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Installation Issues

If `npm install` hangs or fails:

```bash
# Clear npm cache
npm cache clean --force

# Try with legacy peer deps
npm install --legacy-peer-deps

# Or use yarn
yarn install
```

### Build Errors

```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

```bash
# Regenerate types
rm -rf .next
npm run dev
```

## 📞 Support

All files are ready to use. Just run `npm install` and `npm run dev`!

For questions, check the README.md file.

---

**Built with ❤️ for Luxury Distribution**
