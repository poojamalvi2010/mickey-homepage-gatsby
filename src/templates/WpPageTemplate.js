import React from "react"
import { graphql } from "gatsby"
import Features from "../components/v1/Page-Components/Features"
import Company from "../components/v1/Page-Components/Company"
import PressReleases from "../components/v1/Page-Components/PressReleases"
import PrivacyPolicy from "../components/v1/Page-Components/PrivacyPolicy"
import UserAgreement from "../components/v1/Page-Components/UserAgreement"
import NewsArticles from "../components/v1/Page-Components/NewsArticles"

const WpPageTemplate = ({ data }) => {
  const page = data?.allWpPage?.edges[0]?.node || {}
  // if (page.slug === "features") {
  //   return <Features />
  // } else if (page.slug === "company") {
  //   return <Company />
  // } else if (page.slug === "press-releases") {
  //   return <PressReleases />
  // }
  // else if (page.slug === "news-articles") {
  //   return <NewsArticles />
  // }
  // else if (page.slug === "user-agreement") {
  //   return <UserAgreement />
  // }
  // else if (page.slug === "privacy-policy") {
  //   return <PrivacyPolicy />
  // }
  // else if (page.slug === "commodities") {
  //   return <Features />
  // }
  return (
    <>
      <h1 dangerouslySetInnerHTML={{ __html: page?.title }} />
      <div dangerouslySetInnerHTML={{ __html: page?.content }} />
    </>
  )
}

export const data = graphql`
  query WpPageQuery($slug: String!) {
    allWpPage(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          title
          content
          slug
        }
      }
    }
  }
`

export default WpPageTemplate
