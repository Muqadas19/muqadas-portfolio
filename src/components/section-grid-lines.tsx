"use client";

// Section background only — sits behind content (z-0), never over the whole page.
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function SectionGridLines({ sectionId }: { sectionId: string }) {
  const tipA = useRef<HTMLSpanElement>(null);
  const tipB = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const tips = [tipA.current, tipB.current].filter(Boolean);
    if (reduceMotion || tips.length === 0) return;

    const tween = gsap.fromTo(
      tips,
      { top: "10%" },
      {
        top: "88%",
        ease: "none",
        scrollTrigger: {
          trigger: `#${sectionId}`,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.45,
        },
      },
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [sectionId]);

  // 4 background lines: sides + two mids (outside big script titles)
  const lines = ["10%", "26%", "74%", "90%"];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {lines.map((left, index) => (
        <div
          key={left}
          className="about-grid-line absolute"
          style={{ left }}
        >
          {index === 0 ? <span ref={tipA} className="about-grid-tip" /> : null}
          {index === 3 ? <span ref={tipB} className="about-grid-tip" /> : null}
        </div>
      ))}
    </div>
  );
}
