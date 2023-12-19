import fastifyEnv from "@fastify/env";
import fastify from "fastify";
import rootRoutes from "./modules/root/root.route";

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

const server = fastify();

async function main() {
  server.register(fastifyEnv, {
    schema: envSchema,
    data: process.env,
    confKey: "env",
    dotenv: true,
  });
  server.register(rootRoutes);
  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
}

main();
