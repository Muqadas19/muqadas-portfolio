"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { hashHref } from "@/lib/asset";

function sectionId(href: string) {
  return href.replace("/#", "").replace("#", "") || "home";
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace("#", "") || "home";
      if (site.nav.some((item) => sectionId(item.href) === id)) setActive(id);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    const ids = site.nav.map((item) => sectionId(item.href));
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) {
      return () => window.removeEventListener("hashchange", syncFromHash);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-[1180px] px-4">
      <div className="glass flex h-16 items-center justify-between rounded-full px-3 md:px-5">
        <a
          href={hashHref("home")}
          className="flex items-center gap-2 pl-1 text-[15px] font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-flame to-orchid text-[11px] font-extrabold text-white">
            MI
          </span>
          {site.name}
        </a>

        <nav className="hidden items-center gap-2.5 text-[12px] text-white/70 md:flex lg:gap-4 lg:text-[13.5px]" aria-label="Primary">
          {site.nav.map((item) => {
            const id = sectionId(item.href);
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={hashHref(item.href)}
                aria-current={isActive ? "location" : undefined}
                className={`transition hover:text-white ${isActive ? "text-white" : ""}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={hashHref("contact")} className="btn-flame hidden lg:inline-flex">
            Let’s Talk
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span className={`block h-0.5 w-4 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-4 bg-white transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-4 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="glass mt-2 flex flex-col gap-1 rounded-[1.5rem] p-3 md:hidden"
          aria-label="Mobile"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={hashHref(item.href)}
              className="rounded-full px-4 py-3 text-sm text-white/80"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href={hashHref("contact")} className="btn-flame mt-1 justify-center" onClick={() => setOpen(false)}>
            Let’s Talk
          </a>
        </nav>
      ) : null}
    </header>
  );
}
