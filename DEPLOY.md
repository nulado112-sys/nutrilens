# 🚀 Deploy NutriLens to Vercel

## Quick Deploy (5 minutes)

### Method 1: Vercel CLI (Fastest)

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts:**
- Set up and deploy? **Yes**
- Which scope? Choose your account
- Link to existing project? **No**
- What's your project name? **nutrilens** (or any name)
- In which directory? **./** (press Enter)
- Want to override settings? **No**

4. **Add Environment Variables:**

After deployment, go to your Vercel dashboard and add:
- Go to your project → Settings → Environment Variables
- Add: `GEMINI_API_KEY` = `AIzaSyAaGZOExwTwuTLIYWrSF2VSMyO9vgXhb2k`
- Click "Save"

5. **Redeploy:**
```bash
vercel --prod
```

---

### Method 2: Vercel Dashboard (Easiest)

1. **Push to GitHub:**
```bash
# If you don't have a remote repo yet:
# 1. Go to github.com and create a new repository
# 2. Then run:
git remote add origin https://github.com/YOUR-USERNAME/nutrilens.git
git branch -M main
git push -u origin main
```

2. **Deploy on Vercel:**
- Go to [vercel.com](https://vercel.com)
- Click "Add New" → "Project"
- Import your GitHub repository
- Click "Deploy"

3. **Add Environment Variables:**
- Go to Project Settings → Environment Variables
- Add: `GEMINI_API_KEY` = `AIzaSyAaGZOExwTwuTLIYWrSF2VSMyO9vgXhb2k`
- Redeploy from Deployments tab

---

## ✅ After Deployment

Your site will be live at: `https://your-project-name.vercel.app`

**Test these features:**
1. ✅ Food Scanner with chocolate photo
2. ✅ Contact form (sends to habibnemer01@gmail.com)
3. ✅ All navigation buttons
4. ✅ Mobile responsive design

---

## 🔧 Troubleshooting

### Issue: "API key not configured"
**Solution:** Make sure you added `GEMINI_API_KEY` in Vercel dashboard and redeployed.

### Issue: "Failed to analyze image"
**Solution:**
1. Check if API quota is available
2. Try again after 1 minute
3. The free tier has limits: 15 requests/min

### Issue: Build failed
**Solution:**
```bash
# Test build locally first:
npm run build

# If it works locally, push changes:
git add .
git commit -m "Fix build issues"
git push
```

---

## 📊 Monitor Your Site

- **Analytics:** Vercel Dashboard → Analytics
- **Logs:** Vercel Dashboard → Logs
- **Performance:** Vercel Dashboard → Speed Insights

---

## 🎉 You're Done!

Your NutriLens website is now live and accessible from anywhere!

**Share your link:**
- `https://your-project.vercel.app`

**Total cost:** $0 (Vercel free tier)
