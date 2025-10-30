# Brand Lift Co

A performance brand scaling website for e-commerce and local businesses, featuring an application form with Airtable integration.

## Features

- Modern, responsive landing page
- Multi-step application form
- Airtable integration for data storage
- Netlify Functions for serverless backend
- Thank you page with confirmation

## Project Structure

```
├── index.html              # Main landing page
├── apply.html              # Multi-step application form
├── thank-you.html          # Submission confirmation page
├── assets/                 # Images and static assets
├── netlify/
│   └── functions/          # Serverless functions
│       └── submit-application.js  # Airtable integration
├── package.json            # Dependencies
└── AIRTABLE_SETUP.md       # Airtable setup guide
```

## Getting Started

### Prerequisites

- Netlify account
- Airtable account
- Node.js and npm (for local development)

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Brandliftco
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Airtable** (see [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md) for detailed instructions)
   - Create an Airtable base
   - Get your Base ID and API key
   - Set up environment variables in Netlify

4. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Add environment variables in Netlify dashboard
   - Deploy!

### Local Development

```bash
# Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# Run locally
netlify dev
```

The site will be available at `http://localhost:8888`

## Environment Variables

Required environment variables (set in Netlify dashboard):

- `AIRTABLE_BASE_ID` - Your Airtable base ID
- `AIRTABLE_API_KEY` - Your Airtable API key
- `AIRTABLE_TABLE_NAME` - Your table name (default: "Applications")

For local development, copy `env.example` to `.env` and fill in your values:

```bash
cp env.example .env
```

Then edit `.env` with your Airtable credentials.

## Application Form Fields

The form collects:
- Name, Email, Phone
- Instagram, TikTok, Website
- Monthly Revenue, Monthly Budget
- Required Services (checkboxes)
- Goals (text area)

All submissions are automatically saved to Airtable.

## Customization

### Updating Form Fields

1. Edit `apply.html` to add/modify form fields
2. Update the JavaScript to collect new field values
3. Update the Netlify function to map fields to Airtable
4. Add corresponding fields in your Airtable table

### Styling

The site uses:
- Tailwind CSS (CDN)
- Custom animations and gradients
- Responsive design

Edit the `<style>` sections in each HTML file to customize appearance.

## Deployment

This site is designed to deploy on Netlify:

1. Push code to your Git repository
2. Connect repository to Netlify
3. Add environment variables
4. Deploy!

Netlify will automatically handle:
- Static site hosting
- Serverless functions
- Form submissions

## Support

For setup help, see [AIRTABLE_SETUP.md](./AIRTABLE_SETUP.md)

For issues or questions, contact: hello@brandlift.co

## License

© 2025 Brand Lift Co. All rights reserved.

