import Link from "next/link";

import { DateTime } from "luxon";
import { FC } from "react";
import { blogPostUrl } from "../services/url";
import { HeadlineType } from "@/types";
import { dateClass, headerClass, listClass, postClass } from "./BlogPosts.css";

type Props = {
  posts: HeadlineType[];
};

const BlogPosts: FC<Props> = ({ posts }) => {
  return (
    <ol className={listClass}>
      {posts.map((post) => {
        const date = DateTime.fromISO(post.date)
          .setLocale("fi")
          .setZone("Europe/Helsinki");

        return (
          <li key={post.slug}>
            <article
              className={postClass}
              itemScope
              itemType="http://schema.org/Article"
            >
              <header>
                <h3 className={headerClass}>
                  <Link href={blogPostUrl(post)} itemProp="url">
                    <span itemProp="headline">{post.title}</span>
                  </Link>
                </h3>
                <time
                  className={dateClass}
                  dateTime={date.toFormat("yyyy-LL-dd")}
                >
                  {date.toLocaleString()}
                </time>
              </header>
              <section>
                <p>{post.ingress}</p>
              </section>
            </article>
          </li>
        );
      })}
    </ol>
  );
};

export default BlogPosts;
