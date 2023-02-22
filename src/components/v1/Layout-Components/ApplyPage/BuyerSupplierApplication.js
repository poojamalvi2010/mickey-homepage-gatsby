import React, { useState } from 'react';
import styled from "styled-components"
import { Grid, Header, Segment, Checkbox, Button } from "semantic-ui-react"
import MickeyForm from '../../Utility-Components/MickeyForm/MickeyForm';

const ApplyWrapper = styled.div`
    height: 94vh;
    width: 100%;
    h1{
        color: #202020 !important;
        font-size: 3rem !important;
        margin: 2rem 0 2rem 0 !important;
        h3{
            font-size: 1.25rem !important;
            color: gray !important;
            margin: 2rem 0 2rem 0 !important;
        }
    }
    .form-wrapper{
        background-color: #6a6a6a !important;
        h3{
            color: white !important;
            text-align: center !important;
        }
    }
    button{
        background: green !important;
    }

`

const BuyerSupplierApplication = () => {
    const [checked, setChecked] = useState(false)
    return (
        <ApplyWrapper>
            {/* <Grid basic inverted textAlign='center' verticalAlign='middle'> */}
            <Grid.Column width={16}>
                <Header as={'h1'} inverted>
                    Apply Below To Buy Or Sell On The Marketplace
                    <Header.Subheader as={'h3'} inverted className={'main-subheader'}>
                        Sell your commodities on Mickey for one-click sales, quick liquidation, and fully automated logistics.
                    </Header.Subheader>
                </Header>
            </Grid.Column>
            <Grid.Row>
                <div className="absolute force-hardware-acceleration inset-0 bg-gradient-to-br from-[#79C0FF] to-[#84EDC1] filter blur-[6rem] opacity-50 z-0"></div>
                <Grid.Column width={4} />
                <Grid.Column width={8}>
                    <Checkbox size={'large'} primary toggle onChange={() => {
                        setChecked(!checked)
                    }} />
                    <Segment className={'form-wrapper'} >
                        <h3>
                            <Button>buyer</Button>
                            <Button>suppplier</Button>
                            I am a <b>{checked ? 'Supplier' : 'Buyer'}</b>
                        </h3>
                        <MickeyForm
                            formName={"SupplierForm"}
                            model={"Business"}
                            innerSuccessMessage={"Thanks for applying! We'll get back to you shortly!"}
                            innerButtonMessage={"Click here to read more about Mickey"}
                            innerButtonHref={'/about'}
                            buttonFloatedRight={true}
                            successMessage={"Thanks for applying! We'll get back to you shortly!"}
                            failureMessage={"Error with your application."}
                            url={"/main/p-businesses/"}
                            buttonLabel={'Apply'}
                            buttonSize={'medium'}
                        />
                    </Segment>
                </Grid.Column>
                <Grid.Column width={4} />
            </Grid.Row>
            <Grid.Row />
            <Grid.Row />
            {/* </Grid> */}
        </ApplyWrapper>
    )
};

export default BuyerSupplierApplication;
