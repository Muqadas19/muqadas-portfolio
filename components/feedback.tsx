const QUOTE =
  "Their support team is amazing. Whenever we need help customizing receipts or setting up a new branch, they respond instantly.";

function Stars() {
  return (
    <span className="fb-stars" aria-label="5 stars">
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <linearGradient id="fbStarGrad" x1="8" y1="1" x2="8" y2="15">
            <stop offset="0%" stopColor="#ffb029" />
            <stop offset="45%" stopColor="#f39212" />
            <stop offset="100%" stopColor="#e06a08" />
          </linearGradient>
        </defs>
      </svg>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="24" height="24" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 1.4 9.9 5.6l4.6.4-3.5 3 1.1 4.4L8 11.4 3.9 13.4l1.1-4.4-3.5-3 4.6-.4L8 1.4Z"
            fill="url(#fbStarGrad)"
          />
        </svg>
      ))}
    </span>
  );
}

function CardBars() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/fb-quote-bars.png?v=2" alt="" className="fb-card-bars-img" />
  );
}

function PlayBtn() {
  return (
    <span className="fb-play" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M4.2 2.6v8.8L11.4 7 4.2 2.6Z" fill="#fff" />
      </svg>
    </span>
  );
}

export function Feedback() {
  return (
    <section id="testimonials" className="fb-section">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/fb-glass-bars.png" alt="" className="fb-tools" />

      <span className="about-badge">
        <span className="about-badge-inner">Trusted Feedback</span>
      </span>

      <h2 className="fb-headline">
        <span className="fb-h-line2">
          <span className="fb-c-grad">Automate The Manual, </span>
          <span className="fb-c-black">Accelerate The Future. Our</span>
        </span>
        <span className="fb-h-line2">
          <span className="fb-c-grad">Custom AI Deliver </span>
          <span className="fb-c-gray">Measurable Growth</span>
        </span>
      </h2>

      <div className="fb-grid">
        <div className="fb-grid-glow" aria-hidden="true" />

        <article className="fb-card fb-card-quote fb-card-warm">
          <CardBars />
          <div className="fb-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fb-avatar-fuad.png?v=5" alt="" />
            <div>
              <p className="fb-name">Fuad Hasan Khan</p>
              <p className="fb-role">Owner Aungko Studio</p>
            </div>
          </div>
          <p className="fb-text">{QUOTE}</p>
          <Stars />
        </article>

        <article className="fb-card fb-card-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fb-fuad.png?v=4" alt="Fuad Hasan Khan" />
          <div className="fb-photo-meta">
            <p className="fb-name">Fuad Hasan Khan</p>
            <p className="fb-role">Chairman of Angkoo</p>
          </div>
          <PlayBtn />
        </article>

        <article className="fb-card fb-card-quote fb-card-aurora">
          <CardBars />
          <div className="fb-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fb-avatar-robin.png?v=2" alt="" />
            <div>
              <p className="fb-name">Robin Ahmed</p>
              <p className="fb-role">Store Manager</p>
            </div>
          </div>
          <p className="fb-text">{QUOTE}</p>
          <Stars />
        </article>

        <article className="fb-card fb-card-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fb-khadija.png?v=4" alt="Khadija Akter" />
          <div className="fb-photo-meta">
            <p className="fb-name">Khadija Akter</p>
            <p className="fb-role">UI/UX Designer</p>
          </div>
          <PlayBtn />
        </article>

        <article className="fb-card fb-card-quote fb-card-blue">
          <CardBars />
          <div className="fb-person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/fb-avatar-afiya.png?v=3" alt="" />
            <div>
              <p className="fb-name">Afiya Afroj</p>
              <p className="fb-role">Inventory Manager</p>
            </div>
          </div>
          <p className="fb-text">{QUOTE}</p>
          <Stars />
        </article>

        <article className="fb-card fb-card-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/fb-afiya.png?v=4" alt="Afiya Afroj" />
          <div className="fb-photo-meta">
            <p className="fb-name">Afiya Afroj</p>
            <p className="fb-role">UI/UX Designer</p>
          </div>
          <PlayBtn />
        </article>
      </div>
    </section>
  );
}
