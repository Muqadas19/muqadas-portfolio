"use client";

// About layout from the Codium reference: skills left, photo + about card center, edu/exp right.
import { useState, type ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";
import { SectionGridLines } from "@/components/section-grid-lines";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function TechLogo({ icon, name, size = 48 }: { icon: string; name: string; size?: number }) {
  return (
    <Image
      src={`https://skillicons.dev/icons?i=${icon}`}
      alt={name}
      width={size}
      height={size}
      unoptimized
      className="rounded-[12px]"
    />
  );
}

function AboutPanel({
  children,
  className = "",
  glow = false,
}: {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`about-panel ${glow ? "about-panel-glow" : ""} ${active ? "is-active" : ""} ${className}`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export function About() {
  const { about } = site;
  const sliderLogos = [...about.techLogos, ...about.techLogos];

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.from("[data-about='title']", {
      y: reduceMotion ? 0 : 36,
      autoAlpha: 0,
      duration: reduceMotion ? 0.01 : 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#about", start: "top 75%" },
    });

    if (reduceMotion) return;

    gsap.from("[data-about='stage']", {
      y: 36,
      autoAlpha: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-about='stage']", start: "top 80%" },
    });
  }, []);

  return (
    <section id="about" className="relative overflow-hidden px-3 py-24 sm:px-4 sm:py-28 lg:px-6">
      <SectionGridLines sectionId="about" />

      <h2
        data-about="title"
        className="relative z-[1] text-center font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-white"
      >
        About Me
      </h2>

      {/* Wider stage so side empty space is smaller. */}
      <div
        data-about="stage"
        className="relative z-[1] mx-auto mt-12 grid w-full max-w-[1580px] items-stretch gap-4 lg:mt-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)_minmax(0,0.85fr)] lg:gap-5"
      >
        {/* Left — tall skills card with compact 2×2 like reference */}
        <aside data-about="side-left" className="flex">
          <AboutPanel className="flex h-full w-full flex-col rounded-[20px] p-5">
            <h3 className="text-[15px] font-semibold text-white sm:text-base">{about.label}</h3>

            <div className="relative mx-auto mt-5 grid w-[70%] max-w-[168px] grid-cols-2 gap-2">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]/20 blur-2xl"
              />
              {about.techTiles.map((tech) => (
                <div
                  key={tech.icon}
                  title={tech.name}
                  className="relative flex aspect-square items-center justify-center rounded-[14px] border border-white/10 bg-[#0c1216]"
                >
                  <TechLogo icon={tech.icon} name={tech.name} size={34} />
                </div>
              ))}
            </div>

            {/* Horizontal logo slider: left → right */}
            <div className="relative mt-auto h-[56px] overflow-hidden rounded-[14px] border border-white/10 bg-[#0c1216]/75">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-6 bg-gradient-to-r from-[#0c1216] to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-6 bg-gradient-to-l from-[#0c1216] to-transparent"
              />
              <div className="tech-slider-track flex h-full items-center gap-2.5 px-2">
                {sliderLogos.map((tech, index) => (
                  <div
                    key={`${tech.icon}-${index}`}
                    className="shrink-0 rounded-full border border-white/10 bg-black/40 p-0.5"
                    title={tech.name}
                  >
                    <TechLogo icon={tech.icon} name={tech.name} size={28} />
                  </div>
                ))}
              </div>
            </div>
          </AboutPanel>
        </aside>

        {/* Center — one card: photo on top, about text under it */}
        <div data-about="center">
          <div className="about-panel flex h-full flex-col overflow-hidden rounded-[20px]">
            <div
              data-portrait-slot="about"
              className="relative aspect-[16/11] w-full bg-white/[0.04] lg:aspect-auto lg:min-h-[260px] lg:flex-[1.15]"
            />
            <div className="relative aspect-[16/11] w-full md:hidden">
              <Image
                src="/hero/corner-muqadas.png"
                alt="Muqadas Ibrar"
                fill
                unoptimized
                className="object-cover object-[center_28%]"
                sizes="100vw"
              />
            </div>
            <div className="border-t border-white/5 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[13px] leading-relaxed text-white/90 sm:text-sm sm:leading-relaxed">
                {about.body}
              </p>
            </div>
          </div>
        </div>

        {/* Right — two compact cards (reference proportions) */}
        <aside data-about="side-right" className="flex flex-col gap-[18px]">
          <AboutPanel glow className="flex flex-1 flex-col rounded-[20px] px-5 py-5">
            <p className="text-sm text-white/55">Education</p>
            <p className="mt-3 font-display text-[2.6rem] leading-none text-white italic">
              {about.education.year}
            </p>
            <p className="mt-2 text-sm text-[var(--color-accent)]">{about.education.yearNote}</p>
            <p className="mt-4 text-[15px] font-semibold leading-snug text-white sm:text-base">
              {about.education.title}
            </p>
            <p className="mt-1.5 text-sm text-white/55">{about.education.place}</p>
          </AboutPanel>

          <AboutPanel glow className="flex flex-1 flex-col rounded-[20px] px-5 py-5">
            <p className="text-sm text-white/55">Experience</p>
            <p className="mt-3 font-display text-[2.6rem] leading-none text-white italic">
              {about.experience.highlight}
            </p>
            <p className="mt-4 text-[15px] font-semibold leading-snug text-white sm:text-base">
              {about.experience.title}
            </p>
            <p className="mt-1.5 text-sm text-white/55">{about.experience.place}</p>
          </AboutPanel>
        </aside>
      </div>
    </section>
  );
}
