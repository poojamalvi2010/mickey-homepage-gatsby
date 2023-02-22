import React, { useEffect, useState } from 'react';
import styled from "styled-components"
import { getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
//Components
import { Divider, Header, Button } from "semantic-ui-react"
import PressRowOld from './PressRowOld';
import NewsRow from './NewsRow';

const MickeyInThePressWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 50vh;
    padding: 3rem;
    display: flex;
    #press-release-wrapper{
        display: flex;
        flex-direction: column;
        flex: 0 1 50%;
        padding-right: 1rem;
    }
    #news-article-wrapper{
        display: flex;
        flex-direction: column;
        flex: 0 1 50%;
        padding-left: 1rem;
    }

`


const MickeyInThePress = ({ sortedPressReleases, sortedNewsArticles }) => {

    const firstFourReleases = sortedPressReleases.slice(0, 4)
    const firstFourNews = sortedNewsArticles.slice(0, 4)
    return (
        <MickeyInThePressWrapper>
            <div id="press-release-wrapper">
                <Header as={"h2"}>Press Releases</Header>
                <Divider
                    style={{
                        margin: "1.25rem 0 1.25rem 0"
                    }}
                />
                {
                    firstFourReleases && firstFourReleases.map(press => {
                        const date = press?.date
                        const link = press?.articleLink
                        const pressReleaseContent = press?.pressReleaseContent
                        const slug = press?.slug
                        const title = press?.title
                        const headline = press?.headline
                        const image = press?.image
                        const month = press?.month
                        const year = press?.year
                        const day = press?.day
                        const subheader = press?.subheader
                        return (
                            <>
                                <PressRowOld
                                    day={day}
                                    month={month}
                                    year={year}
                                    date={date}
                                    image={image}
                                    alt={title}
                                    href={link}
                                    headline={headline}
                                    slug={slug}
                                    pressReleaseContent={pressReleaseContent}
                                    subheader={subheader}
                                />
                                <Divider
                                    style={{
                                        margin: "1.25rem 0 1.25rem 0"
                                    }}
                                />
                            </>
                        )
                    })
                }
                {
                    firstFourReleases && firstFourReleases.length === 4 &&
                    <Link
                        to='/press-releases'
                    >
                        <Button color={"green"}>See All Press Releases</Button>
                    </Link>

                }
            </div>
            <div id="news-article-wrapper">
                <Header as={"h2"}>News Articles</Header>
                <Divider
                    style={{
                        margin: "1.25rem 0 1.25rem 0"
                    }}
                />
                {
                    firstFourNews && firstFourNews.map(news => {
                        const date = news?.date
                        const link = news?.articleLink
                        const title = news?.title
                        const headline = news?.headline
                        const image = news?.image
                        const month = news?.month
                        const year = news?.year
                        const day = news?.day
                        const snippet = news?.snippet
                        return (
                            <>
                                <NewsRow
                                    date={date}
                                    month={month}
                                    day={day}
                                    year={year}
                                    image={image}
                                    alt={title}
                                    href={link}
                                    headline={headline}
                                    snippet={snippet}
                                />
                                <Divider
                                    style={{
                                        margin: "1.25rem 0 1.25rem 0"
                                    }}
                                />
                            </>
                        )
                    })
                }
                {
                    firstFourNews && firstFourNews.length === 4 &&
                    <Link
                        to='/news-articles'
                    >
                        <Button color={"green"}>See All News Stories</Button>
                    </Link>

                }
            </div>
        </MickeyInThePressWrapper>
    )
};

export default MickeyInThePress;
