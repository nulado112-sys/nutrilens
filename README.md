# 🥗 NutriLens — AI-Powered Food Scanner

A professional dietitian website with AI-powered food photo analysis, built with Next.js 14, TypeScript, Tailwind CSS, and Google Gemini AI.

![NutriLens](https://img.shields.io/badge/Cost-$0-brightgreen) ![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

## ✨ Features

- **🤖 AI Food Scanner**: Upload photos or take pictures to get instant nutrition analysis
- **🧠 Google Gemini AI**: Powered by Gemini 1.5 Flash for accurate food recognition
- **📱 Fully Responsive**: Apple-inspired minimal aesthetic optimized for all devices
- **🎯 Real-time Analysis**: Get calories, macros, health scores, and dietitian tips instantly
- **🎨 Beautiful Design**: Clean, professional design with Fraunces + Inter typography
- **💰 100% Free**: No paid services required, uses free APIs and hosting

## 🚀 Live Demo

[View Live Site](#) (Coming soon)

## 📸 Screenshots

- Hero section with phone mockup
- AI-powered food scanner
- Instant nutrition results
- Mobile responsive design

## 🛠 Tech Stack

| Purpose | Tool | Why |
|---------|------|-----|
| **Frontend** | Next.js 14 + TypeScript | Fast, modern, production-ready |
| **Styling** | Tailwind CSS | Rapid development, consistent design |
| **AI Vision** | Google Gemini 1.5 Flash | Free tier: 15 req/min, 1500/day |
| **Icons** | Lucide React | Clean, modern icon set |
| **Animations** | Framer Motion | Smooth, professional animations |
| **Fonts** | Fraunces + Inter (Google Fonts) | Professional, distinctive typography |
| **Hosting** | Vercel / Netlify | Free tier with auto-deploy |

## 📦 Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn
- Free API keys (no credit card required)

### Setup Steps

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd nutrilens
```

2. **Install dependencies**
```bash
npm install
```

3. **Get your free API keys**
   - **Gemini API**: Visit [Google AI Studio](https://aistudio.google.com/apikey)
     - No credit card required
     - Free tier: 15 requests/min, 1,500/day
   - **USDA API** (optional): Visit [USDA FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html)

4. **Create environment file**
```bash
cp .env.local.example .env.local
```

5. **Add your API keys to `.env.local`**
```env
GEMINI_API_KEY=your_gemini_api_key_here
USDA_API_KEY=your_usda_api_key_here
```

6. **Run the development server**
```bash
npm run dev
```

7. **Open your browser**
```
http://localhost:3000
```

## 🏗 Project Structure

```
nutrilens/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts          # Gemini API integration
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main page structure
│   └── globals.css               # Global styles + fonts
├── components/
│   ├── Navigation.tsx            # Sticky nav with mobile menu
│   ├── Hero.tsx                  # Hero with phone mockup
│   ├── FoodScanner.tsx          # Main AI scanner feature
│   ├── HowItWorks.tsx           # 3-step process
│   ├── About.tsx                # Dietitian profile
│   ├── Services.tsx             # Pricing cards
│   ├── Testimonials.tsx         # Client results
│   ├── FAQ.tsx                  # Accordion FAQ
│   ├── Contact.tsx              # Contact form
│   └── Footer.tsx               # Footer with links
├── .env.local.example           # Environment template
├── tailwind.config.ts           # Tailwind + color palette
└── package.json                 # Dependencies
```

## 🎨 Design System

### Color Palette

```css
--nutrilens-bg: #FAFAF7;      /* Warm off-white background */
--nutrilens-text: #1A1A1A;    /* Deep black text */
--nutrilens-accent: #2D5A3D;  /* Forest green accent */
--nutrilens-soft: #E8F0E8;    /* Soft green backgrounds */
--nutrilens-muted: #6B6B6B;   /* Muted gray */
```

### Typography

- **Display Font**: Fraunces (serif, for headlines)
- **Body Font**: Inter (sans-serif, for body text)

### Design Philosophy

✅ **Do:**
- Lots of whitespace
- Premium, calm, trustworthy aesthetic
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for buttons
- Smooth animations on scroll
- Real food photos from Unsplash
- Human-written copy with "I" and "you"

❌ **Avoid:**
- Purple-to-pink gradients
- Generic glassmorphism
- 3D blobs
- "Empower / Transform / Revolutionize" buzzwords
- Stock icons of carrots and apples

## 🤖 AI Integration

### Gemini API Response Format

```typescript
interface AnalysisResult {
  food_name: string
  confidence: number              // 0-100
  serving_size: string            // e.g., "1 bar, 45g"
  calories: number
  macros: {
    protein_g: number
    carbs_g: number
    fat_g: number
    fiber_g: number
    sugar_g: number
  }
  health_score: number            // 1-10
  tips: string[]                  // Dietitian tips
  warnings: string[]              // Health warnings
}
```

### API Endpoint

The scanner sends base64-encoded images to `/app/api/analyze/route.ts`, which:
1. Validates the image
2. Calls Gemini 1.5 Flash with a nutrition analysis prompt
3. Parses and validates the JSON response
4. Returns structured nutrition data

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and connect your repository
3. Add environment variables:
   - `GEMINI_API_KEY`
   - `USDA_API_KEY` (optional)
4. Click Deploy!

Vercel will auto-deploy on every push to main.

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify
3. Add environment variables in Netlify dashboard
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 🧪 Testing

```bash
# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📝 Customization

### Update Content

All content is in the `/components` folder:
- `Hero.tsx` - Main headline and subheadline
- `About.tsx` - Dietitian profile and credentials
- `Services.tsx` - Pricing and service offerings
- `Testimonials.tsx` - Client success stories
- `Contact.tsx` - Contact information

### Change Colors

Edit `tailwind.config.ts`:

```typescript
nutrilens: {
  bg: '#FAFAF7',      // Background
  text: '#1A1A1A',    // Text color
  accent: '#2D5A3D',  // Primary accent
  soft: '#E8F0E8',    // Soft backgrounds
  muted: '#6B6B6B',   // Muted text
}
```

### Update Fonts

Edit `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap');
```

Then update `tailwind.config.ts`:

```typescript
fontFamily: {
  display: ['YourFont', 'serif'],
  sans: ['YourFont', 'sans-serif'],
}
```

## 🆓 Free Alternatives

If you need alternatives to Gemini:

| Need | Free Alternative |
|------|------------------|
| **Vision AI** | Hugging Face Inference API (`nateraw/food`) |
| **Nutrition DB** | Open Food Facts API (unlimited, free) |
| **Barcode Scanning** | `html5-qrcode` npm package |
| **Hosting** | Netlify, Cloudflare Pages, GitHub Pages |

## 📊 Performance

- ⚡️ Next.js 14 with App Router
- 🖼 Optimized images with lazy loading
- 🎯 Minimal JavaScript bundle
- 🚀 Fast first contentful paint
- 📱 Mobile-first responsive design

## 🐛 Troubleshooting

### API Key Issues
- Ensure `.env.local` exists and contains valid keys
- Check that keys don't have extra spaces or quotes
- Restart the dev server after changing `.env.local`

### Gemini API Quota
- Free tier: 15 requests/min, 1,500/day
- If exceeded, wait a few minutes and try again
- Consider implementing rate limiting for production

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild
npm run build
```

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - feel free to use this for your own nutrition app!

## 💬 Support

- 📧 Email: support@nutrilens.com
- 🐛 Issues: [GitHub Issues](your-repo/issues)
- 💡 Features: [GitHub Discussions](your-repo/discussions)
- 📚 Docs: [Documentation](your-repo/wiki)

## 🙏 Acknowledgments

- Google Gemini for free AI API
- USDA for nutrition database
- Vercel for free hosting
- Tailwind CSS for rapid styling
- Framer Motion for smooth animations

---

**Total Cost: $0** 🎉

Built with 🌱 by the NutriLens team
