import React from 'react';
import Layout from '../layout';
import ProductFeatures from '../Layout-Components/Features/ProductFeatures';
import FeaturesOnMickey from "../Layout-Components/Features/FeaturesOnMickey"
import Seo from "../seo"

const Features = () => {
    return (
        <>
            <Seo title="Buy Lumber on Mickey" />
            <Layout>
                <FeaturesOnMickey />
                <ProductFeatures />
            </Layout>
        </>
    )
};

export default Features;
