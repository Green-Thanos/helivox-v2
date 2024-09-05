import { EmailTemplate } from "@/data/EmailTemplate";
import { Resend } from "resend";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const firstName = "John";
    const mainContent = `
      <h2>Today's Top Stories</h2>
      <p>1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p>2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    `;
    const unsubscribeUrl = "https://yourdomain.com/unsubscribe?user=123";

    const { data, error } = await resend.emails.send({
      from: "Charles <onboarding@troycolts.tech>",
      to: ["liang.johnny360@gmail.com"],
      subject: "Your Morning Brew",
      react: EmailTemplate({ firstName, mainContent, unsubscribeUrl }),
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
