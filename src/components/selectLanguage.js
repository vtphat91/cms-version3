import React from "react"
import { Link } from "gatsby"
import ReactCountryFlag from "react-country-flag";

const styleFlagUs = {
    marginTop : '30px',
    float: 'right',
    width: '90px',
    //height: '25px',
    display: 'flex'
  }


const SelectLanguage = ({path}) => {
    const IndexPage = (path === '/' || path === '/vi' ) ;

    if(!IndexPage){
        path = path.substring(1) === '/' ? path.substring(1) : path;
        
        return(
            <div style = {styleFlagUs}>
                <Link to={`/${path}`}>
                    <ReactCountryFlag 
                                styleProps={{
                                width: '30px',
                                height: '30px'
                                }}
                                code="us"
                                svg
                            />
                </Link> 
                <Link to={`/vi/${path}`}>
                    <ReactCountryFlag 
                                styleProps={{
                                width: '30px',
                                height: '30px'
                                }}
                                code="vn"
                                svg
                            /> 
                </Link>    
            </div>
        )
    }else{
        return(
        <div style = {styleFlagUs}>
            <Link to={`/`}>
                <ReactCountryFlag 
                            styleProps={{
                            width: '30px',
                            height: '30px'
                            }}
                            code="us"
                            svg
                        />
            </Link>
            <Link to={`/vi`}>
                <ReactCountryFlag 
                            styleProps={{
                            width: '30px',
                            height: '30px'
                            }}
                                code="vn"
                                svg
                            /> 
            </Link>   
        </div>
        )}
}

export default SelectLanguage;