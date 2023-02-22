import React, { useState } from 'react'
import Layout from '../components/v2/Layout/layout2'
import { graphql, useStaticQuery } from 'gatsby'
import MickeyTeam from "../components/v2/TeamPage/MickeyTeam"

const AboutTeam = () => {
  const data = useStaticQuery(graphql`
  query TeamQuery {
    allWpTeamMember {
      edges {
        node {
          teamMembers {
            name
            role
            headshot {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, quality: 100)
                }
              }
            }
          }
        }
      }
    }
  }
`)

  const teamMembers = data?.allWpTeamMember?.edges
  return (
    <Layout>
      <MickeyTeam teamMembers={teamMembers} />
    </Layout>
  )
}

export default AboutTeam