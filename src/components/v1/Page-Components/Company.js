import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Seo from "../seo"

//Components
import Layout from '../layout';
import CompanyInfo from "../Layout-Components/CompanyPage/CompanyInfo"
import MickeyInThePress from '../Layout-Components/CompanyPage/MickeyInThePress/MickeyInThePress';
import MeetTheTeam from '../Layout-Components/CompanyPage/MeetTheTeam/MeetTheTeam';


const Company = () => {
  const data = useStaticQuery(graphql`
  query CompanyQuery {
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
    allWpNewsArticle {
      edges {
        node {
          title
          newsArticles {
            month
            day
            year
            articleLink
            headline
            newsArticleSnippet
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
  const [sortedNewsArticles, setSortedNewsArticles] = useState([])
  useEffect(() => {
    let releasesWithDates = []
    let newsWithDates = []
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
    newsArticles.forEach(news => {
      newsWithDates.push(
        {
          date: `${news.node.newsArticles.year}-${news.node.newsArticles.month}-${news.node.newsArticles.day}`,
          month: news.node.newsArticles.month,
          day: news.node.newsArticles.day,
          year: news.node.newsArticles.year,
          articleLink: news.node.newsArticles.articleLink,
          pressnewsContent: news.node.newsArticles.pressnewsContent,
          image: news.node.newsArticles.image.localFile,
          slug: news.node.slug,
          title: news.node.title,
          headline: news.node.newsArticles.headline,
          snippet: news.node.newsArticles.newsArticleSnippet
        }
      )
    })

    const sortedReleases = releasesWithDates.sort((a, b) => new Date(b.date) - new Date(a.date))
    const sortedNews = newsWithDates.sort((a, b) => new Date(b.date) - new Date(a.date))
    setSortedPressReleases(sortedReleases)
    setSortedNewsArticles(sortedNews)
  }, [])


  const pressReleases = data?.allWpPressRelease?.edges
  const newsArticles = data?.allWpNewsArticle?.edges
  const teamMembers = data?.allWpTeamMember?.edges
  return (
    <>
      <Seo title="Learn More About Mickey" />
      <Layout>
        <CompanyInfo />
        <MeetTheTeam teamMembers={teamMembers} />
        <MickeyInThePress sortedPressReleases={sortedPressReleases} sortedNewsArticles={sortedNewsArticles} />
      </Layout>
    </>
  )
};

export default Company;
