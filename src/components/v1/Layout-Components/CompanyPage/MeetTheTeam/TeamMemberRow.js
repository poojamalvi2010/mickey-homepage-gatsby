import React from 'react';
import styled from "styled-components"

//Components
import { Grid } from "semantic-ui-react"
import TeamMember from './TeamMember';

//Images
import Rabens from "../../../../../images/headshots/rabens.png"
import Jesse from "../../../../../images/headshots/jesse.png"
import Brandon from "../../../../../images/headshots/brandon.png"
import Nate from "../../../../../images/headshots/nate.png"


const TeamMemberRowWrapper = styled.div`
width: 100%;
height: 100%;
.grid{
  margin-top: 80px !important;
}

`

const TeamMemberRow = () => {
  return (
    <TeamMemberRowWrapper>
      <Grid basic inverted textAlign='center'>
        <Grid.Row
          style={{
            padding: "0"
          }}
        >
          <TeamMember
            headshot={Rabens}
            name={"Alex Rabens"}
            position={"CEO & Co-Founder"}
          />
          <TeamMember
            headshot={Jesse}
            name={"Jesse Soloman"}
            position={"Co-Founder"}
          />
          <TeamMember
            headshot={Nate}
            name={"Nate Cohen"}
            position={"Engineer"}
          />
          <TeamMember
            headshot={Brandon}
            name={"Brandon Hamm"}
            position={"Public Relations Coordinator"}
          />
        </Grid.Row>
      </Grid>
    </TeamMemberRowWrapper>
  )
};

export default TeamMemberRow;
