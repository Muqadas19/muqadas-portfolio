"use client";

import { useState } from "react";
import { site } from "@/content/site";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-3">
      {site.faqs.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q} className="rounded-2xl border border-white/10 bg-white/[0.04]">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-white"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.q}
                <span aria-hidden className="text-lg text-white/50">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
            </h3>
            {isOpen ? (
              <p className="px-5 pb-4 text-sm leading-6 text-white/65">{item.a}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
