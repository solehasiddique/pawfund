"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function AdoptMeModal({ dog, onClose }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // ---------------- VALIDATORS ----------------
  const validateName = (value: string) => {
    if (!value.trim()) return "Name is required";
    if (/[^A-Za-z\s]/.test(value)) {
      return "Only letters and spaces allowed";
    }
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";

    if (
      !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
    ) {
      return "Please enter a valid email";
    }

    return "";
  };

  const validateMessage = (value: string) => {
    if (!value.trim()) return "Message is required";

    const wordCount = value.trim().split(/\s+/).filter(Boolean).length;

    if (wordCount > 20) {
      return "Message cannot exceed 20 words";
    }

    return "";
  };

  // ---------------- HANDLE CHANGE ----------------
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "name") {
      setNameError(validateName(value));
    }

    if (name === "email") {
      setEmailError(validateEmail(value));
    }

    if (name === "message") {
      setMessageError(validateMessage(value));
    }
  };

  // ---------------- HANDLE SUBMIT ----------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameErr = validateName(form.name);
    const emailErr = validateEmail(form.email);
    const messageErr = validateMessage(form.message);

    setNameError(nameErr);
    setEmailError(emailErr);
    setMessageError(messageErr);

    if (nameErr || emailErr || messageErr) return;

    setLoading(true);

    try {
      // In handleSubmit, replace the try block:
const res = await fetch("/api/adopt", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ...form, dogId: dog._id }),
});

if (res.ok) {
  setSuccess(true);
  setForm({ name: "", email: "", message: "" });
  setTimeout(() => onClose(), 2000);
} else {
  const data = await res.json();
  // Surface server-side errors back into the form
  if (data.errors?.name) setNameError(data.errors.name);
  if (data.errors?.email) setEmailError(data.errors.email);
  if (data.errors?.message) setMessageError(data.errors.message);
}
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const wordCount = form.message.trim().split(/\s+/).filter(Boolean).length;

  const isNameValid = !validateName(form.name);
const isEmailValid = !validateEmail(form.email);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center"
      >
        {success ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex flex-col items-center space-y-4"
          >
            <span className="text-5xl">🎉</span>
            <h3 className="text-xl font-semibold text-green-600">
              Adoption Request Sent!
            </h3>
            <p className="text-gray-600">
              We’ll contact you soon about {dog.name} 🐾
            </p>
          </motion.div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-[#D46A1F] mb-2">
              Adopt {dog.name} 🐶
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              {dog.story}
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 text-left"
            >
              {/* NAME */}
              <input
                ref={nameRef}
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                
                className={`w-full border rounded-lg px-4 py-2 ${
                  nameError ? "border-red-500" : ""
                }`}
              />

              {nameError && (
                <p className="text-red-500 text-sm">
                  {nameError}
                </p>
              )}

              {/* EMAIL */}
              <input
  ref={emailRef}
  type="email"
  name="email"
  placeholder="Your Email"
  value={form.email}
  onChange={handleChange}
  disabled={!isNameValid}
  className={`w-full border rounded-lg px-4 py-2 ${
    emailError ? "border-red-500" : ""
  } ${!isNameValid ? "bg-gray-100 cursor-not-allowed" : ""}`}
/>

              {emailError && (
                <p className="text-red-500 text-sm">
                  {emailError}
                </p>
              )}

              {/* MESSAGE */}
              <textarea
  ref={messageRef}
  name="message"
  placeholder="Why you’d love to adopt?"
  value={form.message}
  onChange={handleChange}
  disabled={!isEmailValid}
  className={`w-full border rounded-lg px-4 py-2 ${
    messageError ? "border-red-500" : ""
  } ${!isEmailValid ? "bg-gray-100 cursor-not-allowed" : ""}`}
/>

              {messageError && (
                <p className="text-red-500 text-sm">
                  {messageError}
                </p>
              )}

              <p className="text-sm text-gray-500">
                {wordCount}/20 words
              </p>

              <button
                type="submit"
                disabled={loading}
                className="bg-orangeBrand text-white w-full py-2 rounded-lg hover:bg-[#FF7A2F] transition"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>
            </form>

            <button
              onClick={onClose}
              className="mt-4 text-gray-500 hover:text-black text-sm"
            >
              Cancel
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
}