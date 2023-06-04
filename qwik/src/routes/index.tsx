import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$ } from "@builder.io/qwik-city";
import Peksu from "@/components/peksu/peksu";
import { getHeadlines } from "@/services/blog";

export const useBlogPosts = routeLoader$(async () => {
  const blogPosts = await getHeadlines();
  return blogPosts;
});

export default component$(() => {
  const blogPosts = useBlogPosts();

  return (
    <>
      <Peksu />

      {blogPosts.value.blogPostCollection.items.map((post) => {
        return (
          <div key={post.sys.id}>
            <h2>{post.title}</h2>
          </div>
        );
      })}
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
