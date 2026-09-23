"use client";

// One portrait that morphs in 3 scroll styles: hero corner → mid → About full card (and back up).
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Box = { left: number; top: number; width: number; height: number; radius: number };

function readBox(el: Element | null): Box | null {
  if (!el) return null;
  const r = el.getBoundingClientRect();
  if (r.width < 8 || r.height < 8) return null;
  const styles = window.getComputedStyle(el);
  return {
    left: r.left,
    top: r.top,
    width: r.width,
    height: r.height,
    radius: parseFloat(styles.borderRadius) || 20,
  };
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function mix(a: Box, b: Box, t: number): Box {
  return {
    left: lerp(a.left, b.left, t),
    top: lerp(a.top, b.top, t),
    width: lerp(a.width, b.width, t),
    height: lerp(a.height, b.height, t),
    radius: lerp(a.radius, b.radius, t),
  };
}

export function ScrollPortrait() {
  const frameRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const frame = frameRef.current;
    if (!frame) return;

    const apply = (box: Box) => {
      gsap.set(frame, {
        left: box.left,
        top: box.top,
        width: box.width,
        height: box.height,
        borderRadius: box.radius,
        opacity: 1,
        visibility: "visible",
      });
    };

    const update = () => {
      const heroEl = document.querySelector('[data-portrait-slot="hero"]');
      const aboutEl = document.querySelector('[data-portrait-slot="about"]');
      const hero = readBox(heroEl);
      const about = readBox(aboutEl);
      if (!hero || !about || !aboutEl) return;

      if (reduceMotion) {
        // Hard cut: About slot near center → use About, else hero.
        apply(about.top < window.innerHeight * 0.55 ? about : hero);
        return;
      }

      // Progress from “About entering view” → “About locked in place”.
      const start = window.innerHeight * 0.92;
      const end = window.innerHeight * 0.22;
      const aboutTop = aboutEl.getBoundingClientRect().top;
      const p = gsap.utils.clamp(0, 1, (start - aboutTop) / (start - end));

      // Style 1 hero → style 2 mid → style 3 full About (reverses on scroll up).
      const mid: Box = {
        left: lerp(hero.left, about.left, 0.42),
        top: lerp(hero.top, about.top, 0.38),
        width: lerp(hero.width, about.width, 0.58),
        height: lerp(hero.height, about.height, 0.58),
        radius: lerp(hero.radius, about.radius, 0.5),
      };

      if (p <= 0) apply(hero);
      else if (p < 0.45) apply(mix(hero, mid, p / 0.45));
      else if (p < 1) apply(mix(mid, about, (p - 0.45) / 0.55));
      else apply(about); // sticks to About while that section scrolls
    };

    update();

    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: update,
      onRefresh: update,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
      st.kill();
    };
  }, []);

  return (
    <div
      ref={frameRef}
      data-portrait="flying"
      className="pointer-events-none fixed z-30 hidden overflow-hidden md:block"
      style={{ visibility: "hidden" }}
      aria-hidden
    >
      <Image
        src="/hero/corner-muqadas.png"
        alt=""
        fill
        unoptimized
        priority
        className="object-cover object-[center_28%]"
        sizes="100vw"
      />
    </div>
  );
}
