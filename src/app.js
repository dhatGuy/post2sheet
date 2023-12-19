"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = __importDefault(require("@fastify/env"));
const fastify_1 = __importDefault(require("fastify"));
const root_route_1 = __importDefault(require("./modules/root/root.route"));
const envSchema = {
    type: "object",
    required: ["GOOGLE_PRIVATE_KEY", "GOOGLE_SERVICE_ACCOUNT_EMAIL"],
    properties: {
        GOOGLE_PRIVATE_KEY: {
            type: "string",
        },
        GOOGLE_SERVICE_ACCOUNT_EMAIL: {
            type: "string",
        },
    },
};
const server = (0, fastify_1.default)();
async function main() {
    server.register(env_1.default, {
        schema: envSchema,
        data: process.env,
        confKey: "env",
        dotenv: true,
    });
    server.register(root_route_1.default);
    server.listen({ port: 8080 }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
}
main();
