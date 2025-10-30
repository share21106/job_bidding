# Deploy to Netlify - Complete Guide

## 🚀 Option 1: Deploy via Netlify CLI (Recommended)

### Step 1: Install Netlify CLI (if not already installed)

```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify

```bash
netlify login
```

This will open your browser to authorize the CLI.

### Step 3: Initialize your site (first time only)

```bash
netlify init
```

Answer the prompts:
- **Existing site or new?** → Choose "new site"
- **Team?** → Choose your team
- **Site name?** → Enter something like "brandlift-co" (or leave blank for random)
- **Build command?** → Press Enter (no build needed)
- **Directory to deploy?** → Press Enter (current directory)

### Step 4: Deploy!

```bash
netlify deploy --prod
```

### Step 5: Your site is live! 🎉

You'll get a URL like: `https://brandlift-co-123.netlify.app`

---

## 🌐 Option 2: Deploy via Netlify Dashboard (Drag & Drop)

### Step 1: Zip your project

**Windows:**
1. Select all files in your project folder
2. Right-click → Send to → Compressed (zipped) folder
3. Name it `brandlift-co.zip`

**Mac/Linux:**
```bash
zip -r brandlift-co.zip . -x "*.git*" "node_modules/*" ".env"
```

### Step 2: Go to Netlify

1. Visit [https://app.netlify.com](https://app.netlify.com)
2. Login or sign up

### Step 3: Drag and drop

1. Go to **Sites** → Click **Add new site**
2. Select **Deploy manually**
3. Drag your `brandlift-co.zip` file into the box
4. Wait for upload and deployment
5. Your site is live! 🎉

---

## ✅ After Deployment

### View Your Site

Your site is live at the URL Netlify provides (e.g., `https://brandlift-co-123.netlify.app`)

### View Form Submissions

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Click on your site
3. Click **Forms** in the sidebar
4. See all your submissions!

### Test the Form

1. Visit your live site
2. Go to `/apply.html` (e.g., `https://yoursite.netlify.app/apply.html`)
3. Fill out the form
4. Submit it
5. Check Netlify Forms to see the submission!

---

## 📧 Setup Email Notifications

1. **Netlify Dashboard** → Your Site → **Forms**
2. Click **Settings** (gear icon)
3. Enable **Email notifications**
4. Add your email address
5. Click **Save**

You'll now get an email for every submission! 📨

---

## 🔄 Continuous Deployment (Optional)

### Connect to GitHub for Auto-Deploy

**Benefits:**
- Auto-deploy on every push
- Preview deployments for PRs
- Easy rollbacks

**Setup:**

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. In Netlify:
   - **Sites** → **Import from Git**
   - Choose your Git provider
   - Select your repository
   - Deploy settings:
     - Build command: (leave blank)
     - Publish directory: `./`
     - Click **Deploy**

3. **Every future commit** will auto-deploy! 🚀

---

## 🎯 Quick Reference

### Commands

```bash
# First time: Link to your site
netlify init

# Deploy to production
netlify deploy --prod

# Deploy to preview (for testing)
netlify deploy

# Open your site
netlify open

# View forms
netlify open:forms

# View your site
netlify open:site
```

### Useful URLs

- **Dashboard**: [app.netlify.com](https://app.netlify.com)
- **Your Site**: Check the Netlify dashboard for your URL
- **Forms**: `https://app.netlify.com/sites/YOUR_SITE/forms`

---

## 🐛 Troubleshooting

### "Not found" errors

- Check that you deployed the right directory
- Make sure all files are included
- Check the publish directory in Netlify settings

### Form not working

- Verify the `netlify` attribute is on the form
- Check browser console for errors
- Make sure site is deployed (not just local)

### Can't see submissions

- Wait 1-2 minutes after first deployment
- Check you're looking at the right site in dashboard
- Try submitting a test form

### Build errors

- Run `npm install` first (if needed)
- Check `netlify.toml` settings
- Verify all files are present

---

## 📊 What Happens After Deploy?

✅ Your site is live and accessible  
✅ Form submissions are automatically captured  
✅ You can view submissions in Netlify dashboard  
✅ Download submissions as CSV  
✅ Email notifications available (if set up)  
✅ HTTPS included (free)  
✅ CDN included (global)

---

## 🎉 Success!

Your Brand Lift Co website is now live on Netlify with working form submissions!

Visit your site, submit a test form, and check the Netlify dashboard to see your data! 🚀


