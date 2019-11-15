import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from '../pages/navigation'
import Footer from '../components/footer'


const LocaleContext = React.createContext()

const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <Container>
      <header className="global-header">
        {/* <Navigation /> */}
      </header>
      <main>{children}</main>
      <Footer />
      </Container>
  </LocaleContext.Provider>
)

export { Layout, LocaleContext }
