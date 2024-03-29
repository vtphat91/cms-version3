import React from "react"

const LoanCalculation = ({loanInfo}) => {

    const {titleLoan ,loanInputs , noteLoan, tenureLoan} = loanInfo[0].node;
    
    return (
        <div className="box box_layout clearfix column_className widget widget_text">
                <div className="textwidget">
                    <div className="calculator-loan loan-page">
                        <h2 style={{color : '#f5811f'}}>{titleLoan}</h2>
                        <ul>
                                <li> <b style={{color: '#000'}}>{loanInputs.loanAmount}</b>
                                <input type="text" id="j_id0:j_id2:Net_income" name="j_id0:j_id2:Net_income"  />
                            </li>
                            <li>
                                <b style={{color: '#000'}}>{loanInputs.tenure}</b>
                                <select id="j_id0:j_id2:Tenure" name="j_id0:j_id2:Tenure" size="1">
                                    {
                                        tenureLoan.map(item=>(
                                            <option value={item.content} key={item.content} >{item.content}</option>
                                        ))
                                    }
                                </select>
                            </li>
                            <li> <b style={{color: '#000'}}>{loanInputs.interestRate} </b>
                                <input id="j_id0:j_id2:Interest_rate" name="j_id0:j_id2:Net_income" size="20" type="text"/>
                            </li>
                            <li style={{ textAlign : 'center'}}> <input type="submit" style={{ cursor : 'pointer'}} defaultValue="CHECK" className="wpcf7-form-control wpcf7-submit" /> </li>
                                <li className="result"> <b style={{color: '#000'}}>{loanInputs.installment}</b> <input id="j_id0:j_id2:j_id14" name="j_id0:j_id2:j_id14" type="text" defaultValue="0" disabled="" /> </li>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: noteLoan.childMarkdownRemark.html,
                                }}/>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
export default LoanCalculation