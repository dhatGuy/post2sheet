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
    const { sub_id, reg, aReg } = request.query;
    console.log(sub_id, reg, aReg);
    const response = await saveToGoogleSheets(request.query);
    reply.code(200).send({
      status: 200,
      ...response,
    });
  } catch (error) {
    console.error(error);
    reply.code(500).send({
      success: false,
      status: 500,
      error: "Something went wrong",
    });
  }
}
