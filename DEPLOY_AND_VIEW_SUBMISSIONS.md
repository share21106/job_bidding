# How to Deploy and View Submissions in Your Netlify Account

## 🚀 Quick Deploy (3 Steps)

### Step 1: Deploy to Netlify

```bash
netlify deploy --prod
```

Or if you haven't linked yet:
```bash
netlify init
```

### Step 2: Your site is now live!

Visit your site URL that Netlify gives you.

### Step 3: View submissions in your Netlify account

1. Go to [app.netlify.com](https://app.netlify.com)
2. Click on your site name
3. Click **Forms** in the left sidebar
4. See all your submissions! 🎉

---

## 📧 Set Up Email Notifications

To get emails when someone submits the form:

1. Netlify Dashboard → Your Site → **Forms** section
2. Click **Settings** (gear icon)
3. Click **Form notifications**
4. Enable **Email notifications**
5. Add your email addresses (comma-separated)
6. Click **Save**

Now you'll get an email every time someone submits! 📨

---

## 📊 Download Submissions

### Option 1: Download CSV
1. Go to **Forms** in your Netlify dashboard
2. Click **Download CSV** button
3. Opens in Excel/Google Sheets

### Option 2: View Online
- Each submission shows:
  - All form fields
  - Submission timestamp
  - IP address (for spam tracking)

---

## 🧪 Test It

1. **Deploy your site**:
   ```bash
   netlify deploy --prod
   ```

2. **Fill out the form** on your live site

3. **Check Netlify dashboard** → Forms

4. You should see your test submission! ✅

---

## 🔍 What Data Gets Saved?

Every submission saves all form fields:

- ✅ Name
- ✅ Email  
- ✅ Phone
- ✅ Instagram
- ✅ TikTok
- ✅ Website
- ✅ Monthly Revenue
- ✅ Monthly Budget
- ✅ Services (checkboxes - all selected)
- ✅ Goals (textarea)
- ✅ Consent checkbox
- ✅ Submission timestamp (auto-added)
- ✅ IP address (auto-added by Netlify)

---

## 💡 Tips

### View Submissions Immediately
1. After deploying, wait 1-2 minutes
2. Submit a test form
3. Refresh Netlify Forms page
4. Your submission appears!

### Export to Spreadsheet
1. Click **Download CSV** in Forms
2. Import to Google Sheets or Excel
3. Build reports and charts

### Auto-save to Google Sheets
Use Zapier/Make.com to automatically add new submissions to:
- Google Sheets
- Airtable
- Notion
- Slack

---

## ⚠️ Important Notes

- **Free tier**: 100 submissions/month (usually plenty!)
- **Premium tier**: 1,000 submissions/month for $19/month
- **Data retention**: Forever (until you delete)
- **Spam protection**: Honeypot field catches bots automatically
- **HTTPS**: All submissions encrypted

---

## 🎯 Quick Checklist

After deploying:

- [ ] Site is live at your Netlify URL
- [ ] Submit a test form
- [ ] Check Netlify Forms dashboard for submission
- [ ] (Optional) Set up email notifications
- [ ] (Optional) Download CSV to review data

---

## 📞 Need Help?

**Form not showing submissions?**
1. Make sure you deployed to Netlify (not just running locally)
2. Check that form has `netlify` attribute
3. Wait a few minutes after first deploy
4. Check browser console for errors

**Still stuck?**
- Check `NETLIFY_FORMS_SETUP.md` for troubleshooting
- Netlify docs: https://docs.netlify.com/forms/setup/

---

## ✅ Success!

Your form submissions are now automatically saved to your Netlify account. View them anytime in your dashboard!

