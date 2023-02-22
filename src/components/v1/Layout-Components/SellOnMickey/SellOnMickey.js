import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { Accordion, Icon, Header, Divider } from "semantic-ui-react"
import Slider from 'react-slick';
import { Slide, Fade } from "react-awesome-reveal"
import { media } from "../../../../../mq"
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';



const SellOnMickeyWrapper = styled.div`
  width: 100%;
  min-height: 30vh;
  height: 100%;
  margin: 0;
  /* padding: 1rem; */
    ${media.small`
    /* padding: 4rem 0 0 0; */
    `}
    
    .sell-heading-wrapper{
        margin: 0 0 3rem 0;
        ${media.large`margin: 0 0 7rem 0;`}
        h1{
            text-align: center;
            color: black !important;
            font-size: 3rem !important;
            margin: 4rem 0 0 0 !important;
            padding: 0 !important;
            ${media.large`
                text-align: left;
                padding: 0 4rem 0 0 !important;
            `}
        }
    }
    .steps-wrapper{
        display: flex;
        justify-content: space-evenly ;
        width: 100%;
        flex-wrap: wrap;
        ${media.large`justify-content: center;`}
        .card{
            box-shadow: none !important;
            height: 300px;
            min-width: 20vw;
            padding: 20px;
            flex: 0 1 25%;
            margin: 0rem !important;
            .content{
                margin-top: 1rem;
            .sub{
                color: gray ;
            }
        }
    }
}
hr{
    margin: 2rem 0 2rem 0;
    ${media.small`margin: 8rem 0 8rem 0;`}
    
}
.faq-wrapper{
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    height: 100%;
    padding: 0 1rem 0 1rem;
    background-color: #c2d6ee;
    ${media.small`padding: 3rem 3rem 3rem 3rem;`}
    ${media.large`flex-direction: row;`}
    .faq-heading{
        flex: 0 1 20%;
        margin: 1rem 0;
        ${media.large`flex: 0 1 50%;`}
        h1{
            font-size: 3rem;
            color: #0a3f51;
            font-family: "BrownLLSub-Regular" !important;
        }

    }
    .faqs{
        flex: 0 1 80%;
        ${media.large`flex: 0 1 50%;`}
        .title{
            font-size: 1.5rem;
            line-height: 1.6rem;
            font-family: "BrownLLSub-Bold" !important;
            color: #0a3f51 !important;
        }
        .content{
            font-size: 1rem;
            font-family: "BrownLLSub-Regular" !important;
            color: #0a3f51;
        }
    }

}
.trusted-wrapper{
display: flex;
flex-direction: column;
background-color: whitesmoke;
min-height: 30vh;
padding:  2rem 0 0 0;
${media.large`flex-direction: row; max-height: 31vh;`}
.trusted-row{
    overflow: hidden;
    min-height: 150px;
    margin-bottom: 5rem;
    padding: 0 1.5rem 0 1.5rem;
    ${media.large`width: 50vw; padding: 0;`}
    h2{
        text-align: center;

        ${media.small`text-align: left;`}
        ${media.large`margin: 0 0 0 2rem;`}
    }
    .slick-arrow{
        display: none !important;
    }
    .slick-dots{
        display: none !important;
    }
    .slick-track{
        display: flex;
        align-items: center;
        width: 100%;
    }
    .slick-slide{
        padding: 2rem;
    }
}
}
`
const steps = [
    {
        stepNumber: "1",
        heading: "Input your Inventory",
        subHeading: "Upload your packaging list or input it directly into the Inventory Tracker",
        color: "73A5C6"
    },
    {
        stepNumber: "2",
        heading: "Recieve Orders",
        subHeading: "Accept or Decline orders in real-time with a 15-minute timer",
        color: "00008B"
    },
    {
        stepNumber: "3",
        heading: "Schedule Pick-up Window",
        subHeading: "Trucks will be digitally dispatched to your site for pick-up of your supply",
        color: "00CAB1"
    },
    {
        stepNumber: "4",
        heading: "Get Paid",
        subHeading: "Payment for your goods will hit your bank account immediately",
        color: "78BE21"
    },
]


const sliderSettings = {
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    essEase: "linear",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
};
const sliderSettingsIpad = {
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    essEase: "linear",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
};
const sliderSettingsSmallDevice = {
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    essEase: "linear",
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
};
const sliderSettingsSmallerDevice = {
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 0,
    essEase: "linear",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
};


