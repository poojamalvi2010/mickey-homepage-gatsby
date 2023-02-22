import React, { useState } from 'react';
import { Grid, Header, Button, Input, Label } from "semantic-ui-react"
import styled from "styled-components"
import { motion, Reorder } from 'framer-motion'
import { Fade } from 'react-awesome-reveal';
import { media } from '../../../../../mq';
import Particles from 'react-tsparticles';
import useWindowDimensions from '../../../../hooks/useWindowDimensions';
import GetStartedInput from "../GetStartedInput/GetStartedInput"

//Images
import Selling from "../../../../images/assets/Selling_Landing_Page_2.png"
import Buying from "../../../../images/assets/Buying_Landing_Page_2.png"
import backgroundImg from "../../../../images/assets/Background-3.png"

const MainWrapper = styled.div`
z-index: 10;
  width: 100%;
  min-height: 90vh;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  padding: 0 1rem 0 1rem;
  ${media.small`padding: 0 7vw 6rem 7vw;`}
  .rotated {
    -webkit-transform: rotate(270deg);   
    -moz-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    -o-transform: rotate(270deg);
    transform: rotate(270deg);
    font-family: "BrownLLSub-Regular" !important;
  }
  .background {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    bottom: 0; 
    right: 0;
  }
  .inner-wrapper{
    display: flex;
    flex-direction: column;
    justify-content: center ;
    width: 100%;
    height: 100%;
    ${media.large`flex-direction: row; height: 100%;`}
    .heading-wrapper{
      display: flex;
      margin: 7rem 0 0 0;
      flex-direction: column;
      align-items: center;
      width: 100%;   
      height: 100%;
      ${media.large`align-items: start; width: 46%; `}
    
  h1{
    color: #333 !important;
    font-size: 4rem !important;
    padding: 0 !important;
    text-align: center !important;
    ${media.large`padding: 0 0 0 0 !important; text-align: left !important;`}
  }
  h3{
    opacity: .85;
    font-weight: 600 !important;
    margin: 2rem  !important;
    line-height: 1.5;
    text-align: center !important;
    font-family: "BrownLLSub-Light" !important;
    ${media.large`margin: 4rem 0 0 0 !important; text-align: left !important;`}
  }
}
  .grid{
    width: 100%;
    height: 100% !important;
    ${media.large`width: 60%;`}
    .animation-wrapper{
      position: relative;
      width: 100%;
    }
  }
  .mobile-image-wrapper{
    display: flex;
    flex-direction: column;
    width: 100%;
    ${media.smallSideways`flex-direction: row;`}
    ${media.large`display: none;`}
    .mobile-buy-wrapper{
      position: relative;
      width: 100%;
      .mobile-buy{
        display: flex;
        flex: 0 0 auto;
        width: 100%;
        padding: 1rem 0 1rem 0;
        ${media.smallSideways`padding: 1rem 1rem 1rem 0;`}
      }
    }
    .mobile-sell-wrapper{
      position: relative;
      width: 100%;
      .mobile-sell{
        display: flex;
        flex: 0 0 auto;
        width: 100%;
        padding: 1rem 0 1rem 0;
        ${media.smallSideways`padding: 1rem 0 1rem 1rem;`}
      }
    }
  }
}
`

const AnimationWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
  ${media.medium`flex-direction: row;`}
  ${media.large`
    display: flex;
    width: 100%;
    min-height: 40vh;
  `}
  ${media.laptop`
    margin: 0;
  `}
`

const Buy1 = styled(motion.div)`
  border: 1px solid rgba(0,0,0,0.2);
  display: none;
  ${media.large`
    position: absolute;
    display: flex;
    left:7%;
    top: 13%;
    height: auto;
    width: 650px;
    background-color: white;
    padding: 0 !important;
    justify-content: center;
    align-items: center;
    z-index: 2;
    opacity: 1;
    border-radius: 9px;
  `}
  ${media.laptop`left: 35%; width: 750px;`}
  
  img{
    width: 100%;
    margin: 0
  }
`
const Buy2 = styled(motion.div)`
  border: 1px solid rgba(0,0,0,0.2);
  display: none;
  ${media.large`
    position: absolute;
    left: 7%;
    top: 13%;
    height: auto;
    width: 650px;
    background-color: white;
    display: flex;
    padding: 0 !important;
    justify-content: center;
    align-items: center;
    z-index: 1;
    opacity: 0;
    border-radius: 9px;
  `}
  ${media.laptop`left: 35%; width: 750px;`}
  img{
    width: 100%;
    margin: 0
  }
`
const Sell1 = styled(motion.div)`
  border: 1px solid rgba(0,0,0,0.2);
  display: none;
    ${media.large`
      position: absolute;
      display: flex;
      left: 1%;
      top: 28%;
      height: auto;
      width: 650px;
      background-color: white;
      justify-content: center;
      align-items: center;
      z-index: 1;
      opacity: 1;
      padding: 0 !important;
      border-radius: 9px;
      `}
      ${media.laptop`left: 23%; width: 750px;`}
    img{
    width: 100%;
      margin: 0
    }
