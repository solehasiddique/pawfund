"use client";
import Script from "next/script";
import { useState } from "react";

export default function DonatePage() {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const donationOptions = [50, 100, 250, 500];

  async function handleDonate(amount: number) {
    if (!razorpayLoaded) {
      alert("Payment system still loading… please wait 1 sec");
      return;
    }

    // create order
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();
    if (!data.orderId) return alert("Order creation failed");

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      amount: amount * 100,
      currency: "INR",
      name: "PawFund",
      description: form.message || "Donation",
      order_id: data.orderId,
      handler: async function () {
        await fetch("/api/save-donation", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, amount }),
        });

        window.location.href = "/thankyou";
      },
      theme: { color: "#D46A1F" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }


  return (
    <>
    <Script src="https://checkout.razorpay.com/v1/checkout.js" 
    onLoad={() => setRazorpayLoaded(true)}/>
    <main className="bg-creamBg text-brownText min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-8 bg-[#FFF2E8]">
        <h1 className="text-4xl font-bold text-orangeBrand mb-4">Donate & Save a Life 🐾</h1>
        <p className="text-lg max-w-2xl mx-auto text-[#5C4033]/80">
          Every small donation brings food, warmth, and hope to a stray animal in need. ❤️
        </p>
      </section>

      {/* Donation Form */}
      <section className="py-16 px-8 md:px-20 flex flex-col items-center">
        <div className="bg-white shadow-lg rounded-2xl p-8 max-w-lg w-full border border-[#FFD6B3]/50">
          <h2 className="text-2xl font-semibold text-center text-orangeBrand mb-6">
            Choose Your Donation Amount
          </h2>

          {/* Amount Options */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {donationOptions.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className={`px-6 py-3 rounded-lg border transition ${
                  amount === value
                    ? "bg-orangeBrand text-white border-orangeBrand"
                    : "border-orangeBrand text-orangeBrand hover:bg-orangeBrand hover:text-white"
                }`}
              >
                ₹{value}
              </button>
            ))}
          </div>

          {/* Custom Amount */}
          <input
            type="number"
            placeholder="Custom amount (₹)"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setAmount(Number(e.target.value));
            }}
            className="w-full border border-[#FFD6B3] rounded-lg px-4 py-2 mb-6 focus:ring-2 focus:ring-orangeBrand outline-none"
          />

          {/* Donor Info */}
          <div className="flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-[#FFD6B3] rounded-lg px-4 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email (optional)"
              className="border border-[#FFD6B3] rounded-lg px-4 py-2"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="text"
              placeholder='Message (e.g. "For Bruno 🐶")'
              className="border border-[#FFD6B3] rounded-lg px-4 py-2"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </div>

          {/* Donate Button */}
          <button
            onClick={() => handleDonate(amount)}
            className="bg-orangeBrand text-white w-full py-3 rounded-lg text-lg hover:bg-[#FF7A2F] transition"
          >
            Donate ₹{amount}
          </button>
        </div>
      </section>
    </main>
    </>
  );
}

function handleDonate(amount: number, form: any) {
  alert(`Would start Razorpay payment for ₹${amount}`);
}