const SellOnMickey = ({ investorLogos, buyerLogos, FAQs }) => {
    const [faqIndex, setFaqIndex] = useState(null)
    const dimensions = useWindowDimensions()
    const trustedBy = [
        {
            heading: "Trusted by Buyers",
            icons: buyerLogos,
            slideFromLeft: true
        },
        {
            heading: "Powered by Investors",
            icons: investorLogos,
            slideFromLeft: true
        }
    ]

    const setOpenFaq = (index) => {
        if (faqIndex !== index) {
            setFaqIndex(index)
        }
        if (faqIndex === index) {
            setFaqIndex(null)
        }
    }
    return (
        <SellOnMickeyWrapper>
            <div className="faq-wrapper">
                <div className="faq-heading">
                    <Header as={"h1"}>
                        FAQs
                    </Header>
                </div>
                <div className="faqs">
                    <Accordion>
                        <Divider />
                        {
                            FAQs.map((question, index) => {
                                let faqQuestion = question.node.faqs.question
                                let faqAnswer = question.node.faqs.answer
                                return (
                                    <>
                                        <div style={{
                                            display: "flex",
                                            alignItems: 'baseline',
                                            justifyContent: "space-between"
                                        }}>
                                            <div style={{
                                                display: "flex",
                                                flexDirection: "column"
                                            }}>
                                                <Accordion.Title
                                                    active={faqIndex === index}
                                                    index={index}
                                                    onClick={() => setOpenFaq(index)}
                                                >

                                                    {faqQuestion}
                                                </Accordion.Title>
                                                <Accordion.Content active={faqIndex === index} style={{
                                                    flex: "0 1 95%"
                                                }}>
                                                    <p>
                                                        {faqAnswer}
                                                    </p>
                                                </Accordion.Content>
                                            </div>
                                            {
                                                faqIndex === index ?
                                                    <Icon name='close' style={{
                                                        display: "flex",
                                                        flex: "0 1 5%",
                                                        alignItems: "center",
                                                        padding: "0",
                                                        margin: "0",
                                                    }}
                                                        onClick={() => setOpenFaq(index)}
                                                    />

                                                    : <Icon name='plus' style={{
                                                        display: "flex",
                                                        flex: "0 1 5%",
                                                        alignItems: "center",
                                                        padding: "0",
                                                        margin: "0",
                                                    }}
                                                        onClick={() => setOpenFaq(index)}
                                                    />
                                            }
                                        </div>
                                        <Divider />
                                    </>
                                )
                            })
                        }

                    </Accordion>
                </div>
            </div>
            <div className="trusted-wrapper">
                {
                    trustedBy.map(trustedParty => {
                        return (
                            <Fade cascade triggerOnce={true}>
                                <div className="trusted-row">
                                    <h2>{trustedParty.heading}</h2>
                                    <div className={trustedParty.heading.includes("Buyers") && "buyers" || trustedParty.heading.includes("Investors") && "investors"}>
                                        {
                                            dimensions.width > 1200 &&
                                            <Slider {...sliderSettings}>
                                                {trustedParty.icons.map(icon => {
                                                    const logos = icon?.node
                                                    return (
                                                        <>
                                                            {
                                                                logos?.investorLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.investorLogos?.investorLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />
                                                            }
                                                            {
                                                                logos?.buyerLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.buyerLogos?.buyerLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />
                                                            }
                                                        </>
                                                    )
                                                })}
                                            </Slider>
                                        }
                                        {
                                            dimensions.width < 1200 && dimensions.width > 991 &&
                                            <Slider {...sliderSettingsIpad}>
                                                {trustedParty.icons.map(icon => {
                                                    const logos = icon?.node
                                                    return (
                                                        <>
                                                            {
                                                                logos?.investorLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.investorLogos?.investorLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />


                                                            }
                                                            {
                                                                logos?.buyerLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.buyerLogos?.buyerLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />
                                                            }
                                                        </>
                                                    )
                                                })}
                                            </Slider>
                                        }
                                        {
                                            dimensions.width < 991 && dimensions.width > 768 &&
                                            <Slider {...sliderSettingsSmallDevice}>
                                                {trustedParty.icons.map(icon => {
                                                    const logos = icon?.node
                                                    return (
                                                        <>
                                                            {
                                                                logos?.investorLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.investorLogos?.investorLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />
                                                            }
                                                            {
                                                                logos?.buyerLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.buyerLogos?.buyerLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />

                                                            }
                                                        </>
                                                    )
                                                })}
                                            </Slider>
                                        }
                                        {
                                            dimensions.width < 768 &&
                                            <Slider {...sliderSettingsSmallerDevice}>
                                                {trustedParty.icons.map(icon => {
                                                    const logos = icon?.node
                                                    return (
                                                        <>
                                                            {
                                                                logos?.investorLogos &&
                                                                <GatsbyImage
                                                                    image={getImage(logos?.investorLogos?.investorLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />
                                                            }
                                                            {
                                                                logos?.buyerLogos &&

                                                                <GatsbyImage
                                                                    image={getImage(logos?.buyerLogos?.buyerLogo?.localFile)}
                                                                    alt="Investor Image"
                                                                />
                                                            }
                                                        </>
                                                    )
                                                })}
                                            </Slider>
                                        }
                                    </div>
                                </div>
                            </Fade>
                        )
                    })
                }
            </div>
        </SellOnMickeyWrapper>
    );
};

export default SellOnMickey;
