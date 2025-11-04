const { google } = require('googleapis');

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    // Parse form data
    const params = new URLSearchParams(event.body);
    const formData = {};
    
    // Get all unique keys (to handle multiple values properly)
    const allKeys = new Set(params.keys());
    
    // Process each field
    allKeys.forEach((key) => {
      // Skip internal fields
      if (key === 'form-name' || key === 'bot-field' || key === 'subject') {
        return;
      }
      
      // Get all values for this key (handles multiple checkboxes)
      const values = params.getAll(key);
      
      if (values.length > 1) {
        // Multiple values - join with comma and space
        formData[key] = values.join(', ');
      } else if (values.length === 1) {
        formData[key] = values[0];
      }
    });
    
    // Handle field name mapping for Google Sheets (cleaner column names)
    // Map "hear-about" to "HearAbout" for better readability
    if (formData['hear-about']) {
      formData['HearAbout'] = formData['hear-about'];
      delete formData['hear-about'];
    }
    
    // Handle consent checkbox - convert to readable text
    if (formData['consent']) {
      formData['Consent'] = formData['consent'] === 'on' ? 'Yes' : formData['consent'];
      delete formData['consent'];
    }
    
    // Capitalize first letter of field names for better readability in sheets
    const cleanedData = {};
    Object.keys(formData).forEach(key => {
      // Capitalize first letter
      const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
      cleanedData[capitalizedKey] = formData[key];
    });

    // Add timestamp
    cleanedData['Submitted At'] = new Date().toISOString();

    // Authenticate with service account
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth });

    // Get sheet headers first to determine column order
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    const headerResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Sheet1!1:1', // Get first row (headers)
    });

    const headers = headerResponse.data.values?.[0] || [];
    
    // Build row data in the same order as headers
    const row = headers.map(header => cleanedData[header] || '');
    
    // Append row to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:Z',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [row],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        message: 'Form submission saved successfully to Google Sheet.',
        saved: true 
      })
    };

  } catch (error) {
    console.error('Error saving to Google Sheet:', error);
    
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to save form submission to Google Sheet',
        details: error.message 
      })
    };
  }
};
