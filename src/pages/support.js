import React from 'react'
import Layout from '../components/v2/Layout/layout2'
import { Header, Divider, Form, TextArea, Button, Grid } from "semantic-ui-react";
import styled from 'styled-components';
import useWindowDimensions from "../hooks/useWindowDimensions"
const ResourcesSupport = () => {
    const windowDimensions = useWindowDimensions()

    const SupportWrapper = styled.div`
    width: 100%;
    height: 100%;
    min-height: 70vh;
    padding: 2rem 0 2rem 0;
    .grid{
        min-height: inherit;
        align-items: center !important;
    }
    .form{
        label{
            font-size: 12px;
            color: rgb(130 130 130);
        }
        button{
            width: 100%;
            color: white;
            border-radius: 500px;
            background-color: #f1592a;
            transition: .1s ease-in-out;
            border: 1px solid #f1592a;
            &:hover{
                background-color: white;
                color: #f1592a
            }
        }
        .field{
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: baseline;
            label{
                font-size: 12px !important;
            }
        }
    }
  `

    return (
        <Layout>
            <SupportWrapper>
                <Grid textAlign='center'>
                    <Grid.Column width={windowDimensions.width > 1100 ? 7 : 10}>
                        <Header as={"h1"}>
                            Support
                        </Header>
                        <Form>
                            <Form.Group widths={2}>
                                <Form.Input label="First name*" placeholder="First name" />
                                <Form.Input label="Last name*" placeholder="Last name" />
                            </Form.Group>
                            <Form.Group widths={2}>
                                <Form.Input label="Company Name*" placeholder="Company Name" />
                                <Form.Input label="Email*" placeholder="Email" />
                            </Form.Group>
                            <Form.TextArea
                                label="Message*"
                                rows={5}
                                className="textarea"
                            />
                            <Button className="submit-button">Submit</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </SupportWrapper>
        </Layout>
    )
}

export default ResourcesSupport