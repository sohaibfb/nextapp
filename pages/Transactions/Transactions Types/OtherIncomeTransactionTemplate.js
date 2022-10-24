
import { useRouter } from "next/router";
export default function OtherIncomeTransactionTemplate() {

    const router = useRouter();
    const code = router.query.code;
    return (
        <>

            
                
                    <legend>Add Other Income</legend>


                    {/*<!--Transaction Type-->*/}

                    <label htmlFor="TransType"><span>Other Income Type:</span><select id="TransType" title='userdefined' name="TransType"  ></select></label>

                    {/*<!--Transaction Date-->*/}
                    <label htmlFor="TransDate"><span>Other Income Date:<span className="required">*</span></span><input id="TransDate" name="TransDate" type="date" autoFocus /></label>

                    <input id="Hours" name="Hours" type="number"  defaultValue={'0'} hidden autoFocus></input>

                    {/*<!--Transaction Amount-->*/}
                    <label htmlFor="TransAmount"><span>Other Income Amount:<span className="required">*</span></span><input id="TransAmount" name="TransAmount" type="number" autoFocus /></label>
               
            




          






        </>
    )
}