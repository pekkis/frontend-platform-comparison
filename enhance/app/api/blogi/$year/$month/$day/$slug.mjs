import { getBlogPosts } from "../../../../../../services/blog.mjs";

export async function get(req) {
  console.log(req, "req");

  const posts = await getBlogPosts(req.params.slug);

  return {
    json: {
      post: posts.blogPostCollection.items[0],
    },
  };
}
