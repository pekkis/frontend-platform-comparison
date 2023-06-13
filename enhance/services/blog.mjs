import { blogPostQuery, graphQLClient, headlinesQuery } from "./graphql.mjs";

export const getHeadlines = async (limit, preview = false) => {
  const headlines = await graphQLClient.request(headlinesQuery, {
    limit,
    preview,
  });

  return headlines;
};

export const getBlogPosts = async (slug, preview = false) => {
  const ret = await graphQLClient.request(blogPostQuery, {
    slug,
    preview,
  });

  return ret;
};
