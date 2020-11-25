import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Container from "../components/container"

export default function Belajar({ data }) {
  const { title } = data.site.siteMetadata
  return (
    <Container>
      <Header headerText="Belajar Gatsby" />
      <p style={{ fontSize: 18, color: `gray` }}>
        Menggunakan Header Component props
      </p>
      <h2>{title}</h2>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
