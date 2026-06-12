import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy – IV7 Game Data Protection Policy",
  description:
    "Read the IV7 Privacy Policy to understand how we collect, use, and protect your personal data on the IV7 gaming platform.",
  alternates: {
    canonical: "https://iv7-s.com/privacy-policy",
  },
  robots: { index: true, follow: true },
};

const SITE_URL = "https://iv7-s.com";

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy-policy` },
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
        <Breadcrumb items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
        <article className="max-w-4xl mx-auto px-6 py-16 text-gray-300 space-y-8">
          <header>
            <h1 className="text-4xl font-bold text-white mb-3">Privacy Policy</h1>
            <p className="text-gray-500 text-sm font-mono">Last updated: June 2025</p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed">
              IV7 Gaming collects information you provide when registering, including your username, email address, and device information. We also collect gameplay data, transaction records, and referral activity to improve the IV7 gaming platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed">We use your data to:</p>
            <ul className="list-disc list-inside space-y-2 mt-3 text-gray-400">
              <li>Provide and improve IV7 gaming services</li>
              <li>Process IV7 referral rewards and agent commissions</li>
              <li>Deliver 24/7 customer support</li>
              <li>Prevent fraud and ensure fair play through our anti-cheat systems</li>
              <li>Send important updates about the IV7 app and platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Data Security</h2>
            <p className="leading-relaxed">
              IV7 implements industry-standard encryption and security protocols to protect your personal data. Our advanced anti-cheat and network security systems ensure your account and information remain safe on the IV7 platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              We use cookies and similar technologies to enhance your experience on iv7-s.com, remember your preferences, and analyze site traffic to improve our gaming platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Third-Party Sharing</h2>
            <p className="leading-relaxed">
              IV7 does not sell your personal data to third parties. We may share anonymized analytics data with service providers who assist in operating the IV7 gaming platform, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights</h2>
            <p className="leading-relaxed">
              You have the right to access, correct, or delete your personal data held by IV7. Contact our support team through the IV7 app live chat or our official Discord server to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy periodically. We will notify users of significant changes via the IV7 app or by posting the updated policy on iv7-s.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p className="leading-relaxed">
              For privacy-related questions, contact IV7 Gaming support through the{" "}
              <a href="/contact" className="text-neon-cyan hover:underline">
                Contact Page
              </a>{" "}
              or the live chat feature in the IV7 app.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
