import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { Menu, Icon, Input, Button } from "semantic-ui-react"
import 'semantic-ui-css/semantic.min.css';
import MickeyLogoBlack from "../../../../images/mickey-tree-logo-words.png"
import MickeyLogoWhite from "../../../../images/mickey-logo-white.svg"
import { Sling as Hamburger, Sling } from 'hamburger-react'
import { media } from "../../../../../mq"
import { Slide } from "react-awesome-reveal"

const HeaderWrapper = styled.div`
  width: 100%;
  background-color:hsla(0, 0%, 0%, 0.03);
  button{
    box-shadow:none !important ;
    background-image: none !important ;
  }
  .item {
    font-size: 0.9em;
  }
  .button {
    padding: 0rem 2rem !important;
    font-size: 0.9em;
  }
  .header-inner-wrapper{
    height: 55px;
    .logo{
      width: 6em  !important;
    }
    /* padding: .5rem 3rem .5rem 3rem; */
    margin: 0 !important;
    border-radius: 0 !important;
    border-top: 0 !important;
    border-left: 0 !important;
    border-right: 0 !important;
    background-image: inherit !important;
    background-color: inherit !important;
    .item{
      font-weight: 700 !important;
    }
    .nav-link{
      display: none !important;
      ${media.medium`display: flex !important;`}
      a{
      color: black!important;
      transition: ease-in-out .2s;
      &:hover{
        color: gray !important;
      }
      }
    }
    .mobile-menu{
      display: flex !important;
      justify-content: center;
      margin: 0px 1rem 0px 1.75rem;
      ${media.medium`display: none !important;`}

    }
    .nav-link-get-started{
      color: white!important;
    }
    .get-started{
      display: none !important;
      border-radius: 0 !important;
      color: #fff;
      text-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      cursor: pointer;
      ${media.medium`display: flex !important; justify-content: center; align-items: center;`}
    }
  }
`

const MobileMenuWrapper = styled.div`
position: fixed;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
  ${media.medium`display: none !important;`}
  .close-mobile{
    position: absolute;
    top: 3rem;
    right: 3rem;
    background-color: transparent !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  ul{
    height: 25rem;
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    li{
      font-size: 3rem;
      line-height: 1rem;
      .get-started-mobile{
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 1px 1px rgb(0 0 0 / 20%);
        cursor: pointer;
        margin: 0;
      }
      a{
        color: inherit;
        transition: .2s ease-in-out;
        &:hover{
          opacity: .6;
        }
      }
    }
  }

`


const HomePageHeader = ({ siteTitle }) => {
  const [currentLocation, setCurrentLocation] = useState()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {
        isOpen &&
        <MobileMenuWrapper>
          <Button
            className="close-mobile"
            onClick={() => setIsOpen(false)}
          >
            <Icon name="close" size="big" />
          </Button>
          <Slide
            triggerOnce={false}
          >
            <ul>
              <li>
                <a
                  href="https://marketplace.mickey.io/login"
                >
                  Login
                </a>
              </li>
              <li>
                <Link
                  to="/features"
                >

                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                >

                  Company
                </Link>

              </li>
              <li>
                <Button
                  color="green"
                  className="get-started-mobile"
                >
                  <a href="https://marketplace.mickey.io/apply">
                    Get Started
                  </a>
                </Button>
              </li>
            </ul>

          </Slide>
        </MobileMenuWrapper>
      }

      <HeaderWrapper>
        <Menu
          size={"small"}
          borderless
          attached={'top'}
          className="header-inner-wrapper"
        >
          <Menu.Item
            header
            as={"a"}
            href={"/"}
            style={{
              padding: "0.5rem",
              margin: "0 1.75rem 0 1rem"
            }}
          >
            <img
              src={MickeyLogoBlack}
              className="logo"
              alt="Mickey Logo"
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              className="nav-link"
            >
              <a

                href="https://marketplace.mickey.io/login"
              >
                Login
              </a>
            </Menu.Item>
            <Menu.Item
              className="nav-link"
            >
              <Link

                to="/features">
                Features
              </Link>
            </Menu.Item>
            <Menu.Item
              className="nav-link"
              style={{ marginRight: '15px' }}
            >
              <Link

                to="/company"
              >
                Company
              </Link>
            </Menu.Item>
            <Button className='get-started' color="green" style={{ marginRight: '0' }}>
              <a
                className="nav-link-get-started"
                href="https://marketplace.mickey.io/apply"
              >
                Get Started
              </a>
            </Button>

            <Menu.Item className="mobile-menu">
              <div >
                <Sling toggled={isOpen} toggle={setIsOpen} />
              </div>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </HeaderWrapper >

    </>
  )
}

HomePageHeader.propTypes = {
  siteTitle: PropTypes.string,
}

HomePageHeader.defaultProps = {
  siteTitle: ``,
}

export default HomePageHeader
