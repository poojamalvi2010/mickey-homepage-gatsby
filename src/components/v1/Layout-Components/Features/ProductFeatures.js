import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from '../../../../../mq'
import { Header, Button, Input, Accordion, Icon } from "semantic-ui-react"
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { findLastIndex } from 'underscore'
import { Fade } from 'react-awesome-reveal';
import Particles from "react-tsparticles"
import Slider from 'react-slick';
import GetStartedInput from '../GetStartedInput/GetStartedInput'

//Feature Images

//Americas Inventory
import LocationsList from "../../../../images/features-page-images/americas-inventory/locations-list.png"
import UnitedStatesLocations from "../../../../images/features-page-images/americas-inventory/united-states-locations.png"

//Consistent Supply
import SimilarSuppliers from "../../../../images/features-page-images/consistent-supply/similar-suppliers.png"
import SupplierList from "../../../../images/features-page-images/consistent-supply/supplier-list.png"

//Single Images
import AllInclusivePricing from "../../../../images/features-page-images/all-inclusive-pricing.png"
import AlwaysSatisfied from "../../../../images/features-page-images/always-satisfied.png"
import FastPayments from "../../../../images/features-page-images/fast-payments.png"
import LiveTracking from "../../../../images/features-page-images/live-tracking.png"
import LowestPriceAlways from "../../../../images/features-page-images/lowest-price-always.png"


const FeaturesWrapper = styled.div`


        .inner-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center ;
    width: 100%;
    height: 100%;
    ${media.large`height: 100%;`}
        .features-list{
            display: none;
            ${media.large`
                display: flex;
                align-self: center;
                width: 100vw;
                height: 100%;
                min-height: 100vh;
                background-color: white;
            `}

            .list-wrapper{
                display: flex;
                flex: 0 1 50%;
                height: 100%;
                padding: 6rem 7vw 6rem 7vw;
                color: #555;
                .accordion{
                    .title{
                        font-size: 1.45rem !important;
                    }

                }
                .underline--magical {
                    background-repeat: no-repeat;
                    background-size: 110% 0.1em;
                    background-position: 0 98%;
                    transition: 0.1s ease-in;

                &.green{
                    background-image: linear-gradient(90deg, rgba(34, 139, 34, .9) 100%, rgba(34, 139, 34, .9) 100%);
                    &:hover {
                        background-image: linear-gradient(90deg, rgba(34, 139, 34, .4) 100%, rgba(34, 139, 34, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
                &.blue{
                    background-image: linear-gradient(90deg, rgba(43,93,188, .9) 100%, rgba(43,93,188, .9) 100%);
                    &:hover {
                        background-image: linear-gradient(90deg, rgba(43,93,188, .4) 100%, rgba(43,93,188, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
                &.red{
                    background-image: linear-gradient(90deg, rgba(230, 51, 35, .9) 100%, rgba(230, 51, 35, .9) 100%);
                    &:hover { 
                        background-image: linear-gradient(90deg, rgba(230, 51, 35, .4) 100%, rgba(230, 51, 35, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
                &.yellow{
                    background-image: linear-gradient(90deg, rgba(246, 221, 56, .9) 100%, rgba(246, 221, 56, .9) 100%);
                    &:hover {
                        background-image: linear-gradient(90deg, rgba(246, 221, 56, .4) 100%, rgba(246, 221, 56, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
                &.purple{
                    background-image: linear-gradient(90deg, rgba(111,29,69, .9) 100%, rgba(111,29,69, .9) 100%);
                    &:hover {
                        background-image: linear-gradient(90deg, rgba(111,29,69, .4) 100%, rgba(111,29,69, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
                &.brown{
                    background-image: linear-gradient(90deg, rgba(181, 133, 95, .9) 100%, rgba(181, 133, 95, .9) 100%);
                    &:hover {
                        background-image: linear-gradient(90deg, rgba(181, 133, 95, .4) 100%, rgba(181, 133, 95, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
                &.grey{
                    background-image: linear-gradient(90deg, rgba(109,110, 112, .9) 100%, rgba(109,110, 112, .9) 100%);
                    &:hover {
                        background-image: linear-gradient(90deg, rgba(109,110, 112, .4) 100%, rgba(109,110, 112, .4) 100%);
                        background-size: 100% 40%;
                    }
                }
}
            }
            .images-wrapper{
                display: flex;
                flex-direction: column ;
                justify-content: center;
                align-items: center;
                flex: 0 1 50%;
                height: 100%;
                min-height: 100vh;
                div{
                    display: flex;
                    flex-direction: column;
                    .single-image{
                        align-self: center;
                        flex: 0 0 auto;
                        height: 100%;
                        width: 100%;
                        min-width: 400px;
                        max-width: 425px;
                    }
                    .double-parent{
                        padding: 10% !important;
                    }
                    .all-inclusive{
                        align-self: center;
                        flex: 0 0 auto;
                        height: 100%;
                        width: 100%;
                        min-height: 600px;
                        min-width: 0 !important;
                        max-width: 250px !important;
                    }
                }
            }
        }

        .mobile-features{
            display: flex;
            justify-content: center;
            background-color: #c2d6ee;
            ${media.large`display: none;`}
            .slick-slider{
                display: flex;
                height: 60vh;
                position: relative;
                .slick-list{
                    display: flex;
                    width: 100vw;
                    align-items: baseline;
                     padding-top: 2rem;
                    .slick-track{
                        display: flex;
                        align-items: center;
                        width: 100%;
                        height: 100%;
                        .slick-slide{
                            padding: 2rem;
                            display: flex ;
                            justify-content: center;
                            align-items: baseline;
                            padding: 0;
                            height: 100%;
                            div{
                                height: 100%;
                            img{
                                max-height: 60vh;
                                max-width: 60%;
                                margin-top: 2rem;
                            }
                            h3{
                                width: 100%;
                                text-align: center;
                                text-decoration: underline;
                                color: #0a3f51;
                            }
                            p{
                                width: 100%;
                                text-align: center;
                                margin: 0 1rem 0 1rem;
                            }
                        }
                        }
                    }
                }
                .slick-dots{
                    display: flex !important;
                    justify-content: center;
                    position: absolute;
                    margin-left: auto;
                    margin-right: auto;
                    top: 92%;
                    left: 0;
                    right: 0;
                    text-align: center;
                    max-width: 500px;
                    list-style: none !important;
                    li{
                        margin: 0 .5rem 0 .5rem;
                        cursor: pointer;
                        opacity: .5;
                        button{
                            /* display: none; */
                        }
                    }
                    .slick-active{
                        opacity: 1 !important;
                    i{
                        color: #0a3f51 !important;
                    }
                    }

                }
                .slick-next{
                    z-index: 10;
                    cursor: pointer;
                    color: #0a3f51 !important;
                }
                .slick-prev{
                    z-index: 10;
                    cursor: pointer;
                    color: #0a3f51 !important;
                }


            }
        }
  }


`

