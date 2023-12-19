import { z } from "zod";

export const QuerystringSchema = z.object({
  sub_id: z.string().default(""),
  reg: z.string().default(""),
  aReg: z.string().default(""),
});

export type Querystring = z.infer<typeof QuerystringSchema>;
