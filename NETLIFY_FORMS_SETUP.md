# Netlify Forms Setup Guide

This guide explains how to use Netlify's built-in form handling (no Airtable needed!).

## ✅ What You Get

- **Automatic form submissions** in your Netlify dashboard
- **Email notifications** for each submission
- **Download submissions** as CSV
- **No database setup required**
- **No API keys needed**
- **100% free** for reasonable usage

## 🚀 Quick Setup

### Step 1: Enable Form Detection

1. Deploy your site to Netlify (or open your existing Netlify site)
2. Netlify will **automatically detect** forms with the `netlify` attribute
3. No additional configuration needed!

### Step 2: Deploy the Site

```bash
# Push to Git
git add .
git commit -m "Add application form"
git push

# Or deploy manually
netlify deploy --prod
```

### Step 3: Test the Form

1. Visit your live site
2. Fill out the application form
3. Submit it
4. Check your Netlify dashboard for the submission

## 📧 Email Notifications

To receive email notifications for form submissions:

1. Go to **Netlify Dashboard** → **Site settings**
2. Navigate to **Forms** section
3. Click **Settings**
4. Enter your email addresses (comma-separated)
5. Enable notifications

### Alternative: Use Netlify's UI

1. Go to your **Netlify Dashboard**
2. Click on **Forms** in the sidebar
3. You'll see all submissions listed there
4. Click on any submission to view details

## 📥 Download Submissions

1. Go to **Forms** in your Netlify dashboard
2. Click **Download CSV** button
3. All submissions will be downloaded as a CSV file

## 🔔 Setup Automatic Notifications (Optional)

You can set up webhooks, Slack notifications, Zapier integrations, etc.

### Zapier Integration

1. Go to [zapier.com](https://zapier.com)
2. Create a new Zap
3. Choose **Netlify** → **New Form Submission**
4. Connect it to Google Sheets, Airtable, or any other app!

## 🎯 How It Works

The form on `apply.html` has:

```html
<form name="application" netlify netlify-honeypot="bot-field">
```

- `netlify` - Enables automatic form detection
- `netlify-honeypot` - Spam protection
- Netlify automatically captures all form fields

## 📊 View Submissions

### Option 1: Netlify Dashboard (Recommended)

1. Log into [netlify.com](https://netlify.com)
2. Select your site
3. Click **Forms** in the sidebar
4. View all submissions with timestamps

### Option 2: Export to Spreadsheet

Use Zapier/Make.com to automatically add submissions to:
- Google Sheets
- Airtable
- Notion
- Any other database

### Option 3: Use API

```bash
curl https://api.netlify.com/api/v1/sites/{site_id}/forms/{form_id}/submissions \
  -H "Authorization: Bearer {api_token}"
```

## 💡 Benefits vs Airtable

| Feature | Netlify Forms | Airtable |
|---------|--------------|----------|
| Setup Time | ✅ 0 minutes | ❌ 15+ minutes |
| Cost | ✅ Free | ⚠️ Limited free tier |
| API Keys | ✅ Not needed | ❌ Requires keys |
| Notifications | ✅ Built-in | ❌ Need to set up |
| Spam Protection | ✅ Built-in | ❌ Need to add |
| Data Export | ✅ Built-in CSV | ✅ Built-in export |
| Dashboard | ✅ Netlify UI | ✅ Airtable UI |

## 🔒 Security Features

1. **Honeypot Spam Protection** - Hidden field catches bots
2. **Rate Limiting** - Prevents abuse
3. **HTTPS** - All submissions encrypted
4. **No client-side JavaScript** needed for basic submission

## 🎨 Customization

### Change Thank You Page

The form redirects to `thank-you.html` after submission. You can:
- Modify the thank you message
- Add custom redirect with success parameters
- Send users to a different page

### Add More Fields

Just add new inputs in the form:

```html
<input name="custom-field" type="text" />
```

Netlify will automatically capture it!

## 📝 Form Fields Captured

Your application form collects:

- ✅ Name
- ✅ Email
- ✅ Phone
- ✅ Instagram
- ✅ TikTok
- ✅ Website
- ✅ Monthly Revenue
- ✅ Monthly Budget
- ✅ Services (checkboxes)
- ✅ Goals (textarea)
- ✅ Consent checkbox
- ✅ Bot field (hidden, for spam protection)

## 🐛 Troubleshooting

### Form submissions not appearing

1. Make sure you deployed to Netlify (not just running locally)
2. Check that the form has `netlify` attribute
3. Verify form name matches: `name="application"`

### Not getting email notifications

1. Check **Netlify Dashboard** → **Forms** → **Settings**
2. Verify your email address
3. Check spam folder
4. Enable notifications in form settings

### Getting spam submissions

1. Make sure honeypot field is present
2. Consider adding reCAPTCHA (optional)
3. Use Netlify's built-in rate limiting

## 🚀 Next Steps

1. **Deploy to Netlify** (if not already deployed)
2. **Set up email notifications** in Netlify dashboard
3. **Test the form** on your live site
4. **Check your dashboard** for submissions
5. **Optional**: Set up Zapier to auto-save to Google Sheets or Airtable

## 📚 Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Forms Notifications](https://docs.netlify.com/forms/notifications/)
- [Netlify Forms API](https://docs.netlify.com/forms/setup/netlify-forms-api/)

## ⚠️ Important Notes

- **No Airtable setup required** - everything is handled by Netlify
- **No environment variables needed** - much simpler!
- **Automatic backups** - Netlify stores all submissions
- **Free tier limits**: 100 submissions/month (usually plenty)
- **Upgrade**: $19/month for 1,000 submissions/month

## 🎉 That's It!

Your form is now configured to save submissions directly to Netlify. No additional setup required!

