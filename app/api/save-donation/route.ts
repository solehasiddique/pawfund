import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Donation from "@/models/Donation";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    await connectDB();
    await Donation.create(data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to save donation" }, { status: 500 });
  }
}
