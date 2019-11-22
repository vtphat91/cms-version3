import React from "react"
import  styles from '../pages/navigation.module.css'
import LocalizedLink from "../components/localizedLink"


const NavigationItem = ({navigations}) => {
    return (
        navigations.map(navigation => (
            <li key={navigation.node.id}>
                <div className={styles.dropdown}>
                    <LocalizedLink to={`/${navigation.node.url}`}>
                        {navigation.node.text}
                    </LocalizedLink>
                    <div className={styles.dropdownContent}>
                        {navigation.node.navigationChild != null ? navigation.node.navigationChild.map(child => (
                            <LocalizedLink to={`/${child.url}`} key={child.id}>
                                {child.text}
                            </LocalizedLink>
                        )):''}
                    </div>
                </div>
            </li>
        ))
    )
}

export default NavigationItem