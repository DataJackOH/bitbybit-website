import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Calisthenics tips, bodyweight training guides, and progression advice from the bit by bit team.",
  alternates: {
    canonical: "/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "bit by bit Blog",
  description:
    "Calisthenics tips, bodyweight training guides, and progression advice.",
  url: "https://bitbybit.fit/blog",
  publisher: {
    "@type": "Organization",
    name: "bit by bit",
    url: "https://bitbybit.fit",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="px-6 pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-end justify-between">
            <div>
              <h1 className="font-heading text-4xl font-bold text-charcoal">
                Blog
              </h1>
              <p className="mt-3 text-lg text-charcoal/60">
                Training tips, progression guides, and bodyweight fitness
                advice.
              </p>
              <p className="mt-2 text-sm text-charcoal/40">
                From the team behind{" "}
                <a
                  href="https://apps.apple.com/app/bit-by-bit/id6756225068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sage transition-colors hover:text-sage-dark"
                >
                  bit by bit
                </a>
                , the calisthenics training app.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-5">
            {posts.map((post) => (
              <article key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl border border-charcoal/[0.06] bg-white p-6 transition-all duration-300 hover:border-sage/20 hover:shadow-md md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <time
                        dateTime={post.date}
                        className="block text-xs font-medium uppercase tracking-wider text-charcoal/35"
                      >
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <h2 className="mt-2 font-heading text-xl font-bold text-charcoal transition-colors group-hover:text-sage">
                        {post.title}
                      </h2>
                      <p className="mt-2 leading-relaxed text-charcoal/60">
                        {post.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-sage opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Read more
                        <ChevronRight
                          size={14}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                    <div className="mt-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/8 text-sage transition-colors group-hover:bg-sage/15">
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
