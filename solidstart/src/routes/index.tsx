import { A, Title, useRouteData } from "solid-start";

import { For } from "solid-js";
import { createServerData$ } from "solid-start/server";
import { getHeadlines } from "~/services/blog";
import { blogPostUrl } from "~/services/url";

export function routeData() {
  return createServerData$(() => getHeadlines(10));
}

export default function Home() {
  const posts = useRouteData<typeof routeData>();
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>

      <For each={posts()?.blogPostCollection.items}>
        {(post) => (
          <li>
            <A href={blogPostUrl(post)}>{post.title}</A>
          </li>
        )}
      </For>
    </main>
  );
}
