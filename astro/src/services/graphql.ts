import { GraphQLClient } from "graphql-request";

export const endpoint = `https://graphql.contentful.com/content/v1/spaces/${
  import.meta.env.CONTENTFUL_SPACE_ID
}`;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${import.meta.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
});
