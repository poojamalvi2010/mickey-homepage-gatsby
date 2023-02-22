import React from "react";
import Layout from "../layout";
import BuyerSupplierApplication from "../Layout-Components/ApplyPage/BuyerSupplierApplication";
import Seo from "../seo"


const Apply = () => {
    return (
        <>
            <Seo title="Apply to Mickey" />
            <Layout>
                <BuyerSupplierApplication />
            </Layout>
        </>
    );
};

export default Apply;
