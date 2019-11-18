import React from "react"
import { Link } from "gatsby"
import  styles from '../pages/navigation.module.css'
import LocalizedLink from "./localizedLink"

const Navigation = (data) => {
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
        <div className={styles.navContainer}>
          <div className={styles.brand}>
            <a href="#"><img  src= {urlLogoMirae} /></a>
          </div>
          <nav>
            <div className={styles.navMobile}><a id="navToggle" href="#!"><span></span></a></div>
            <ul className={styles.navTist}>

              {navigations.map(navigation => (
                <li key={navigation.node.id}>
                  <div className={styles.dropdown}>
                    {/* <Link to={`/${navigation.node.url}` } >{navigation.node.text}</Link> */}
                    <LocalizedLink to={`/${navigation.node.url}`}>
                      {navigation.node.text}
                    </LocalizedLink>
                    <div className={styles.dropdownContent}>
                      {navigation.node.navigationChild != null ? navigation.node.navigationChild.map(child => (
                          <Link to={`/${child.url}` } key={child.id} >{child.text}</Link>
                      )):''}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    )
 
}

export default Navigation