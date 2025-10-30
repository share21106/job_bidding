# Quick Start Guide

## 🚀 Running the Project Locally

### Option 1: If You Already Have Everything Set Up

```bash
npm install
netlify dev
```

Visit **http://localhost:8888**

---

### Option 2: First Time Setup (Complete Guide)

#### Step 1: Install Dependencies

```bash
# Install Netlify CLI (if not installed)
npm install -g netlify-cli

# Install project dependencies
npm install
```

#### Step 2: Set Up Airtable Credentials

```bash
# Copy the example file
cp env.example .env

# Edit .env with your credentials (replace the X's)
notepad .env   # Windows
nano .env       # Mac/Linux
```

Add your Airtable credentials:
```
AIRTABLE_BASE_ID=appYOUR_BASE_ID
AIRTABLE_API_KEY=patYOUR_API_KEY
AIRTABLE_TABLE_NAME=Applications
```

**How to get Airtable credentials:**
1. Go to https://airtable.com/api
2. Click on your base
3. Copy the Base ID (starts with `app...`)
4. Copy your Personal Access Token (starts with `pat...`)

**Don't have an Airtable table set up yet?**
- See `AIRTABLE_SETUP.md` for complete instructions
- Or create a table with these fields: Name, Email, Phone, Instagram, TikTok, Website, Monthly Revenue, Monthly Budget, Services, Goals, Submitted At

#### Step 3: Run the Development Server

```bash
netlify dev
```

#### Step 4: Open in Browser

- **Landing page**: http://localhost:8888
- **Application form**: http://localhost:8888/apply.html

---

## ⚠️ Common Issues

### "netlify: command not found"
```bash
npm install -g netlify-cli
```

### "Cannot find module 'airtable'"
```bash
npm install
```

### "Port 8888 already in use"
```bash
netlify dev --port 8889
```

### "500 Error" when submitting form
- Check your `.env` file has correct Airtable credentials
- Verify your Airtable table exists and has the correct fields

---

## 📚 For More Details

- **Full setup guide**: See `AIRTABLE_SETUP.md`
- **Local development**: See `LOCAL_DEVELOPMENT.md`
- **Project overview**: See `README.md`

---

## ✅ Quick Test Checklist

1. ✅ Install dependencies: `npm install`
2. ✅ Set up `.env` with Airtable credentials
3. ✅ Run server: `netlify dev`
4. ✅ Open: http://localhost:8888/apply.html
5. ✅ Fill out and submit form
6. ✅ Check Airtable - new record should appear!

---

## 🎯 Your Site Will Be Available At:

- 🌐 **Main site**: http://localhost:8888
- 📝 **Application form**: http://localhost:8888/apply.html
- ✅ **Thank you page**: http://localhost:8888/thank-you.html


