import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const Image = (props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
        placeholderImage2: file(relativePath: { eq: "phase-2.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        placeholderImage3: file(relativePath: { eq: "phase-3.png" }) {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
<<<<<<< Updated upstream

    render={(data) => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename);
      });
      console.log('NULL', data, props)
      if (!image) {
      return null; }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          alt={props.alt}
          sizes={imageSizes}
        />
      );
    }}
=======
    render={ data => 
      <Img fluid={data.placeholderImage.childImageSharp.fluid}></Img>
      // <Img fluid={data.placeholderImage2.childImageSharp.fluid}></Img>
      // <Img fluid={data.placeholderImage3.childImageSharp.fluid}></Img>
    }
>>>>>>> Stashed changes
  />
)
export default Image
