import { FastifyInstance } from "fastify";
import { postbackHandler } from "./root.controller";

const opts = {
  schema: {
    querystring: {
      sub_id: { type: "integer" },
      reg: { type: "integer" },
      aReg: { type: "integer" },
    },
  },
};

async function rootRoutes(server: FastifyInstance) {
  server.get("/", opts, postbackHandler);
}

export default rootRoutes;
