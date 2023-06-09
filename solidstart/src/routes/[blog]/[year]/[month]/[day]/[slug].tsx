import {
  A,
  ErrorBoundary,
  RouteDataArgs,
  Title,
  useRouteData,
} from "solid-start";

import { For } from "solid-js";
import { getBlogPosts } from "~/services/blog";
import { ServerError, createServerData$ } from "solid-start/server";
import { blogPostUrl } from "~/services/url";
import { BlogPostType } from "~/types";

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async (slug: string) => {
      const posts = await getBlogPosts(slug);

      if (posts.blogPostCollection.items.length !== 1) {
        throw new ServerError("Not found");
      }

      return posts.blogPostCollection.items[0] as BlogPostType;
    },
    { key: () => params.slug, deferStream: true }
  );
}
export default function Home() {
  const post = useRouteData<typeof routeData>();

  return (
    <ErrorBoundary
      fallback={(e: Error) => (
        <>
          <h2>Oh no! An Error!</h2>
          <details>
            <summary>Click here to learn more</summary>
            <p>
              <strong>{e.name}</strong>: {e.message}
            </p>
          </details>
        </>
      )}
    >
      <main>
        <Title>{post()?.title}</Title>
        <h1>{post()?.title}</h1>

        <p>{post()?.ingress}</p>
      </main>
    </ErrorBoundary>
  );
}
