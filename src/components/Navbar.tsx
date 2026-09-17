"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mailto, site } from "@/content/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-[1180px] px-4">
      <div className="glass flex h-16 items-center justify-between rounded-full px-3 md:px-5">
        <Link
          href="/"
          className="flex items-center gap-2 pl-1 text-[15px] font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-flame to-orchid text-[11px] font-extrabold text-white">
            MI
          </span>
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 text-[13.5px] text-white/70 md:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`transition hover:text-white ${active ? "text-white" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={mailto} className="btn-flame hidden sm:inline-flex">
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
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-3 text-sm text-white/80"
            >
              {item.label}
            </Link>
          ))}
          <a href={mailto} className="btn-flame mt-1 justify-center">
            Let’s Talk
          </a>
        </nav>
      ) : null}
    </header>
  );
}
