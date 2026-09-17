import Image from "next/image";
import { site } from "@/content/site";
import { assetPath, hashHref } from "@/lib/asset";

const boards = [
  {
    ...site.projects[0],
    tone: "from-[#3a140c] via-[#5a2414] to-[#1a0c18]",
    desktop: "/projects/nutrition.png",
    mobile: "/projects/nutrition-mobile.png",
  },
  {
    ...site.projects[1],
    tone: "from-[#24104a] via-[#3a1870] to-[#12081f]",
    desktop: "/projects/navigator.png",
    mobile: "/projects/navigator-mobile.png",
  },
] as const;

export function Portfolio() {
  return (
    <section id="work" className="section-anchor relative mx-auto w-full max-w-[1180px] overflow-hidden px-4 pb-20 pt-8 md:pb-28">
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/50">Work</p>
      <h2 className="mt-3 text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold leading-[1.05] tracking-tight text-white">
        Recent Projects
      </h2>
      <p className="mt-3 max-w-[46ch] text-[13px] leading-relaxed text-white/55 md:text-sm">
        Two web projects focused on a real task: nutrition planning and shortest-path navigation.
      </p>
      <div className="relative mt-10 space-y-8">
        {boards.map((project) => (
          <article
            key={project.name}
            className={`overflow-hidden rounded-board border border-white/10 bg-gradient-to-br ${project.tone} p-6 shadow-glow md:p-10`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-[46ch] text-[13px] leading-relaxed text-white/65 md:text-sm">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[12px] text-white/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative grid grid-cols-[1fr_0.55fr] items-end gap-4">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30">
                  <Image
                    src={assetPath(project.desktop)}
                    alt={`${project.name} desktop interface`}
                    width={1280}
                    height={720}
                    className="h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30">
                  <Image
                    src={assetPath(project.mobile)}
                    alt={`${project.name} mobile interface`}
                    width={720}
                    height={960}
                    className="h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a href={hashHref("contact")} className="btn-flame">
          Let’s Talk
        </a>
        <a href={hashHref("services")} className="btn-ghost">
          See Services
        </a>
      </div>
    </section>
  );
}
