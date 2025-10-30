# Brand Lift Co - Netlify Forms Version

A simple landing page with application form that saves directly to Netlify (no Airtable needed!).

## 🎯 What You Get

- ✅ Multi-step application form
- ✅ Automatic submission storage in Netlify dashboard
- ✅ Email notifications for new submissions
- ✅ No database setup required
- ✅ No API keys needed
- ✅ 100% free for up to 100 submissions/month

## 🚀 Quick Start

### 1. Deploy to Netlify

```bash
# Option A: Connect to Git (recommended)
# 1. Push your code to GitHub/GitLab
# 2. Go to netlify.com → New site from Git
# 3. Connect your repository

# Option B: Deploy via CLI
netlify deploy --prod
```

### 2. View Submissions

1. Go to your Netlify dashboard
2. Click **Forms** in the sidebar
3. View all application submissions!

### 3. Set Up Email Notifications (Optional)

1. Netlify dashboard → **Forms** → **Settings**
2. Add your email address
3. You'll receive an email for each submission

## 📁 Project Structure

```
Brandliftco/
├── index.html          # Landing page
├── apply.html          # Application form (with Netlify Forms)
├── thank-you.html      # Confirmation page
├── assets/             # Images
└── NETLIFY_FORMS_SETUP.md  # Detailed setup guide
```

## 🔧 No Configuration Needed!

Unlike the Airtable version, you don't need to:

- ❌ Set up environment variables
- ❌ Create an Airtable base
- ❌ Get API keys
- ❌ Install dependencies
- ❌ Run `npm install`

Just deploy and it works!

## 📝 How It Works

The form automatically saves to Netlify because it has:

```html
<form name="application" netlify>
```

That's it! Netlify automatically:
- Detects the form
- Captures all submissions
- Stores them securely
- Provides them in your dashboard

## 📊 View Your Data

### Option 1: Netlify Dashboard
- Log in to netlify.com
- Go to Forms section
- View all submissions with timestamps

### Option 2: Export as CSV
- Click "Download CSV" in your dashboard
- Import into Excel, Google Sheets, etc.

### Option 3: Auto-save to Spreadsheet
- Use Zapier/Make.com to connect
- Automatically add submissions to Google Sheets or Airtable

## 🎨 Customization

Edit these files to customize:

- `apply.html` - Change form fields or styling
- `thank-you.html` - Update confirmation message
- `index.html` - Modify landing page

## 🆚 Airtable vs Netlify Forms

**Use Netlify Forms if:**
- ✅ You want the simplest setup
- ✅ You don't need a fancy database
- ✅ You're okay viewing submissions in Netlify dashboard
- ✅ You want email notifications built-in

**Use Airtable if:**
- ✅ You want a powerful database
- ✅ You need advanced filtering/sorting
- ✅ You want custom views and dashboards
- ✅ You need to build reports

## 📚 Documentation

- `NETLIFY_FORMS_SETUP.md` - Detailed setup guide
- `AIRTABLE_SETUP.md` - Airtable setup (if you want to switch)
- `LOCAL_DEVELOPMENT.md` - How to test locally
- `QUICK_START.md` - Quick reference

## 💡 Tips

### Local Testing

```bash
# Option 1: Run with Netlify CLI (recommended)
netlify dev

# Option 2: Run simple server
npx serve
```

### Add More Fields

Just add inputs inside the form:

```html
<input name="new-field" type="text" />
```

Netlify will automatically capture it!

### Change Success Page

Edit the form submission handler in `apply.html`:

```javascript
window.location.href = 'custom-thank-you.html';
```

## 🎉 You're Done!

Deploy to Netlify and your form submissions will be automatically saved. No additional setup required!

## 📞 Support

For issues or questions:
1. Check `NETLIFY_FORMS_SETUP.md` for troubleshooting
2. View Netlify documentation: docs.netlify.com/forms/setup/
3. Email: hello@brandlift.co

