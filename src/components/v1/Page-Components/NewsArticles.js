import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Layout from '../layout'
import { graphql, useStaticQuery } from 'gatsby';
import { Header, Divider } from 'semantic-ui-react';
import PressRowOld from '../Layout-Components/CompanyPage/MickeyInThePress/PressRowOld';
import NewsRow from '../Layout-Components/CompanyPage/MickeyInThePress/NewsRow';
import { media } from "../../../../mq"
const NewsArticles = () => {
    const data = useStaticQuery(graphql`
    query NewsArticleQuery {
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
    const [sortedNewsArticles, setSortedNewsArticles] = useState([])

    useEffect(() => {
        let articlesWithDates = []
        data?.allWpNewsArticle?.edges?.forEach(news => {
            articlesWithDates.push(
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
        const sortedNews = articlesWithDates.sort((a, b) => new Date(b.date) - new Date(a.date))
        setSortedNewsArticles(sortedNews)
    }, [])

    const AllNewsArticlesWrapper = styled.div`
        width: 100vw;
        height: 100%;
        padding: 2rem 5rem 2rem 5rem;
        .news-article-header{
            text-align: center !important;
            ${media.small`
            text-align: left !important;
            `}
        }
    `

    return (
        <Layout>
            <AllNewsArticlesWrapper>
                <Header className='news-article-header' as={"h1"} style={{ marginBottom: "2rem" }}>Mickey News Articles</Header>
                <Divider />
                {
                    sortedNewsArticles.map(news => {
                        const date = news?.date
                        const link = news?.articleLink
                        const title = news?.title
                        const headline = news?.headline
                        const image = news?.image
                        const month = news?.month
                        const year = news?.year
                        const day = news?.day
                        const snippet = news?.snippet
                        return (
                            <>
                                <NewsRow
                                    date={date}
                                    month={month}
                                    day={day}
                                    year={year}
                                    image={image}
                                    alt={title}
                                    href={link}
                                    headline={headline}
                                    snippet={snippet}
                                />
                                <Divider />
                            </>
                        )
                    })
                }
            </AllNewsArticlesWrapper>
        </Layout>
    )
}

export default NewsArticles