"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { hashHref } from "@/lib/asset";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-anchor relative mx-auto w-full max-w-[1180px] px-4 pb-20 pt-8 md:pb-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/45">FAQ</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Questions, answered
          </h2>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-white/65">
            Still unsure? Scroll to contact and send a short note.
          </p>
          <a href={hashHref("contact")} className="btn-flame mt-8">
            Let’s Talk
          </a>
        </div>

        <div className="space-y-3">
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
