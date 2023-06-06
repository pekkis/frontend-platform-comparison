import Document from "@/components/contentful/Document";
import { getBlogPosts } from "@/services/blog";
import { documentToReactComponents } from "@/services/contentful";
import { type BlogPostType } from "@/types";
import { JSXNode } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useBlogPost = routeLoader$(async (requestEvent) => {
  const blogPosts = await getBlogPosts(requestEvent.params.slug);

  if (blogPosts.blogPostCollection.items.length !== 1) {
    return requestEvent.fail(404, {
      errorMessage: "Blog post not found"
    });
  }

  // @todo: validate urls

  const post = blogPosts.blogPostCollection.items[0];
  return post;
});

// Now we can export a function that returns a DocumentHead object
export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(useBlogPost) as BlogPostType;
  return {
    title: post.title
  };
};

export default component$(() => {
  const post = useBlogPost();

  if (post?.value?.errorMessage) {
    return <div>articulado not found {tussi}</div>;
  }

  const ripuli = post.value as BlogPostType;

  return (
    <article>
      <h1>{ripuli.title}</h1>

      <Document document={ripuli.content.json} />
    </article>
  );
});
