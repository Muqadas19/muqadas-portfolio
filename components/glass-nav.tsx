"use client";

import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import { ArrowUpRight, List, X } from "@phosphor-icons/react";
import { navItems, site } from "@/content/site";

export function GlassNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const listRef = useRef<HTMLDivElement>(null);
  const pinned = useRef<string | null>(null);

  const lit = hovered ?? active;

  const movePillTo = (href: string) => {
    const list = listRef.current;
    if (!list) return;
    const link = list.querySelector<HTMLAnchorElement>(`a[href="${href}"]`);
    if (!link) return;
    const listBox = list.getBoundingClientRect();
    const linkBox = link.getBoundingClientRect();
    if (linkBox.width < 8) return;
    setPill((prev) => {
      const left = linkBox.left - listBox.left;
      const width = linkBox.width;
      if (prev.ready && prev.left === left && prev.width === width) return prev;
      return { left, width, ready: true };
    });
  };

  useEffect(() => {
    const ids = navItems.map((item) => item.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          const next = `#${visible.target.id}`;
          if (pinned.current && pinned.current !== next) return;
          pinned.current = null;
          setActive(next);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    movePillTo(lit);
  }, [lit]);

  useEffect(() => {
    const list = listRef.current;
    const onResize = () => movePillTo(lit);
    window.addEventListener("resize", onResize);
    const observer = list ? new ResizeObserver(onResize) : null;
    if (list) observer?.observe(list);
    const retry = window.setTimeout(onResize, 120);
    return () => {
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
      window.clearTimeout(retry);
    };
  }, [lit]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const list = listRef.current;
    if (!list) return;
    const links = [...list.querySelectorAll<HTMLAnchorElement>(".nav-link")];
    const x = event.clientX;
    const under = links.find((link) => {
      const box = link.getBoundingClientRect();
      return x >= box.left && x <= box.right;
    });
    if (under) {
      const href = under.getAttribute("href");
      if (href) setHovered(href);
    }
  };

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-[70] px-5 pt-5 sm:px-7 lg:px-8">
      <nav
        className="pointer-events-auto mx-auto grid max-w-[1360px] grid-cols-[1fr_auto_1fr] items-center gap-3"
        aria-label="Primary"
      >
        <a href="#home" className="logo-chip justify-self-start">
          <span className="logo-mark">{site.brandName}</span>
        </a>

        <div
          ref={listRef}
          className="nav-center-pill hidden items-center justify-self-center md:flex"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHovered(null)}
        >
          <span
            className={pill.ready ? "nav-slider is-ready" : "nav-slider"}
            style={{ left: pill.left, width: pill.width }}
            aria-hidden
          />
          <ul className="relative z-[1] flex items-center">
            {navItems.map((item) => {
              const isActive = lit === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={isActive ? "nav-link nav-link-active" : "nav-link"}
                    onPointerEnter={() => setHovered(item.href)}
                    onClick={() => {
                      pinned.current = item.href;
                      setActive(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center justify-end gap-2 justify-self-end">
          <a href="#contact" className="collaborate-btn hidden sm:inline-flex">
            <span>{site.hero.cta}</span>
            <ArrowUpRight size={15} weight="bold" />
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-400/30 bg-white/5 text-white md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="pointer-events-auto mx-auto mt-3 max-w-[1360px] rounded-3xl border border-fuchsia-400/20 bg-black/90 p-5 md:hidden">
          <ul className="grid gap-2 text-sm font-medium text-white/80">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-4 py-2 hover:bg-white/5 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="collaborate-btn mt-1 inline-flex"
                onClick={() => setOpen(false)}
              >
                <span>{site.hero.cta}</span>
                <ArrowUpRight size={15} weight="bold" />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
