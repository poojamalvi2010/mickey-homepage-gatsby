import React from 'react';
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../layout"
import Main from '../Layout-Components/Main/Main';
import SellOnMickey from '../Layout-Components/SellOnMickey/SellOnMickey';
import ProductInfo from '../Layout-Components/ProductInfo/ProductInfo';



const Home = () => {
  const data = useStaticQuery(graphql`
query HomeQuery {
  allWpInvestorLogo {
    edges {
      node {
        investorLogos {
          investorLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }
        }
      }
    }
  }
  allWpBuyerLogo {
    edges {
      node {
        buyerLogos {
          buyerLogo {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, quality: 100)
              }
            }
          }
        }
      }
    }
  }
  allWpFaq {
    edges {
      node {
        faqs {
          answer
          question
        }
      }
    }
  }
}

    `)

  const investorLogos = data?.allWpInvestorLogo.edges
  const buyerLogos = data?.allWpBuyerLogo.edges
  const FAQs = data?.allWpFaq.edges


  return (
    <Layout>
      <Main />
      <ProductInfo />
      <SellOnMickey investorLogos={investorLogos} buyerLogos={buyerLogos} FAQs={FAQs} />
    </Layout>
  )
};

export default Home;
