import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV7 FAQ – Frequently Asked Questions About IV7 Game & App",
  description:
    "Find answers to common questions about IV7 Game: how to download IV7 app, IV7 referral program, IV7 rewards, platform safety, and more.",
  keywords: [
    "IV7 FAQ",
    "IV7 frequently asked questions",
    "IV7 game help",
    "how to download IV7",
    "IV7 referral program questions",
    "IV7 rewards FAQ",
    "IV7 support",
    "IV7 app guide",
  ],
  alternates: {
    canonical: "https://iv7-s.com/faq",
  },
  openGraph: {
    title: "IV7 FAQ – Frequently Asked Questions About IV7 Game & App",
    description:
      "Get answers to the most common questions about IV7 Game, IV7 app download, IV7 referral program, and IV7 rewards system.",
    url: "https://iv7-s.com/faq",
    images: [{ url: "/1.jpeg", width: 1200, height: 630, alt: "IV7 FAQ" }],
  },
};

const SITE_URL = "https://iv7-s.com";

export default function FAQPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${SITE_URL}/faq` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="flex-1 flex flex-col pt-20">
        <Breadcrumb items={[{ label: "FAQ", href: "/faq" }]} />
        <FAQ />

        {/* Internal Linking */}
        <section className="py-16 bg-[#030308] border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-2xl font-extrabold font-mono uppercase text-white">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 text-sm">
              Check out our features page or contact us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-cyan border border-neon-cyan/40 rounded-sm hover:bg-neon-cyan/10 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                className="px-8 py-4 font-mono font-bold uppercase text-black bg-gradient-to-r from-neon-cyan to-neon-purple rounded-sm hover:opacity-90 transition-opacity"
              >
                Download IV7 App
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 font-mono font-bold uppercase text-gray-400 border border-gray-700 rounded-sm hover:text-white transition-colors"
              >
                IV7 Features
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
