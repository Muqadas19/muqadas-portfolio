import Image from "next/image";
import { site } from "@/content/site";

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
    <section className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-4 pb-20 pt-8 md:pb-28">
      <div className="relative space-y-8">
        {boards.map((project) => (
          <article
            key={project.name}
            className={`overflow-hidden rounded-board border border-white/10 bg-gradient-to-br ${project.tone} p-6 shadow-glow md:p-10`}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/55">
                  {project.category}
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-white/75">
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
                    src={project.desktop}
                    alt={`${project.name} desktop interface`}
                    width={1280}
                    height={720}
                    className="h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
                <div className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-black/30">
                  <Image
                    src={project.mobile}
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
    </section>
  );
}
