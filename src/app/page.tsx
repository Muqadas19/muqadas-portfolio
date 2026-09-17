import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { TechSlider } from "@/components/TechSlider";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TechSlider />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}
