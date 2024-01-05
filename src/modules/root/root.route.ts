import { FastifyInstance } from "fastify";
import { postbackHandler } from "./root.controller";

const opts = {
  schema: {
    querystring: {
      param1: { type: "string" }, // sub_id
      param2: { type: "string" }, // event name - reg
      param3: { type: "string" }, // request country - aReg
    },
  },
};

async function rootRoutes(server: FastifyInstance) {
  server.get("/", opts, postbackHandler);
}

export default rootRoutes;
