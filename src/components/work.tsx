"use client";

// Featured Work — aligned with About/Services: same padding, panel glow, clear stage width.
import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { site } from "@/data/site";
import { SectionGridLines } from "@/components/section-grid-lines";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Project = (typeof site.work.items)[number];

export function Work() {
  const { work } = site;
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const active = work.items.find((p) => p.id === activeId) ?? null;

  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.from("[data-work='title']", {
      y: reduceMotion ? 0 : 36,
      autoAlpha: 0,
      duration: reduceMotion ? 0.01 : 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#work", start: "top 75%" },
    });

    if (reduceMotion) return;

    gsap.from("[data-work='nav']", {
      y: 24,
      autoAlpha: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: "[data-work='nav']", start: "top 85%" },
    });

    gsap.from("[data-work='thumb']", {
      y: 48,
      scale: 0.94,
      autoAlpha: 0,
      duration: 0.8,
      stagger: 0.14,
      ease: "back.out(1.35)",
      scrollTrigger: { trigger: "[data-work='gallery']", start: "top 82%" },
    });
  }, []);

  useGSAP(() => {
    const el = detailRef.current;
    if (!el || !active) return;

    gsap.fromTo(
      el,
      { y: 28, scale: 0.92, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.45, ease: "back.out(1.5)" },
    );
  }, [activeId]);

  const openProject = (id: string) => setActiveId(id);
  const closeProject = () => setActiveId(null);

  return (
    <section id="work" className="relative overflow-hidden px-3 py-24 sm:px-4 sm:py-28 lg:px-6">
      <SectionGridLines sectionId="work" />

      <h2
        data-work="title"
        className="relative z-[1] text-center font-display text-[clamp(3.5rem,10vw,8rem)] leading-none text-white"
      >
        {work.title}
      </h2>

      {/* Shared stage width with About / Services */}
      <div className="relative z-[1] mx-auto mt-12 w-full max-w-[1400px] lg:mt-14">
        {/* Project switcher — panel style like About cards */}
        <nav data-work="nav" aria-label="Featured projects" className="work-nav-panel mx-auto max-w-[1100px]">
          <ul className="grid grid-cols-1 sm:grid-cols-3">
            {work.items.map((project, index) => {
              const isOn = activeId === project.id || hoveredId === project.id;
              return (
                <li key={project.id} className="border-white/8 border-b sm:border-b-0 sm:border-r sm:last:border-r-0">
                  <button
                    type="button"
                    onClick={() => openProject(project.id)}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`group flex w-full items-center gap-4 px-5 py-5 text-left transition-colors duration-300 sm:flex-col sm:items-start sm:gap-2.5 sm:px-6 sm:py-6 ${
                      isOn ? "bg-[var(--color-accent)]/10" : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`font-display text-[1.65rem] leading-none italic transition-colors ${
                        isOn ? "text-[var(--color-accent)]" : "text-white/30 group-hover:text-white/50"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-[15px] font-semibold leading-snug transition-colors sm:text-base ${
                        isOn ? "text-white" : "text-white/65 group-hover:text-white/90"
                      }`}
                    >
                      {project.name}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Stacked projects — same center column, Services-like rhythm */}
        <div data-work="gallery" className="relative mx-auto mt-14 max-w-[1100px] lg:mt-16">
          <div
            className={`flex flex-col gap-14 transition-all duration-500 sm:gap-16 lg:gap-20 ${
              active ? "pointer-events-none scale-[0.97] opacity-35 blur-[1px]" : "opacity-100"
            }`}
          >
            {work.items.map((project, index) => (
              <ProjectThumb
                key={project.id}
                project={project}
                index={index}
                showView={hoveredId === project.id && !active}
                onHover={setHoveredId}
                onOpen={openProject}
              />
            ))}
          </div>

          {active ? (
            <div
              ref={detailRef}
              className="absolute inset-0 z-10 flex items-center justify-center p-2 sm:p-4"
              onMouseLeave={closeProject}
            >
              <article className="work-detail-card flex w-full max-w-[580px] flex-col overflow-hidden rounded-[24px]">
                <div className="relative w-full bg-[#0a1014] px-3 pt-3 sm:px-4 sm:pt-4">
                  <Image
                    src={active.image}
                    alt={active.name}
                    width={1100}
                    height={700}
                    unoptimized
                    className="h-auto w-full rounded-[14px] object-contain"
                  />
                </div>
                <div className="space-y-3 px-5 py-5 sm:px-6 sm:py-6">
                  <p className="text-sm text-[var(--color-accent)]">{active.type}</p>
                  <h3 className="text-xl font-semibold text-white sm:text-2xl">{active.name}</h3>
                  <p className="text-[15px] leading-relaxed text-white/85 sm:text-base">{active.body}</p>
                  <p className="text-sm text-white/55">
                    <span className="text-white/70">Tech: </span>
                    {active.tech}
                  </p>
                </div>
              </article>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProjectThumb({
  project,
  index,
  showView,
  onHover,
  onOpen,
}: {
  project: Project;
  index: number;
  showView: boolean;
  onHover: (id: string | null) => void;
  onOpen: (id: string) => void;
}) {
  return (
    <button
      type="button"
      data-work="thumb"
      aria-label={`View ${project.name}`}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onOpen(project.id)}
      className="work-thumb group relative mx-auto block w-full overflow-hidden rounded-[24px] text-left"
    >
      {/* Top meta row — like Services card header */}
      <div className="absolute inset-x-0 top-0 z-[1] flex items-start justify-between gap-3 p-4 sm:p-5">
        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-sm font-medium text-white/85 backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-white/15 bg-black/45 px-3 py-1 text-sm font-medium text-[var(--color-accent)] backdrop-blur-sm">
          {project.type}
        </span>
      </div>

      <Image
        src={project.image}
        alt={project.name}
        width={1200}
        height={780}
        unoptimized
        className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
        sizes="(max-width: 1100px) 100vw, 1100px"
      />

      <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-5 pt-20 sm:px-6 sm:pb-6">
        <span className="block text-lg font-semibold text-white sm:text-xl">{project.name}</span>
      </span>

      <span
        className={`pointer-events-none absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/55 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 ${
          showView ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        View
      </span>
    </button>
  );
}
