import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import AdoptionRequest from "@/models/AdoptionRequest";

function validateName(value: string): string {
  if (!value.trim()) return "Name is required";
  if (/[^A-Za-z\s]/.test(value)) return "Only letters and spaces allowed";
  return "";
}

function validateEmail(value: string): string {
  if (!value.trim()) return "Email is required";
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
    return "Please enter a valid email";
  return "";
}

function validateMessage(value: string): string {
  if (!value.trim()) return "Message is required";
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
  if (wordCount > 20) return "Message cannot exceed 20 words";
  return "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, dogId } = body;

    // ---------------- VALIDATE ----------------
    const errors: Record<string, string> = {};

    const nameErr = validateName(name ?? "");
    const emailErr = validateEmail(email ?? "");
    const messageErr = validateMessage(message ?? "");

    if (nameErr) errors.name = nameErr;
    if (emailErr) errors.email = emailErr;
    if (messageErr) errors.message = messageErr;
    if (!dogId) errors.dogId = "Dog ID is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 422 });
    }

   
    await connectDB();

    const newRequest = await AdoptionRequest.create({ name, email, message, dogId });

    return NextResponse.json(newRequest, { status: 201 });
  } catch (err) {
    console.error("Error saving adoption request:", err);
    return NextResponse.json(
      { error: "Failed to save adoption request" },
      { status: 500 }
    );
  }
}