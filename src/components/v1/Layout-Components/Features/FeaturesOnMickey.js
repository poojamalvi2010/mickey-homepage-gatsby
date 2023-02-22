import React from 'react'
import styled from "styled-components"
import { media } from '../../../../../mq'
import backgroundImg from "../../../../images/assets/Background-3.png"
import { Header, Input, Button } from "semantic-ui-react"
import GetStartedInput from '../GetStartedInput/GetStartedInput'
import FeaturesAnimation from "../../../../images/assets/features-animation.mp4"
import { Fade } from 'react-awesome-reveal'

const FeaturesOnMickeyWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 65vh;
    padding: 6rem 7vw 6rem 7vw;
    background-image: url(${backgroundImg});
    background-size: cover;
    max-height: 50vh;
    overflow: hidden;
    ${media.large`flex-direction: row; min-height: 90vh;`}
    .heading-wrapper{
      display: flex;
      margin: 0;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 100%;
      ${media.large`align-items: normal; width: 50%;`}
        h1{
            color: #333 !important;
            font-size: 4rem !important;
            padding: 0 !important;
            text-align: center !important;
            width: 100% !important;
            ${media.large`padding: 0 4rem 0 0 !important; text-align: left !important; width: 75% !important;`}

        }
        h3{
            opacity: .85;
            font-weight: 600 !important;
            margin: 2rem 0 0 0 !important;
            color: grey;
            text-align: center !important;
            font-family: "BrownLLSub-Light" !important;
            line-height: 1.5;
            padding: 0;
            width: 100% !important;
            ${media.large`margin: 4rem 0 0 0 !important; text-align: left !important; width: 75% !important; padding-right: 7rem;`}
        }
        }
        .video-animation{
            display: none;
            ${media.large`
            display: block;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            `}
        .video-wrapper{


        }
    }
`

const FeaturesOnMickey = () => {
    return (
        <FeaturesOnMickeyWrapper>
            <video className='video-animation' autoPlay muted loop>
                <source src={FeaturesAnimation} type="video/mp4" />
            </video>
            <div className="heading-wrapper">

                <Fade triggerOnce={true} direction="up" cascade={true}>
                    <Header as={'h1'} textAlign={"left"}>
                        Features on Mickey
                    </Header>
                    <Header.Subheader as={'h3'}>
                        The Mickey Marketplace allows buyers to purchase lumber with the click of a button.
                    </Header.Subheader>
                    <GetStartedInput />
                </Fade>
            </div>
        </FeaturesOnMickeyWrapper>
    )
}

export default FeaturesOnMickey