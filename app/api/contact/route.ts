import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters" }, { status: 400 });
    }
    if (!/^[A-Za-z ]+$/.test(name.trim())) {
      return NextResponse.json({ error: "Name can only contain letters" }, { status: 400 });
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }
    const wordCount = message.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount > 20) {
      return NextResponse.json({ error: "Message cannot exceed 20 words" }, { status: 400 });
    }

    const newMessage = await Contact.create({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    return NextResponse.json(newMessage, { status: 201 });

  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}