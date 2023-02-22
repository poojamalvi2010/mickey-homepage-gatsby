import React, { useState, useEffect } from 'react'
import Layout from '../components/v2/Layout/layout2'
import { useStaticQuery, graphql } from "gatsby"
import { Divider, Grid, Header } from "semantic-ui-react";
import styled from 'styled-components';
import PressRow from '../components/v2/PressPage/PressRow';

const AboutPress = () => {
  const [sortedPressReleases, setSortedPressReleases] = useState([])
  const data = useStaticQuery(graphql`
    query ReleaseQuery {
      allWpPressRelease {
        edges {
          node {
            slug
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
                    gatsbyImageData(placeholder: BLURRED, formats: WEBP, height: 100)
                  }
                }
              }
            }
          }
        }
      }
    }
`)

  const pressReleases = data?.allWpPressRelease?.edges

  useEffect(() => {
    let releasesWithDates = []
    pressReleases.forEach(release => {
      releasesWithDates.push(
        {
          date: `${release.node.pressReleases.year}-${release.node.pressReleases.month}-${release.node.pressReleases.day}`,
          month: release.node.pressReleases.month,
          day: release.node.pressReleases.day,
          year: release.node.pressReleases.year,
          articleLink: release.node.pressReleases.articleLink,
          pressReleaseContent: release.node.pressReleases.pressReleaseContent,
          image: release.node.pressReleases.image.localFile,
          slug: release.node.slug,
          title: release.node.title,
          headline: release.node.pressReleases.headline,
          subheader: release.node.pressReleases.pressReleaseSubheader
        }
      )
    })

    const sortedReleases = releasesWithDates.sort((a, b) => new Date(b.date) - new Date(a.date))
    setSortedPressReleases(sortedReleases)
  }, [])


  const AllPressReleasesWrapper = styled.div`
        width: 100vw;
        height: 100%;
        min-height: 70vh;
        padding: 3rem 0 3rem 0;
        .grid{
          justify-content: center;
        }
    `
  return (

    <Layout>
      <AllPressReleasesWrapper>
        <Grid>
          <Grid.Column width={12}>
            <Header className='press-releases-header' as={"h1"} style={{ marginBottom: "2rem" }}>Press</Header>
            <Divider style={{ marginRight: "3rem", marginLeft: "3rem" }} />
            <div style={{ padding: "0 3rem 0 3rem" }}>
              {
                sortedPressReleases.map(release => {
                  const day = release?.day
                  const month = release?.month
                  const year = release?.year
                  const date = release?.date
                  const image = release?.image
                  const title = release?.title
                  const link = release?.articleLink
                  const headline = release?.headline
                  const slug = release?.slug
                  const pressReleaseContent = release?.pressReleaseContent
                  const subheader = release?.subheader
                  return (
                    <>
                      <PressRow
                        day={day}
                        month={month}
                        year={year}
                        date={date}
                        image={image}
                        alt={title}
                        href={link}
                        headline={headline}
                        slug={slug}
                        pressReleaseContent={pressReleaseContent}
                        subheader={subheader}
                      />
                      <Divider />
                    </>
                  )
                })
              }
            </div>


          </Grid.Column>

        </Grid>
      </AllPressReleasesWrapper>

    </Layout>
  )
}

export default AboutPress