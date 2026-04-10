import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Donation from "@/models/Donation";

export async function POST(req: Request) {
  try {
    const { name, email, message, amount } = await req.json();
    const numericAmount = Number(amount);

    // name validation
    if (!name?.trim()) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    if (/[^A-Za-z\s]/.test(name)) {
      return NextResponse.json(
        { error: "Numbers and symbols are not allowed in name" },
        { status: 400 }
      );
    }

    // email validation
    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)
    ) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // message validation
    const wordCount =
      message?.trim().split(/\s+/).filter(Boolean).length || 0;

    if (wordCount > 20) {
      return NextResponse.json(
        { error: "Message cannot exceed 20 words" },
        { status: 400 }
      );
    }

    // amount validation
    if (!numericAmount || numericAmount < 50) {
      return NextResponse.json(
        { error: "Minimum donation is ₹50" },
        { status: 400 }
      );
    }

    if (numericAmount > 50000) {
      return NextResponse.json(
        { error: "Maximum donation allowed is ₹50,000" },
        { status: 400 }
      );
    }

    await connectDB();

    await Donation.create({
      name: name.trim(),
      email: email.trim(),
      message: message?.trim() || "",
      amount: numericAmount,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to save donation" },
      { status: 500 }
    );
  }
}