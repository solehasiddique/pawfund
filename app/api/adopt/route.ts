import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import AdoptionRequest from "@/models/AdoptionRequest";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await connectDB();

    const newRequest = await AdoptionRequest.create(body);

    return NextResponse.json(newRequest, { status: 201 });
  } catch (err) {
    console.error("Error saving adoption request:", err);
    return NextResponse.json(
      { error: "Failed to save adoption request" },
      { status: 500 }
    );
  }
}
