import { FC } from "react";
import { BlogPostType } from "@/types";
import { ingressClass, rootClass } from "./BlogContent.css";
import RichText from "./RichText";

type Props = {
  post: BlogPostType;
};

const BlogContent: FC<Props> = ({ post }) => {
  return (
    <div className={rootClass}>
      <p className={ingressClass}>{post.ingress}</p>

      <RichText post={post} />
    </div>
  );
};

export default BlogContent;
