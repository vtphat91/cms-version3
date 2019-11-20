import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import BoxContentPage from '../components/boxContent'

const ProductContent = ({data, pageContext: { locale}}) => {

    const post = get(data, 'contentfulNavigationChild.productContentRefer');
    if(post != null ){
      return (
          <section className="content_block clearfix wrapper">
              <section className="content left">
                <h2 className="section-headline"></h2>
                <div
                      dangerouslySetInnerHTML={{
                        __html: post.body.childMarkdownRemark.html,
                      }}/>
              </section>    
              <section className="sidebar right sticky fixed">
                 <BoxContentPage locale={locale}/>
              </section>      
          </section>
        )
      }else{
        return (
            <section className="content_block clearfix wrapper">
              <section className="content left">
               <h2 className="section-headline"></h2>
                <div>Updating ...</div>
              </section>    
               <section className="sidebar right sticky fixed">
                   <BoxContentPage locale={locale}/>
              </section>      
           </section>
        )
      }

}

export default ProductContent;


export const pageQueryProduct = graphql`
    query ProductContentByUrl($url: String!) {
        contentfulNavigationChild(url: {eq: $url}) {
          productContentRefer {
            title
            body {
              childMarkdownRemark {
                html
              }
            }
          }
        }
    }
    `


