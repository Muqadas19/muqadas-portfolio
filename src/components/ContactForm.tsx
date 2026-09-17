"use client";

import { FormEvent, useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${from}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 max-w-md space-y-3">
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
        Name
        <input
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-flame/40 focus:ring-2"
        />
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
        Your email
        <input
          required
          type="email"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-flame/40 focus:ring-2"
        />
      </label>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
        Message
        <textarea
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-flame/40 focus:ring-2"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-flame px-6 py-3 text-sm font-semibold text-[#14080a] shadow-flame"
      >
        Send via email
      </button>
    </form>
  );
}
