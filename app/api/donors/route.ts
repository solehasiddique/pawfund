import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Donation from "@/models/Donation";

export async function GET() {
  try {
    await connectDB();

    const donors = await Donation.find().sort({ date: -1 });

    return NextResponse.json(donors);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch donors" }, { status: 500 });
  }
}
