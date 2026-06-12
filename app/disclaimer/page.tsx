import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Disclaimer – IV7 Gaming Platform Legal Notice",
  description:
    "Read the IV7 Disclaimer. Important legal information about age restrictions, entertainment purposes, responsible gaming, and limitations of liability for the IV7 gaming platform.",
  alternates: {
    canonical: "https://iv7-s.com/disclaimer",
  },
  robots: { index: true, follow: true },
};

const SITE_URL = "https://iv7-s.com";

export default function Disclaimer() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Disclaimer", item: `${SITE_URL}/disclaimer` },
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
        <Breadcrumb items={[{ label: "Disclaimer", href: "/disclaimer" }]} />
        <article className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-gray-300 space-y-8">
          <header>
            <h1 className="text-4xl font-bold text-white mb-3">Disclaimer</h1>
            <p className="text-gray-500 text-sm font-mono">Last updated: June 2025</p>
          </header>

          <div className="space-y-6 text-lg">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Age Restriction</h2>
              <p>
                This website and its associated services are strictly intended for individuals who are 18 years of age or older.
                By accessing, browsing, or using this platform, you verify that you are at least 18 years old.
                If you are under 18, you must immediately exit this site. We do not knowingly collect information from or provide services to minors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Entertainment Purposes Only</h2>
              <p>
                All games, features, and content on the IV7 platform are provided for entertainment purposes only.
                Any virtual currency, tokens, or rewards earned within the platform have no real-world monetary value and cannot be exchanged for real cash.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Responsible Gaming</h2>
              <p>
                We encourage all our users to play responsibly. Gaming should be a fun and entertaining experience.
                If you feel that your gaming habits are negatively impacting your life, we strongly advise you to take a break and seek professional help.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. No Warranties</h2>
              <p>
                The platform and all content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied.
                We do not guarantee that the site will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                In no event shall IV7, its directors, employees, or agents be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to Terms</h2>
              <p>
                We reserve the right to modify or update this disclaimer at any time without prior notice.
                Your continued use of the platform following any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section className="pt-4 border-t border-gray-800">
              <p className="text-sm text-gray-500">
                For more legal information, see our{" "}
                <a href="/privacy-policy" className="text-neon-cyan hover:underline">Privacy Policy</a>{" "}
                and{" "}
                <a href="/terms-conditions" className="text-neon-cyan hover:underline">Terms & Conditions</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
