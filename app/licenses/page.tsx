import { constructMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Licenses & Certifications | IV7 Game",
  description: "IV7 operates under strict regulatory frameworks. Review our gaming licenses, fair-play certifications, and compliance standards.",
  url: "https://iv7-s.com/licenses",
});

export default function LicensesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://iv7-s.com" },
          { name: "Licenses", url: "https://iv7-s.com/licenses" },
        ]}
      />
      <Header />
      <main className="flex-1 flex flex-col py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#DF264D]">Licenses & Certifications</h1>
        <p className="text-lg text-gray-300 mb-6">
          At IV7, player trust and security are our top priorities. We operate fully within legal frameworks 
          and hold international gaming licenses to ensure a safe, fair, and regulated environment.
        </p>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Gaming License</h2>
          <p className="text-gray-300 mb-2">
            <strong>Regulator:</strong> [Insert Gaming Authority]
          </p>
          <p className="text-gray-300 mb-2">
            <strong>License Number:</strong> [Insert License Number]
          </p>
          <p className="text-gray-300">
            IV7 Gaming operates under the strict guidelines provided by international gaming authorities. 
            Our platform undergoes regular audits to ensure compliance and player protection.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-lg border border-white/10 mt-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Fair Play Certification</h2>
          <p className="text-gray-300 mb-2">
            <strong>Testing Agency:</strong> iTech Labs / eCOGRA (Placeholder)
          </p>
          <p className="text-gray-300">
            All our games, including Aviator Pro and Teen Patti, use certified Random Number Generators (RNG) 
            to guarantee fair and unbiased outcomes.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
