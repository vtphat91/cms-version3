import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import DocumentBox from "./document"
import LoanCalculation from "./loan"

const BoxContent = ({locale}) => {
    const { infoBox } = useStaticQuery(queryInfoBox);
    const data = infoBox.edges.filter(data => data.node.node_locale === locale);

    return (
        <section id="row-204408-1-sidebar" className="sidebar right sticky">
            <DocumentBox documentInfo={data}/>
             <LoanCalculation loanInfo={data} />  
        </section>
    )
}

export default BoxContent ;

 const queryInfoBox = graphql`
  query queryInfoBox {
    infoBox: allContentfulBoxContent {
        edges {
          node {
            node_locale
            title
            necessaryInformation
            additionalInformation
            documentTitle
            note {
                childMarkdownRemark {
                    html
                }
              }
            listCity {
              content
            }
            listItemRadio {
              content
            }
            placeHolderInput{
              fullName
              phoneNumber
              address
              city
              idCard
              loan
              monthly
              email
            }
            
            titleLoan
            noteLoan {
                childMarkdownRemark {
                    html
                }
            }
            tenureLoan {
                content
            }
            loanInputs {
                installment
                interestRate
                loanAmount
                tenure
            }         
          }
        }
      }
  }
`