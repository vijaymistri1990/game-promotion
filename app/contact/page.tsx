import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Contact IV7 – Get Support for IV7 Game & App",
  description:
    "Contact IV7 Gaming for support with the IV7 app, rewards program, or any gaming questions. Our 24/7 support team is ready to help.",
  keywords: ["IV7 Contact", "IV7 support", "IV7 help", "IV7 customer service"],
  alternates: {
    canonical: "https://iv7-s.com/contact",
  },
  openGraph: {
    title: "Contact IV7 – 24/7 Support for IV7 Game",
    description:
      "Reach IV7's 24/7 support team for help with the IV7 app, referral rewards, or gaming questions.",
    url: "https://iv7-s.com/contact",
  },
};

const SITE_URL = "https://iv7-s.com";

export default function ContactPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
    ],
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IV7 Gaming",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"],
        areaServed: "Worldwide",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Header />
      <main className="flex-1 flex flex-col pt-20 min-h-screen">
        <Breadcrumb items={[{ label: "Contact", href: "/contact" }]} />

        <section className="flex-1 py-24 px-6 max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-cyan mb-3 block">
              Get In Touch
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white mb-4">
              CONTACT <span className="text-neon-cyan">IV7</span>
            </h1>
            <div className="w-16 h-1 bg-neon-cyan mx-auto rounded" />
            <p className="text-gray-400 text-sm mt-6 max-w-2xl mx-auto leading-relaxed">
              Our dedicated support team is available 24/7, 365 days a year to assist with any questions about the IV7 app, referral rewards, or gaming issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Support Info */}
            <div className="p-8 rounded-lg bg-[#0d0d18] border border-gray-800 space-y-6">
              <h2 className="text-xl font-extrabold font-mono uppercase text-white">
                Support Channels
              </h2>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-neon-cyan flex-shrink-0" />
                  <div>
                    <strong className="text-gray-300 block">Live Chat</strong>
                    Available in the IV7 App – 24/7 instant support
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-neon-pink flex-shrink-0" />
                  <div>
                    <strong className="text-gray-300 block">Discord Community</strong>
                    <a
                      href="https://discord.gg/iv7game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:underline"
                    >
                      discord.gg/iv7game
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-1.5 rounded-full bg-neon-cyan flex-shrink-0" />
                  <div>
                    <strong className="text-gray-300 block">Twitter / X</strong>
                    <a
                      href="https://twitter.com/iv7game"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:underline"
                    >
                      @iv7game
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="p-8 rounded-lg bg-[#0d0d18] border border-gray-800 space-y-6">
              <h2 className="text-xl font-extrabold font-mono uppercase text-white">
                Quick Help
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Before contacting support, many answers are available in our FAQ section.
              </p>
              <div className="space-y-3">
                <a
                  href="/faq"
                  className="flex items-center gap-3 p-4 rounded bg-cyber-dark border border-gray-800 hover:border-neon-cyan/40 transition-colors group"
                >
                  <span className="text-neon-cyan group-hover:scale-110 transition-transform">❓</span>
                  <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">IV7 FAQ – Common Questions</span>
                </a>
                <a
                  href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                  className="flex items-center gap-3 p-4 rounded bg-cyber-dark border border-gray-800 hover:border-neon-pink/40 transition-colors group"
                >
                  <span className="text-neon-pink group-hover:scale-110 transition-transform">📲</span>
                  <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">Download the IV7 App</span>
                </a>
                <a
                  href="/rewards"
                  className="flex items-center gap-3 p-4 rounded bg-cyber-dark border border-gray-800 hover:border-neon-cyan/40 transition-colors group"
                >
                  <span className="text-neon-cyan group-hover:scale-110 transition-transform">🏆</span>
                  <span className="font-mono text-sm text-gray-300 group-hover:text-white transition-colors">IV7 Rewards & Referral Guide</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
