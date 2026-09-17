"use client";

import { FormEvent, useState } from "react";
import { mailto, site } from "@/content/site";

export function FaqContact() {
  const [open, setOpen] = useState(0);

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
    <section className="relative mx-auto w-full max-w-[1180px] px-4 pb-20 pt-8 md:pb-28">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Send a note
          </h2>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-white/65">
            Share a short note and it will open in your email app.
          </p>
          <a href={mailto} className="btn-flame mt-8">
            Let’s Talk
          </a>

          <form onSubmit={onSubmit} className="mt-10 space-y-4">
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
                rows={4}
                className="rounded-2xl border border-white/15 bg-white/[0.05] px-4 py-3 text-white outline-none ring-flame/40 placeholder:text-white/35 focus:ring-2"
                placeholder="What do you want to build?"
              />
            </div>
            <button type="submit" className="btn-ghost">
              Send email
            </button>
          </form>
        </div>

        <div className="space-y-3">
          <h2 className="px-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Questions
          </h2>
          {site.faqs.map((item, index) => {
            const expanded = open === index;
            const panelId = `faq-panel-${index}`;
            return (
              <div key={item.q} className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04]">
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[15px] font-medium text-white"
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    onClick={() => setOpen(expanded ? -1 : index)}
                  >
                    {item.q}
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/15 text-lg leading-none"
                      aria-hidden
                    >
                      {expanded ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  hidden={!expanded}
                  className="px-5 pb-5 text-[14px] leading-relaxed text-white/65"
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
