import React from 'react'
import Img from 'gatsby-image'
import LocalizedLink from "./localizedLink"


export default ({ article }) => (
  <div >
    <small style={{color:'darkgray'}}>{article.createdAt}</small>
    {article.article && <Img style={{height:'200px'}} alt="News" fluid={article.article.fluid} />}
    <h3 style={{fontSize: '1.15em', height:'50px', color: '#333', fontWeight: 'inherit', lineHeight: '20px'}}>
      <LocalizedLink to={`/news/${article.slug}`} style={{textDecoration: 'none'}}>{article.title}</LocalizedLink>
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