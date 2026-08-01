import { z } from "zod";

/** Shared between the client form and the API route so both validate identically. */
export const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  /**
   * Honeypot — real users never fill this; bots usually do. Deliberately
   * unconstrained so a filled value passes validation and is handled by the
   * API route instead, which drops it without telling the sender why.
   */
  company: z.string().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
