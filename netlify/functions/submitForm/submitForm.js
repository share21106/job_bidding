import { google } from "googleapis";

export const handler = async (event, context) => {
  // CORS headers for browser requests
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const data = JSON.parse(event.body);

    // Google Sheets authentication
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.SPREADSHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1", // change if your sheet name is different
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [data.email, data.phone, data.instagram, data.tiktok, data.website, data.revenue, data.budget, data.services, data.goals, data.hearAbout, new Date().toISOString()],
        ],
      },
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, message: "Success" }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Error writing to Google Sheet" }),
    };
  }
};

