import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Download from "@/components/Download";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download IV7 App – IV7 APK for iOS & Android | Official IV7 Download",
  description:
    "Download the official IV7 app for iOS and Android. Get the IV7 APK, check system requirements, and start playing 1,000+ fair-play games with exclusive IPL benefits.",
  keywords: [
    "IV7 Download",
    "IV7 APK",
    "IV7 App Download",
    "IV7 iOS download",
    "IV7 Android download",
    "download IV7 app",
    "IV7 official download",
    "IV7 app install",
  ],
  alternates: {
    canonical: "https://iv7-s.com/download",
  },
  openGraph: {
    title: "Download IV7 App – Official IV7 APK for iOS & Android",
    description:
      "Download the official IV7 gaming app for iOS and Android. Requires iOS 12.0+ or Android 8.0+, 2GB RAM, and 200MB storage.",
    url: "https://iv7-s.com/download",
    images: [{ url: "/1.jpeg", width: 1200, height: 630, alt: "Download IV7 App" }],
  },
};

const SITE_URL = "https://iv7-s.com";

export default function DownloadPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Download IV7 App", item: `${SITE_URL}/download` },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "IV7 Gaming App",
    alternateName: "IV7 APK",
    downloadUrl: SITE_URL,
    operatingSystem: "Android 8.0+, iOS 12.0+",
    applicationCategory: "GameApplication",
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "18450",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Breadcrumb items={[{ label: "Download IV7 App", href: "/download" }]} />
        <Download />

        {/* Internal Linking CTA */}
        <section className="py-16 bg-[#030308] border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold font-mono uppercase text-white">
              Learn More About <span className="text-neon-cyan">IV7</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/features"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-cyan border border-neon-cyan/40 rounded-sm hover:bg-neon-cyan/10 transition-colors"
              >
                IV7 Features
              </Link>
              <Link
                href="/rewards"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-pink border border-neon-pink/40 rounded-sm hover:bg-neon-pink/10 transition-colors"
              >
                IV7 Rewards
              </Link>
              <Link
                href="/faq"
                className="px-8 py-4 font-mono font-bold uppercase text-gray-400 border border-gray-700 rounded-sm hover:text-white transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
