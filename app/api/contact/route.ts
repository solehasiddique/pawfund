import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Contact from "@/models/Contact";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newMessage = await Contact.create(body);
    return NextResponse.json(newMessage, { status: 201 });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
