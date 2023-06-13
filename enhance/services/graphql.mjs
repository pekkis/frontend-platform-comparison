import { GraphQLClient, gql } from "graphql-request";

export const createClient = (spaceId, accessToken) => {
  const endpoint = `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  return graphQLClient;
};

export const graphQLClient = createClient(
  process.env.CONTENTFUL_SPACE_ID,
  process.env.CONTENTFUL_ACCESS_TOKEN
);

export const headlinesQuery = gql`
  query Headlines($limit: Int! = 10, $preview: Boolean! = false) {
    blogPostCollection(
      preview: $preview
      order: [date_DESC]
      limit: $limit
      where: { visible: true }
    ) {
      total
      items {
        sys {
          id
        }
        visible
        date
        title
        slug
        ingress
      }
    }
  }
`;

export const blogPostQuery = gql`
  query BlogPostArticle($slug: String!, $preview: Boolean! = false) {
    blogPostCollection(preview: $preview, limit: 1, where: { slug: $slug }) {
      items {
        sys {
          id
        }
        title
        ingress
        date
        content {
          links {
            assets {
              __typename
              block {
                sys {
                  id
                }
                __typename
                width
                height
                url
                title
                description
                sys {
                  id
                }
              }
            }
          }

          json
        }
        mainImage {
          sys {
            id
          }
          image {
            title
            url
            width
            height
          }
        }
      }
    }
  }
`;

export const sitemapQuery = gql`
  query SitemapStuff {
    blogPostCollection(limit: 150, where: { visible: true }) {
      items {
        date
        slug
      }
    }
  }
`;
