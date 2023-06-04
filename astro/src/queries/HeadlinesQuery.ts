import { gql } from "graphql-request";

export const headlinesQuery = gql`
  query Headlines($limit: Int! = 10) {
    blogPostCollection(
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
