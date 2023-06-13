import { Metadata } from "next";
import { notFound } from "next/navigation";

import { DateTime } from "luxon";
import Link from "next/link";
import { cache } from "react";
import Bio from "@/components/Bio";
import BlogContent from "@/components/BlogContent";
import BlogHeader from "@/components/BlogHeader";
import Layout from "@/components/Layout";
import Padder from "@/components/Padder";
import { getBlogPosts, getHeadlines } from "@/services/blog";
import { blogPostUrl } from "@/services/url";

type Props = {
  params: {
    slug: string;
    year: string;
    month: string;
    day: string;
  };
};

export const revalidate = 60 * 10;

export const getPost = cache(async (slug: string) => {
  const headlines = await getHeadlines(
    100,
    process.env.CONTENTFUL_PREVIEW === "true"
  );
  const ret = await getBlogPosts(
    slug,
    process.env.CONTENTFUL_PREVIEW === "true"
  );

  if (ret.blogPostCollection.items.length !== 1) {
    notFound();
  }

  const post = ret.blogPostCollection.items[0];

  const currentIndex = headlines.blogPostCollection.items.findIndex(
    (h) => h.slug === slug
  );

  const previous = headlines.blogPostCollection.items[currentIndex - 1] || null;
  const next = headlines.blogPostCollection.items[currentIndex + 1] || null;

  return {
    post,
    next,
    previous
  };
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getPost(params.slug);

  return {
    title: data.post.title,
    openGraph: {
      images: [`${data.post.mainImage.image.url}?w=1024`]
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { post, next, previous } = await getPost(params.slug);

  const date = DateTime.fromISO(post.date)
    .setLocale("fi")
    .setZone("Europe/Helsinki");

  const year = date.toFormat("yyyy");
  const month = date.toFormat("LL");
  const day = date.toFormat("dd");

  if (year !== params.year || month !== params.month || day !== params.day) {
    notFound();
  }

  return (
    <Layout>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <BlogHeader post={post} />
        <BlogContent post={post} />

        <footer>
          <Padder>
            <Bio />
          </Padder>
        </footer>
      </article>
      <Padder>
        <nav className="blog-post-nav">
          <ul>
            {previous && (
              <li>
                <Link href={blogPostUrl(previous)} rel="prev">
                  ← {previous.title}
                </Link>
              </li>
            )}

            {next && (
              <li>
                <Link href={blogPostUrl(next)} rel="next">
                  {next.title} →
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </Padder>
    </Layout>
  );
}
