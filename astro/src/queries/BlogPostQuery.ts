import { gql } from "graphql-request";

export const blogPostQuery = gql`
  query BlogPostArticle($slug: String!) {
    blogPostCollection(limit: 1, where: { slug: $slug }) {
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
