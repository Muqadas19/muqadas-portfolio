import Image from "next/image";
import { site } from "@/content/site";
import { assetPath } from "@/lib/asset";

export function About() {
  return (
    <section className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-4 pb-20 pt-8 md:pb-28">
      <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-8 rounded-board bg-flame/20 blur-3xl" aria-hidden />
          <div className="relative overflow-hidden rounded-board border border-white/10">
            <Image
              src={assetPath("/portrait.png")}
              alt="Portrait of Muqadas Ibrar"
              width={720}
              height={960}
              className="aspect-[4/5] h-auto w-full object-cover object-top"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {site.aboutHeadline}
          </h2>
          <div className="mt-6 max-w-[62ch] space-y-4 text-[15px] leading-relaxed text-white/70">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="Skills">
            {site.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-center text-[13px] font-medium text-white"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