const featuresList = [
    {
        title: "America's Inventory",
        subTitle: "View live, real-time product listings across hundreds of suppliers across the nation. Inventory includes a variety of kiln-dried species ranging in thicknesses from 3/4 to 16/4 as well as random widths and lengths.",
        color: "green",
        colorCode: "linear-gradient(90deg, rgba(34, 139, 34, .4) 100%, rgba(34, 139, 34, .4) 100%)",
        imgSrc1: LocationsList,
        imgSrc2: UnitedStatesLocations,
        alt1: "Location List",
        alt2: "United States Locations",
        class: "single-image",
        parentClass: "double-parent"
    },
    {
        title: "Lowest Price Always",
        subTitle: "Our marketplace provides buyers with the lowest possible price for the products you need.",
        color: "yellow",
        colorCode: "linear-gradient(90deg, rgba(246, 221, 56, .4) 100%, rgba(246, 221, 56, .4) 100%)",
        imgSrc1: LowestPriceAlways,
        alt1: "Lowest Price Always",
        class: "single-image",
        altClass: ""
    },
    {
        title: "All-Inclusive Pricing",
        subTitle: "Your instant quote includes the cost of shipping and fulfillment. No hidden costs, fees, or commissions added at check-out.",
        color: "blue",
        colorCode: "linear-gradient(90deg, rgba(43,93,188, .4) 100%, rgba(43,93,188, .4) 100%)",
        imgSrc1: AllInclusivePricing,
        alt1: "All Inclusive Pricing",
        class: "single-image",
        altClass: "all-inclusive"

    },
    {
        title: "Automatic Delivery",
        subTitle: "Upon checkout, our system automatically dispatches a truck to pick up and deliver your entire order.",
        color: "red",
        colorCode: "linear-gradient(90deg, rgba(230, 51, 35, .4) 100%, rgba(230, 51, 35, .4) 100%)",
        imgSrc1: SupplierList,
        imgSrc2: SimilarSuppliers,
        alt1: "Supplier List",
        alt2: "Similar Suppliers",
        class: "single-image",
        altClass: "",
        parentClass: "double-parent"
    },

    {
        title: "Live Tracking",
        subTitle: "Get real-time updates on the status of your order as well as delivery progress.",
        color: "purple",
        colorCode: "linear-gradient(90deg, rgba(111,29,69, .4) 100%, rgba(111,29,69, .4) 100%)",
        imgSrc1: LiveTracking,
        alt1: "Live Tracking",
        class: "single-image",
        altClass: ""
    },
    // {
    //     title: "Fast Payments",
    //     subTitle: "Listicle pour-over health goth pug, letterpress glossier VHS salvia.",
    //     color: "brown",
    //     colorCode: "linear-gradient(90deg, rgba(181, 133, 95, .4) 100%, rgba(181, 133, 95, .4) 100%)",
    //     imgSrc1: FastPayments,
    //     alt1: "Fast Payments",
    //     class: "single-image",
    //     altClass: ""
    // },
    {
        title: "Always Satisfied",
        subTitle: "If there's a problem with the product you've ordered or the delivery, let us know and we will work with you to replace or refund the order",
        color: "grey",
        colorCode: "linear-gradient(90deg, rgba(109,110, 112, .4) 100%, rgba(109,110, 112, .4) 100%)",
        imgSrc1: AlwaysSatisfied,
        alt1: "Always Satisfied",
        class: "single-image",
        altClass: ""
    },
]


