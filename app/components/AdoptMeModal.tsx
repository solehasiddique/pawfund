"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AdoptMeModal({ dog, onClose }: any) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/adopt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, dogId: dog._id }),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => onClose(), 2000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
            <p className="text-gray-600">We’ll contact you soon about {dog.name} 🐾</p>
          </motion.div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-[#D46A1F] mb-2">
              Adopt {dog.name} 🐶
            </h3>
            <p className="text-sm text-gray-600 mb-4">{dog.story}</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              />
              <textarea
                name="message"
                placeholder="Why you’d love to adopt?"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>

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
