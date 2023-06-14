import { Metadata } from "next";
import { notFound } from "next/navigation";

import { DateTime } from "luxon";
import Link from "next/link";
import { Suspense, cache } from "react";
import Bio from "@/components/Bio";
import BlogContent from "@/components/BlogContent";
import BlogHeader from "@/components/BlogHeader";
import Layout from "@/components/Layout";
import Padder from "@/components/Padder";
import * as blogService from "@/services/blog";
import { blogPostUrl } from "@/services/url";

import * as styles from "./BlogPostPage.css";
import clsx from "clsx";
import Headlines from "./Headlines";
import HeadlinesLoader from "./HeadlinesLoader";
import Spinner from "@/components/Spinner";

type Props = {
  params: {
    slug: string;
    year: string;
    month: string;
    day: string;
  };
};

export const revalidate = 60 * 10;

const getExpensiveHeadlines = cache(
  (
    limit: number,
    preview: boolean
  ): Promise<blogService.HeadlinesQueryResponse> => {
    return new Promise(async (resolve) => {
      const headlines = await blogService.getHeadlines(limit, preview);

      setTimeout(() => {
        resolve(headlines);
      }, 5000);
    });
  }
);

export const getPost = cache(async (slug: string) => {
  const headlines = await blogService.getHeadlines(
    100,
    process.env.CONTENTFUL_PREVIEW === "true"
  );
  const ret = await blogService.getBlogPosts(
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

  // const expensiveHeadlines = await getExpensiveHeadlines(10, false);

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
      <div className={styles.grid}>
        <div className={styles.content}>
          <article
            className={clsx("blog-post")}
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
        </div>

        <aside className={styles.aside}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
            vulputate magna. Aliquam dictum diam lacus, sed suscipit diam luctus
            id. Duis pellentesque, nulla id venenatis auctor, nisl magna
            placerat magna, vitae iaculis quam nulla vitae lacus. Sed laoreet
            scelerisque odio quis vehicula. Duis ac neque gravida purus
            dignissim congue. Duis cursus condimentum erat id faucibus. Ut vitae
            arcu a nisi bibendum varius.
          </p>

          <p>
            Etiam mollis erat sem, ut sodales erat consectetur vel. Aliquam
            ullamcorper at augue ac bibendum. Morbi quis arcu dapibus, sodales
            ipsum ac, malesuada ligula. Aliquam porttitor urna et hendrerit
            porta. Phasellus dapibus mi non sem pellentesque, placerat dictum
            diam porta. Vestibulum venenatis est sed semper eleifend. Fusce non
            tincidunt purus, nec sollicitudin eros. Mauris eu diam ut ipsum
            viverra egestas. Donec et dictum magna, at sollicitudin erat.
            Curabitur tincidunt rhoncus tortor, sed porta erat congue vitae. Sed
            sapien libero, congue in odio quis, mollis consequat erat. Curabitur
            mauris odio, porta tempus laoreet accumsan, ultrices nec neque. Ut
            orci risus, ullamcorper eu nisi eu, bibendum rutrum nisi. Donec
            hendrerit diam sit amet lobortis sollicitudin.
          </p>
        </aside>
      </div>
    </Layout>
  );
}
