import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  margin: 10vh -1em;

  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  flex: 1;
  margin: 0 1em;
  max-width: 30em;
`

const LeadingParaphgraph = styled.p`
  font-size: 1.4em;
  margin: 10vh 0;
  max-width: 20rem;
  a {
    color: inherit;
  }
`
const Heading = styled.h4`
  font-size: 0.8rem;
  font-family: interstate-mono, monospace;
  text-transform: uppercase;
  margin-bottom: 1em;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <LeadingParaphgraph>
      I'd love an opportunity to work with amazing people to build amazing
      products.
    </LeadingParaphgraph>
    <Row>
      <Col>
        <p>
          If you are searching for a <strong>product designer</strong> with{" "}
          <strong>UX</strong> experience as well as years of front end
          development experience, I might be your person!
        </p>
      </Col>
      <Col>
        <Heading>Email</Heading>
        <p>
          <Link to="mailto:patrickglittle@gmail.com">
            patrickglittle@gmail.com
          </Link>
        </p>
      </Col>
    </Row>
  </Layout>
)

export default SecondPage
