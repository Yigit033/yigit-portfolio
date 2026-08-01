import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { contactInfo } from "@/data/social";

/**
 * Delivers contact-form submissions by e-mail through Resend's REST API.
 *
 * Called directly with fetch rather than the SDK to avoid another dependency.
 * Requires RESEND_API_KEY; CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL are
 * optional overrides. When the key is absent the route reports
 * "not_configured" so the form can tell the visitor to e-mail directly
 * instead of pretending the message was sent.
 */
export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "validation_failed", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // Honeypot filled → silently accept without sending, so bots get no signal.
  if (parsed.data.company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "not_configured", fallbackEmail: contactInfo.email },
      { status: 503 }
    );
  }

  const { name, email, subject, message } = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? contactInfo.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Portfolio Contact <${from}>`,
        to: [to],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `${message}\n\n—\nFrom: ${name} <${email}>`,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Resend rejected the message:", response.status, detail);
      return NextResponse.json({ error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form delivery failed:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 502 });
  }
}
