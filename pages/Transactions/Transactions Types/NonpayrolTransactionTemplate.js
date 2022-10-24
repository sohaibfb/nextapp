
export default function NonpayrolTransactionTemplate() {

    return (
        <>

            
                
                    <legend>Add Other Deductions</legend>


                    {/*<!--Transaction Type-->*/}

                    <label htmlFor="TransType"><span>Other Deductions Type:</span><select id="TransType" title='userdefined' name="TransType"  ></select></label>

                    {/*<!--Transaction Date-->*/}
                    <label htmlFor="TransDate"><span>Other Deductions Date:<span className="required">*</span></span><input id="TransDate" name="TransDate" type="date" autoFocus /></label>

                  

                    {/*<!--Transaction Amount-->*/}
                    <label htmlFor="TransAmount"><span>Other Deductions Amount:<span className="required">*</span></span><input id="TransAmount" name="TransAmount" type="number" autoFocus /></label>
               
            




          






        </>
    )
}