import type { Metadata } from "next";
import { FaqContact } from "@/components/FaqContact";
import { PageHeading } from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "Contact — Muqadas Ibrar",
  description: "Email Muqadas Ibrar at muqadasibrar746@gmail.com about a website or web app.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHeading
        title="Contact"
        kicker="Email is the fastest way to reach me about a website or a practical web app."
      />
      <FaqContact />
    </main>
  );
}
