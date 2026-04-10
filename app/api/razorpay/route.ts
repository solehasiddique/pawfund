import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();
    if (!amount || amount < 50) {
    return Response.json(
      { error: "Minimum donation is ₹50" },
      { status: 400 }
    );
  }

  if (amount > 50000) {
    return Response.json(
      { error: "Maximum donation is ₹50,000" },
      { status: 400 }
    );
  }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const order = await instance.orders.create({
      amount: amount * 100, // amount in paisa
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Razorpay order creation failed" }, { status: 500 });
  }
}
