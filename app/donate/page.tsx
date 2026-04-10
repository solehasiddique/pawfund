"use client";
import Script from "next/script";
import { useState,useRef } from "react";

export default function DonatePage() {
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const [amount, setAmount] = useState<number>(50);
  const [customAmount, setCustomAmount] = useState("");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [amountError, setAmountError] = useState("");
  const donationOptions = [50, 100, 250, 500];

  async function handleDonate(amount: number) {
    if (!amount || amount < 50) {
  setAmountError("Minimum donation is ₹50");
  return;
}

if (amount > 50000) {
  setAmountError("Maximum donation allowed is ₹50,000");
  return;
}

    if (!form.name.trim()) {
  setNameError("Name is required");
  return;
}

if (/[^A-Za-z\s]/.test(form.name)) {
  setNameError("Numbers and symbols are not allowed");
  return;
}
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
  onClick={() => {
    setAmount(value);
    setCustomAmount(value.toString());
    setAmountError("");
  }}
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
  id="custom-amount"
  name="custom-amount"
  type="number"
  min="10"
  step="1"
  placeholder="Custom amount (₹)"
  value={customAmount}
  onChange={(e) => {
    const value = e.target.value;
    setCustomAmount(value);

    const numValue = Number(value);

    if (!value) {
      setAmount(0);
      setAmountError("Amount is required");
    } else if (numValue < 50) {
      setAmount(numValue);
      setAmountError("Minimum donation is ₹50");
    } else if (numValue > 50000) {
      setAmount(numValue);
      setAmountError("Maximum donation allowed is ₹50,000");
    } else {
      setAmount(numValue);
      setAmountError("");
    }
  }}
  className={`w-full rounded-lg px-4 py-2 mb-6 focus:ring-2 outline-none ${
    amountError ? "border border-red-500" : "border border-[#FFD6B3]"
  }`}
/>
{amountError && (
  <p className="text-red-500 text-sm mt-1">
    {amountError}
  </p>
)}

          {/* Donor Info */}
          <div className="flex flex-col gap-4 mb-6">
           <input
  ref={nameInputRef}
  id="donor-name"
  name="name"
  type="text"
  placeholder="Your Name"
  className={`border rounded-lg px-4 py-2 ${
    nameError ? "border-red-500" : "border-[#FFD6B3]"
  }`}
  value={form.name}
  onChange={(e) => {
    const value = e.target.value;
    setForm({ ...form, name: value });

    if (/[^A-Za-z\s]/.test(value)) {
      setNameError("Numbers and symbols are not allowed");
    } else {
      setNameError("");
    }
  }}
  onBlur={() => {
    if (/[^A-Za-z\s]/.test(form.name) || !form.name.trim()) {
      setNameError(
        !form.name.trim()
          ? "Name is required"
          : "Numbers and symbols are not allowed"
      );

      // force focus back
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 0);
    }
  }}
/>
{nameError && (
  <p className="text-red-500 text-sm mt-1">
    {nameError}
  </p>
)}
            
            <input
  id="donor-email"
  name="email"
  type="email"
  placeholder="Your Email (optional)"
  className={`border rounded-lg px-4 py-2 ${
    emailError ? "border-red-500" : "border-[#FFD6B3]"
  }`}
  value={form.email}
  onChange={(e) => {
    const value = e.target.value;
    setForm({ ...form, email: value });

    // validate only if not empty
    if (
      value &&
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
    ) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  }}
/>
{emailError && (
  <p className="text-red-500 text-sm mt-1">
    {emailError}
  </p>
)}
           <input
  id="donor-message"
  name="message"
  type="text"
  placeholder='Message (e.g. "For Bruno 🐶")'
  className={`border rounded-lg px-4 py-2 ${
    messageError ? "border-red-500" : "border-[#FFD6B3]"
  }`}
  value={form.message}
  onChange={(e) => {
    const value = e.target.value;
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount <= 20) {
      setForm({ ...form, message: value });
      setMessageError("");
    } else {
      setMessageError("Message cannot exceed 20 words");
    }
  }}
/>
{messageError && (
  <p className="text-red-500 text-sm mt-1">
    {messageError}
  </p>
)}

<p className="text-sm text-gray-500">
  {form.message.trim().split(/\s+/).filter(Boolean).length}/20 words
</p>
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

