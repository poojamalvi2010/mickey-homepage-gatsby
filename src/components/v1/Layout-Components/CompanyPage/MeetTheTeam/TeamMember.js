import React from 'react';
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image';
import { media } from '../../../../../../mq';

//Components
import { Grid } from "semantic-ui-react"


const TeamMemberWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 0 1 100%;
    padding: 0 .5rem 0 .5rem;
    margin-bottom: 3rem;
    ${media.small`flex: 0 1 50%;`}
    ${media.medium`flex: 0 1 33.333%`}
    ${media.large`flex: 0 1 25%;margin-bottom: 8rem;`}
    .gatsby-image-wrapper{
        height: 100%;
    }
    .info-wrapper{
        display: flex;
        flex-direction: column;
        justify-content: left;
        width: 100%;
        margin-top: .25rem;
        h4{
            font-family: "BrownLLSub-Regular";
            margin: 1rem 0 .5rem 0;
            font-size: 1.5em;
        }
        p{
            font-family: "BrownLLSub-Light";
            color: #777;
            font-size: 1.2em;
        }
    }
    
`

const TeamMember = (props) => {
    return (
        <TeamMemberWrapper>
            <GatsbyImage image={props.headshot} alt={props.name} />
            <div className="info-wrapper">
                <h4>{props.name}</h4>
                <p>{props.position}</p>
            </div>
        </TeamMemberWrapper>
    )
};

export default TeamMember;
