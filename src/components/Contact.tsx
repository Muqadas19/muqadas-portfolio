"use client";

import { FormEvent } from "react";
import { mailto, site } from "@/content/site";

export function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio message from ${name || "visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `${mailto}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-anchor relative mx-auto w-full max-w-[1180px] px-4 pb-20 pt-8 md:pb-28">
      <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/45">Contact</p>
      <h2 className="mt-4 max-w-[16ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
        Let’s build something useful
      </h2>
      <p className="mt-4 max-w-[42ch] text-[15px] leading-relaxed text-white/65">
        Email is the only contact method. Messages go to {site.email}.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form onSubmit={onSubmit} className="space-y-4 rounded-board border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/80">
              Name
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              className="h-12 rounded-2xl border border-white/15 bg-white/[0.05] px-4 text-white outline-none ring-flame/40 placeholder:text-white/35 focus:ring-2"
              placeholder="Your name"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm text-white/80">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 text-white outline-none ring-flame/40 placeholder:text-white/35 focus:ring-2"
              placeholder="What do you want to build?"
            />
          </div>
          <button type="submit" className="btn-flame">
            Send email
          </button>
        </form>

        <aside className="flex flex-col justify-between rounded-board border border-white/10 bg-gradient-to-br from-flame/15 to-orchid/10 p-6 md:p-8">
          <div>
            <p className="text-sm font-medium text-white/70">Direct email</p>
            <a href={mailto} className="mt-3 block break-all text-xl font-semibold text-white">
              {site.email}
            </a>
          </div>
          <a href={mailto} className="btn-ghost mt-8 self-start">
            Let’s Talk
          </a>
        </aside>
      </div>
    </section>
  );
}
