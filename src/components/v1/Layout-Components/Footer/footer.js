import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import { Button, Header, Icon } from 'semantic-ui-react'
import { Link } from "gatsby"
import { media } from '../../../../../mq'
import useWindowDimensions from "../../../../hooks/useWindowDimensions";

const FooterWrapper = styled.div`
display: flex;
flex-direction:column ;
background-color: whitesmoke;
width: 100vw;
height: 100%;
min-height: 30vh;
padding: 3rem;
justify-content:center;
${media.medium`flex-direction: row;`}
.footer-column{
    display: flex;
    flex-direction: column;
    flex: 0 1 15%;
    align-items: center;
    ${media.medium`align-items: flex-start;`}
    .inner-footer-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        text-align: center;
        ${media.medium`
            text-align: left;
            justify-content: left;
            align-items: flex-start;
        `}
        &#back-to-top-column{
            ${media.medium`align-items: center !important;`}
    }
    h4{
        font-size: 1.45rem;
        ${media.medium`font-size: 1rem;`}
    }
        .backtotop {
            font-family: "BrownLLSub-Light", sans-serif !important;
            text-align: left;
        }
        .back-to-top-button{
            background: none;
            color: inherit;
            border: none;
            padding: 0;
            font: inherit;
            cursor: pointer;
            outline: inherit;
            i{
                margin: 0 !important;
            }
        }

    ul{
        margin: 0;
        padding: 0;
        li{
            margin: .5rem 0 .5rem 0;
            padding: 0;
            list-style-type: none;
            font-family: "BrownLLSub-Regular", sans-serif !important;
            font-size: 1rem;
            ${media.medium`font-size: 14px;`}
            a{
                color: inherit;
                text-decoration: none ;

            }

        }
    }
    .mobile-footer-list{
        opacity: 0;
        display: none;
        transition: .2s ease-in-out;
        margin-bottom: 2rem;
        &.active{
            opacity: 1;
            display: flex;
            flex-direction: column;
        }
    }
}
}
.back-to-top{
    display: flex;
    flex-direction: column;
    flex: 0 1 25%;
    align-items: center;
    text-align: left;
}
`


const Footer = () => {
    const [activeFooterItem, setActiveFooterItem] = useState("")
    const dimensions = useWindowDimensions()

    const activateFooterColumn = (columnName) => {
        if (activeFooterItem === columnName) {
            setActiveFooterItem(null)
        } else {
            setActiveFooterItem(columnName)
        }

    }


    // const scrollToTop = () => {
    //     window[`scrollTo`]({ top: 0, behavior: "smooth" })
    // };
    return (
        <FooterWrapper>
            {
                dimensions.width > 1025 &&

                <div className="footer-column" >
                    <div className="inner-footer-wrapper" id="back-to-top-column">
                        <Header as={'h4'} className={'backtotop'} color={'green'}>Back to Top</Header>
                        <Button
                            color={'green'}
                            href="#"
                            className='hvr-grow back-to-top-button'
                        // onClick={scrollToTop()}
                        >
                            <Icon color={'green'} name='chevron up' size="big" />
                        </Button>
                    </div>
                </div>
            }
            <div className="footer-column" id="company">
                <div className="inner-footer-wrapper">

                    <h4
                        onClick={() => activateFooterColumn("Our Story")}
                    >Company</h4>
                    {dimensions.width > 1025 ?
                        <ul>
                            <li>
                                <Link to="/company">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link to="/company">
                                    Our Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/company">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    Socials
                                    {/* add the icons here */}
                                </Link>
                            </li>
                        </ul>
                        :
                        <ul className={activeFooterItem === "Our Story" ? "mobile-footer-list active" : "mobile-footer-list"}>
                            <li

                            >
                                <Link to="/company">
                                    Our Story
                                </Link>
                            </li>
                            <li
                            >
                                <Link to="/company">
                                    Our Team
                                </Link>
                            </li>
                            <li
                            >
                                <Link to="/company">
                                    News
                                </Link>
                            </li>
                            <li
                            >
                                <Link to="/">
                                    Socials
                                </Link>
                            </li>
                        </ul>


                    }
                </div>
            </div>
            <div className="footer-column" id="features">
                <div className="inner-footer-wrapper">
                    <h4
                        onClick={() => activateFooterColumn("Features")}
                    >Features</h4>
                    {
                        dimensions.width > 1025 ?

                            <ul>
                                <li>
                                    <Link to="/">
                                        Platform
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Shipping Quotes
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul className={activeFooterItem === "Features" ? "mobile-footer-list active" : "mobile-footer-list"}>
                                <li>
                                    <Link to="/">
                                        Platform
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        Shipping Quotes
                                    </Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
            <div className="footer-column" id="support">
                <div className="inner-footer-wrapper">
                    <h4
                        onClick={() => activateFooterColumn("Support")}
                    >
                        Support
                    </h4>

                    {

                        dimensions.width > 1025 ?
                            <ul>
                                <li>
                                    <a href="mailto:info@mickeytrading.com">
                                        Contact Us
                                        {/* add dropdown for info and press to open mail app */}
                                    </a>
                                </li>
                                <li>
                                    <Link to="/user-agreement">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                            :
                            <ul className={activeFooterItem === "Support" ? "mobile-footer-list active" : "mobile-footer-list"}>
                                <li>
                                    <Link to="/">
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/user-agreement">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy">
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
            {
                dimensions.width < 1025 &&

                <div className="footer-column">
                    <div className="inner-footer-wrapper">
                        <Header as={'h4'} className={'backtotop'} color={'green'}>Back to Top</Header>
                        <Button
                            color={'green'}
                            href="#"
                            className='hvr-grow back-to-top-button'
                        // onClick={scrollToTop()}
                        >
                            <Icon color={'green'} name='chevron up' size="big" />
                        </Button>
                    </div>
                </div>
            }
        </FooterWrapper>
    )
}

export default Footer