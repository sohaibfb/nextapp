
import { useRouter } from "next/router";
export default function OvertimeTransactionTemplate() {


    return (
        <>

            
                
                    <legend>Add Overtime</legend>


                    {/*<!--Transaction Type-->*/}

                    <label htmlFor="TransType"><span>Transaction Type:</span><select id="TransType" title='userdefined' name="TransType"  ></select></label>

                    {/*<!--Transaction Date-->*/}
                    <label htmlFor="TransDate"><span>Transaction Date:<span className="required">*</span></span><input id="TransDate" name="TransDate" type="date" autoFocus /></label>

                    {/*<!--Transaction End Date-->*/}
                   {/* <label htmlFor="TransEndDate"><span>Transaction End Date:<span className="required">*</span></span><input id="TransEndDate" name="TransEndDate" type="date" autoFocus /></label>*/}


                    {/*<!--Number of overtime hours-->*/}
                    <label htmlFor="Hours"><span>Hours :<span className="required">*</span></span><input name="Hours" type="number" /></label>

                    {/*<!--Transaction Amount-->*/}
                    <label htmlFor="TransAmount"><span>Transaction Amount:<span className="required">*</span></span><input id="TransAmount" name="TransAmount" type="number" autoFocus /></label>
               
            




          






        </>
    )
}