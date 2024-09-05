import { NextResponse } from "next/server";
import { Resend } from "resend";

interface SubscribeRequestBody {
  email: string;
}

interface SubscribeResponse {
  message: string;
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
  req: Request,
): Promise<NextResponse<SubscribeResponse>> {
  try {
    const { email } = (await req.json()) as SubscribeRequestBody; // Whats the best way to do these api calls?

    const audienceId = "f9fa854b-746e-4427-be11-7b8af6154464";

    await resend.contacts.create({
      email,
      audienceId,
      unsubscribed: false,
    });

    return NextResponse.json<SubscribeResponse>(
      { message: "Subscribed successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json<SubscribeResponse>(
      { message: "An error occurred while subscribing" },
      { status: 500 },
    );
  }
}
