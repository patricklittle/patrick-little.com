import React from "react"
import Projects from "../components/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = ({ data }) => {
  const { edges: work } = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Hi from the Work page</h1>
      <Projects items={work} />
    </Layout>
  )
}

export default Work

export const query = graphql`
  query WorkQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
          }

          fields {
            slug
          }
        }
      }
    }
  }
`
