import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // You need to replace 'your-audience-id' with your actual Resend audience ID
    const audienceId = 'f8e308d5-d61d-46f7-bb00-9b5dd2d0767c';

    // Add email to your Resend list
    await resend.contacts.create({
      email,
      audienceId,
      // Add any additional fields you want to store
      // firstName: "",
      // lastName: "",
      unsubscribed: false,
    });

    // Optional: Send a welcome email
    // await resend.emails.send({
    //   from: "you@example.com",
    //   to: email,
    //   subject: "Welcome to our newsletter!",
    //   html: "<p>Thanks for subscribing!</p>"
    // });

    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { message: "An error occurred while subscribing" },
      { status: 500 }
    );
  }
}