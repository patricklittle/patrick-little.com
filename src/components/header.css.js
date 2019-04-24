import styled from "styled-components"

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  font-family: interstate-mono, monospace;
  font-size: 14px;
  text-transform: uppercase;

  a {
    color: #2b2d29;
    transition: color 0.2s ease;
    text-decoration: none;
    color: #2b2d29;
    letter-spacing: 0;

    &:hover {
      color: inherit;
    }
  }

  h1 {
    font-size: 18px;
    color: #fefdf8;
    letter-spacing: 0;
    text-align: center;
  }

  .line {
    background: #2b2d29;
    height: 1px;
    flex: 1;
    margin: 0 1em;
  }
`
