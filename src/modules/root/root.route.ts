import { FastifyInstance } from "fastify";
import { postbackHandler } from "./root.controller";

const opts = {
  schema: {
    querystring: {
      param1: { type: "integer" }, // sub_id
      param2: { type: "integer" }, // event name - reg
      param3: { type: "integer" }, // request country - aReg
    },
  },
};

async function rootRoutes(server: FastifyInstance) {
  server.get("/", opts, postbackHandler);
}

export default rootRoutes;
