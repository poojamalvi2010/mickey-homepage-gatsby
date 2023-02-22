/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import HomePageHeader from "./Layout-Components/Header/header"
import Footer from "./Layout-Components/Footer/footer"
import "./layout.css"
import "semantic-ui-css/semantic.min.css"
import { Header, Input, Button } from "semantic-ui-react"
import { media } from "../../../mq"
import GetStartedInput from "./Layout-Components/GetStartedInput/GetStartedInput"

const LayoutWrapper = styled.div`
width: 100vw;
height: 100%;
background-color: whitesmoke;
overflow: hidden;
z-index: 1;
.get-started{
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100vw;
  height: 100%;
  min-height: 40vh;
  padding: 6rem 3rem 6rem 3rem;
  h1{
      width: 100%;
      font-size: 3rem !important;
  }
}
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <HomePageHeader />
      <LayoutWrapper className="layout-wrapper background-1">
        <main>{children}</main>
        <div className="get-started">
          <Header as={"h1"} textAlign={"center"}>
            Get Started on Mickey
          </Header>
          <GetStartedInput backgroundColor={"whitesmoke"} />
        </div>
      </LayoutWrapper>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
