import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iv7.game"),
  title: {
    default: "IV7 | The Ultimate Gaming Platform & Brand Story",
    template: "%s | IV7"
  },
  description: "Join IV7, the leading global tech and gaming platform. Experience 1,000+ high-quality fair play games, exclusive IPL benefits, 24/7 active support, and earn rewards with millions of fans.",
  icons: {
    icon: "/favicon1.png",
    shortcut: "/favicon1.png",
    apple: "/favicon1.png",
  },
  keywords: ["IV7", "IV7 game", "IV7 brand story", "play games", "agent rewards", "fairness certified games", "IPL rewards", "South Asia gaming", "global reach games", "cricket money"],
  authors: [{ name: "IV7 Gaming" }],
  creator: "IV7 Gaming",
  publisher: "IV7 Gaming",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.iv7.game",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.iv7.game",
    title: "IV7 | The Ultimate Gaming Platform & Brand Story",
    description: "Join IV7, the leading global tech and gaming platform. Experience 1,000+ high-quality fair play games, exclusive IPL benefits, 24/7 active support, and earn rewards with millions of fans.",
    siteName: "IV7 Gaming",
    images: [
      {
        url: "/1.jpeg",
        width: 1200,
        height: 630,
        alt: "IV7 Gaming Platform Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IV7 | The Ultimate Gaming Platform & Brand Story",
    description: "Join IV7, the leading global tech and gaming platform. Experience 1,000+ high-quality fair play games and earn rewards with millions of fans.",
    images: ["/1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#030308] text-gray-100 font-sans selection:bg-[#DF264D] selection:text-white">
        {children}
      </body>
    </html>
  );
}

