import { setupAssets } from "@/lib/setup-assets";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gameplay from "@/components/Gameplay";
import Rewards from "@/components/Rewards";
import Download from "@/components/Download";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import SeoContent from "@/components/SeoContent";
import Footer from "@/components/Footer";
import type { Metadata, ResolvingMetadata } from "next";
import GooglebotDetector from "@/components/GooglebotDetector";
import VideoGameSchema from "@/components/VideoGameSchema";
import OrganizationSchema from "@/components/schema/OrganizationSchema";
import SoftwareApplicationSchema from "@/components/schema/SoftwareApplicationSchema";
import BreadcrumbSchema from "@/components/schema/BreadcrumbSchema";

const SITE_URL = "https://iv7-s.com";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const gameParam = resolvedSearchParams.game;
  const gameKey =
    typeof gameParam === "string" ? gameParam.toLowerCase() : null;

  const defaultTitle =
    "IV7 Game APK Download, IV7 APP & IV7 New Launch (2026Guide)";
  const defaultDesc =
    "Get the official IV7 Game APK Download and IV7 App in 2026. Discover the IV7 New Launch and play 1,000+ fair-play real cash games today.";

  let title = defaultTitle;
  let description = defaultDesc;

  if (gameKey) {
    const gameName = gameKey
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
    title = `${gameName} | IV7 Game APK Download (2026Guide)`;
    description = `Play ${gameName} on IV7. ${defaultDesc}`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: SITE_URL,
    },
    openGraph: {
      type: "website",
      url: gameKey ? `${SITE_URL}?game=${gameKey}` : SITE_URL,
      title,
      description,
      images: [
        {
          url: "/1.jpeg",
          width: 1200,
          height: 630,
          alt: "IV7 Gaming Platform – Download & Play Now",
        },
      ],
    },
  };
}

export default async function Home(props: Props) {
  const resolvedSearchParams = await props.searchParams;
  const gameParam = resolvedSearchParams.game;

  // Execute server-side check and copy of the generated image assets
  setupAssets();

  return (
    <>
      <GooglebotDetector />
      <VideoGameSchema gameParam={gameParam} />

      {/* Inject SEO Structured Data Schemas */}
      <OrganizationSchema />
      <SoftwareApplicationSchema />
      <BreadcrumbSchema items={[{ name: "Home", url: SITE_URL }]} />

      {/* Landing Page layout structure using semantic HTML5 tags */}
      <Header />

      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
        <Gameplay />
        <Rewards />
        <Download />
        <Testimonials />
        <FAQ />
        <SeoContent />
      </main>

      <Footer />
    </>
  );
}
