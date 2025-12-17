import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Donation from "@/models/Donation";

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const { status } = await req.json();

    console.log("STATUS UPDATE:", id, status);//log

    await connectDB();
    await Donation.findByIdAndUpdate(id, { status });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("STATUS ERROR:", err);
    return NextResponse.json({ error: "Failed to update status" }, { status: 500 });
  }
}
