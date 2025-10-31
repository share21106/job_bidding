import { google } from "googleapis";

export const handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const data = JSON.parse(event.body);

  // Google Sheets authentication
  const auth = new google.auth.GoogleAuth({
    credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  const spreadsheetId = process.env.SPREADSHEET_ID;

  try {
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

    return { statusCode: 200, body: "Success" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Error writing to Google Sheet" };
  }
};
