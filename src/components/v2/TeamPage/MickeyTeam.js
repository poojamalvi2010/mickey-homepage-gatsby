import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { media } from "../../../../mq"


//Components
import MickeyTeamMember from "./MickeyTeamMember"
import { getImage } from 'gatsby-plugin-image';

const MeetTheTeamWrapper = styled.div`
  background-color: white;
  padding: 3rem 2rem 3rem 2rem;
  ${media.small`padding: 5rem 3rem 5rem 3rem;`}
  .grid{
    height: 100%;
  }
    .team-member-wrapper{
      display: flex;
      justify-content: center;
      width: 100%;
      min-height: 95vh;
      .inner-wrapper{
        display: flex;
        flex-wrap: wrap;
    }
  }
`

const MeetTheTeam = ({ teamMembers }) => {
    useEffect(() => {
        let orderedMembers = []
        let theRest = []
        let cSuite = []
        teamMembers.map(member => {
            let memberName = member.node.teamMembers.name
            if (memberName === "Alex Meyers") {
                cSuite.push(member)
            } else if (memberName === "Weston Stewart-Tennes") {
                cSuite.push(member)
            } else if (memberName === "Jesse Solomon") {
                cSuite.push(member)
            } else if (memberName === "Alex Rabens") {
                cSuite.push(member)
            } else {
                theRest.push(member)
            }
        })
        setOrderedTeamMembers([...cSuite, ...theRest])

    }, [])
    const [orderedTeamMembers, setOrderedTeamMembers] = useState([])
    return (
        <MeetTheTeamWrapper>
            <div className="team-member-wrapper">
                <div className="inner-wrapper">
                    {orderedTeamMembers?.map(member => {
                        const name = member?.node?.teamMembers?.name
                        const role = member?.node?.teamMembers?.role
                        const headshot = getImage(member?.node?.teamMembers?.headshot?.localFile)
                        return (
                            <MickeyTeamMember
                                name={name}
                                position={role}
                                headshot={headshot}
                            />
                        )
                    })}
                </div>
            </div>
        </MeetTheTeamWrapper>
    )
};

export default MeetTheTeam;
