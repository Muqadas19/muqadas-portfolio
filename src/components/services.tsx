"use client";

// Services: zig-zag cards (left → right → left → right). No 01/02/03 nav.
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";
import { SectionGridLines } from "@/components/section-grid-lines";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Services() {
  const { services } = site;
  const [active, setActive] = useState(0);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.from("[data-services='title']", {
      y: reduceMotion ? 0 : 36,
      autoAlpha: 0,
      duration: reduceMotion ? 0.01 : 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#services", start: "top 75%" },
    });

    if (reduceMotion) return;

    // Pop both ways: scroll down into view OR scroll up from below.
    gsap.utils.toArray<HTMLElement>("[data-services='card']").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 48, scale: 0.86, autoAlpha: 0 },
        {
          y: 0,
          scale: 1,
          autoAlpha: 1,
          duration: 0.75,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
            onEnter: () => setActive(index),
            onEnterBack: () => setActive(index),
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>("[data-services='blurb']").forEach((blurb) => {
      gsap.fromTo(
        blurb,
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: {
            trigger: blurb,
            start: "top 88%",
            end: "bottom 12%",
            toggleActions: "play reverse play reverse",
          },
        },
      );
    });
  }, []);

  return (
    <section id="services" className="relative overflow-hidden px-3 py-24 sm:px-4 sm:py-28 lg:px-6">
      <SectionGridLines sectionId="services" />

      <h2
        data-services="title"
        className="relative z-[1] text-center font-display text-[clamp(3.2rem,9vw,7.5rem)] leading-none text-white"
      >
        {services.title}
      </h2>

      {/* Zig-zag: wider/shorter cards hug the side lines */}
      <div data-services="list" className="relative z-[1] mx-auto mt-16 flex w-full max-w-[1400px] flex-col gap-14 sm:mt-20 sm:gap-16 lg:gap-20">
        {services.items.map((item, index) => {
          const isLeft = index % 2 === 0;
          const isActive = index === active;

          return (
            <div
              key={item.id}
              data-services="row"
              className={`flex flex-col items-center gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-8 ${
                isLeft ? "lg:justify-start lg:pl-[6%]" : "lg:flex-row-reverse lg:justify-start lg:pr-[6%]"
              }`}
            >
              <article
                data-services="card"
                onMouseEnter={() => setActive(index)}
                className={`service-card flex h-[236px] w-full max-w-[420px] flex-col justify-between rounded-[26px] p-5 sm:h-[252px] sm:max-w-[460px] sm:p-6 ${
                  isActive ? "is-active" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-base font-medium text-white/80 sm:text-lg">{item.id}</p>
                  <h3 className="whitespace-nowrap text-right text-xl font-semibold leading-tight text-white sm:text-2xl">
                    {item.name}
                  </h3>
                </div>

                <div className="flex items-end justify-between gap-3">
                  <p className="font-display text-[2.9rem] leading-none text-white italic sm:text-[3.35rem]">
                    {item.focus}
                  </p>
                  <p className="shrink-0 whitespace-nowrap text-right text-base leading-none text-white/85 sm:text-lg">
                    {item.focusLabel}
                  </p>
                </div>
              </article>

              <p
                data-services="blurb"
                className={`max-w-[280px] text-base leading-relaxed text-white/90 sm:text-lg ${
                  isLeft ? "lg:text-left" : "lg:text-right"
                }`}
              >
                {item.blurb}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
