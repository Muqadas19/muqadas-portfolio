import { mailto, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="relative mx-auto mt-10 w-full max-w-[1180px] overflow-hidden px-4 pb-8 pt-6">
      <div className="relative overflow-hidden rounded-board border border-white/10 bg-gradient-to-br from-white/[0.07] via-[#12081f]/80 to-flame/10 p-7 shadow-glow md:p-10">
        <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-orchid/25 blur-3xl" aria-hidden />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-flame/20 blur-3xl" aria-hidden />

        <div className="relative grid items-end gap-8 md:grid-cols-[1.3fr_auto]">
          <div>
            <p className="text-[13px] font-medium text-flame">{site.role}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {site.fullName}
            </p>
            <p className="mt-3 max-w-[36ch] text-[15px] leading-relaxed text-white/65">
              Building useful websites and practical web apps. Email is the best way to start.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={mailto} className="btn-flame">
                Let’s Talk
              </a>
              <a
                href={site.github}
                className="btn-ghost"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </div>
          </div>

          <a
            href={mailto}
            className="relative rounded-2xl border border-white/12 bg-black/25 px-5 py-4 text-sm text-white/80 transition hover:border-flame/50 hover:text-white"
          >
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
              Email
            </span>
            <span className="mt-1 block break-all">{site.email}</span>
          </a>
        </div>
      </div>

      <p
        className="display pointer-events-none mt-6 select-none text-center text-[16vw] leading-none text-white/[0.07]"
        aria-hidden
      >
        MUQADAS
      </p>
    </footer>
  );
}
