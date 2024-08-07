import { FastifyReply, FastifyRequest } from "fastify";
import { Querystring } from "./root.schema";
import { saveToGoogleSheets } from "./root.service";

export async function postbackHandler(
  request: FastifyRequest<{
    Querystring: Querystring;
  }>,
  reply: FastifyReply,
) {
  try {
    const { param1, param2, param3, param4 } = request.query;
    console.log(param1, param2, param3, param4);
    const response = await saveToGoogleSheets(request.query);
    reply.code(200).send({
      status: 200,
      ...response,
    });
  } catch (error: any) {
    console.error(error);
    reply.code(500).send({
      success: false,
      status: 500,
      error: error.message ?? "Something went wrong",
    });
  }
}