function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                position: 'absolute',
                right: "1rem",
                bottom: "1.25rem"
            }}>
            <Icon size="big" name='arrow right' className={"slick-next"} onClick={onClick} color='gray' />
        </div>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            position: "absolute",
            left: "1rem",
            bottom: "1.25rem"
        }}>
            <Icon size="big" name='arrow left' className={"slick-next"} onClick={onClick} color='gray' />
        </div>
    );
}



const ProductFeatures = () => {
    const [featureIndex, setFeatureIndex] = useState(0)
    const [mobileIndex, setMobileIndex] = useState()



    const settings = {
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        // autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipeToSlide: true,
        customPaging: function (i) {
            return (
                <Icon
                    name='dot circle'
                    color="black"
                />
            );
        },
    };

    return (
        <FeaturesWrapper>


            <div className="inner-wrapper">
                <div className="features-list">
                    <div className="list-wrapper">
                        <Accordion>
                            {
                                featuresList.map((feature, index) => {
                                    return (
                                        <>
                                            <Accordion.Title
                                                active={featureIndex === index}
                                                index={index}
                                                onClick={() => setFeatureIndex(index)}
                                                as="h3"
                                                style={{
                                                    fontSize: "1.9rem",
                                                    color: featureIndex === index ? "#333" : "#888",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                <span
                                                    className={`underline--magical ${feature?.color}`}
                                                    style={{
                                                        backgroundImage: featureIndex === index ? `${feature?.colorCode}` : "",
                                                        backgroundSize: featureIndex === index ? "100% 40%" : ""
                                                    }}
                                                >
                                                    {feature.title}
                                                </span>
                                            </Accordion.Title>
                                            <Accordion.Content style={{ fontFamily: "BrownLLSub-Regular", minHeight: "3rem", lineHeight: '1.3', width: '50%', fontSize: "1.2rem" }} active={featureIndex === index}>
                                                {feature.subTitle}
                                            </Accordion.Content>
                                        </>
                                    )
                                })
                            }
                        </Accordion>

                    </div>
                    <div className="images-wrapper" style={{ background: featuresList[featureIndex].colorCode }}>
                        {
                            featuresList.map((feature, index) => {
                                return (
                                    <Fade >
                                        <div className={feature?.parentClass}>
                                            {
                                                index === featureIndex &&
                                                <img
                                                    src={feature?.imgSrc1}
                                                    alt={feature?.alt1}
                                                    className={feature?.altClass ? `${feature?.class} ${feature?.altClass}` : `${feature?.class}`}
                                                />

                                            }
                                            {
                                                index === featureIndex && feature?.imgSrc2 &&
                                                <img
                                                    src={feature?.imgSrc2}
                                                    alt={feature?.alt2}
                                                />

                                            }
                                        </div>
                                    </Fade>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="mobile-features">
                    <Slider {...settings}>
                        {
                            featuresList.map(feature => {
                                const image = feature.imgSrc1
                                return (
                                    <div
                                        style={{

                                        }}

                                    >
                                        <div style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            textAlign: "left"
                                        }}>
                                            <h3>{feature.title}</h3>
                                            <p>{feature.subTitle}</p>
                                        </div>
                                        <div>
                                            <img
                                                src={image}
                                                alt="feature image"
                                                style={{
                                                    maxHeight: "250px !important"
                                                }}
                                            />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </FeaturesWrapper>
    )
}

export default ProductFeatures