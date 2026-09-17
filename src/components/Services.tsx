import { site } from "@/content/site";
import { hashHref } from "@/lib/asset";

export function Services() {
  return (
    <section id="services" className="section-anchor relative mx-auto w-full max-w-[1180px] px-4 pb-20 pt-8 md:pb-28">
      <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/45">Services</p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-[18ch] text-3xl font-semibold tracking-tight text-white md:text-5xl">
          What I can build for you
        </h2>
        <a href={hashHref("contact")} className="btn-flame">
          Let’s Talk
        </a>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {site.services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-board border border-white/10 bg-white/[0.04] p-6 md:p-8"
          >
            <p className="text-[12px] font-semibold text-flame">0{index + 1}</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-[15px] leading-relaxed text-white/65">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
