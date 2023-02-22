import React from 'react';
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Grid, Header } from 'semantic-ui-react';
import { Link } from 'gatsby';
//COmponents
const PressRowWrapper = styled.div`
    width: 100%;
    height: fit-content;
    min-height: 100px;
        .grid{
            label{
                font-size: 12px;
            }
            h6{
                font-size: 16px;
                margin-top: 1rem !important;
            }
            .press-release-preview{
                margin-top: 1rem;
                margin-bottom: .5rem;
                font-size: 12px;
                opacity: .6;
                p{
                    line-height: 1.25rem !important;
                }
            }
            .read-more{
                color: black;
                transition: .1s ease-in-out;
                &:hover{
                    opacity: .6;

                }
            }

        }

`


const PressRowOld = (props) => {
    const image = getImage(props.image)
    return (
        <PressRowWrapper>
            <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={12}>
                        <label>{props.month} {props.year}</label>
                        <Link to={`/press-releases/${props.slug}`}>
                            <Header as={"h6"}>
                                {props.headline}
                            </Header>
                        </Link>
                        <div className='press-release-preview' dangerouslySetInnerHTML={{ __html: props.pressReleaseContent && props.pressReleaseContent.slice(0, 375) }} />
                        {
                            props.pressReleaseContent && props.pressReleaseContent.length > 375 &&
                            <a className='read-more' href={`/press-releases/${props.slug}`}>
                                ... Read More
                            </a>
                        }


                    </Grid.Column>
                    <Grid.Column width={4}>
                        <a href={`/press-releases/${props.slug}`}>
                            <GatsbyImage
                                image={image}
                                alt="Mickey Logo"
                            />
                        </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </PressRowWrapper>
    )
};

export default PressRowOld;

