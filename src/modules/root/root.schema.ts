import { z } from "zod";

export const QuerystringSchema = z.object({
  param1: z.string(),
  param2: z.string(),
  param3: z.string(),
});

export type Querystring = z.infer<typeof QuerystringSchema>;
