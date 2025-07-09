import { z } from "zod";

//contacts schema
export const contactSchema = z.object({
  name: z.string().min(2, "Too short").max(50, "Too long"),
  subject: z.string().min(5, "Too short").max(50, "Too long"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Too short").max(500, "Too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
