import BlogInlinePicture from "@/components/BlogInlinePicture";
import RichTextDocument from "@/components/contentful/RichTextDocument";
import UnknownBlockComponent from "@/components/contentful/UnknownBlockComponent";
import { getBlogPosts } from "@/services/blog";
import type { ContentfulImageData } from "@/types";
import { type BlogPostType } from "@/types";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { Node } from "@contentful/rich-text-types";
import { BLOCKS } from "@contentful/rich-text-types";

export const useBlogPost = routeLoader$(async (requestEvent) => {
  const blogPosts = await getBlogPosts(
    requestEvent.params.slug,
    process.env.CONTENTFUL_PREVIEW === "true"
  );

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

const EmbeddedAsset = component$<{
  node: Node;
  context: {
    assets: {
      [k: string]: ContentfulImageData;
    };
  };
}>(({ node, context: { assets } }) => {
  const assetore = assets[node.data.target.sys.id];

  if (assetore) {
    return <BlogInlinePicture asset={assetore} />;
  }

  return <div>IMAISE NODEA LÄSKI</div>;
});

export default component$(() => {
  const post = useBlogPost();

  if (post?.value?.errorMessage) {
    return <div>articulado not found</div>;
  }

  const ripuli = post.value as BlogPostType;

  const assets = Object.fromEntries(
    ripuli.content.links.assets.block.map((b) => {
      return [b.sys.id, b];
    })
  );

  return (
    <article>
      <h1>{ripuli.title}</h1>
      <RichTextDocument
        context={{ assets }}
        document={ripuli.content.json}
        nodeRenderers={{ [BLOCKS.EMBEDDED_ASSET]: EmbeddedAsset }}
      />
    </article>
  );
});
