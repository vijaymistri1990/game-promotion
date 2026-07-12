import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AgeNotice from "@/components/AgeNotice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://iv7-s.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030308",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IV7 Game APK Download – Official Gaming Platform | Play & Earn",
    template: "%s | IV7 Game APK Download",
  },
  description:
    "Get the IV7 Game APK Download today. IV7 is the ultimate real cash gaming platform. Play Aviator Pro, Dragon Tiger, and Teen Patti. Win big with our billion-dollar rewards program.",
  keywords: [
    "IV7 Game APK Download",
    "IV7 Game Download",
    "IV7 App Download",
    "IV7 New Launch",
    "IV7 Game",
    "IV7 Rewards",
    "IV7 Real Cash App",
    "Play and Earn",
    "Real Cash Gaming Platform",
    "IV7 Aviator Pro",
    "IV7 Dragon Tiger",
    "IV7 Teen Patti",
    "iv7-s.com",
    "online casino India",
    "agent rewards program",
  ],
  authors: [{ name: "IV7 Gaming", url: SITE_URL }],
  creator: "IV7 Gaming",
  publisher: "IV7 Gaming",
  category: "Gaming",
  classification: "Gaming, Entertainment, Casino",
  applicationName: "IV7",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      en: SITE_URL,
    }
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "IV7 Game APK Download – Official Gaming Platform | Play & Earn",
    description:
      "Get the IV7 Game APK Download today. Join IV7, the leading global gaming platform. Play Aviator Pro, Dragon Tiger, and Teen Patti for real cash.",
    siteName: "IV7 Official",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "IV7 Game APK Download – Play & Earn",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iv7game",
    creator: "@iv7game",
    title: "IV7 Game APK Download – Official Gaming Platform | Play & Earn",
    description:
      "Play top real cash games like Aviator Pro, Dragon Tiger, and Teen Patti. Download the IV7 app now and win real cash.",
    images: ["/1.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.jpg", type: "image/jpeg" },
      { url: "/favicon.jpg", type: "image/jpeg", sizes: "192x192" },
    ],
    shortcut: "/favicon.jpg",
    apple: "/favicon.jpg",
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "IV7",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // WebSite Schema for Sitelinks Searchbox eligibility
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IV7 Game APK Download",
    url: SITE_URL,
    description:
      "IV7 is the ultimate gaming platform. Download the IV7 app, play real cash games like Aviator Pro and Dragon Tiger, and earn referral rewards.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030308] text-gray-100 font-sans selection:bg-[#DF264D] selection:text-white">
        {children}
        <AgeNotice />
        {/* Google Analytics (Placeholder) */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
