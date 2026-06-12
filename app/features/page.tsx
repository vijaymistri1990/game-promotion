import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV7 Game Features – Fair Play, Anti-Cheat & Global Gaming",
  description:
    "Explore IV7 game features: certified fair play, advanced anti-cheat, 24/7 support, global reach, big data analytics, and 1,000+ self-developed games. Download the IV7 app today.",
  keywords: [
    "IV7 Features",
    "IV7 game features",
    "IV7 fair play",
    "IV7 anti-cheat",
    "IV7 gaming platform features",
    "IV7 app features",
    "IV7 global gaming",
    "IV7 certified games",
  ],
  alternates: {
    canonical: "https://iv7-s.com/features",
  },
  openGraph: {
    title: "IV7 Game Features – Fair Play, Anti-Cheat & Global Gaming",
    description:
      "Discover why millions of players choose IV7: certified fairness, advanced security, 1,000+ games, exclusive IPL benefits, and 24/7 professional support.",
    url: "https://iv7-s.com/features",
    images: [{ url: "/1.jpeg", width: 1200, height: 630, alt: "IV7 Game Features" }],
  },
};

const SITE_URL = "https://iv7-s.com";

export default function FeaturesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Features", item: `${SITE_URL}/features` },
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
        <Breadcrumb items={[{ label: "Features", href: "/features" }]} />
        <Features />

        {/* Internal Linking CTA */}
        <section className="py-16 bg-[#030308] border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold font-mono uppercase text-white">
              Ready to Experience <span className="text-neon-cyan">IV7</span>?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Join millions of players already enjoying IV7&apos;s world-class features. Download the IV7 app now or explore our rewards program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                className="px-8 py-4 font-mono font-bold uppercase text-black bg-gradient-to-r from-neon-cyan to-neon-purple rounded-sm hover:opacity-90 transition-opacity"
              >
                Download IV7 App
              </Link>
              <Link
                href="/rewards"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-cyan border border-neon-cyan/40 rounded-sm hover:bg-neon-cyan/10 transition-colors"
              >
                IV7 Rewards
              </Link>
              <Link
                href="/faq"
                className="px-8 py-4 font-mono font-bold uppercase text-gray-400 border border-gray-700 rounded-sm hover:text-white hover:border-gray-600 transition-colors"
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
