import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { Querystring } from "./root.schema";

export const saveToGoogleSheets = async ({
  param1,
  param2,
  param3,
}: Querystring) => {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      "1z2wkBFC-83aLBQ8fnj-2eRhYcG-GGE4x7u6h5CH9T84",
      serviceAccountAuth,
    );

    await doc.loadInfo();

    const row = await doc.sheetsByIndex[0].addRow({
      Sub_id: param1,
      Reg: param2,
      aReg: param3,
    });

    console.log("Saved to Google Sheets");

    return {
      success: true,
      // message: "Saved to Google Sheets",
    };
  } catch (error) {
    console.log(error);
  }
};
