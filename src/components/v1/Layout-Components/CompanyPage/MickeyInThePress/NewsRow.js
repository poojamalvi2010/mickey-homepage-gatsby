import React from 'react';
import styled from "styled-components"
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { media } from "../../../../../../mq"
//COmponents
const NewsRowWrapper = styled.div`
    display: flex;
    width: 100%;
    max-height: 350px;
    background-color: whitesmoke;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2.5rem;
    align-items: center;
    ${media.small`
        flex-direction: row;
        margin: 0;
        text-align: left;
    `}
    .news-info-wrapper{
        display: flex;
        flex-direction: column;
        flex: 0 1 80%;
        height: 100%;
        justify-content: center ;
        margin-bottom: 2rem;
        .date{
            color: gray;
            margin-bottom: 1rem;
        }
        a{
            color: inherit;
            text-decoration: none;
            transition: .15s ease-in-out;
            margin-bottom: 1rem;
            &:hover{
                opacity: .8;
            }
        }
        .news-preview{
            p{
                color: gray;
            }
        }
    }
    .news-image-wrapper{
        display: flex;
        flex-direction: column;
        flex: 0 1 20%;
        justify-content: center;
        align-items: center;
        height: 100%;
        a{
            height: 100%;
            width: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            .gatsby-image-wrapper{
                width: 100%;
                div{
                    /* max-width: 100% !important; */
                }
            }
    }
    }
`


const NewsRow = (props) => {
    const image = getImage(props.image)
    return (
        <NewsRowWrapper>
            <div className="news-info-wrapper">
                <h5 className='date'>
                    {props.month} {props.year}
                </h5>
                <a href={props.href} target="_blank">
                    <h4>
                        {props.headline}
                    </h4>
                </a>
                <div className="news-preview">
                    <p>{props.snippet && props.snippet.slice(0, 375)}</p>
                    {
                        props.snippet && props.snippet.length > 375 &&
                        <a className='read-more' href={props.href} target="_blank">
                            ... Read the full article
                        </a>
                    }
                </div>
            </div>
            <div className="news-image-wrapper">
                <a href={props.href} target="_blank">
                    <GatsbyImage
                        image={image}
                        alt="alt"
                    />
                </a>
            </div>
        </NewsRowWrapper>
    )
};

export default NewsRow;
