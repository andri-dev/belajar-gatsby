import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import instagram from "../../static/instagram.png"

export default function Home({ data }) {
  return (
    <Layout>
      <Img fluid={data.file.childImageSharp.fluid} alt="Gatsby logo" />
      <img src={instagram} alt="Instgram" />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "github-icon.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
