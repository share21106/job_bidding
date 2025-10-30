# How to Find the Forms Tab in Netlify

## 🎯 Where to Find Forms

### Step 1: Go to Your Netlify Dashboard
👉 **[https://app.netlify.com](https://app.netlify.com)**

### Step 2: Select Your Site
Click on **"brandliftcompany"** or **"brandliftco"**

### Step 3: Look for Forms
You should see a tab/section called **"Forms"** in the left sidebar

---

## 📍 Common Locations for Forms Tab

### Option 1: Left Sidebar (Most Common)
```
Site Dashboard
├── Overview
├── Deploys
├── Forms  ← HERE!
├── Functions
├── Edge Functions
└── Settings
```

### Option 2: Top Navigation (Sometimes)
```
[Sites] [Forms] [Teams] [Add-ons]
         ↑ HERE
```

### Option 3: Site Menu (If Collapsed)
```
☰ (hamburger menu)
├── Overview
├── Forms  ← HERE!
└── ...
```

---

## ⚠️ "Forms Tab Not Showing" - Troubleshooting

### Problem 1: Netlify Didn't Detect Your Form

**Solution:**
1. Wait 5-10 minutes after deployment
2. Submit a test form on your live site
3. The form should now appear in dashboard
4. Check again in Forms tab

### Problem 2: Forms Feature Not Enabled

**Solution:**
1. Go to **Site Settings** → **Forms**
2. Enable **"Incoming webhooks"**
3. Enable **"Form submissions"**
4. Save

### Problem 3: Looking at Wrong Site

**Solution:**
- Make sure you're viewing the correct site
- Check site name: "brandliftcompany"
- Site URL should match your domain

---

## 🔍 Manual Check: View Site Info

### Check Your Site Details

1. **Dashboard** → Your site
2. Look for **"Site ID"** in settings
3. Note your site URL

**Your Site Info:**
- **Site Name**: brandliftcompany
- **URL**: https://www.brandliftco.net
- **Netlify URL**: https://brandliftcompany.netlify.app

---

## ✅ Verify Form is Set Up Correctly

### Check Your HTML

Your form should have:
```html
<form name="application" netlify ...>
```

✅ **form name**: "application"
✅ **netlify attribute**: present
✅ **bot-field**: present (spam protection)

### Test the Form

1. Visit: https://www.brandliftco.net/apply.html
2. Fill out and submit
3. Check for success message
4. Then check Netlify dashboard

---

## 📧 Alternative: Check via API

If Forms tab doesn't show, you can check directly:

**Direct URL to Forms (replace SITE_ID):**
```
https://app.netlify.com/sites/SITE_ID/forms
```

**Find Your Site ID:**
1. Site Settings → General
2. Look for "Site ID"
3. Or check deploy logs

---

## 🎯 What You Should See

### After Correct Setup:

1. **Forms tab** appears in sidebar
2. **"application"** form listed
3. **Submission count** shown
4. Click to view submissions
5. Download as CSV option

### Your Submissions Look Like:

```
┌──────────────────────────────────────────┐
│ Form: application                         │
│ Submissions: 3                            │
│ Last submission: 2 minutes ago           │
├──────────────────────────────────────────┤
│ Name: John Doe                           │
│ Email: john@example.com                   │
│ Phone: 555-555-5555                      │
│ ...                                      │
└──────────────────────────────────────────┘
```

---

## 🚀 Quick Fix: Re-submit After Re-deploy

Since you just deployed, try this:

1. **Wait 2-3 minutes** (form detection needs time)
2. **Submit a test form** on your live site
3. **Check Netlify Forms** tab again
4. **Refresh** the page if needed

---

## 💡 Still Not Seeing Forms?

### Enable Forms Feature

1. Go to your site
2. Click **Settings** → **Forms**
3. Make sure forms are **enabled**
4. Check **"Form submissions"** is ON
5. Save and refresh

### Contact Support

If still not working:
1. Go to Netlify dashboard
2. Click **Help**
3. Click **Contact Support**
4. Ask about Forms tab visibility

---

## 📊 After You See Your Data

Once Forms tab appears:

✅ **View submissions** - Click on your form
✅ **Download CSV** - Export to spreadsheet
✅ **Setup notifications** - Get emails for new submissions
✅ **View analytics** - See submission trends

---

## 🎉 Next Steps

1. **Test your form**: https://www.brandliftco.net/apply.html
2. **Check Forms tab**: Wait 2-3 minutes
3. **View your data**: Click on "application" form
4. **Setup notifications**: Get emails for each submission

---

## 💬 Quick Links

- **Dashboard**: [https://app.netlify.com](https://app.netlify.com)
- **Your Site**: [https://www.brandliftco.net](https://www.brandliftco.net)
- **Form Page**: [https://www.brandliftco.net/apply.html](https://www.brandliftco.net/apply.html)

