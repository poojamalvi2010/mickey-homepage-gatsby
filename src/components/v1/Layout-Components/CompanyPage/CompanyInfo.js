import React from 'react';
import HomePageHeader from '../Header/header';
import styled from "styled-components"
import { Header } from "semantic-ui-react"
import { StaticImage } from 'gatsby-plugin-image';
import { Slide, Fade } from 'react-awesome-reveal';
import { media } from '../../../../../mq';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';

//Images
import CompanyImageOne from "../../../../images/legacy-images/company-first.png"
import CompanyImageTwo from "../../../../images/legacy-images/company-second.png"
import CompanyImageThree from "../../../../images/legacy-images/company-third.png"
import CompanyImageFour from "../../../../images/legacy-images/company-fourth.png"
import backgroundImg from "../../../../images/assets/Background-3.png"

const CompanyInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background-image: url(${backgroundImg});
    background-size: cover;
    min-height: 70vh;
    padding: 3rem;
    background-color: whitesmoke;
    ${media.small`padding: 3rem;`}
    ${media.large`padding: 3rem;`}
    .ui.header {
        font-family: "BrownLLSub-Light" !important;
        font-size: 2rem !important;
        color: #333 !important;
        width: 100% !important;
        position: relative !important;
        text-align: center !important;
        ${media.large`width: 100% !important; text-align: left !important;`}
    }
`

const CompanyPage = () => {
    const dimensions = useWindowDimensions()
    return (
        <CompanyInfoWrapper>
            <div className="inner-wrapper">
                <Fade triggerOnce={true} cascade={true}>
                    <Header>
                        Since 2019, Mickey has been on a mission to better serve and support American manufacturers and suppliers through our innovative technology. We understand that with rising operating costs, staffing issues, brokers, and logistical issues, suppliers are shutting down at a faster pace than ever before. Our goal is to empower American businesses and help pass the profits within each transaction made in our marketplace back to companies and the communities we serve. Never before has a platform given suppliers the ability to capture their value until now.
                        <br />
                        <br />
                        And buyers can be assured that Mickey is committed to sourcing its products directly from NHLA-member producers harvesting logs from sustainable and renewable forest resources around the United States. Mickey, along with its suppliers, are committed to a net-zero carbon future and buyers will have the option to see the carbon intensity of each lumber purchase in an effort to provide sustainability reporting.
                        <Slide
                            className='underline'
                            style={{
                                position: "absolute",
                                left: `${dimensions.width <= 390 && "2.75rem" || dimensions.width > 390 && dimensions.width <= 768 && "2.75rem" || dimensions.width > 768 && dimensions.width < 820 && "0" || dimensions.width >= 820 && dimensions.width < 844 && "1.5rem" || dimensions.width >= 844 && dimensions.width <= 1024 && "2rem" || dimensions.width > 1024 && "0"}`,
                                top: "2.5rem",
                                height: "4px",
                                width: "10rem",
                                backgroundColor: "green",
                            }}
                        >
                            <span />
                        </Slide>
                    </Header>
                </Fade>
            </div>
        </CompanyInfoWrapper>
    )
};

export default CompanyPage;
