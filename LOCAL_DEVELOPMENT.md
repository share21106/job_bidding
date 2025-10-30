# Local Development Guide

Follow these steps to run the Brand Lift Co website locally with Airtable integration.

## Prerequisites

- Node.js installed (version 18 or higher)
- npm or yarn package manager
- Netlify account (for deployment)
- Airtable account (for data storage)

## Quick Start

### Step 1: Install Netlify CLI Globally

```bash
npm install -g netlify-cli
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install the Airtable SDK and other required dependencies.

### Step 3: Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file with your Airtable credentials:
   ```bash
   # Windows (use notepad, vscode, or any text editor)
   notepad .env
   
   # Or on Mac/Linux
   nano .env
   ```

3. Fill in your actual values:
   ```
   AIRTABLE_BASE_ID=app123456789ABCDE
   AIRTABLE_API_KEY=pat123456789ABCDE
   AIRTABLE_TABLE_NAME=Applications
   ```

### Step 4: Get Your Airtable Credentials

If you don't have Airtable credentials yet:

1. Go to [airtable.com/api](https://airtable.com/api)
2. Find your base and click on it
3. Copy the **Base ID** (starts with `app...`)
4. Generate or copy your **Personal Access Token** (starts with `pat...`)

See [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md) for detailed Airtable setup instructions.

### Step 5: Create Airtable Table Structure

Make sure you've created an Airtable table with these fields:

- **Name** (Single line text)
- **Email** (Email)
- **Phone** (Phone number)
- **Instagram** (Single line text)
- **TikTok** (Single line text)
- **Website** (URL)
- **Monthly Revenue** (Single select)
- **Monthly Budget** (Single select)
- **Services** (Long text)
- **Goals** (Long text)
- **Submitted At** (Date with time)

See [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md) for the complete setup guide.

### Step 6: Run the Development Server

```bash
netlify dev
```

Or if you just want to test the frontend:

```bash
npm run dev
```

The site will be available at:
- **Main site**: http://localhost:8888
- **Application form**: http://localhost:8888/apply.html
- **Thank you page**: http://localhost:8888/thank-you.html

### Step 7: Test the Form

1. Navigate to http://localhost:8888/apply.html
2. Fill out the multi-step form
3. Submit the form
4. Check your Airtable base to see the new record appear!

## Troubleshooting

### "Command not found: netlify"

Install Netlify CLI:
```bash
npm install -g netlify-cli
```

### "Cannot find module 'airtable'"

Install dependencies:
```bash
npm install
```

### Form submits but no data in Airtable

- Check that your `.env` file has correct credentials
- Verify field names in Airtable match the code
- Check the terminal for error messages

### Getting CORS errors

Make sure you're running `netlify dev` (not just opening HTML files). The Netlify CLI handles CORS properly.

### Port 8888 is already in use

Netlify will try to use port 8888. If it's busy, you can specify a different port:

```bash
netlify dev --port 8889
```

### Environment variables not loading

- Make sure `.env` file is in the root directory
- Check that variable names match exactly (no extra spaces)
- Try restarting the dev server

## Development Workflow

### Making Changes

1. Edit HTML/CSS files
2. Changes will hot-reload automatically
3. Test by submitting forms and checking Airtable

### Testing Different Tables

Edit `.env` to point to a different table:
```
AIRTABLE_TABLE_NAME=TestApplications
```

### Viewing Function Logs

When running `netlify dev`, you'll see:
- Function logs in the terminal
- Any errors that occur during submission
- Network requests in the console

## File Structure

```
Brandliftco/
├── index.html          # Main landing page
├── apply.html          # Application form
├── thank-you.html      # Confirmation page
├── assets/             # Images and static files
├── netlify/
│   └── functions/  # Serverless functions (Airtable integration)
├── .env               # Your credentials (not committed)
├── env.example        # Example env file (safe to commit)
└── package.json       # Dependencies
```

## Next Steps

Once everything works locally:

1. Test thoroughly by submitting multiple forms
2. Check your Airtable table has all the data
3. Deploy to Netlify (see [README.md](./README.md))
4. Set up environment variables in Netlify dashboard

## Useful Commands

```bash
# Install dependencies
npm install

# Run development server
netlify dev

# Or just serve static files (no Airtable)
npm run dev

# Check environment variables are loaded
netlify env:list

# Deploy to Netlify (production)
netlify deploy --prod
```

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Airtable API Documentation](https://airtable.com/api)
- [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md) - Detailed Airtable setup
- [README.md](./README.md) - Project overview


