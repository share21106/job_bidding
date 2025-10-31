# Brand Lift Co

A performance brand scaling website for e-commerce and local businesses, featuring an application form with Netlify Forms integration.

## Features

- Modern, responsive landing page
- Multi-step application form
- Netlify Forms for form submissions
- Thank you page with confirmation

## Project Structure

```
├── index.html              # Main landing page
├── apply.html              # Multi-step application form
├── thank-you.html          # Submission confirmation page
├── assets/                 # Images and static assets
├── package.json            # Dependencies
└── netlify.toml            # Netlify configuration
```

## Getting Started

### Prerequisites

- Netlify account
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

3. **Deploy to Netlify**
   - Connect your repository to Netlify
   - Deploy!

### Local Development

```bash
# Install Netlify CLI globally (if not already installed)
npm install -g netlify-cli

# Run locally
netlify dev
```

The site will be available at `http://localhost:8888`

## Application Form Fields

The form collects:
- Name, Email, Phone
- Instagram, TikTok, Website
- Monthly Revenue, Monthly Budget
- Required Services (checkboxes)
- Goals (text area)

All submissions are automatically saved via Netlify Forms.

## Customization

### Updating Form Fields

1. Edit `apply.html` to add/modify form fields
2. Update the JavaScript to collect new field values

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
3. Deploy!

Netlify will automatically handle:
- Static site hosting
- Form submissions
- Email notifications

## Support

For issues or questions, contact: hello@brandlift.co

## License

© 2025 Brand Lift Co. All rights reserved.

