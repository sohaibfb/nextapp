
import { useRouter } from "next/router";
export default function LoanTransactionTemplate() {

    const router = useRouter();
    const code = router.query.code;
    return (
        <>

            
                
                    <legend>Add Loan</legend>


                    {/*<!--Transaction Type-->*/}

                    <label htmlfor="TransType"><span>Loan Type:</span><select id="TransType" title='userdefined' name="TransType"  ></select></label>

                    {/*<!--Transaction Date-->*/}
                    <label htmlFor="TransDate"><span>Loan Date:<span className="required">*</span></span><input id="TransDate" name="TransDate" type="date" autoFocus /></label>

                  
                    {/*<!--Number of overtime hours-->*/}
                    <label htmlFor="Hours"><span>Installment :<span className="required">*</span></span><input name="Hours" type="number" /></label>

                    {/*<!--Transaction Amount-->*/}
                    <label htmlFor="TransAmount"><span>Loan Amount:<span className="required">*</span></span><input id="TransAmount" name="TransAmount" type="number" autoFocus /></label>
               
            




          






        </>
    )
}