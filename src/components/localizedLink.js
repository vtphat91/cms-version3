import React from "react"
import { Link } from "gatsby"
import { LocaleContext } from "./layout"
import locales from "../../config/i18n"

// Use the globally available context to choose the right path
const LocalizedLink = ({ to, ...props }) => {
  to = to.replace(/\/|/g,"") ;
  const { locale , urlLang } = React.useContext(LocaleContext)
  const isIndex = to === `/`
  //locale === 'en-US'
  //urlLang === 'en'
  //for mdx use locale, for contenfulCMS use urlLang
  
  // If it's the default language, don't do anything
  // If it's another language, add the "path"
  // However, if the homepage/index page is linked don't add the "to"
  // Because otherwise this would add a trailing slash
  const path = locales[urlLang].default
    ? to
    : `${locales[urlLang].path}${isIndex ? `` : `${to}`}`
  return <Link {...props} to={`/${path}`} />
}

export default LocalizedLink