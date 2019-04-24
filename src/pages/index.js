import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects"

import styled from "styled-components"

const LeadingParaphgraph = styled.p`
  font-size: 1.4em;
  max-width: 20em;
  margin: 10vh 0;

  a {
    color: inherit;
  }
`

const IndexPage = ({ data }) => {
  const { edges: work } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <LeadingParaphgraph>
        I’m a product designer, developer, and freelance philosopher. Currently,
        I'm seeking a full time remote position with a company that respects all
        people. If you are interested in working with me or hearing more about
        my process, please reach out via email:{" "}
        <Link to="mailto:patrickglittle@gmail.com">
          patrickglittle@gmail.com
        </Link>
      </LeadingParaphgraph>
      <Projects items={work} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
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
