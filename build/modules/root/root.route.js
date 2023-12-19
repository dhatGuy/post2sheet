"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const root_controller_1 = require("./root.controller");
const opts = {
    schema: {
        querystring: {
            sub_id: { type: "integer" },
            reg: { type: "integer" },
            aReg: { type: "integer" },
        },
    },
};
async function rootRoutes(server) {
    server.get("/", opts, root_controller_1.postbackHandler);
}
exports.default = rootRoutes;
