const PILLS = [
  "Research",
  "Wireframe",
  "Ai Product",
  "Experience",
  "Testing",
] as const;

const BLURB =
  "A complete redesign of a corporate website with modern, user-friendly interfaces and responsive design.";

function Pills() {
  return (
    <ul className="pf-pills">
      {PILLS.map((label) => (
        <li key={label} className="pf-pill">
          {label}
        </li>
      ))}
    </ul>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="portfolio-watermark" aria-label="Portfolio">
        PROTEOLIO
      </h2>

      <div className="portfolio-stack">
        <article className="pf-card pf-card-web">
          <div className="pf-copy">
            <h3>
              Web <em>Development</em>
            </h3>
            <p>
              A complete redesign of a corporate website with
              <br />
              modern, user-friendly interfaces and responsive design.
            </p>
            <Pills />
          </div>
          <div className="pf-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portfolio-mints.png?v=3" alt="Creative Mints" />
          </div>
        </article>

        <article className="pf-card pf-card-app">
          <div className="pf-copy">
            <h3>
              APP <em>Design</em>
            </h3>
            <p>
              A complete redesign of a corporate website with
              <br />
              modern, user-friendly interfaces and responsive design.
            </p>
            <Pills />
          </div>
          <div className="pf-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portfolio-ai-app.png?v=3" alt="AI assistant mobile app" />
          </div>
        </article>

        <article className="pf-card pf-card-dark">
          <div className="pf-copy">
            <h3>
              AI <em>Development</em>
            </h3>
            <p>
              A complete redesign of a corporate website with
              <br />
              modern, user-friendly interfaces and responsive design.
            </p>
            <Pills />
          </div>
          <div className="pf-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/portfolio-atira.png?v=3" alt="Digital Atira" />
          </div>
        </article>
      </div>
    </section>
  );
}
