import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  font-family: interstate-mono, monospace;
  font-size: 14px;
  text-transform: uppercase;

  a {
    color: #2b2d29;
    transition: color 0.2s ease;
    text-decoration: none;
    color: #2b2d29;
    letter-spacing: 0;
    text-align: center;

    &:hover {
      color: inherit;
    }

    @media (min-width: 576) {
      text-align: none;
    }
  }

  h1 {
    font-size: 18px;
    color: #fefdf8;
    letter-spacing: 0;
    text-align: center;
    margin: 0;
    font-family: interstate-mono, monospace;
  }

  .line {
    background: #2b2d29;
    height: 1px;
    flex: 1;
    margin: 0 1em;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <Link to="/work">See My Work</Link>
    <span className="line" />
    <Link to="/">
      <h1>{siteTitle}</h1>
    </Link>
    <span className="line" />
    <Link to="/contact">Contact Me</Link>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
