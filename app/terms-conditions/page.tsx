import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms & Conditions – IV7 Gaming Platform User Agreement",
  description:
    "Read the IV7 Terms and Conditions. Understand the rules for using the IV7 gaming platform, IV7 referral rewards program, and IV7 app.",
  alternates: {
    canonical: "https://iv7-s.com/terms-conditions",
  },
  robots: { index: true, follow: true },
};

const SITE_URL = "https://iv7-s.com";

export default function TermsConditionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: `${SITE_URL}/terms-conditions` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      <main className="flex-1 flex flex-col pt-20 min-h-screen">
        <Breadcrumb items={[{ label: "Terms & Conditions", href: "/terms-conditions" }]} />
        <article className="max-w-4xl mx-auto px-6 py-16 text-gray-300 space-y-8">
          <header>
            <h1 className="text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
            <p className="text-gray-500 text-sm font-mono">Last updated: June 2025</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing or using the IV7 gaming platform at iv7-s.com or through the IV7 app, you agree to be bound by these Terms and Conditions. If you do not agree, you must not use the IV7 platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
            <p className="leading-relaxed">
              You must be at least 18 years of age to use the IV7 gaming platform. By registering, you confirm that you meet this requirement and that any information you provide is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. IV7 Referral Program</h2>
            <p className="leading-relaxed">
              The IV7 Agent Rewards referral program allows users to earn commissions by referring new players. Referral rewards are subject to IV7&apos;s program terms. IV7 reserves the right to modify or terminate the referral program at any time. Fraudulent referrals will result in account termination and forfeiture of rewards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Fair Play Policy</h2>
            <p className="leading-relaxed">
              IV7 is committed to certified fair play. The use of cheats, exploits, bots, or any third-party software that interferes with gameplay is strictly prohibited. Violations will result in immediate account suspension and forfeiture of all rewards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All content on iv7-s.com and the IV7 app, including game assets, logos, and platform design, is the intellectual property of IV7 Gaming and is protected by copyright law. You may not reproduce or distribute any content without prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              IV7 Gaming shall not be liable for any indirect, incidental, or consequential damages arising from your use of the IV7 platform. The platform is provided &quot;as is&quot; without any warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Modifications</h2>
            <p className="leading-relaxed">
              IV7 reserves the right to modify these Terms and Conditions at any time. Continued use of the IV7 platform after modifications constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact</h2>
            <p className="leading-relaxed">
              For questions about these Terms, please{" "}
              <a href="/contact" className="text-neon-cyan hover:underline">
                contact IV7 Gaming support
              </a>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
