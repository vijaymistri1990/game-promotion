import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer and legal information for IV7 Gaming.",
};

export default function Disclaimer() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen text-gray-300">
        <h1 className="text-4xl font-bold text-white mb-8">Disclaimer</h1>
        
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
              The platform and all content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. 
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
        </div>
      </main>
      <Footer />
    </>
  );
}
