import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'


const NewsTemplate = ({data}) => {
    const news = get(data, 'contentfulNews');
    return (
        <section className="content_block clearfix wrapper">
        <h2 className="section-headline">{news.title}</h2>
            <div
                dangerouslySetInnerHTML={{
                    __html: news.body.childMarkdownRemark.html,
                }}/>
         </section>
    )
} 

export default NewsTemplate;


export const pageQueryNews = graphql`
query NewsContent($slug: String!, $locale: String!) {
    contentfulNews(node_locale: {eq: $locale}, slug: {eq: $slug}) {
        title
        body {
            childMarkdownRemark {
              html
            }
          }
      }
}
`
