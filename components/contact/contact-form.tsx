"use client";

import { useState } from "react";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo } from "@/data/social";
import { contactSchema } from "@/lib/contact-schema";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        return;
      }

      const data: { error?: string } = await response.json().catch(() => ({}));

      setErrorMessage(
        data.error === "not_configured"
          ? `The message service isn't set up yet. Please email me directly at ${contactInfo.email}.`
          : `Something went wrong sending your message. Please email me directly at ${contactInfo.email}.`
      );
    } catch {
      setErrorMessage(
        `Couldn't reach the server. Please email me directly at ${contactInfo.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isSubmitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="flex flex-col items-center justify-center space-y-4 py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
            className="rounded-full bg-green-100 p-5 dark:bg-green-900"
          >
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-200" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl font-semibold"
          >
            Message sent!
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md text-center text-muted-foreground"
          >
            Thanks for reaching out — it landed in my inbox and I&apos;ll get back to you as soon as
            I can.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
              Send Another Message
            </Button>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {errorMessage && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-sm"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Honeypot — hidden from people, tempting to bots. */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="pointer-events-none absolute h-0 w-0 opacity-0"
                  />
                )}
              />

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Project Inquiry" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="I'd like to discuss a project opportunity..."
                        className="min-h-32 resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center"
                  >
                    <span className="mr-2">Sending</span>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </motion.div>
                )}
              </Button>
            </form>
          </Form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
