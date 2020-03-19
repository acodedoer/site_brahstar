import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageMain = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "main.png" }) {
        childImageSharp {
          fixed(width: 200, height:200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return <Img style={{maxWidth:'100%'}}fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default ImageMain
