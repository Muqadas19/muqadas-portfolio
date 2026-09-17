import type { Metadata } from "next";
import { PageHeading } from "@/components/PageHeading";
import { Portfolio } from "@/components/Portfolio";

export const metadata: Metadata = {
  title: "Work — Muqadas Ibrar",
  description:
    "Web development case studies: Smart Nutrition Planner and Shortest Route Navigator.",
};

export default function WorkPage() {
  return (
    <main>
      <PageHeading
        title="Work"
        kicker="Two web projects: a nutrition planner and a shortest-path navigator."
      />
      <Portfolio />
    </main>
  );
}
