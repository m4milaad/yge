import type { Metadata } from "next";
import { Oswald, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: "YGE — Yuva Global Enterprises | Facility Management & Business Solutions | Srinagar, J&K",
    template: "%s | YGE — Yuva Global Enterprises",
  },
  description:
    "YGE (Yuva Global Enterprises) is an ISO 9001:2015 certified company providing facility management, security services, mechanized cleaning, event management, manpower outsourcing, and premium stationery & office supplies in Srinagar, Jammu & Kashmir.",
  keywords: [
    "YGE",
    "Yuva Global Enterprises",
    "YGE Srinagar",
    "YGE Kashmir",
    "facility management Srinagar",
    "security services J&K",
    "mechanized cleaning Kashmir",
    "event management Srinagar",
    "manpower outsourcing Jammu Kashmir",
    "office supplies Srinagar",
    "stationery shop Kashmir",
    "ISO 9001:2015 certified company",
    "MSME registered company Srinagar",
    "bulk stationery supplies",
    "corporate facility services India",
    "school supplies Srinagar",
    "business solutions Kashmir",
    "general order supplies",
    "pest control services J&K",
    "hospitality services Srinagar",
    "HR recruitment Kashmir",
    "canteen catering services",
    "IT support services Srinagar",
  ],
  authors: [{ name: "Yuva Global Enterprises" }],
  creator: "Yuva Global Enterprises",
  publisher: "Yuva Global Enterprises",
  metadataBase: new URL("https://yuvaglobalenterprises.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yuvaglobalenterprises.com",
    siteName: "Yuva Global Enterprises",
    title: "YGE — Yuva Global Enterprises | Facility Management & Business Solutions",
    description:
      "YGE (Yuva Global Enterprises) — ISO 9001:2015 certified provider of facility management, security, cleaning, event management, and premium office & stationery supplies in Srinagar, J&K.",
    images: [
      {
        url: "/images/ygeLogo.png",
        width: 512,
        height: 512,
        alt: "Yuva Global Enterprises Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YGE — Yuva Global Enterprises | Facility Management & Business Solutions",
    description:
      "YGE (Yuva Global Enterprises) — ISO 9001:2015 certified provider of facility management, security, cleaning, and premium stationery supplies in Srinagar, J&K.",
    images: ["/images/ygeLogo.png"],
  },
  icons: {
    icon: [
      { url: "/images/ygeLogo.png", type: "image/png" },
    ],
    apple: [
      { url: "/images/ygeLogo.png", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "GW9Ba-M9lvS4Ec5McXXwXuvWRsOL5zKjuwnqdg5vL-k",
  },
  category: "Business Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Yuva Global Enterprises",
    alternateName: ["YGE", "YGE Srinagar"],
    url: "https://yuvaglobalenterprises.com",
    logo: "https://yuvaglobalenterprises.com/images/ygeLogo.png",
    description:
      "YGE (Yuva Global Enterprises) — ISO 9001:2015 certified facility management, business solutions, and premium stationery supplier in Srinagar, Jammu & Kashmir.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ocean Greens 20/A, Surateng, Rainawari, Near JLNM Hospital",
      addressLocality: "Srinagar",
      addressRegion: "Jammu & Kashmir",
      postalCode: "190013",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-194-3559824",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi", "Urdu"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9796333322",
        contactType: "sales",
        areaServed: "IN",
      },
    ],
    sameAs: [],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business Services & Products",
      itemListElement: [
        { "@type": "OfferCatalog", name: "Facility Management" },
        { "@type": "OfferCatalog", name: "Security Services" },
        { "@type": "OfferCatalog", name: "Mechanized Cleaning" },
        { "@type": "OfferCatalog", name: "Event Management" },
        { "@type": "OfferCatalog", name: "Stationery & Office Supplies" },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${oswald.variable} ${jetbrains.variable} font-mono bg-white text-black antialiased selection:bg-neon selection:text-black`}>
        <CartProvider>
          <div className="flex flex-col min-h-screen border-x-4 border-black max-w-[1920px] mx-auto bg-white relative">
            <div className="fixed inset-0 pointer-events-none z-0 grain-overlay"></div>
            <Header />
            <main className="flex-grow z-10 relative bg-white">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
