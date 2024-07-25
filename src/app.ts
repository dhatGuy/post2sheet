import fastifyEnv from "@fastify/env";
import fastify from "fastify";
import rootRoutes from "./modules/root/root.route";

const envSchema = {
  type: "object",
  required: ["BASE64_ENCODED_SERVICE_ACCOUNT"],
  properties: {
    BASE64_ENCODED_SERVICE_ACCOUNT: {
      type: "string",
    },
  },
};

const server = fastify();

async function main() {
  server.register(fastifyEnv, {
    schema: envSchema,
    data: process.env,
    confKey: "env",
    dotenv: true,
  });
  server.register(rootRoutes);
  server.listen({ port: 3000, host: "0.0.0.0" }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

main();
