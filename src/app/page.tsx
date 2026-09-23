import { Banner } from "@/components/banner";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { ScrollPortrait } from "@/components/scroll-portrait";

export default function HomePage() {
  return (
    <main>
      <ScrollPortrait />
      <Banner />
      <About />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
