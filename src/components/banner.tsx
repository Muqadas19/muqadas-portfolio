"use client";

// This file runs in the browser because the entrance motion uses GSAP.
import { useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Me" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

// One clean italic M. Same cyan glow as the reference letter, with no extra piece stuck on it.
function Mark() {
  return (
    <svg viewBox="0 0 76 52" className="h-12 w-16" aria-hidden="true">
      <defs>
        <linearGradient id="m-mark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0B7A86" />
          <stop offset="48%" stopColor="#17E8FF" />
          <stop offset="100%" stopColor="#0B7A86" />
        </linearGradient>
      </defs>
      <g transform="translate(14 3) skewX(-13)">
        <path
          fill="url(#m-mark)"
          d="M0 46V0h12L28 20 44 0h12v46H44V16L28 36 12 16v30H0z"
        />
      </g>
    </svg>
  );
}

export function Banner() {
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    // People who turn off motion in their system settings see the page already in place.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    // Name appears first, then the sentence and buttons.
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .from("[data-hero='name']", { y: 28, autoAlpha: 0, duration: 0.9 })
      .from("[data-hero='copy']", { y: 18, autoAlpha: 0, duration: 0.7 }, "-=0.45")
      .from("[data-hero='card']", { y: 16, autoAlpha: 0, duration: 0.8 }, "-=0.4");

    return () => {
      timeline.kill();
    };
  });

  return (
    <section id="home" className="relative h-[100dvh] min-h-[640px] overflow-hidden">
      {/* Desk scene kept as a real photo. Soft fade at the bottom only for the text. */}
      <div className="absolute inset-0">
        <Image
          src="/hero/hero-desk-nobeam.png"
          alt=""
          fill
          priority
          className="hero-drift object-cover object-top"
          sizes="100vw"
        />
        {/* Soft narrow V light from the M down onto the girl. */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden="true"
          style={{
            backgroundImage: "url(/hero/hero-beam-v6.png)",
            backgroundSize: "100% 100%",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
            mixBlendMode: "screen",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-black/35" />
      </div>

      <header className="absolute inset-x-0 top-0 z-20 flex h-24 items-center px-5 sm:px-12">
        <nav className="hidden max-w-[46%] flex-wrap items-center gap-x-5 gap-y-1 text-lg font-medium text-white md:flex xl:gap-x-7 xl:text-xl" aria-label="Page">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:opacity-70">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#home" className="absolute left-1/2 -translate-x-1/2" aria-label="M">
          <Mark />
        </a>

        {/* Gradient button, same job as Get Started in the reference. */}
        <a
          href="#contact"
          className="btn-gloss ml-auto hidden rounded-xl px-9 py-4 text-xl font-semibold md:inline-flex"
        >
          Get Started
        </a>

        <button
          type="button"
          className="ml-auto rounded-full border border-white/30 px-4 py-2 text-sm text-white md:hidden"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </header>

      {menuOpen ? (
        <nav
          className="absolute inset-x-0 top-24 z-20 flex flex-col gap-3 bg-black/80 px-5 py-4 text-lg text-white md:hidden"
          aria-label="Page"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-gloss w-fit rounded-xl px-4 py-2 font-semibold"
          >
            Get Started
          </a>
        </nav>
      ) : null}

      <h1
        data-hero="name"
        className="absolute inset-x-0 top-[18%] z-10 whitespace-nowrap text-center font-display text-[clamp(3rem,12vw,10.5rem)] leading-[0.9] text-white"
      >
        Muqadas Ibrar
      </h1>

      {/* Sentence and buttons sit on the bottom left, same place as the reference. */}
      <div data-hero="copy" className="absolute bottom-8 left-5 z-10 max-w-xl sm:bottom-14 sm:left-12 sm:max-w-2xl">
        <p className="text-left text-2xl font-medium leading-snug text-white md:text-3xl md:leading-[1.25]">
          I build AI-powered solutions, modern websites, and practical software applications that turn ideas into useful digital experiences.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#contact" className="btn-gloss rounded-xl px-9 py-4 text-xl font-semibold">
            Hire Me
          </a>
          <a href="#work" className="rounded-xl bg-white px-9 py-4 text-xl font-semibold text-[#101214]">
            View My Work
          </a>
        </div>
      </div>

      {/* Empty slot — shared scroll portrait sits here on Home (style 1). */}
      <div
        data-hero="card"
        data-portrait-slot="hero"
        className="absolute bottom-16 right-10 z-10 hidden aspect-[396/233] w-[27%] max-w-[400px] overflow-hidden rounded-[20px] md:block"
      />
    </section>
  );
}
