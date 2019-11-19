import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { useStaticQuery ,graphql } from 'gatsby'

const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale , urlLang}, path }) => {

  const { navigationContent, logoMirae } = useStaticQuery(queryNavigation) ;
   
  let navigations = navigationContent.edges;
  navigations = navigations.filter(data => data.node.node_locale === locale);
  return (
    <LocaleContext.Provider value={{ locale, urlLang }}>
      <Container>
        <header className="global-header">
          <Navigation navigations={navigations} urlLogoMirae={logoMirae.file.url} path={path} /> 
        </header>
        <main>{children}</main>
        <Footer />
        </Container>
    </LocaleContext.Provider>
  )
}

export { Layout, LocaleContext } 


export const queryNavigation = graphql`
  query queryNavigationContent {
    navigationContent : allContentfulNavigation {
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
    logoMirae : contentfulAsset(title: {eq: "logo Mirae Asset"}) {
      file {
        url
      }
    }
  }
`

