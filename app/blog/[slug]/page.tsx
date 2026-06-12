import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import Link from "next/link";

const SITE_URL = "https://iv7-s.com";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found | IV7 Blog",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_URL}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["IV7 Gaming"],
      tags: post.keywords,
      images: [
        {
          url: "/1.jpeg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/1.jpeg"],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) =>
    post.relatedPosts.includes(p.slug)
  );

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "IV7 Gaming",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "IV7 Gaming",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    image: `${SITE_URL}/1.jpeg`,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blog/${post.slug}`,
      },
    ],
  };

  // FAQ schema for blog post
  const faqSchema = post.faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Header />
      <main className="flex-1 flex flex-col pt-20 min-h-screen">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.category },
          ]}
        />

        <div className="max-w-4xl mx-auto px-6 py-12 w-full">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-wider text-neon-cyan border border-neon-cyan/40 bg-neon-cyan/10 px-2 py-1 rounded">
                {post.category}
              </span>
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
              <span className="text-xs font-mono text-gray-600">
                · {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold font-mono text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed border-l-4 border-neon-cyan pl-6 italic">
              {post.description}
            </p>
          </header>

          {/* Article Body */}
          <article className="prose prose-invert max-w-none">
            {/* Intro */}
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              {post.content.intro}
            </p>

            {/* Sections */}
            {post.content.sections.map((section, index) => (
              <section key={index} className="mb-10">
                <h2 className="text-xl md:text-2xl font-extrabold font-mono text-white mb-4 uppercase">
                  {section.heading}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {section.body}
                </p>
              </section>
            ))}

            {/* Conclusion */}
            <div className="mt-10 p-6 rounded-lg bg-[#0d0d18] border border-neon-cyan/20">
              <h2 className="text-lg font-extrabold font-mono text-neon-cyan uppercase mb-3">
                Conclusion
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                {post.content.conclusion}
              </p>
            </div>
          </article>

          {/* FAQ Section */}
          {post.faqs.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-extrabold font-mono text-white uppercase mb-8">
                FREQUENTLY ASKED <span className="text-neon-pink">QUESTIONS</span>
              </h2>
              <div className="space-y-4">
                {post.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-[#0d0d18] border border-gray-800"
                  >
                    <h3 className="font-mono font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-[#0d0d18] to-[#0a0a15] border border-neon-cyan/20 text-center space-y-4">
            <h2 className="text-2xl font-extrabold font-mono uppercase text-white">
              Ready to Play <span className="text-neon-cyan">IV7</span>?
            </h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Download the official IV7 app and join millions of players enjoying 1,000+ fair-play games and the IV7 referral rewards program.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://share-rxapq9cajg.iv7.info/share/agent/AA6TPXPF?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0="
                className="px-8 py-4 font-mono font-bold uppercase text-black bg-gradient-to-r from-neon-cyan to-neon-purple rounded-sm hover:opacity-90 transition-opacity"
              >
                Download IV7 App
              </Link>
              <Link
                href="/rewards"
                className="px-8 py-4 font-mono font-bold uppercase text-neon-pink border border-neon-pink/40 rounded-sm hover:bg-neon-pink/10 transition-colors"
              >
                IV7 Rewards
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl font-extrabold font-mono text-white uppercase mb-6">
                RELATED <span className="text-neon-cyan">ARTICLES</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="p-6 rounded-lg bg-[#0d0d18] border border-gray-800 hover:border-neon-cyan/40 transition-all duration-300 group block"
                  >
                    <span className="text-xs font-mono uppercase text-neon-pink mb-2 block">
                      {related.category}
                    </span>
                    <h3 className="font-mono font-bold text-white group-hover:text-neon-cyan transition-colors text-sm leading-snug mb-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {related.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
