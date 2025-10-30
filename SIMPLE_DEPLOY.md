# Quick Deploy to Netlify

## 🎯 Choose Your Method

### Method 1: Use Netlify Web Interface (Easiest!)

**Perfect if you don't want to deal with commands**

1. **Go to [https://app.netlify.com](https://app.netlify.com)**
2. Click **"Add new site"** → **"Deploy manually"**
3. **Zip your project folder:**
   - Select all files in the `Brandliftco` folder
   - Right-click → "Send to" → "Compressed (zipped) folder"
4. **Drag the zip file** into Netlify
5. **Done!** Your site is live! 🎉

**Your site URL** will be something like: `https://brandlift-co-123.netlify.app`

---

### Method 2: Use Netlify CLI

**For command-line lovers**

1. **In your terminal, run:**
   ```bash
   netlify init
   ```
   
2. **When prompted, choose:**
   - "Create & configure a new project"
   - Enter a site name (or leave blank)
   - Build command: Just press Enter (no build needed)
   - Directory: Just press Enter (current directory)

3. **Deploy:**
   ```bash
   netlify deploy --prod
   ```

4. **Done!** Check your site URL 🎉

---

## ✅ After Deployment

### Test Your Form

1. Go to: `https://your-site.netlify.app/apply.html`
2. Fill out and submit the form
3. Check **Netlify Dashboard** → **Forms** to see your submission!

### View Submissions

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click on your site
3. Click **Forms** in the sidebar
4. See all submissions!

### Setup Email Notifications

1. **Netlify Dashboard** → Your site → **Forms**
2. Click **Settings** → **Form notifications**
3. Enable and add your email
4. Save!

---

## 🎯 Recommended: Use Web Interface

**Easiest and fastest method:**

1. **Zip your project** (right-click folder → Compress)
2. **Go to [app.netlify.com](https://app.netlify.com)**
3. **Drag and drop the zip**
4. **Done!**

Your site is live immediately! No commands, no complexity.

---

## 🆘 Troubleshooting

**Form not working?**
- Make sure you deployed (don't just open HTML locally)
- Check browser console for errors

**Can't find submissions?**
- Go to Netlify dashboard → Forms
- Submit a test form
- Wait 1-2 minutes

**Need help?**
- See `DEPLOY_TO_NETLIFY.md` for detailed guide
- Check `NETLIFY_FORMS_SETUP.md` for form setup


