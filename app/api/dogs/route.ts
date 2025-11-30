import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Dog from "@/models/Dog";

export async function GET() {
  try {
    await connectDB();
    const dogs = await Dog.find(); // fetch all dogs
    return NextResponse.json(dogs);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch dogs" }, { status: 500 });
  }
}
