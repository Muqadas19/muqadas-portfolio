function ChartIcon() {
  return (
    <span className="about-metric-icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 13.5 7.2 9.2 10.8 11.4 17 5"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 5v4M17 5h-4"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="about-section">
      <span className="about-badge">
        <span className="about-badge-inner">About</span>
      </span>

      <h2 className="about-headline">
        <span className="about-h-line1">
          Automate The Manual, Accelerate The Future. Our
        </span>
        <span className="about-h-line2">
          <span className="about-h-warm">Custom AI Solutions </span>
          <span className="about-h-ink">Deliver </span>
          <span className="about-h-soft">Measurable Growth</span>
        </span>
        <span className="about-h-mute">And Operational Excellence.</span>
      </h2>

      <p className="about-body">
        Empowering Teams With Intelligent Tools That Turn Complex Data
        <br />
        Into Actionable Business Outcomes Daily.
      </p>

      <div className="about-bento">
        <article className="about-card about-card-metric">
          <div className="about-card-metric-copy">
            <div className="about-metric-top">
              <ChartIcon />
              <p className="about-stat-lg">$45</p>
            </div>
            <p className="about-stat-cap">
              Revenue generated for our clients
              <br />
              through AI-led optimizations.
            </p>
          </div>
        </article>

        <article className="about-card about-card-reviews">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about-card-reviews.png" alt="" />
          <p className="about-reviews-cap">400+ active client review</p>
        </article>

        <article className="about-card about-card-peach">
          <p className="about-peach-value">5X</p>
          <p className="about-peach-label">Faster speed to market.</p>
        </article>

        <article className="about-card about-card-quote">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/about-card-quote.png" alt="" />
          <div className="about-quote-copy">
            <span className="about-quote-mark" aria-hidden="true">
              <i />
              <i />
            </span>
            <p>
              The custom LLM they built for us reduced
              <br />
              our support tickets by 80% while
              <br />
              increasing user satisfaction.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
