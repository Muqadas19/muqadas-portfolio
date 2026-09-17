type PageHeadingProps = {
  title: string;
  kicker?: string;
};

export function PageHeading({ title, kicker }: PageHeadingProps) {
  return (
    <header className="relative mx-auto w-full max-w-[1180px] overflow-hidden px-4 pb-6 pt-12 md:pt-16">
      <p
        className="display pointer-events-none absolute -left-2 top-4 hidden text-[18vw] leading-none text-white/[0.045] lg:block"
        aria-hidden
      >
        {title}
      </p>
      <h1 className="display relative text-[clamp(3.4rem,10vw,7.2rem)] text-white drop-shadow-[0_0_40px_rgba(192,132,252,0.28)]">
        {title}
      </h1>
      {kicker ? (
        <p className="relative mt-5 max-w-[46ch] text-[15px] leading-relaxed text-white/70">{kicker}</p>
      ) : null}
    </header>
  );
}
