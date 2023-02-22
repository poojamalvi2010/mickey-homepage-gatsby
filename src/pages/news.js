import React, { useState, useEffect } from "react"
import Layout from "../components/v2/Layout/layout2"
import { useStaticQuery, graphql } from "gatsby"
import { Divider, Grid, Header } from "semantic-ui-react"
import styled from "styled-components"
import NewsRow from "../components/v2/NewsPage/NewsRow"
import useWindowDimensions from "../hooks/useWindowDimensions"

const AboutNews = () => {
  const [sortedNewsArticles, setSortedNewsArticles] = useState([])
  const data = useStaticQuery(graphql`
    query NewsQuery {
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
                    gatsbyImageData(
                      placeholder: BLURRED
                      formats: WEBP
                      width: 250
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    let newsWithDates = []
    newsArticles.forEach(news => {
      newsWithDates.push({
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
        snippet: news.node.newsArticles.newsArticleSnippet,
      })
    })
    const sortedNews = newsWithDates.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    )
    setSortedNewsArticles(sortedNews)
  }, [])

  const newsArticles = data?.allWpNewsArticle?.edges
  const wd = useWindowDimensions()
  const AllNewsReleasesWrapper = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 70vh;
    padding: 3rem 0 3rem 0;
    .grid {
      justify-content: center;
    }
  `
  return (
    <Layout>
      <AllNewsReleasesWrapper>
        <Grid>
          <Grid.Column width={wd.width <= 768 ? 14 : 12}>
            <Header
              className="press-releases-header"
              as={"h1"}
              style={{ marginBottom: "2rem" }}
            >
              News
            </Header>
            <Divider style={{ marginRight: "3rem", marginLeft: "3rem" }} />
            <div style={{ padding: "0 3rem 0 3rem" }}>
              {sortedNewsArticles.map(news => {
                const day = news?.day
                const month = news?.month
                const year = news?.year
                const date = news?.date
                const image = news?.image
                const title = news?.title
                const link = news?.articleLink
                const headline = news?.headline
                const snippet = news?.snippet
                return (
                  <>
                    <NewsRow
                      day={day}
                      month={month}
                      year={year}
                      date={date}
                      image={image}
                      alt={title}
                      href={link}
                      headline={headline}
                      snippet={snippet}
                    />
                    <Divider />
                  </>
                )
              })}
            </div>
          </Grid.Column>
        </Grid>
      </AllNewsReleasesWrapper>
    </Layout>
  )
}

export default AboutNews
