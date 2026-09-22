"use client";

import { useState } from "react";

const QUESTION = "What types of companies is Structa best for?";
const ANSWER =
  "Clear communication fast delivery helped our team launch confidently with scalable website.Clear communication fast delivery helped our team launch confidently with scalable website.";

const ITEMS = Array.from({ length: 5 }, () => ({
  question: QUESTION,
  answer: ANSWER,
}));

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="faq-frame">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/faq-tubes.png?v=4" alt="" className="faq-tubes" />

      <span className="faq-badge">
        <span className="faq-badge-inner">Frequently Asked Questions</span>
      </span>

      <h2 className="faq-headline">
        <span>
          <span className="faq-h-grad">Automate The Manual, </span>
          <span className="faq-h-white">Accelerate The Future. Our</span>
        </span>
        <span>
          <span className="faq-h-grad">Custom AI </span>
          <span className="faq-h-brown">Deliver </span>
          <span className="faq-h-white">Measurable Growth</span>
        </span>
      </h2>

      <div className="faq-layout">
        <article className="faq-cta">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/faq-avatar.png" alt="" className="faq-cta-avatar" />
          <div className="faq-cta-copy">
            <h3>BOOK A 15 MIN CALLL</h3>
            <p>
              If you have any questions,just book a 15-minute
              <br />
              call with us before subscribing
            </p>
            <a href="#contact" className="faq-cta-btn">
              Book a Free Call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M3 7h8M8 3.5 11.5 7 8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </article>

        <div className="faq-list">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`faq-item${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  className="faq-item-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.question}</span>
                  <span className="faq-item-icon" aria-hidden="true">
                    {isOpen ? "—" : "+"}
                  </span>
                </button>
                {isOpen ? <p className="faq-item-a">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
