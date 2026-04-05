# ☁️ Deploy NutriLens to Cloudflare Pages

## 🚀 Quick Deploy (Easiest Method - No Terminal!)

### Step 1: Build Your Project

Run this command in your terminal (just once):
```bash
npm run build
```

Wait for it to finish (takes 30-60 seconds).

---

### Step 2: Create Cloudflare Account

1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click **"Sign Up"** (it's FREE forever!)
3. Verify your email

---

### Step 3: Connect GitHub

1. **Push your code to GitHub first:**
   - Go to [github.com](https://github.com) and create a new repository
   - Name it: `nutrilens`
   - Make it public or private (your choice)
   - Copy the commands GitHub shows you

2. **In your terminal, run:**
```bash
git remote add origin https://github.com/YOUR-USERNAME/nutrilens.git
git branch -M main
git add .
git commit -m "Ready for deployment"
git push -u origin main
```

---

### Step 4: Deploy on Cloudflare

1. **Go to Cloudflare Pages Dashboard:**
   - Visit [dash.cloudflare.com](https://dash.cloudflare.com)
   - Click **"Pages"** in the left sidebar
   - Click **"Create a project"**

2. **Connect GitHub:**
   - Click **"Connect to Git"**
   - Authorize Cloudflare to access your GitHub
   - Select the **nutrilens** repository

3. **Configure Build Settings:**
   - **Project name:** `nutrilens` (or any name you want)
   - **Production branch:** `main`
   - **Framework preset:** `Next.js`
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`

4. **Environment Variables:**
   Scroll down and click **"Add variable"**:
   - **Variable name:** `GEMINI_API_KEY`
   - **Value:** `AIzaSyAaGZOExwTwuTLIYWrSF2VSMyO9vgXhb2k`

   Add another:
   - **Variable name:** `NODE_VERSION`
   - **Value:** `18`

5. **Deploy:**
   - Click **"Save and Deploy"**
   - Wait 2-3 minutes ☕

---

## ✅ Your Site is Live!

After deployment finishes, you'll get a URL like:
```
https://nutrilens.pages.dev
```

Or you can use a custom domain if you have one!

---

## 🧪 Test Your Live Site

Visit your Cloudflare Pages URL and test:

1. ✅ **Food Scanner** - Upload/take photo of chocolate
2. ✅ **Contact Form** - Sends to habibnemer01@gmail.com
3. ✅ **Navigation** - All buttons work
4. ✅ **Mobile** - Test on your phone!

---

## 🔄 Update Your Site Later

Whenever you make changes:

```bash
git add .
git commit -m "Update website"
git push
```

Cloudflare will **automatically redeploy** in 2-3 minutes! 🎉

---

## 🔧 Troubleshooting

### Build Failed?

**Fix:** Make sure these settings are correct:
- Build command: `npm run build`
- Build output: `.next`
- Node version: `18` or higher

### API Not Working?

**Fix:**
1. Go to Cloudflare Pages → Your Project → Settings
2. Check **Environment Variables**
3. Make sure `GEMINI_API_KEY` is there
4. Redeploy from the **Deployments** tab

### Contact Form Not Sending?

The contact form uses Web3Forms (free service). It should work automatically!

---

## 📊 Features

✅ **Free Forever** - No credit card required
✅ **Automatic Deploys** - Push to GitHub = auto-deploy
✅ **SSL Certificate** - HTTPS enabled automatically
✅ **Global CDN** - Fast worldwide
✅ **Unlimited Bandwidth** - No limits!

---

## 💰 Cost: $0

Everything is completely FREE! 🎉

---

## 🎉 You're Done!

Your NutriLens website is now live on Cloudflare Pages!

**Share your link with anyone:**
```
https://your-project.pages.dev
```

Total setup time: **5 minutes**
Total cost: **$0**
