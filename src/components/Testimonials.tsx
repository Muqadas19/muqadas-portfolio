import { site } from "@/content/site";
import { hashHref } from "@/lib/asset";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-anchor relative mx-auto w-full max-w-[1180px] px-4 pb-20 pt-8 md:pb-28">
      <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/45">Testimonials</p>
      <h2 className="mt-4 max-w-[20ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
        Kind words from people I have built with
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {site.testimonials.map((item) => (
          <article
            key={item.name}
            className="flex flex-col rounded-board border border-white/10 bg-white/[0.04] p-6"
          >
            <p className="text-[15px] leading-relaxed text-white/80">“{item.quote}”</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-flame to-orchid text-[12px] font-bold text-white">
                {item.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="text-xs text-white/50">{item.role}</p>
              </div>
            </div>
            <p className="mt-4 text-flame" aria-label="5 out of 5 stars">
              ★★★★★
            </p>
          </article>
        ))}
      </div>
      <a href={hashHref("contact")} className="btn-flame mt-10">
        Let’s Talk
      </a>
    </section>
  );
}
