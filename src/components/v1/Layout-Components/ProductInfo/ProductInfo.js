import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import styled from "styled-components"
import { Divider, Header } from 'semantic-ui-react';
import { media } from "../../../../../mq"
import { motion } from 'framer-motion';
import { Controller, Scene } from "react-scrollmagic"

//images
import ZeroComission from "../../../../images/features-page-images/consistent-supply/similar-suppliers.png"
import LowestPrice from "../../../../images/features-page-images/fast-payments.png"
// import Calendar from "../../../../images/assets/productinfo/calendar.png"
import AutoDelivery from "../../../../images/features-page-images/live-tracking.png"

const ProductInfoWrapper = styled.div`
    background-color: #202020;
    min-height: 95vh;
    padding: 1rem;
    ${media.small`
    padding: 7rem 3rem 7rem 3rem;
    `}
    
    .product-info-heading-wrapper{
        margin: 3rem 0 3rem 0;
        ${media.small`margin: 0 0 3rem 0;`}
        ${media.smallMedium`margin: 0 0 3rem 0;`}
        h1{
            text-align: center;
            color: black !important;
            font-size: 3rem !important;
            padding: 0 !important;
            color: white !important;
            ${media.large`
                text-align: left;
                padding: 0 4rem 0 0 !important;
            `}
        }
    }
    .why-use-mickey{
        display: flex;
        flex-direction: column;
        ${media.smallMedium`
            width: 100%;
            height: 100%;
            align-items: center;
            flex-direction: row;
        `}
        .heading-wrapper{
            display: flex;
            flex-direction: column;
            transition: .2s ease-in-out;
            ${media.smallMedium`
                width: 50%;
                min-height: 100%;
            `}
        .info-item-wrapper{
            padding: 1rem 0 0 0;
            opacity: .4;
            transition: .2s ease-in-out;
            cursor: pointer;
            text-align: center;
            ${media.medium`text-align: left;`}
            ${media.large`
                padding: 0 3rem 3rem 3rem;
            `}
            &.active{
                opacity: 1;
            }
            .info-heading{
                display: flex;
                flex-direction: column;
                align-items: center;

                color: white !important;
                font-size: 1rem;
                transition: .2s ease-in-out;
                ${media.smallMedium`
                    font-size: 1.3rem;
                    align-items: start;
                `}
                &.active{
                    font-size: 1.7rem;

                }
            }
            .info-subheading{
                display: none;
                margin-top: 1rem;
                color: grey !important;
                transition: .2s ease-in-out;
                opacity: 0;
                max-height: 5rem;
                font-size: .9rem;
                &.active{
                    display: block;
                    opacity: 1;
                }
            }
    }
}
.images-wrapper{
    display: flex;
justify-content: center;
    width: 100%;
    min-height: 100%;
    transition: .2s ease-in-out;
    margin-top: 2rem;
    ${media.small`margin-top: 5rem; `}
    ${media.smallMedium`
    width: 50%;
    margin: 0;
            `}
            ${media.medium`justify-content: flex-end;`}
    .info-image-wrapper{
            display: none;
            padding: 1rem;
            transition: .2s ease-in-out;
            ${media.small`padding: 3rem;;`}
            &.active{
                display: flex;
                flex-direction: column;
            }
            img{
                width: 600px;
                height: auto;
            }
        h2{
            color: white !important;
        }
        h3{
            color: grey !important;
        }
    }
}
    }
`

const info = [
    {
        heading: "Lowest Price",
        subheading: "Find the lowest price for the product you need from sellers all over the USA",
        imgSource: LowestPrice
    },
    {
        heading: "Zero Commission",
        subheading: "Mickey lets the market trade freely without adding a margin or commission to the order.",
        imgSource: ZeroComission
    },
    {
        heading: "Automatic Delivery",
        subheading: "Schedule a delivery and a destination and track your fulfillment in realtime",
        imgSource: AutoDelivery
    },
    // {
    //     heading: "Pay on Your Schedule",
    //     subheading: "Add 10-60 day terms as needed to help with your Cashflow cycles",
    //     imgSource: Calendar
    // }
]

const ProductInfo = () => {
    const [selectedInfo, setSelectedInfo] = useState(0)

    return (
        <ProductInfoWrapper>
            <div className="product-info-heading-wrapper">
                <Header as={'h1'} style={{ marginLeft: '40px' }}>Why Use Mickey?</Header>
            </div>
            <div className="why-use-mickey">
                <div className="heading-wrapper">
                    {
                        info.map((infoItem, index) => {
                            return (
                                <div id="index" className={selectedInfo === index ? "info-item-wrapper active" : "info-item-wrapper"} onClick={() => setSelectedInfo(index)}>
                                    <Header as={'h2'} className={selectedInfo === index ? "info-heading active" : "info-heading"}>
                                        {index + 1 + "." + " "}{infoItem.heading}
                                        <Header.Subheader style={{ width: "65%", marginBottom: "1rem" }} as={'h3'} className={selectedInfo === index ? "info-subheading active" : "info-subheading"}>
                                            {infoItem.subheading}
                                        </Header.Subheader>
                                    </Header>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="images-wrapper">
                    {
                        info.map((infoItem, index) => {
                            return (
                                <div className={selectedInfo === index ? "info-image-wrapper active" : "info-image-wrapper"}>
                                    <img
                                        src={infoItem.imgSource}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </ProductInfoWrapper >
    )
};

export default ProductInfo;
