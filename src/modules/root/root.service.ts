import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Querystring } from "./root.schema";

const base64EncodedServiceAccount = process.env
  .BASE64_ENCODED_SERVICE_ACCOUNT as string;
const decodedServiceAccount = Buffer.from(
  base64EncodedServiceAccount,
  "base64",
).toString("utf-8");
const credentials = JSON.parse(decodedServiceAccount);

export const saveToGoogleSheets = async ({
  param1,
  param2,
  param3,
}: Querystring) => {
  try {
    const serviceAccountAuth = new JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SHEET_ID as string,
      serviceAccountAuth,
    );

    await doc.loadInfo();

    const row = await doc.sheetsByIndex[0].addRow({
      Sub_id: param1,
      Reg: param2,
      aReg: param3,
      dateCreated: new Date().toISOString(),
    });

    console.log("Saved to Google Sheets");

    return {
      success: true,
      // message: "Saved to Google Sheets",
    };
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
