import { DateTime } from "luxon";
import { FC } from "react";
import { BlogPostType } from "@/types";
import {
  dateClass,
  headerClass,
  headerContentClass,
  rootClass
} from "./BlogHeader.css";
import ContentfulImage from "./ContentfulImage";

type Props = {
  post: BlogPostType;
};

const BlogHeader: FC<Props> = ({ post }) => {
  const date = DateTime.fromISO(post.date)
    .setLocale("fi")
    .setZone("Europe/Helsinki");

  return (
    <header className={rootClass}>
      {post.mainImage && (
        <ContentfulImage
          alt={post.mainImage.image.title}
          config={{
            width: 1024,
            aspectRatio: 16 / 9,
            fit: "fill"
          }}
          data={post.mainImage.image}
        />
      )}

      <div className={headerContentClass}>
        <h1 className={headerClass} itemProp="headline">
          {post.title}
        </h1>
        <time className={dateClass} dateTime={date.toFormat("yyyy-LL-dd")}>
          {date.toLocaleString()}
        </time>
      </div>
    </header>
  );
};

export default BlogHeader;
