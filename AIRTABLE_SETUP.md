# Airtable Integration Setup Guide

This guide will help you set up Airtable to store application form submissions for Brand Lift Co.

## Step 1: Create an Airtable Base

1. Go to [airtable.com](https://airtable.com) and sign up/login
2. Click "Add a base" → "Start from scratch"
3. Name it "Brand Lift Co Applications" or similar

## Step 2: Create the Applications Table

### Table Structure

Create a table with the following fields (in this exact order):

| Field Name | Field Type | Description |
|------------|------------|-------------|
| Name | Single line text | Applicant's full name |
| Email | Email | Contact email |
| Phone | Phone number | Contact phone |
| Instagram | Single line text | Instagram handle |
| TikTok | Single line text | TikTok handle |
| Website | URL | Company website |
| Monthly Revenue | Single select | Options: `Prefer not to say`, `< $10k`, `$10k–$50k`, `$50k–$200k`, `$200k+` |
| Monthly Budget | Single select | Options: `$1k–$2.5k`, `$2.5k–$5k`, `$5k–$10k`, `$10k+` |
| Services | Long text | Services they need help with |
| Goals | Long text | Their 90-day goals |
| Submitted At | Date with time | Timestamp of submission (auto-populated) |

### Setting Up the Fields

1. Click the "+" button in the top right to add fields
2. For each field:
   - Type the field name
   - Select the appropriate field type
3. Click "Save" after creating all fields

### Setting Up Select Options

For the **Monthly Revenue** field:
1. Click on the field header
2. Select "Single select" as the field type
3. Add these options:
   - Prefer not to say
   - < $10k
   - $10k–$50k
   - $50k–$200k
   - $200k+

For the **Monthly Budget** field:
1. Click on the field header
2. Select "Single select" as the field type
3. Add these options:
   - $1k–$2.5k
   - $2.5k–$5k
   - $5k–$10k
   - $10k+

## Step 3: Get Your Airtable Credentials

### Get Your Base ID

1. Go to [airtable.com/api](https://airtable.com/api)
2. Find your base in the list
3. Click on it
4. Copy the **Base ID** (it starts with `app...`)

### Get Your API Key

1. In the same API documentation page
2. Find your **Personal Access Token** (or click "Generate API key" if you need to create one)
3. This is a long string starting with `pat...`

## Step 4: Configure Netlify Environment Variables

1. Go to your Netlify dashboard
2. Navigate to your site's settings
3. Go to **Build & deploy** → **Environment variables**
4. Click **Add a variable**
5. Add these three environment variables:

| Variable Name | Value | Description |
|---------------|-------|-------------|
| `AIRTABLE_BASE_ID` | Your Base ID (e.g., `app...`) | The Airtable base ID |
| `AIRTABLE_API_KEY` | Your API key (e.g., `pat...`) | Your Airtable API key |
| `AIRTABLE_TABLE_NAME` | `Applications` | Name of your table (usually "Applications") |

### For Local Development

1. Copy the example environment file:
   ```bash
   cp env.example .env
   ```

2. Edit `.env` and fill in your actual Airtable credentials:
   ```
   AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
   AIRTABLE_API_KEY=patXXXXXXXXXXXXXX
   AIRTABLE_TABLE_NAME=Applications
   ```

**Important:** The `.env` file is already in `.gitignore` - never commit your actual credentials!

## Step 5: Install Dependencies

Run this command in your project directory:

```bash
npm install
```

This will install the Airtable SDK needed for the Netlify function.

## Step 6: Deploy

1. Commit your changes to Git
2. Push to your repository (if connected to Netlify)
3. Netlify will automatically deploy, or you can manually trigger a deployment

## Step 7: Test the Integration

1. Go to your live site
2. Navigate to the application form
3. Fill out and submit the form
4. Check your Airtable base - you should see a new record appear!

## Troubleshooting

### Form submits but no data in Airtable

- Check that your environment variables are set correctly in Netlify
- Check the Netlify function logs for errors
- Verify your Base ID and API key are correct

### Getting 500 errors

- Check your Airtable API key permissions
- Make sure the table name matches exactly (case-sensitive)
- Verify all field names in your Airtable match the code

### Field names don't match

Update the field names in `netlify/functions/submit-application.js` to match your Airtable table, or rename fields in Airtable.

## Security Notes

- Never commit your `.env` file or API keys to Git
- Keep your Airtable API key secure
- The API key has access to all data in your base
- Consider creating a separate Airtable workspace for production

## Next Steps

Now that data is flowing to Airtable, you can:

1. Create views to filter and organize applications
2. Set up email notifications for new submissions
3. Build automations in Airtable
4. Create a dashboard to view all submissions
5. Export data to CSV or other formats

## Support

If you encounter issues:
1. Check the Netlify function logs: Site settings → Functions → View logs
2. Check browser console for client-side errors
3. Verify your Airtable credentials are correct
4. Test the function locally with `netlify dev`

