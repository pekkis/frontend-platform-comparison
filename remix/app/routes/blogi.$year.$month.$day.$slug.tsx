import { type LoaderArgs, json } from "@remix-run/node";
import type { V2_MetaFunction } from "@remix-run/node";
import {
  Link,
  isRouteErrorResponse,
  useCatch,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import { getBlogPosts, getHeadlines } from "~/services/blog";
import { blogPostUrl } from "~/services/url";
import { BlogPostType } from "~/types";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Pexu Remix App" },
    { name: "description", content: "Welcome to Pexu Remix!" },
  ];
};

export async function loader({ params }: LoaderArgs) {
  const posts = await getBlogPosts(params.slug!);

  if (posts.blogPostCollection.items.length !== 1) {
    throw json("Post not found", { status: 404 });
  }

  return json(posts.blogPostCollection.items[0] as BlogPostType);
}

export default function BlogPost() {
  const data = useLoaderData<BlogPostType>();

  return <div>{data.title}</div>;
}

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status}</p>
        <p>{error.data}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Uh oh ...</h1>
      <p>Something went wrong.</p>
    </div>
  );
}
