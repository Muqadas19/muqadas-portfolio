import { site } from "@/data/site";

export function Footer() {
  const { name, role, pitch, email, github, location, nav, upwork } = site;
  const year = new Date().getFullYear();

  const mid = Math.ceil(nav.length / 2);
  const colA = nav.slice(0, mid);
  const colB = nav.slice(mid);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 px-3 pb-4 pt-16 sm:px-4 sm:pt-20 lg:px-6">
      <div className="relative z-[1] mx-auto grid w-full max-w-[1400px] gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.85fr)_minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-12">
        {/* Brand block — fuller copy */}
        <div>
          <a
            href="#home"
            aria-label={`${name} home`}
            className="inline-flex font-display text-5xl leading-none text-[var(--color-accent)] transition-opacity hover:opacity-80"
          >
            M
          </a>
          <p className="mt-5 font-display text-3xl leading-none text-white sm:text-4xl">{name}</p>
          <p className="mt-3 text-base text-white/55 sm:text-lg">
            {role} · {location}
          </p>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/45 sm:text-base">
            {pitch}
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-5 inline-block text-base font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80 sm:text-lg"
          >
            {email}
          </a>
          <div className="mt-6 flex items-center gap-5">
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-white/70 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
            <a
              href={`mailto:${email}`}
              aria-label="Email"
              className="text-white/70 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden>
                <path
                  d="M4 7.5h16v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            {upwork ? (
              <a
                href={upwork}
                target="_blank"
                rel="noreferrer"
                className="text-base font-medium text-white/70 transition-colors hover:text-white"
              >
                Upwork
              </a>
            ) : null}
          </div>
        </div>

        <nav aria-label="Footer primary" className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-white/35">Explore</p>
          {colA.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-white/80 transition-colors hover:text-white sm:text-xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Footer secondary" className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.18em] text-white/35">More</p>
          {colB.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-white/80 transition-colors hover:text-white sm:text-xl"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-8 lg:items-end lg:text-right">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-lg text-white/85 transition-colors hover:text-white sm:text-xl"
          >
            Back to Top
            <span aria-hidden className="text-xl leading-none">
              ↑
            </span>
          </a>
          <div className="space-y-2 text-base text-white/55 sm:text-lg">
            <p className="font-medium text-white/80">Available for work</p>
            <p>AI · Web · Software · Design</p>
            <p>{location}</p>
          </div>
          <p className="text-sm text-white/40 sm:text-base">
            © {year} {name}. All rights reserved.
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="footer-watermark relative z-0 mt-14 select-none text-center font-display leading-[0.85] text-[clamp(3.75rem,17vw,12rem)] sm:mt-16"
      >
        {name}
      </p>
    </footer>
  );
}
