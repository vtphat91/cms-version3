import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from '../pages/navigation'
import Footer from '../components/footer'

import { StaticQuery ,graphql } from 'gatsby'


const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale , urlLang } }) => (
  <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        allContentfulNavigation {
          edges {
            node {
              id
              text
              url
              sort
              node_locale
              navigationChild {
                text
                id
                url
                node_locale
              }
            }
          }
        }
        contentfulAsset(title: {eq: "logo Mirae Asset"}) {
          file {
            url
          }
        }
      }
    `}
   
    render={data => {
      let navigations = data.allContentfulNavigation.edges;
      navigations = navigations.filter(data => data.node.node_locale === locale);
      return (
        <LocaleContext.Provider value={{ locale, urlLang }}>
          <Container>
            <header className="global-header">
              <Navigation navigations={navigations} urlLogoMirae={data.contentfulAsset.file.url} /> 
            </header>
            <main>{children}</main>
            <Footer />
            </Container>
        </LocaleContext.Provider>
      )}}
  />
)

export { Layout, LocaleContext }

