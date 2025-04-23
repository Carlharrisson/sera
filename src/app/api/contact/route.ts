import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("Form data received:", body);

    // Get webhook URL from environment variable
    const webhookUrl = process.env.WEBHOOK_URL;
    console.log("Using webhook URL:", webhookUrl);

    if (!webhookUrl) {
      throw new Error("WEBHOOK_URL environment variable is not set");
    }

    // Forward the request to the webhook
    console.log("Sending request to webhook...");
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("Webhook response status:", response.status);

    if (!response.ok) {
      // Get response text instead of trying to parse JSON directly
      const responseText = await response.text();
      console.error("Error response from webhook:", responseText);

      // Try to parse as JSON if possible
      let errorData;
      try {
        errorData = responseText
          ? JSON.parse(responseText)
          : { message: "Empty response" };
      } catch (e) {
        errorData = {
          message: `Failed to parse error response: ${responseText}`,
        };
      }

      throw new Error(errorData?.message || "Failed to submit form");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in contact form API route:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Something went wrong",
      },
      { status: 500 }
    );
  }
}
