import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Slideshow from '../components/slideshow';
import './index.css';

import ArticlePreview from '../components/article-preview'

const Index = ({data}) => {

  const {slideShow, newsContent} = data ;
  let  images = [];
  slideShow.edges.forEach(element => {
    images.push(element.node);
  });


  return (
      <>
        <div className="App">
          <Slideshow
            input={images}
            ratio={`16:9`}
            mode={`automatic`}
            timeout={`5000`}
          />
        </div>
        <h2>Tin Tức Khuyến Mãi</h2>
          <ul className="article-list">
          {newsContent.edges.map(({ node }) => {
            return (
              <li key={node.slug}>
                <ArticlePreview article={node} />
              </li>
            )
          })}
          </ul>
      </>
  )
}

export default Index

export const querySlideShow = graphql`
  query Index($locale: String!){
    slideShow: allContentfulSlideShow(sort: {fields: order}, filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          caption
          images {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          order
          urlReference
        }
      }
    }

    newsContent: allContentfulNews(sort: {fields: createdAt, order: DESC} , filter: {node_locale: {eq: $locale}}) {
      edges {
        node {
          slug
          title
          node_locale
          article {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          createdAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`