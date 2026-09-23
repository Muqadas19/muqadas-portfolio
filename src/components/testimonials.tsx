"use client";

// Testimonials: horizontal slide + staggered cards (Codium Positive Words style). No 01/02/03.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";
import { SectionGridLines } from "@/components/section-grid-lines";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`text-sm leading-none ${i < count ? "text-[#f0c14b]" : "text-white/20"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const letters = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[var(--color-accent)]/20 text-xs font-semibold text-white">
      {letters}
    </span>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  stars,
  offset,
}: {
  quote: string;
  name: string;
  role: string;
  stars: number;
  offset: "up" | "down";
}) {
  return (
    <article
      data-testimonials="card"
      className={`testimonial-card flex w-[300px] shrink-0 flex-col justify-between rounded-[22px] p-5 sm:w-[340px] sm:p-6 ${
        offset === "up" ? "sm:mt-0" : "sm:mt-12"
      }`}
    >
      <p className="text-[15px] leading-relaxed text-white/90 sm:text-base">“{quote}”</p>
      <div className="mt-6 space-y-4">
        <Stars count={stars} />
        <div className="flex items-center gap-3">
          <Initials name={name} />
          <p className="text-sm leading-snug">
            <span className="font-semibold text-white">{name}</span>
            <span className="text-white/50">, {role}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export function Testimonials() {
  const { testimonials } = site;
  // Duplicate for seamless slide loop
  const loop = [...testimonials.items, ...testimonials.items];

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.from("[data-testimonials='title']", {
      y: reduceMotion ? 0 : 36,
      autoAlpha: 0,
      duration: reduceMotion ? 0.01 : 0.9,
      ease: "power3.out",
      immediateRender: false,
      scrollTrigger: { trigger: "#testimonials", start: "top 80%", once: true },
    });

    if (reduceMotion) return;

    // Visible by default; animate in once on scroll — never reverse/hide
    gsap.from("[data-testimonials='card']", {
      y: 40,
      scale: 0.9,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "back.out(1.55)",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#testimonials",
        start: "top 78%",
        toggleActions: "play none none none",
        once: true,
      },
    });
  }, []);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 sm:py-28">
      {/* Lines stay — fill the side gutters behind the marquee */}
      <SectionGridLines sectionId="testimonials" />

      <h2
        data-testimonials="title"
        className="relative z-[1] px-[clamp(1.25rem,8vw,10%)] text-center font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-white"
      >
        {testimonials.title}
      </h2>

      {/* Full-bleed track — cards cover the width; lines show in side gaps */}
      <div className="relative z-[1] mt-14 lg:mt-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-12 bg-gradient-to-r from-[var(--color-ink)] to-transparent sm:w-20"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-12 bg-gradient-to-l from-[var(--color-ink)] to-transparent sm:w-20"
        />

        <div className="testimonial-marquee overflow-hidden py-8 sm:py-10">
          <div className="testimonial-marquee-track flex w-max items-start gap-5 sm:gap-6">
            {loop.map((item, index) => (
              <TestimonialCard
                key={`${item.id}-${index}`}
                quote={item.quote}
                name={item.name}
                role={item.role}
                stars={item.stars}
                offset={index % 2 === 0 ? "up" : "down"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
