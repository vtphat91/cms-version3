import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import  styles from '../pages/navigation.module.css'
import LocalizedLink from "./localizedLink"


export default ({ article }) => (
  <div >
    {article.article && <Img alt="News" fluid={article.article.fluid} />}
    <h3 style={{fontSize: '1.5em'}}>
      <LocalizedLink to={`/news/${article.slug}`} >{article.title}</LocalizedLink>
    </h3>
    <small>{article.publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
    {/* {article.tags.map(tag => (
      <p className={styles.tag} key={tag}>
        {tag}
      </p>
    ))} */}
  </div>
)