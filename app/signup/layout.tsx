import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — Create Your Account",
  description:
    "Create a Yuva Global Enterprises account to access B2B pricing, bulk order management, and facility service requests.",
  robots: { index: false, follow: false },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
