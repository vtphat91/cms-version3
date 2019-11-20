import React from "react"
import { Link } from "gatsby"
import ReactCountryFlag from "react-country-flag";

const locales = require(`../../config/i18n`)

const styleFlagUs = {
    marginTop : '30px',
    float: 'right',
    width: '90px',
    //height: '25px',
    display: 'flex'
  }

const SelectLanguage = ({path}) => {
    //fix path first /
    if(path.charAt(0) === '/')
        path = path.substr(1);
    return(
        <div style = {styleFlagUs}>
        {Object.keys(locales).map(lang => {
            if(locales[lang].default){
                return (
                    <Link to={`/${path}`} key={`${path}`}>
                        <ReactCountryFlag 
                                    styleProps={{
                                    width: '30px',
                                    height: '30px'
                                    }}
                                    code="us"
                                    svg
                                />
                    </Link> 
                )
            }else {
                return (
                    <Link to={`/vi/${path}`} key={`vi/${path}`}>
                        <ReactCountryFlag 
                                    styleProps={{
                                    width: '30px',
                                    height: '30px'
                                    }}
                                    code="vn"
                                    svg
                                /> 
                    </Link>    
                    )
            }
        })}
        </div>
    )
}

export default SelectLanguage;