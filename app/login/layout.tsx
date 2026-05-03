import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — Secure Access Portal",
  description:
    "Log in to your Yuva Global Enterprises account to manage orders, track shipments, and access exclusive B2B pricing.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
