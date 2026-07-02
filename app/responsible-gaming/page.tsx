import { constructMetadata } from "@/lib/metadata";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Responsible Gaming | IV7 Game",
  description: "We are committed to responsible gaming. Find tools, self-exclusion options, and support for a safe gaming experience on IV7.",
  url: "https://iv7-s.com/responsible-gaming",
});

export default function ResponsibleGamingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://iv7-s.com" },
          { name: "Responsible Gaming", url: "https://iv7-s.com/responsible-gaming" },
        ]}
      />
      <Header />
      <main className="flex-1 flex flex-col py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#DF264D]">Responsible Gaming</h1>
        <p className="text-lg text-gray-300 mb-6">
          Gaming should be a fun and entertaining experience. At IV7, we are dedicated to promoting 
          responsible gaming and ensuring our platform is enjoyed safely.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">Underage Gaming Policy</h2>
        <p className="text-lg text-gray-300 mb-6">
          You must be at least 18 years of age (or the legal age of majority in your jurisdiction) to 
          play on IV7. We employ strict age verification checks to prevent underage access.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Setting Limits</h2>
        <p className="text-lg text-gray-300 mb-6">
          We encourage players to manage their gaming responsibly. You can set:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2 mb-6">
          <li>Daily, weekly, or monthly deposit limits</li>
          <li>Loss and wager limits</li>
          <li>Session time limits</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Self-Exclusion</h2>
        <p className="text-lg text-gray-300 mb-6">
          If you feel you need a break, you can use our self-exclusion tool to block access to your 
          account for a specified period (ranging from a few days to permanent exclusion).
        </p>

        <div className="bg-white/5 p-6 rounded-lg border border-red-500/30 mt-8">
          <h3 className="text-xl font-semibold mb-2 text-white">Need Help?</h3>
          <p className="text-gray-300 mb-2">If you or someone you know is struggling with gambling addiction, please seek professional help:</p>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Gamblers Anonymous: www.gamblersanonymous.org</li>
            <li>Gambling Therapy: www.gamblingtherapy.org</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
