import { component$ } from "@builder.io/qwik";
import { type DocumentHead, routeLoader$, Link } from "@builder.io/qwik-city";
import Peksu from "@/components/peksu/peksu";
import { getHeadlines } from "@/services/blog";
import { blogPostUrl } from "@/services/url";

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
            <Link href={blogPostUrl(post)}>
              <h2>{post.title}</h2>

              <p>{post.ingress}</p>
            </Link>
          </div>
        );
      })}
    </>
  );
});

export const head: DocumentHead = {
  title: "Pekkis.eu: Qwik Edition",
  meta: [
    {
      name: "description",
      content: "Peksun himapage protaali"
    }
  ]
};
