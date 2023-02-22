import React, { useState } from 'react'
import styled from 'styled-components'
import { media } from '../../../../../mq'
import { Input, Button } from "semantic-ui-react"

const GetStartedInputWrapper = styled.div`
    position: relative;
    display: flex;
    margin-top: 2rem;
    min-height: 150px;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 30vw;
    height: 50px;
    ${media.large`margin-top: 6rem; flex-direction: row; align-items: normal; min-height: 50px;`}
    div{
        width: 100%;
        height: 50px;
        min-width: 300px !important;
        display: flex;
        justify-content: center;
      input{
        display: flex;
        flex: 0 1 100%;
        border-radius: 500px !important;
        height: 100% !important;
        width: 100%;
        border: 0 !important;
        margin: 0 2rem 0 2rem;
        outline: none;
        padding-left: 1rem;
        ${media.small`margin: 0;`}
        &::placeholder{
          color: #333333;
        }
      }
    }
    button{
      position: relative;
      border-radius: 500px !important;
      height: 50px;
      background-image: none !important;
      box-shadow: none !important;
      justify-content: center !important;
        display: flex !important;
        align-items: center !important;
      ${media.large`position: absolute; right: -.75% !important; margin: 0 !important;`}
    }
`



const GetStartedInput = (props) => {
    const [email, setEmail] = useState("")

    const handleInput = (event) => {
        setEmail(event.target.value)
    }

    return (
        <GetStartedInputWrapper>
            <div>
                <input
                    placeholder="Enter email..."
                    value={email}
                    onChange={handleInput}
                    style={{
                        backgroundColor: props.backgroundColor
                    }}

                />
            </div>

            <Button color="green">
                <a
                    href={"https://marketplace.mickey.io/apply?email=" + email}
                    style={{ color: "white" }}
                >
                    Get Started
                </a>
            </Button>
        </GetStartedInputWrapper>
    )
}

export default GetStartedInput