import { z } from "zod";

export const QuerystringSchema = z.object({
  param1: z.string().default(""),
  param2: z.string().default(""),
  param3: z.string().default(""),
});

export type Querystring = z.infer<typeof QuerystringSchema>;
