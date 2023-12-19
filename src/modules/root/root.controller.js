"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postbackHandler = void 0;
const root_service_1 = require("./root.service");
async function postbackHandler(request, reply) {
    try {
        const { sub_id, reg, aReg } = request.query;
        console.log(sub_id, reg, aReg);
        const response = await (0, root_service_1.saveToGoogleSheets)(request.query);
        reply.code(200).send(Object.assign({ status: 200 }, response));
    }
    catch (error) {
        console.error(error);
        reply.code(500).send({
            success: false,
            status: 500,
            error: "Something went wrong",
        });
    }
}
exports.postbackHandler = postbackHandler;
