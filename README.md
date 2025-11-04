# Brand Lift Co

A modern landing page and application form for Brand Lift Co, a performance marketing agency. Built with HTML, Tailwind CSS, and Netlify Functions for form handling.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## ✨ Features

- **Modern Landing Page**: Responsive design with animations and interactive elements
- **Application Form**: Multi-step form with validation
- **Netlify Forms**: Built-in form handling via Netlify Forms
- **Google Sheets Integration**: Optional serverless function to sync form submissions to Google Sheets
- **Thank You Page**: Confirmation page after form submission

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (for local development)

## 🚀 Installation

1. **Clone the repository** (or navigate to the project directory):
   ```bash
   cd Brandliftco
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

   This will install the required dependencies including `googleapis` for Google Sheets integration.

## 🏃 Running Locally

### Option 1: Using Netlify CLI (Recommended)

1. **Start the Netlify development server**:
   ```bash
   npm run dev
   ```
   
   Or directly:
   ```bash
   netlify dev
   ```

2. **Open your browser**:
   - The site will be available at `http://localhost:8888`
   - Netlify Functions will be available at `http://localhost:8888/.netlify/functions/submit-to-sheet`

### Option 2: Simple HTTP Server (Static Files Only)

If you only want to view the static HTML files without Netlify Functions:

1. **Using Python**:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

2. **Using Node.js http-server**:
   ```bash
   npx http-server -p 8000
   ```

3. **Open your browser**:
   - Navigate to `http://localhost:8000`

**Note**: When using a simple HTTP server, the Netlify Functions (Google Sheets integration) will not work. Use `netlify dev` for full functionality.

## 🔐 Environment Variables

The project supports optional Google Sheets integration. To enable it:

1. **Copy the environment example file**:
   ```bash
   cp env.example .env
   ```

2. **Edit `.env`** and fill in your Google Sheets credentials:
   ```env
   GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   GOOGLE_SPREADSHEET_ID=your-spreadsheet-id-here
   ```

### Setting Up Google Sheets Integration

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Google Sheets API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Google Sheets API" and enable it

3. **Create a Service Account**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Create a service account and download the JSON key file

4. **Get Service Account Email and Private Key**:
   - Open the downloaded JSON file
   - Copy the `client_email` value → `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - Copy the `private_key` value → `GOOGLE_PRIVATE_KEY`

5. **Share Your Google Sheet**:
   - Open your Google Sheet
   - Click "Share" and add the service account email as an editor
   - Copy the Spreadsheet ID from the URL: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit`
   - Use this ID for `GOOGLE_SPREADSHEET_ID`

6. **For Netlify Deployment**:
   - Go to your Netlify site dashboard
   - Navigate to "Site settings" > "Environment variables"
   - Add the three environment variables mentioned above

**Note**: The form will work with Netlify Forms even without Google Sheets integration. The Google Sheets function is optional.

## 📁 Project Structure

```
Brandliftco/
├── index.html              # Main landing page
├── apply.html              # Application form page
├── thank-you.html          # Thank you page after form submission
├── assets/                 # Images and favicons
│   ├── favicon_*.png
│   ├── logo_*.png
│   └── ...
├── netlify/
│   └── functions/
│       └── submit-to-sheet.js  # Serverless function for Google Sheets
├── netlify.toml            # Netlify configuration
├── package.json            # Node.js dependencies and scripts
├── env.example             # Example environment variables
└── README.md               # This file
```

## 🚀 Deployment

### Deploy to Netlify

1. **Connect your repository** to Netlify:
   - Go to [Netlify](https://www.netlify.com/)
   - Click "New site from Git"
   - Connect your repository

2. **Configure build settings**:
   - Build command: `echo 'No build needed'` (or leave empty)
   - Publish directory: `.` (root directory)

3. **Set environment variables** (if using Google Sheets):
   - Go to "Site settings" > "Environment variables"
   - Add the variables from `env.example`

4. **Deploy**:
   - Netlify will automatically deploy on every push to your main branch

### Manual Deployment

You can also drag and drop the project folder to Netlify Drop, or use the Netlify CLI:

```bash
netlify deploy --prod
```

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **JavaScript**: Client-side interactivity
- **Netlify Functions**: Serverless functions for form handling
- **Google Sheets API**: Optional form submission storage
- **Netlify Forms**: Built-in form handling

## 📝 Available Scripts

- `npm run dev` or `npm start`: Start Netlify development server
- `npm run build`: Placeholder (no build step required for this static site)

## 🔧 Form Configuration

The application form in `apply.html` uses Netlify Forms:

- Add `netlify` attribute to the `<form>` tag
- Form submissions are automatically handled by Netlify
- View submissions in Netlify Dashboard → Forms
- Optional: Enable Google Sheets sync via the serverless function

## 📧 Support

For questions or issues, contact: hello@brandlift.co

## 📄 License

ISC

---

**Note**: This is a static website that uses Netlify for hosting and form handling. No build process is required - just serve the HTML files directly or use Netlify's platform for automatic deployment.

