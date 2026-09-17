import Image from "next/image";
import { site } from "@/content/site";
import { assetPath, hashHref } from "@/lib/asset";

export function Hero() {
  return (
    <section id="home" className="section-anchor relative mx-auto w-full max-w-[1180px] px-4 pb-10 pt-10 md:pb-12 md:pt-14">
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[15px] font-medium text-white">
            {site.eyebrow}
            <span className="h-px w-10 bg-flame" />
          </p>

          <h1 className="display max-w-5xl text-[clamp(3.2rem,11vw,7.4rem)] drop-shadow-[0_0_40px_rgba(192,132,252,0.35)]">
            {site.role.split(" ").map((word, index) => (
              <span key={word} className={`block ${index === 0 ? "text-flame" : "text-white"}`}>
                {word}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-[38ch] text-[15px] leading-relaxed text-white/70">
            {site.subline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={hashHref("contact")} className="btn-flame">
              Let’s Talk
            </a>
            <a href={hashHref("work")} className="btn-ghost">
              See Work
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[420px]">
          <span className="sparkle absolute -left-4 top-12" aria-hidden />
          <span className="sparkle sparkle-orchid absolute right-6 top-8" aria-hidden />
          <div className="absolute -inset-6 rounded-hero bg-orchid/30 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-hero border border-white/10 shadow-glow">
            <Image
              src={assetPath("/portrait.png")}
              alt="Portrait of Muqadas Ibrar"
              width={840}
              height={1120}
              priority
              className="aspect-[3/4] h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
