# 🚀 Quick Start Guide — NutriLens

Get NutriLens running in under 5 minutes.

## Step 1: Get Your Free API Key

1. Visit [Google AI Studio](https://aistudio.google.com/apikey)
2. Click "Create API Key"
3. Copy your key (looks like: `AIzaSy...`)

**No credit card required!** Free tier gives you:
- 15 requests per minute
- 1,500 requests per day
- Perfect for development and small-scale use

## Step 2: Set Up Environment

Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Gemini API key:

```env
GEMINI_API_KEY=AIzaSy_your_actual_key_here
USDA_API_KEY=your_usda_key_here
```

**Important:**
- Don't add quotes around the keys
- No spaces before or after the `=`
- Keep this file secret (it's already in `.gitignore`)

## Step 3: Install & Run

```bash
# Install dependencies (only needed once)
npm install

# Start the development server
npm run dev
```

## Step 4: Open Your Browser

Visit [http://localhost:3000](http://localhost:3000)

You should see:
- Hero section with "Know exactly what you're eating"
- Phone mockup on the right
- Navigation with "NutriLens" logo

## Step 5: Test the Scanner

1. Scroll down to the **Food Scanner** section
2. Click "Upload Photo" or "Take Photo"
3. Select a food image (try a chocolate bar, apple, or full meal)
4. Click "Analyze Food"
5. Wait 2-3 seconds for the AI analysis

You'll see:
- Food name with confidence percentage
- Total calories (big number)
- Macros breakdown (protein, carbs, fat)
- Health score (1-10)
- Dietitian tips

## Common Issues

### "API key not configured"
- Make sure `.env.local` exists in the project root
- Check that `GEMINI_API_KEY` is spelled correctly
- Restart the dev server: `Ctrl+C` then `npm run dev`

### "Analysis failed"
- Check your internet connection
- Verify your API key is valid
- Make sure you haven't exceeded the free tier limits (15/min, 1500/day)

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

## Next Steps

### Deploy to Production

**Vercel (easiest, free):**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Follow the prompts and add your `GEMINI_API_KEY` in the Vercel dashboard.

### Customize Your Site

1. **Change colors**: Edit `tailwind.config.ts`
2. **Update content**: Edit files in `/components`
3. **Add your photo**: Replace placeholder in `About.tsx`
4. **Update contact info**: Edit `Contact.tsx` and `Footer.tsx`

### Optional: Add USDA API

For more accurate nutrition data:

1. Visit [USDA FoodData Central](https://fdc.nal.usda.gov/api-key-signup.html)
2. Sign up for a free API key
3. Add to `.env.local`: `USDA_API_KEY=your_key_here`

## Project Structure

```
my-website/
├── app/
│   ├── api/analyze/route.ts   ← Gemini AI integration
│   ├── page.tsx               ← Main page
│   └── layout.tsx             ← Site metadata
├── components/
│   ├── FoodScanner.tsx        ← THE MAIN FEATURE
│   ├── Hero.tsx               ← Landing section
│   ├── Navigation.tsx         ← Header
│   └── ...                    ← Other sections
├── .env.local                 ← YOUR API KEYS (create this!)
└── package.json               ← Dependencies
```

## Development Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Build for production
npm start        # Run production build locally
npm run lint     # Check for code issues
```

## Production Checklist

Before deploying:

- [ ] Test the food scanner with different images
- [ ] Check mobile responsiveness (resize browser)
- [ ] Update `About.tsx` with your credentials
- [ ] Add your contact info to `Contact.tsx`
- [ ] Replace placeholder images
- [ ] Add real testimonials to `Testimonials.tsx`
- [ ] Test all navigation links work
- [ ] Run `npm run build` to check for errors

## Support

Need help?

- **README.md** - Full documentation
- **GitHub Issues** - Report bugs
- **Discord** - Join our community (coming soon)

---

**That's it!** You now have a fully functional AI-powered nutrition website running locally. 🎉

Total cost: **$0** (Gemini free tier + Vercel free hosting)
