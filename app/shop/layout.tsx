import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop Stationery, Office & School Supplies Online",
  description:
    "Browse and buy premium stationery, office essentials, school supplies, notebooks, pens, desk organisers, and more from Yuva Global Enterprises — Srinagar's trusted supplier.",
  openGraph: {
    title: "Shop Online — Yuva Global Enterprises",
    description:
      "Premium stationery, office essentials, and school supplies available online from Yuva Global Enterprises, Srinagar.",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
