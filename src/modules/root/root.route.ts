import { FastifyInstance } from "fastify";
import { postbackHandler } from "./root.controller";

const opts = {
  schema: {
    querystring: {
      properties: {
        param1: { type: "string" }, // sub_id
        param2: { type: "string" }, // event name - reg
        param3: { type: "string" }, // request country - aReg
        param4: { type: "string" }, // Click_tid
      },
      required: ["param1", "param2", "param3", "param4"],
    },
  },
};

async function rootRoutes(server: FastifyInstance) {
  server.get("/", opts, postbackHandler);
}

export default rootRoutes;
