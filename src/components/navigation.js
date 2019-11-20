import React from "react"
import  styles from '../pages/navigation.module.css'
import LocalizedLink from "../components/localizedLink"
import { LocaleContext } from "./layout"
import SelectLanguage from './selectLanguage'
import NavigationItem from './navigationItem'


const NavigationPage = (data) => {
  const { locale , urlLang } = React.useContext(LocaleContext) ;
  //xu ly cho chon ngon ngu
  const path = data.path.includes(urlLang) ? data.path.replace(`/${urlLang}/`,'') : data.path ;
  const navigations = data.navigations ;
  const urlLogoMirae = data.urlLogoMirae;
  navigations.sort((a, b) => a.node.sort - b.node.sort);
  //sort navigation
  navigations.map(navigation => {
    if(!navigation && !navigation.node && !navigation.node.navigationChild && !navigation.node.navigationChild.sort){
      navigation.node.navigationChild.sort((a, b) => a.sort - b.sort);
    }
  })
  
  return (
    <section className={styles.navBar}>
          <SelectLanguage path={path} />
      <div className={styles.navContainer}>
        <div className={styles.brand}>
          <a href="#"><img  src= {urlLogoMirae} /></a>
        </div>
        <nav>
          <div className={styles.navMobile}><a id="navToggle" href="#!"><span></span></a></div>
          <ul className={styles.navTist}>
            <NavigationItem navigations={navigations} />
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default NavigationPage