`
const Sell2 = styled(motion.div)`
  border: 1px solid rgba(0,0,0,0.2);
  display: none;
  ${media.large`
    position: absolute;
    top: 28%;
    left: 1%;
    height: auto;
    width: 650px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    opacity: 1;
    padding: 0 !important;
    border-radius: 9px;
  `}
  ${media.laptop`left: 23%; width: 750px;`}

  img{
    width: 100%;
    margin: 0
  }
`

const Main = () => {

  const [email, setEmail] = useState('')
  const dimensions = useWindowDimensions()

  return (
    <MainWrapper>
      <div className="inner-wrapper" >
        <div className="heading-wrapper" >
          <Fade triggerOnce={true} direction="up" cascade={true}>
            <Header as={'h1'} textAlign={"center"} style={{ fontSize: '6em', marginTop: '-20px' }}>
              Buy Lumber <br /> on Mickey
            </Header>
            <Header.Subheader as={'h3'} style={{ color: 'grey' }}>
              <strong>Instant quotes</strong>, <strong>end-to-end transactions</strong>, <strong>streamlined fulfillment</strong>, <strong>no commissions</strong>. Mickey is on a mission to automate the buying and selling of hardwood lumber, online.
            </Header.Subheader>
            <GetStartedInput backgroundColor={"white"} />
          </Fade>
        </div>
        <Fade style={{ display: "flex", justifyContent: "center", width: "100%" }} triggerOnce={true} direction="down" cascade={true}>
          <Grid basic inverted textAlign='center' style={{ marginTop: "1.45rem", marginLeft: '-200px' }}>
            <AnimationWrapper class="animation-wrapper">
              <Buy1
                animate={{
                  left: dimensions.width <= 1440 ? ["7%", "1%"] : ["35%", "23%"],
                  top: ["13%", "28%"],
                  opacity: [0, 1],
                  boxShadow: ["none", "rgb(0 0 0 / 12%) 0px 8px 24px"]
                }}
                transition={{
                  duration: .3,
                  repeatDelay: 3,
                  yoyo: Infinity,
                }}
              >
                <Header.Subheader
                  style={{ position: 'absolute', bottom: '30px', left: '-60px' }}
                  className={'rotated'}
                >
                  Buyer Portal
                </Header.Subheader>
                <img src={Buying} alt="Blank" className="buy1" />
              </Buy1>
              <Sell1
                animate={{
                  left: dimensions.width <= 1440 ? ["1%", "7%"] : ["23%", "35%"],
                  top: ["28%", "13%"],
                  opacity: [0, .4],
                  boxShadow: ["rgb(0 0 0 / 12%) 0px 8px 24px", "none"]
                }}
                transition={{
                  duration: .3,
                  repeatDelay: 3,
                  yoyo: Infinity,
                }}
              >
                <img src={Selling} alt="Blank" className="sell1" />
              </Sell1>

              <Buy2
                animate={{
                  left: dimensions.width <= 1440 ? ["7%", "1%"] : ["35%", "23%"],
                  top: ["13%", "28%"],
                  opacity: [.4, 0],
                  boxShadow: ["rgb(0 0 0 / 12%) 0px 8px 24px", "none"]
                }}
                transition={{
                  duration: .3,
                  repeatDelay: 3,
                  yoyo: Infinity,
                }}
              >
                <img src={Buying} alt="Blank" className="buy2" />
              </Buy2>
              <Sell2
                animate={{
                  left: dimensions.width <= 1440 ? ["1%", "7%"] : ["23%", "35%"],
                  top: ["28%", "13%"],
                  opacity: [1, 0],
                  boxShadow: ["none", "rgb(0 0 0 / 12%) 0px 8px 24px"]

                }}
                transition={{
                  duration: .3,
                  repeatDelay: 3,
                  yoyo: Infinity,
                }}
              >
                <Header.Subheader
                  style={{ position: 'absolute', bottom: '40px', left: '-70px' }}
                  className={'rotated'}
                >
                  Supplier Portal
                </Header.Subheader>
                <img src={Selling} alt="Blank" className="sell2" />
              </Sell2>
            </AnimationWrapper>
          </Grid>
        </Fade>
        <div className='mobile-image-wrapper'>
          <div className="mobile-buy-wrapper" style={{ position: 'relative' }}>
            <Header.Subheader
              style={{ position: 'absolute', top: '-10px', left: '20px' }}
            >
              Buyer Portal
            </Header.Subheader>
            <img src={Buying} alt="Blank" className="mobile-buy" />
          </div>
          <div className="mobile-sell-wrapper" style={{ position: 'relative' }}>
            <Header.Subheader
              style={{ position: 'absolute', top: '-10px', left: '40px' }}
            >
              Supplier Portal
            </Header.Subheader>
            <img src={Selling} alt="Blank" className="mobile-sell" />
          </div>
        </div>
      </div>
    </MainWrapper>
  )
};

export default Main;
