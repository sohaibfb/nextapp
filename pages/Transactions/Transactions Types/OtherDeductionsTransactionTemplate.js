
export default function OtherDeductionsTransactionTemplate() {

    return (
        <>

            
                
                    <legend>Add Other Deductions</legend>


                    {/*<!--Transaction Type-->*/}

                    <label htmlFor="TransType"><span>Trans Type:</span><select id="TransType" title='userdefined' name="TransType"  ></select></label>

                    {/*<!--Transaction Date-->*/}
                    <label htmlFor="TransDate"><span>Transaction Date:<span className="required">*</span></span><input id="TransDate" name="TransDate" type="date" autoFocus /></label>

                    <input id="Hours" name="Hours" type="number"  defaultValue={'0'} hidden autoFocus></input>


                    {/*<!--Transaction Amount-->*/}
                    <label htmlFor="TransAmount"><span>Amount:<span className="required">*</span></span><input id="TransAmount" name="TransAmount" type="number" autoFocus /></label>
               
            




          






        </>
    )
}