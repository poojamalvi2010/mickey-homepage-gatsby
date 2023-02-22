import React from 'react'
import styled from 'styled-components'
import Layout from "../../layout"
import { Header, Button } from 'semantic-ui-react'
import { Link } from 'gatsby'
import { getImage, GatsbyImage } from 'gatsby-plugin-image'

const PressReleaseWrapper = styled.div`
display: flex;
flex-direction: column;
.press-release-inner-wrapper{
    display: flex;
    flex-direction: column;
    padding: 6rem 30% 6rem 30%;
    .press-release-heading{
        display: flex;
        flex-direction: column;
        margin-bottom: 2rem;
    h6{
        color: #BCDB4F
    }
    h5{
        color: gray;
    }
    .gatsby-image-wrapper{
        max-width: 250px;
        margin-bottom: 2rem;
    }
}
    .press-release-content{
        font-weight: lighter;
    }
}
`
const PressRelease = ({ pressRelease }) => {
    const month = pressRelease?.pressReleases?.month
    const day = pressRelease?.pressReleases?.day
    const year = pressRelease?.pressReleases?.year
    const image = getImage(pressRelease?.pressReleases?.image?.localFile)
    const link = pressRelease?.pressReleases?.articleLink
    const headline = pressRelease?.pressReleases?.headline
    const subheader = pressRelease?.pressReleases?.pressReleaseSubheader
    const pressReleaseHTMLString = pressRelease.pressReleases.pressReleaseContent

    return (
        <Layout>
            <PressReleaseWrapper>
                <div className="press-release-inner-wrapper">
                    <div className="press-release-heading">
                        <h6>{month}{" "}{day},{" "}{year}</h6>
                        <Header as={"h1"}>
                            {headline}
                        </Header>
                        <h5>{subheader}</h5>
                        <GatsbyImage image={image} />
                        <a href={link} target="_blank">Read the original press release here</a>
                    </div>
                    <div className='press-release-content' dangerouslySetInnerHTML={{ __html: pressReleaseHTMLString }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingBottom: "3rem" }}>
                    <Link
                        to='/press-releases'
                    >
                        <Button color={"green"}>Back to Press Releases</Button>
                    </Link>
                </div>
            </PressReleaseWrapper>
        </Layout >
    )
}

export default PressRelease