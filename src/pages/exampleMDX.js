import React from "react"
import { graphql } from "gatsby"
import LocalizedLink from "../components/localizedLink"
import useTranslations from "../components/useTranslations"

const ExampleMDX = ({ data: { allMdx }, pageContext: { locale, dateFormat} }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations

  const { hello, subline } = useTranslations()
  return (
    <>
      <h1>{hello}</h1>
      <p>{subline}</p>
      <hr style={{ margin: `2rem 0` }} />
      <ul className="post-list">
        {allMdx.edges.map(({ node: post }) => (
          <li key={`${post.frontmatter.title}-${post.fields.locale}`}>
            <LocalizedLink to={`/${post.parent.relativeDirectory}`}>
              {post.frontmatter.title}
            </LocalizedLink>
            <div>{post.frontmatter.date}</div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ExampleMDX

export const query = graphql`
  query ExampleMDX($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: $dateFormat)
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`