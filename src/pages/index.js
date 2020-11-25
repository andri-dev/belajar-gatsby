import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <Img fluid={data.file.childImageSharp.fluid} alt="Gatsby logo" />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/instagram.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
