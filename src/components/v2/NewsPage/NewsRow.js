import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Grid, Header } from "semantic-ui-react"
import { Link } from "gatsby"
import useWindowDimensions from "../../../hooks/useWindowDimensions"

//Components
const NewsRowWrapper = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100px;
  .grid {
    label {
      font-size: 12px;
    }
    h6 {
      font-size: 16px;
      margin-top: 1rem !important;
    }
    .press-release-preview {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 12px;
      opacity: 0.6;
      p {
        line-height: 1.25rem !important;
      }
    }
    .read-more {
      color: black;
      transition: 0.1s ease-in-out;
      &:hover {
        opacity: 0.6;
      }
    }
    .image-column {
      display: flex !important;
      flex-direction: column !important;
      /* align-items:  self-end !important; */
      justify-content: center;
    }
  }
`

const NewsRow = props => {
  const image = getImage(props.image)
  const windowDimensions = useWindowDimensions()

  return (
    <NewsRowWrapper>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={12}>
            <label>
              {props.month} {props.year}
            </label>
            <Link to={props.href}>
              <Header as={"h6"}>{props.headline}</Header>
            </Link>
            <div className="press-release-preview">
              {props.snippet && props.snippet.slice(0, 200)}
            </div>
            {props.snippet && props.snippet.length > 375 && (
              <a className="read-more" href={props.href} target="_blank">
                ... Read the full article
              </a>
            )}
          </Grid.Column>
          <Grid.Column
            style={{
              alignItems:
                windowDimensions.width > 768 ? "self-end" : "self-start",
            }}
            className="image-column"
            width={4}
          >
            <Link href={props.href}>
              <GatsbyImage image={image} alt="Mickey Logo" />
            </Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </NewsRowWrapper>
  )
}

export default NewsRow
