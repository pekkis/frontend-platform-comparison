import { BlogPostType, HeadlineType } from "@/types";
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

export const getHeadlines = async (limit: number | undefined = undefined) => {
  const headlines = await graphQLClient.request<HeadlinesQueryResponse>(
    headlinesQuery,
    {
      limit
    }
  );

  return headlines;
};

export const getBlogPosts = async (slug: string) => {
  const ret = await graphQLClient.request<BlogPostQueryResponse>(
    blogPostQuery,
    {
      slug
    }
  );

  return ret;
};
