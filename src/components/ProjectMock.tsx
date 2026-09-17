type Kind = "nutrition" | "navigator";

export function ProjectMock({ kind }: { kind: Kind }) {
  if (kind === "nutrition") {
    return (
      <div className="mx-auto flex h-full max-w-md flex-col justify-center rounded-[1.4rem] border border-white/15 bg-[#0d0818] p-5 shadow-2xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-flame">BMI + Plan</p>
        <p className="mt-2 text-xl font-bold">Smart Nutrition Planner</p>
        <div className="mt-5 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-white/5 py-3">
            <p className="text-lg font-bold">22.4</p>
            <p className="text-[10px] text-white/50">BMI</p>
          </div>
          <div className="rounded-xl bg-white/5 py-3">
            <p className="text-lg font-bold">1800</p>
            <p className="text-[10px] text-white/50">kcal</p>
          </div>
          <div className="rounded-xl bg-flame/20 py-3 text-flame">
            <p className="text-lg font-bold">Goal</p>
            <p className="text-[10px]">Maintain</p>
          </div>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-flame to-orchid" />
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-full max-w-md flex-col justify-center rounded-[1.4rem] border border-white/15 bg-[#0d0818] p-5 shadow-2xl">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orchid">Graph path</p>
      <p className="mt-2 text-xl font-bold">Shortest Route Navigator</p>
      <svg viewBox="0 0 280 140" className="mt-4 w-full text-white" aria-hidden>
        <path d="M24 110 L80 40 L150 78 L250 28" fill="none" stroke="#ff6a2b" strokeWidth="4" />
        <circle cx="24" cy="110" r="8" fill="#c084fc" />
        <circle cx="80" cy="40" r="8" fill="#fff" />
        <circle cx="150" cy="78" r="8" fill="#fff" />
        <circle cx="250" cy="28" r="8" fill="#ff6a2b" />
      </svg>
      <p className="mt-2 text-xs text-white/55">Nodes, edges, and pathfinding between two points.</p>
    </div>
  );
}
