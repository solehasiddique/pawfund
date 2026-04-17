import { NextResponse } from "next/server";

export async function GET() {
  const keyId = process.env.RAZORPAY_KEY_ID || "";
  const keySecret = process.env.RAZORPAY_KEY_SECRET || "";

  return NextResponse.json({
    keyIdPreview: keyId.slice(0, 8), // show only first few chars
    keyIdLength: keyId.length,
    keySecretLength: keySecret.length,
    hasSpaceInKeyId: keyId.includes(" "),
    hasSpaceInSecret: keySecret.includes(" "),
  });
}