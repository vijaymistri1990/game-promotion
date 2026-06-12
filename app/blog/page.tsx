import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IV7 Blog – IV7 Game Guides, Tips & Updates",
  description:
    "Read the IV7 official blog for game download guides, IV7 referral program tips, rewards system explainers, feature deep-dives, and the latest IV7 updates.",
  keywords: [
    "IV7 Blog",
    "IV7 Game guide",
    "IV7 download tutorial",
    "IV7 referral tips",
    "IV7 updates",
    "IV7 gaming blog",
  ],
  alternates: {
    canonical: "https://iv7-s.com/blog",
  },
  openGraph: {
    title: "IV7 Blog – Game Guides, Tips & Updates",
    description:
      "Official IV7 blog: download guides, referral program tips, rewards system explainers, and the latest platform updates.",
    url: "https://iv7-s.com/blog",
    images: [{ url: "/1.jpeg", width: 1200, height: 630, alt: "IV7 Blog" }],
  },
};

const SITE_URL = "https://iv7-s.com";

const categoryColors: Record<string, string> = {
  "Download Guide": "text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10",
  "Referral Program": "text-neon-pink border-neon-pink/40 bg-neon-pink/10",
  Rewards: "text-neon-purple border-neon-purple/40 bg-neon-purple/10",
  "Platform Features": "text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10",
  Updates: "text-neon-pink border-neon-pink/40 bg-neon-pink/10",
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    ],
  };

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "IV7 Official Blog",
    url: `${SITE_URL}/blog`,
    description:
      "Official IV7 blog covering game download guides, referral program tips, rewards explainers, and the latest platform updates.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Organization",
        name: "IV7 Gaming",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />
      <Header />
      <main className="flex-1 flex flex-col pt-20 min-h-screen">
        <Breadcrumb items={[{ label: "Blog", href: "/blog" }]} />

        <section className="py-16 max-w-7xl mx-auto px-6 w-full">
          {/* Header */}
          <div className="text-center mb-16 flex flex-col items-center">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-neon-pink mb-3">
              Official Blog
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold uppercase font-mono tracking-tight text-white">
              IV7 <span className="text-neon-cyan">BLOG</span>
            </h1>
            <div className="w-16 h-1 bg-neon-cyan mt-4 rounded" />
            <p className="text-gray-400 text-sm mt-6 max-w-2xl leading-relaxed">
              Game guides, IV7 referral program tips, rewards explainers, feature deep-dives, and the latest IV7 platform updates.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const colorClass =
                categoryColors[post.category] ||
                "text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10";
              return (
                <article
                  key={post.slug}
                  className="group relative p-6 rounded-lg bg-[#0d0d18] border border-gray-800 hover:border-neon-cyan/40 transition-all duration-300 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-mono uppercase tracking-wider px-2 py-1 rounded border ${colorClass}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs font-mono text-gray-600">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold font-mono text-white group-hover:text-neon-cyan transition-colors mb-3 leading-snug flex-1">
                    <Link href={`/blog/${post.slug}`} className="stretched-link">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <time
                      dateTime={post.date}
                      className="text-xs font-mono text-gray-600"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-mono text-neon-cyan hover:underline flex items-center gap-1"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center space-y-4">
            <p className="text-gray-400 text-sm">
              Ready to play? Download the IV7 app now.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                className="px-8 py-4 font-mono font-bold uppercase text-black bg-gradient-to-r from-neon-cyan to-neon-purple rounded-sm hover:opacity-90 transition-opacity"
              >
                Download IV7 App
              </Link>
              <Link
                href="/features"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-cyan border border-neon-cyan/40 rounded-sm hover:bg-neon-cyan/10 transition-colors"
              >
                IV7 Features
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
