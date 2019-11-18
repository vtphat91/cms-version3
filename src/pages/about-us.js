import React from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import get from 'lodash/get'
import './about-us.css'

const AboutUs = ({data}) => {
    
    const title = get(data, 'contentfulAboutUs.title');
    const body = get(data, 'contentfulAboutUs.body');
    const bodyBoxContent = get(data, 'contentfulBoxContentBodyTextNode.childMarkdownRemark');
    return (
        <>
            <section className="content_block clearfix wrapper">
                <section className="content left ceo">
                    <h2 className="section-headline">{title}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: body.childMarkdownRemark.html,
                        }}/>
                </section>  
                <section className="sidebar right sticky fixed">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: bodyBoxContent.html,
                        }}/>
        
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
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    contentfulBoxContentBodyTextNode {
        childMarkdownRemark {
          html
        }
    } 
}
`
