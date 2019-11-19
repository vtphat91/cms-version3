import React from "react"

const DocumentBox = ({documentInfo}) => {
    const {title ,necessaryInformation ,additionalInformation ,documentTitle ,note ,listCity, listItemRadio, placeHolderInput} = documentInfo[0].node;
    return (
        <div className="box box_layout clearfix column_className widget widget_text">
            <div className="textwidget">
                <div className="form-loan loan-page ">
                        <h2 style={{color: '#003f7e'}}> {title}</h2>
                        <div role="form" className="wpcf7" id="wpcf7-f477-o1" lang="en-US" dir="ltr">
                            <div className="screen-reader-response"></div>
                            <form action="/en/about-us#wpcf7-f477-o1" method="post" className="wpcf7-form" novalidate="novalidate">
                                <h3>{documentTitle}</h3>
                                <p>
                                    <span className="wpcf7-form-control-wrap giayto-kh">
                                        <span className="wpcf7-form-control wpcf7-radio">
                                            {
                                                listItemRadio.map(item => (
                                                    <span className="wpcf7-list-item first">
                                                        <input type="radio" name="giayto-kh" value={item.content} />
                                                        <span className="wpcf7-list-item-label" >{item.content}</span>
                                                    </span>
                                                ))
                                            }
                                        </span>
                                    </span>
                                </p>
                                <div className="dt-left">
                                    <h3>{necessaryInformation}</h3>
                                    <ul>
                                        <li>
                                            <span className="wpcf7-form-control-wrap your-name">
                                                <input type="text" name="your-name" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" 
                                                placeholder={placeHolderInput.fullName} />
                                            </span>
                                        </li>
                                        <li>
                                            <span className="wpcf7-form-control-wrap yout-tel">
                                                <input type="tel" name="yout-tel" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel" aria-required="true" aria-invalid="false" 
                                                placeholder={placeHolderInput.phoneNumber} />
                                            </span>
                                        </li>
                                        <li>
                                            <span className="wpcf7-form-control-wrap your-address">
                                                <input type="text" name="your-address" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false" 
                                                placeholder={placeHolderInput.address} />
                                            </span>
                                        </li>
                                        <li>
                                        <span className="wpcf7-form-control-wrap your-city">
                                            <select name="your-city" className="wpcf7-form-control wpcf7-select" aria-invalid="false">
                                                {
                                                    listCity.map(city=>(
                                                        <option value={city.content}>{city.content}</option>
                                                    ))
                                                }
                                            </select>
                                        </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dt-right">
                                    <h3>{additionalInformation}</h3>
                                    <ul>
                                        <li>
                                            <span className="wpcf7-form-control-wrap your-idcard">
                                                <input type="tel" name="your-idcard" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel" aria-invalid="false" 
                                                    placeholder={placeHolderInput.idCard} />
                                            </span>
                                        </li>
                                        <li>
                                            <span className="wpcf7-form-control-wrap your-moneyloan">
                                                <input type="text" name="your-moneyloan" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" 
                                                    placeholder={placeHolderInput.loan} />
                                            </span>
                                        </li>
                                        <li>
                                            <span className="wpcf7-form-control-wrap your-salary">
                                                <input type="text" name="your-salary" value="" size="40" className="wpcf7-form-control wpcf7-text" aria-invalid="false" 
                                                    placeholder={placeHolderInput.monthly} />
                                            </span>
                                        </li>
                                        <li> 
                                            <span className="wpcf7-form-control-wrap email-your-mail">
                                                <input type="email" name="email-your-mail" value="" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email" aria-invalid="false" 
                                                    placeholder={placeHolderInput.email} />
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <p style={{ textAlign : 'center'}}><input type="submit" value="Loan Now" className="wpcf7-form-control wpcf7-submit" /></p>
                                <div className="wpcf7-response-output wpcf7-display-none"></div>
                            </form>
                        </div>
                        <p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: note.childMarkdownRemark.html,
                                }}/>           
                        </p>
                 </div>
            </div>
        </div>                                  

    )
}
export default DocumentBox ;