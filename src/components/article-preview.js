import React from 'react'
import Img from 'gatsby-image'
import LocalizedLink from "./localizedLink"


export default ({ article }) => (
  <div >
    <small style={{color:'darkgray'}}>{article.createdAt}</small>
    {article.article && <Img style={{height:'200px'}} alt="News" fluid={article.article.fluid} />}
    <h3 style={{fontSize: '1.1em', height:'50px'}}>
      <LocalizedLink to={`/news/${article.slug}`} >{article.title}</LocalizedLink>
    </h3>
    
    {/* <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    /> */}
    {/* {article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))} */}
  </div>
)