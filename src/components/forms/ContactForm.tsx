"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
        <p className="text-green-700 font-medium">
          Thank you for reaching out. We will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          required
          className="w-full border rounded-md p-3"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full border rounded-md p-3"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Subject</label>
        <input
          className="w-full border rounded-md p-3"
          placeholder="Subject"
        />
      </div>

      <div>
        <label className="block font-medium mb-1">Message</label>
        <textarea
          required
          className="w-full border rounded-md p-3 h-32"
          placeholder="Your message"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}

