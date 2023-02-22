import React from "react";
import { Grid, Header, Segment } from 'semantic-ui-react'
import styled from "styled-components";


//Images
import HowItWorksSVG from "../../../../images/assets/how-it-works-diagram.svg"

const HowItWorksWrapper = styled.div`
    background-image: inherit !important;
    background-color: inherit !important;
    min-height: 50vh;
    position: relative;
    width: 100;
    padding: 4rem 0 4rem 0;
    h1 {
        font-size: 3rem !important;
    }
    .subheader-wrapper{
        display: flex !important;
        justify-content: center !important;
        text-align: center !important;
        margin: 1.5rem 0 4rem 0 !important;
        p{
            font-size: 1rem !important;
            text-align: center !important;
            width: 45% !important;
        }
    }
    .diagram-wrapper{
        display: flex;
        justify-content: center;
        img{
            margin-left: -25px;
            width: 65%;
        }
    }
`


function HowItWorks() {
    return (
        <HowItWorksWrapper>
            <Header
                as={'h1'}
                textAlign="center"
            >
                How It Works
                <div
                    className="subheader-wrapper"
                >
                    <Header.Subheader
                        as={"p"}
                        textAlign="center"
                    >
                        Find the product you need and schedule delivery all in one transaction.
                    </Header.Subheader>
                </div>
            </Header>
            <div className="diagram-wrapper">
                <img
                    src={HowItWorksSVG}
                    alt="How Mickey Works Diagram"
                />
            </div>
        </HowItWorksWrapper>
    )
}

export default HowItWorks;