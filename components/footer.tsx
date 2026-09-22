function SocialIcon({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <a href={`#${name}`} className="ft-social" aria-label={name}>
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="ft-frame">
      <div className="ft-grid">
        <div className="ft-brand">
          <span className="ft-logo">Innosight</span>
          <p className="ft-blurb">
            Consectetur adipiscing elit. Etiam massa.
            <br />
            Vivamus faucibus egestas nulla
          </p>
          <p className="ft-follow">Follow us</p>
          <div className="ft-socials">
            <SocialIcon name="facebook">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1Z" />
              </svg>
            </SocialIcon>
            <SocialIcon name="x">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.2 3H21l-6.5 7.4L22 21h-6.2l-4.3-5.6L6 21H3.1l7-8L2 3h6.3l3.9 5.2L18.2 3Zm-1.1 16.2h1.7L7 4.7H5.2l11.9 14.5Z" />
              </svg>
            </SocialIcon>
            <SocialIcon name="linkedin">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.5 9H3.7v11h2.8V9ZM5.1 3.5C4.1 3.5 3.3 4.3 3.3 5.3s.8 1.8 1.8 1.8 1.8-.8 1.8-1.8-.8-1.8-1.8-1.8ZM20.3 20h-2.8v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20h-2.8V9h2.7v1.5c.4-.7 1.3-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5V20Z" />
              </svg>
            </SocialIcon>
            <SocialIcon name="instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        <div className="ft-col">
          <p className="ft-head">Quick Link</p>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Service</a>
          <a href="#testimonials">Testimonial</a>
        </div>

        <div className="ft-col">
          <p className="ft-head">Project Link</p>
          <a href="#portfolio">AI Website</a>
          <a href="#portfolio">Website Development</a>
          <a href="#portfolio">App Development</a>
          <a href="#portfolio">UI/UX Design</a>
        </div>

        <div className="ft-col">
          <p className="ft-head">Email</p>
          <a href="mailto:info@youremail.com">info@youremail.com</a>
          <p className="ft-head ft-head-space">Address</p>
          <p className="ft-addr">
            Middle Badda, Dhaka
            <br />
            1212
          </p>
        </div>
      </div>

      <p className="ft-mark" aria-hidden="true">
        FRAMORA
      </p>
    </footer>
  );
}
