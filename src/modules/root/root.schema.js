"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuerystringSchema = void 0;
const zod_1 = require("zod");
exports.QuerystringSchema = zod_1.z.object({
    sub_id: zod_1.z.string().default(""),
    reg: zod_1.z.string().default(""),
    aReg: zod_1.z.string().default(""),
});
