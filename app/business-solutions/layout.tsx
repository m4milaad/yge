import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solutions — Facility Management & Corporate Services",
  description:
    "Explore Yuva Global Enterprises' comprehensive B2B services: facility management, security, mechanized cleaning, event management, manpower outsourcing, and more in Srinagar, J&K.",
  openGraph: {
    title: "Business Solutions — Yuva Global Enterprises",
    description:
      "ISO 9001:2015 certified B2B facility management, security, cleaning, and corporate services in Srinagar, Jammu & Kashmir.",
  },
};

export default function BusinessSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
