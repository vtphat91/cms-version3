import React from 'react'
import { useStaticQuery ,graphql } from 'gatsby'
import get from 'lodash/get'
import './about-us.css'
import BoxContentPage from '../components/boxContent'

const AboutUs = ({data, pageContext: { locale}}) => {
    console.log('locale',locale);
    const title = get(data, 'contentfulAboutUs.title');
    const body = get(data, 'contentfulAboutUs.body');
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
        body {
          childMarkdownRemark {
            html
          }
        }
      }
}
`
