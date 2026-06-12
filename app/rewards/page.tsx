import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Rewards from "@/components/Rewards";
import Breadcrumb from "@/components/Breadcrumb";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV7 Rewards & Referral Program – Earn with IV7 Agent Rewards",
  description:
    "Explore the IV7 rewards system: Agent Referral Program with $1B+ distributed, daily streak bonuses, and exclusive IPL benefits. Join the IV7 referral program and start earning today.",
  keywords: [
    "IV7 Rewards",
    "IV7 Referral Program",
    "IV7 Agent Rewards",
    "IV7 earn rewards",
    "IV7 referral commission",
    "IV7 IPL benefits",
    "IV7 daily bonuses",
    "IV7 affiliate program",
  ],
  alternates: {
    canonical: "https://iv7-s.com/rewards",
  },
  openGraph: {
    title: "IV7 Rewards & Referral Program – Earn with IV7 Agent Rewards",
    description:
      "The IV7 referral program has distributed over $1,000,000,000 in agent rewards. Earn commissions, daily bonuses, and exclusive IPL benefits. Join IV7 now.",
    url: "https://iv7-s.com/rewards",
    images: [{ url: "/1.jpeg", width: 1200, height: 630, alt: "IV7 Rewards Program" }],
  },
};

const SITE_URL = "https://iv7-s.com";

export default function RewardsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Rewards", item: `${SITE_URL}/rewards` },
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
        <Breadcrumb items={[{ label: "Rewards", href: "/rewards" }]} />
        <Rewards />

        {/* Internal Linking CTA */}
        <section className="py-16 bg-[#030308] border-t border-gray-800/50">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-extrabold font-mono uppercase text-white">
              Start Earning with <span className="text-neon-cyan">IV7</span> Today
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
              Download the IV7 app and activate your referral code to start earning agent rewards immediately. Join the billion-dollar IV7 referral program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                className="px-8 py-4 font-mono font-bold uppercase text-black bg-gradient-to-r from-neon-pink to-neon-purple rounded-sm hover:opacity-90 transition-opacity"
              >
                Download IV7 App
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-cyan border border-neon-cyan/40 rounded-sm hover:bg-neon-cyan/10 transition-colors"
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
