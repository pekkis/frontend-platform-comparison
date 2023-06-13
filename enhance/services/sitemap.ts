import { BlogPostType } from "@/types";
import { graphQLClient, sitemapQuery } from "./graphql";

type SitemapQueryResponse = {
  blogPostCollection: {
    items: BlogPostType[];
  };
};

export const getSitemap = async () => {
  const ret = await graphQLClient.request<SitemapQueryResponse>(sitemapQuery);
  return ret;
};
