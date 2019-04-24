import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"

const ProjectTitle = styled.h3`
  font-weight: 500;
  font-size: 1.4em;
  font-family: acumin-pro, sans-serif;
  margin: 0;
  padding: 0;
`

const Carrot = styled.span`
  margin: 0 1rem;
`

const ProjectDescription = styled.div`
  font-family: interstate-mono, monospace;
  font-size: 0.8rem;
  color: #2b2d29;
  letter-spacing: 0;
`

const Projects = styled.div`
  margin: 0 0 1rem 0;
  width: 100%;
`

const Project = styled(Link)`
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid;
  padding: 1rem 0;
  margin: 0;
  color: #2b2d29;
  text-decoration: none;
`

const Heading = styled.h4`
  font-size: 0.8rem;
  font-family: interstate-mono, monospace;
  text-transform: uppercase;
`

const ProjectList = ({ items }) => (
  <>
    <Heading>Select Projects</Heading>
    <Projects>
      {items.map(({ node: work }) => {
        const { frontmatter, fields, id } = work
        return (
          <Project to={fields.slug} key={id}>
            <ProjectTitle>{frontmatter.title}</ProjectTitle>
            <ProjectDescription>
              <Carrot>-</Carrot>
              {frontmatter.description}
            </ProjectDescription>
          </Project>
        )
      })}
    </Projects>
  </>
)

ProjectList.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectList
