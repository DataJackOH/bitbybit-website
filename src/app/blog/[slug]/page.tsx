import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import CTABanner from "@/components/CTABanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: "article",
      publishedTime: post.meta.date,
      url: `https://bitbybit.fit/blog/${slug}`,
    },
  };
}

function estimateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 230));
}

function extractFAQs(
  content: string
): { question: string; answer: string }[] | null {
  const faqMatch = content.match(
    /## Frequently asked questions\n\n([\s\S]*?)(?:\n---|\n## |$)/
  );
  if (!faqMatch) return null;

  const faqBlock = faqMatch[1];
  const faqs: { question: string; answer: string }[] = [];
  const entries = faqBlock.split(/\n\*\*/).filter(Boolean);

  for (const entry of entries) {
    const cleaned = entry.startsWith("**") ? entry.slice(2) : entry;
    const match = cleaned.match(/^(.+?)\*\*\n([\s\S]*?)$/);
    if (match) {
      faqs.push({
        question: match[1].trim(),
        answer: match[2].trim(),
      });
    }
  }

  return faqs.length > 0 ? faqs : null;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const readingTime = estimateReadingTime(post.content);
  const faqs = extractFAQs(post.content);
  const postUrl = `https://bitbybit.fit/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    url: postUrl,
    image: "https://bitbybit.fit/og-image.png",
    author: {
      "@type": "Person",
      name: post.meta.author || "Tobey-Lee",
      jobTitle: post.meta.authorTitle || "Founder of bit by bit",
      url: "https://bitbybit.fit",
    },
    publisher: {
      "@type": "Organization",
      name: "bit by bit",
      url: "https://bitbybit.fit",
      logo: {
        "@type": "ImageObject",
        url: "https://bitbybit.fit/icon.png",
      },
    },
  };

  const faqJsonLd = faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <article className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1 text-sm text-charcoal/50 transition-colors hover:text-sage"
          >
            <ChevronLeft
              size={14}
              className="transition-transform duration-200 group-hover:-translate-x-0.5"
            />
            All posts
          </Link>

          <header className="mt-8 border-b border-charcoal/[0.06] pb-8">
            <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-charcoal/35">
              <time dateTime={post.meta.date}>
                {new Date(post.meta.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-charcoal/20" />
              <span>{readingTime} min read</span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-charcoal md:text-4xl">
              {post.meta.title}
            </h1>
            <p className="mt-3 text-lg text-charcoal/50">
              {post.meta.description}
            </p>
            {post.meta.author && (
              <p className="mt-4 text-sm text-charcoal/45">
                By{" "}
                <span className="font-medium text-charcoal/70">
                  {post.meta.author}
                </span>
                {post.meta.authorTitle && (
                  <span>, {post.meta.authorTitle}</span>
                )}
              </p>
            )}
          </header>

          <div className="prose mt-10">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  );
}
