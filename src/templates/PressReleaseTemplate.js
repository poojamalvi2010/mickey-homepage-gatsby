import React from "react"
import { graphql } from "gatsby"

//Components
import PressRelease from "../components/v1/Layout-Components/PressReleases/PressRelease"

const PressReleaseTemplate = ({ data }) => {
  const pressRelease = data?.pressRelease?.edges[0]?.node || {}
  return (
    <>
      <PressRelease pressRelease={pressRelease} />
    </>
  )
}

export const data = graphql`
  query($slug: String!) {
    pressRelease: allWpPressRelease(filter: { slug: { eq: $slug } }) {
        edges {
        node {
          title
          pressReleases {
            month
            day
            year
            articleLink
            headline
            pressReleaseContent
            pressReleaseSubheader
            image {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: WEBP, width: 250)
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PressReleaseTemplate
