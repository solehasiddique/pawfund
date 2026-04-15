"use client";
import { useState, useRef } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const validateName = (value: string) => {
    if (!value.trim()) return "Name is required";
    if (/[^A-Za-z\s]/.test(value)) return "Only letters and spaces allowed";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value))
      return "Please enter a valid email";
    return "";
  };

  const validateMessage = (value: string) => {
    if (!value.trim()) return "Message is required";
    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;
    if (wordCount > 20) return "Message cannot exceed 20 words";
    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "name") setNameError(validateName(value));
    if (name === "email") setEmailError(validateEmail(value));
    if (name === "message") setMessageError(validateMessage(value));
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    const nErr = validateName(form.name);
    const eErr = validateEmail(form.email);
    const mErr = validateMessage(form.message);
    setNameError(nErr);
    setEmailError(eErr);
    setMessageError(mErr);
    if (nErr || eErr || mErr) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setNameError("");
        setEmailError("");
        setMessageError("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#FFF2E8] flex flex-col items-center justify-center px-4 py-16">
      <h1 className="text-4xl font-bold text-orangeBrand mb-8">
        Contact Us 📬
      </h1>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md"
      >
        <div className="mb-4">
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              nameError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {nameError && (
            <p className="text-red-500 text-sm mt-1">{nameError}</p>
          )}
        </div>

        <div className="mb-4">
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg ${
              emailError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>

        <div className="mb-4">
          <textarea
            ref={messageRef}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className={`w-full p-3 border rounded-lg h-32 ${
              messageError ? "border-red-500" : "border-gray-300"
            }`}
          />
          {messageError && (
            <p className="text-red-500 text-sm mt-1">{messageError}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-orangeBrand text-white w-full py-3 rounded-lg hover:bg-orange-600 transition"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </main>
  );
}