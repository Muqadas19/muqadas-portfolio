"use client";

// FAQ — editorial split layout (not a generic stacked accordion).
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Faq() {
  const { faq, email } = site;
  const [openId, setOpenId] = useState<string>(faq.items[0]?.id ?? "");
  const stageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stage = stageRef.current;

    gsap.from("[data-faq='title']", {
      y: reduceMotion ? 0 : 36,
      autoAlpha: 0,
      duration: reduceMotion ? 0.01 : 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#faq", start: "top 75%", once: true },
    });

    if (reduceMotion || !stage) return;

    gsap.from("[data-faq='aside']", {
      x: -24,
      autoAlpha: 0,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: { trigger: stage, start: "top 85%", once: true },
    });

    // Play once and stay visible — reverse was hiding the question list
    gsap.from("[data-faq='row']", {
      y: 28,
      autoAlpha: 0,
      duration: 0.65,
      stagger: 0.07,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: {
        trigger: stage,
        start: "top 85%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);

  const openItem = faq.items.find((item) => item.id === openId) ?? faq.items[0];

  return (
    <section id="faq" className="relative overflow-hidden px-3 py-24 sm:px-4 sm:py-28 lg:px-6">
      <h2
        data-faq="title"
        className="relative z-[1] text-center font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-white"
      >
        {faq.title}
      </h2>

      <div
        ref={stageRef}
        className="relative z-[1] mx-auto mt-14 grid w-full max-w-[1400px] gap-10 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:items-start lg:gap-16"
      >
        {/* Left — sticky intro + live answer preview */}
        <aside data-faq="aside" className="lg:sticky lg:top-28">
          <p className="text-sm uppercase tracking-[0.2em] text-white/40">Ask me anything</p>
          <h3 className="mt-4 max-w-[14ch] text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Clear answers before we start.
          </h3>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-white/60">
            Pick a question on the right. I keep things practical — for students, clients, and remote work.
          </p>

          <div className="faq-preview mt-8 hidden rounded-[24px] p-6 lg:block">
            <p className="font-display text-4xl italic text-[var(--color-accent)]">
              {String(faq.items.findIndex((i) => i.id === openItem?.id) + 1).padStart(2, "0")}
            </p>
            <p className="mt-4 text-lg font-semibold leading-snug text-white">{openItem?.question}</p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/70">{openItem?.answer}</p>
          </div>

          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80"
          >
            Still unsure? Email me
            <span aria-hidden>→</span>
          </a>
        </aside>

        {/* Right — question list (click to reveal) */}
        <div className="flex flex-col border-t border-white/10">
          {faq.items.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} data-faq="row" className="border-b border-white/10">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(item.id)}
                  className={`group flex w-full items-start gap-4 py-5 text-left transition-colors sm:gap-6 sm:py-6 ${
                    isOpen ? "text-white" : "text-white/55 hover:text-white/85"
                  }`}
                >
                  <span
                    className={`font-display mt-0.5 shrink-0 text-2xl italic leading-none sm:text-3xl ${
                      isOpen ? "text-[var(--color-accent)]" : "text-white/25 group-hover:text-white/40"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block text-lg font-semibold leading-snug sm:text-xl">
                      {item.question}
                    </span>
                    {/* Mobile answer (desktop uses left preview) */}
                    <span
                      className={`grid transition-[grid-template-rows] duration-300 ease-out lg:hidden ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <span className="overflow-hidden">
                        <span className="mt-3 block text-[15px] font-normal leading-relaxed text-white/70">
                          {item.answer}
                        </span>
                      </span>
                    </span>
                  </span>
                  <span
                    aria-hidden
                    className={`mt-1 text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-[var(--color-accent)]" : "text-white/30"
                    }`}
                  >
                    +
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
