import { site } from "@/content/site";

function TechMark({ name }: { name: string }) {
  const common = "h-8 w-8 shrink-0";

  switch (name) {
    case "HTML":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#E44D26" d="M6 3h20l-1.8 20.2L16 29l-8.2-5.8L6 3z" />
          <path fill="#F16529" d="M16 5v21.4l6.6-4.6L24.2 5H16z" />
          <path fill="#fff" d="M16 13.2H11l.2 2.4H16v-2.4zm0 8.4-.1.1-3.3-1 .2-2.1h-2.5l-.3 3.7L16 24.4l.1-.1V21.6z" />
          <path fill="#EBEBEB" d="M16 13.2v2.4h4.6l-.4 3.8-4.2 1.2v2.8l6.2-1.8.7-7.2.1-1.2H16z" />
        </svg>
      );
    case "CSS":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <path fill="#1572B6" d="M6 3h20l-1.8 20.2L16 29l-8.2-5.8L6 3z" />
          <path fill="#33A9DC" d="M16 5v21.4l6.6-4.6L24.2 5H16z" />
          <path fill="#fff" d="M11.2 13.2H16v-2.4H10l.3 3.2 5.7.1v-2.4h-.1l-4.7 1.5zm.4 5.2 2.1.6L16 19.7v-2.6l-4.6-1.3-.3 2.6z" />
          <path fill="#EBEBEB" d="M16 10.8v2.4h5.1l-.3 2.4H16v2.4h4.4L20 21.6 16 22.8v2.7l6.1-1.8.8-8.4.2-2.5H16z" />
        </svg>
      );
    case "JavaScript":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path
            fill="#111"
            d="M18.2 23.3c.4.7 1 .1.2 1.8 1.4 1 3.2.8 4.2-.2 1-1 .8-3.2-.4-4.4l-1.6-1.1c-.4-.3-.5-.6-.2-.9.3-.3.8-.2 1.2 0 .6.4 1 .1.2.8l1.6-1c-.7-1-2-1.5-3.3-1.2-1.5.3-2.5 1.5-2.4 3 .1.8.5 1.5 1.3 2l1.4 1c.5.3.6.7.3 1-.4.4-1.1.3-1.6 0-.5-.4-1 .1-.4.8zm-7.4.2c.3.5.7 1 1.3 1.1.6.1 1.1-.1 1.4-.6.2-.3.3-.7.3-2.6v-7.2h2.4v7.3c0 2.4-.1 3.4-.8 4.3-1 1.3-2.8 1.6-4.3 1-1.3-.6-2.2-1.8-2.3-3.2l2 0z"
          />
        </svg>
      );
    case "PHP":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="16" fill="#777BB4" />
          <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700" fontFamily="Arial, sans-serif">
            PHP
          </text>
        </svg>
      );
    case "MySQL":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#00758F" />
          <text x="16" y="21" textAnchor="middle" fill="#F29111" fontSize="10" fontWeight="800" fontFamily="Arial, sans-serif">
            SQL
          </text>
        </svg>
      );
    case "Photoshop":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="6" fill="#001E36" />
          <rect x="1" y="1" width="30" height="30" rx="5" fill="none" stroke="#31A8FF" strokeWidth="2" />
          <path fill="#31A8FF" d="M9 23V9.2h5.2c1.8 0 3 .3 3.8 1 .8.7 1.2 1.7 1.2 3 0 1.4-.5 2.4-1.4 3.1-.9.7-2.2 1.1-3.9 1.1H12V23H9zm3-7.2h1.8c.9 0 1.5-.2 1.9-.5.4-.3.6-.8.6-1.5 0-.6-.2-1.1-.6-1.4-.4-.3-1-.4-1.8-.4H12V15.8z" />
        </svg>
      );
    case "AI":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#C084FC" />
          <path fill="#1A0B24" d="M16 7.2 18.4 14h7.2l-5.8 4.2 2.2 6.8L16 21.2 9.8 25l2.2-6.8L6.2 14h7.2L16 7.2z" />
        </svg>
      );
    case "Cursor":
      return (
        <svg className={common} viewBox="0 0 32 32" aria-hidden>
          <rect width="32" height="32" rx="8" fill="#fff" />
          <path fill="#111" d="M8 6.5 24.5 16 16.8 18.2 14 25.8 8 6.5z" />
          <path fill="#888" d="m16.8 18.2 7.7-2.2-9.3 9.8 1.6-7.6z" />
        </svg>
      );
    default:
      return (
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-[11px] font-bold text-white">
          {name.slice(0, 2)}
        </span>
      );
  }
}

export function TechSlider() {
  const items = site.skills;

  return (
    <section aria-label="Tech stack" className="relative py-6 md:py-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#07050f] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#07050f] to-transparent md:w-28" />

      <div className="marquee overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-3 py-1">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex items-center gap-3"
              aria-hidden={copy === 1 || undefined}
            >
              {items.map((name) => (
                <li
                  key={`${copy}-${name}`}
                  className="flex h-16 min-w-[9.5rem] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4"
                >
                  <TechMark name={name} />
                  <span className="text-sm font-semibold tracking-tight text-white">{name}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
