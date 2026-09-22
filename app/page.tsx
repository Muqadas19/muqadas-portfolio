import { GlassNav } from "@/components/glass-nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Portfolio } from "@/components/portfolio";
import { Feedback } from "@/components/feedback";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="page-shell">
      <div className="hero-frame">
        <GlassNav />
        <Hero />
      </div>
      <About />
      <Portfolio />
      <Feedback />
      <Faq />
      <Footer />
    </div>
  );
}
