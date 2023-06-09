import { graphql } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const query = graphql`
  query HeadlinesQuery {
    allContentfulBlogPost {
      totalCount
      nodes {
        id
        title
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <ul>
          {data.allContentfulBlogPost.nodes.map(data => {
            return <li key={data.id}>{data.title}</li>
          })}
        </ul>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
