"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToGoogleSheets = void 0;
const google_spreadsheet_1 = require("google-spreadsheet");
const google_auth_library_1 = require("google-auth-library");
const saveToGoogleSheets = async ({ sub_id, reg, aReg, }) => {
    var _a;
    try {
        const serviceAccountAuth = new google_auth_library_1.JWT({
            email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            key: (_a = process.env.GOOGLE_PRIVATE_KEY) === null || _a === void 0 ? void 0 : _a.replace(/\\n/g, "\n"),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });
        const doc = new google_spreadsheet_1.GoogleSpreadsheet("1z2wkBFC-83aLBQ8fnj-2eRhYcG-GGE4x7u6h5CH9T84", serviceAccountAuth);
        await doc.loadInfo();
        const row = await doc.sheetsByIndex[0].addRow({
            Sub_id: sub_id,
            Reg: reg,
            aReg: aReg,
        });
        console.log("Saved to Google Sheets");
        return {
            success: true,
            // message: "Saved to Google Sheets",
        };
    }
    catch (error) {
        console.log(error);
    }
};
exports.saveToGoogleSheets = saveToGoogleSheets;
