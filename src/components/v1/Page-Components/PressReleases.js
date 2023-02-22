import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Layout from '../layout'
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Divider } from 'semantic-ui-react';
import PressRowOld from '../Layout-Components/CompanyPage/MickeyInThePress/PressRowOld';
import { media } from '../../../../mq';

const PressReleases = () => {
  const data = useStaticQuery(graphql`
    query PressReleaseQuery {
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
                    gatsbyImageData(placeholder: BLURRED, formats: WEBP, width: 250)
                  }
                }
              }
            }
          }
        }
      }
    }
    `)
  const [sortedPressReleases, setSortedPressReleases] = useState([])
  useEffect(() => {
    let releasesWithDates = []
    data?.allWpPressRelease?.edges?.forEach(release => {
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
        padding: 2rem 5rem 2rem 5rem;
        .press-releases-header{
            text-align: center !important;
            ${media.small`
            text-align: left !important;
            `}
        }
    `

  return (
    <Layout>
      <AllPressReleasesWrapper>
        <Header className='press-releases-header' as={"h1"} style={{ marginBottom: "2rem" }}>Mickey Press Releases</Header>
        <Divider />
        {
          sortedPressReleases.map(release => {
            const day = release?.day
            const month = release?.month
            const year = release?.year
            const date = release?.date
            const image = release?.image?.localFile
            const title = release?.title
            const link = release?.articleLink
            const headline = release?.headline
            const slug = release?.slug
            const pressReleaseContent = release?.pressReleaseContent
            const subheader = release?.subheader
            return (
              <>
                <PressRowOld
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
      </AllPressReleasesWrapper>
    </Layout>
  )
}

export default PressReleases