import { json } from "@remix-run/node"; // or cloudflare/deno
import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getHeadlines } from "~/services/blog";
import { blogPostUrl } from "~/services/url";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pexu Remix App" },
    { name: "description", content: "Welcome to Pexu Remix!" },
  ];
};

export async function loader() {
  const headlines = await getHeadlines();
  return json(headlines);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <div>
      <ul>
        {data.blogPostCollection.items.map((headline) => {
          return (
            <li key={headline.sys.id}>
              <Link to={blogPostUrl(headline)}>{headline.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
