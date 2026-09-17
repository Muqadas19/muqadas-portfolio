import type { Metadata } from "next";
import { About } from "@/components/About";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "About — Muqadas Ibrar",
  description:
    "Muqadas Ibrar is a Computer Science student focused on web development and useful digital solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeading
        title="About"
        kicker="Computer Science student building useful websites and practical web apps."
      />
      <About />
    </main>
  );
}
