import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Get a Quote for Facility & Business Services",
  description:
    "Contact Yuva Global Enterprises for facility management, security services, bulk stationery orders, and corporate solutions. Located in Srinagar, J&K. Call +91 9796 3333 22.",
  openGraph: {
    title: "Contact Us — Yuva Global Enterprises",
    description:
      "Reach out for a free quote on facility management, cleaning, security, and stationery supply services in Srinagar, Jammu & Kashmir.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
