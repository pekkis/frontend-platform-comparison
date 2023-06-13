import type { BlogPostType, HeadlineType } from "@/types";
import { blogPostQuery, graphQLClient, headlinesQuery } from "./graphql";

export type BlogPostQueryResponse = {
  blogPostCollection: {
    items: BlogPostType[];
  };
};

export type HeadlinesQueryResponse = {
  blogPostCollection: {
    items: HeadlineType[];
  };
};

export const getHeadlines = async (limit = 10, preview = false) => {
  const headlines = await graphQLClient.request<HeadlinesQueryResponse>(
    headlinesQuery,
    {
      limit,
      preview
    }
  );

  return headlines;
};

export const getBlogPosts = async (slug: string, preview = false) => {
  const ret = await graphQLClient.request<BlogPostQueryResponse>(
    blogPostQuery,
    {
      slug,
      preview
    }
  );

  return ret;
};
