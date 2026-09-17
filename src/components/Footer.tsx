import { site } from "@/content/site";
import { hashHref } from "@/lib/asset";

export function Footer() {
  return (
    <footer className="relative mx-auto mt-6 w-full max-w-[1180px] overflow-hidden px-4 pb-8 pt-6">
      <div className="relative overflow-hidden rounded-board border border-white/10 bg-gradient-to-br from-white/[0.07] via-[#12081f]/80 to-flame/10 p-7 shadow-glow md:p-10">
        <div className="absolute -right-16 top-0 h-48 w-48 rounded-full bg-orchid/25 blur-3xl" aria-hidden />
        <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-flame/20 blur-3xl" aria-hidden />

        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">{site.name}</p>
            <p className="mt-3 max-w-[28ch] text-[14px] leading-relaxed text-white/60">{site.subline}</p>
            <a href={hashHref("contact")} className="btn-flame mt-6">
              Let’s Talk
            </a>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-white/70" aria-label="Footer site">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">Site</p>
            {site.nav.map((item) => (
              <a key={item.href} href={hashHref(item.href)} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <nav className="flex flex-col gap-2 text-sm text-white/70" aria-label="Footer explore">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">Explore</p>
            {site.footerExplore.map((item) => (
              <a key={item.label} href={hashHref(item.href)} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-white/70">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">Email</p>
            <a href={`mailto:${site.email}`} className="mt-2 block break-all hover:text-white">
              {site.email}
            </a>
            <p className="mt-6 text-[13px] text-white/45">© 2026 {site.fullName}</p>
          </div>
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
