import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import './about-us.css'
import BoxContentPage from '../components/boxContent'

import Img from "gatsby-image"

const AboutUs = ({data, pageContext: { locale}}) => {
    const title = get(data, 'contentfulAboutUs.title');
    const quote = get(data, 'contentfulAboutUs.quote');
    const image = get(data, 'contentfulAboutUs.avatar');
    return (
        <>
            <section className="content_block clearfix wrapper">
                <section className="content left ceo">
                    <h2 className="section-headline">{title}</h2>
                    <div className="box one ">
                        <div className="dt-ceo">
                            <div className="dt-left02"><Img style={{float: 'left'}} fixed={image.fixed} /></div>
                            <div className="dt-right02">
                            <blockquote className="pullquote alignright fadeInDown animated" >
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: quote.childMarkdownRemark.html,
                                }}/>
                            </blockquote>
                            </div>
                        </div>
		            </div>
                </section>  
                <section className="sidebar right sticky fixed">
                    <BoxContentPage locale={locale}/>
                </section>      
            </section>
        </>    
    );
}

export default AboutUs;


export const query = graphql`
query AboutUs($locale: String!) {
    contentfulAboutUs(node_locale: {eq: $locale}) {
        title
        quote {
          childMarkdownRemark {
            html
          }
        }
        avatar {
            fixed(width:231 height:300) {
              ...GatsbyContentfulFixed
            }
        }
      }
}
`
