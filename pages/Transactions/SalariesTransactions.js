import React from 'react';
import Link from 'next/link';
import FetchData from '../../components/FetchData';

export default function SalariesTransactions() {
    return (
        
  <>
                



                <form id='submitSettingsform' className="form-style-3" onSubmit={calculatesalary} method="post">


{/*<Personal Information-->*/}
<fieldset name="Salaries">


  <legend>Salaries</legend>


  {/*<!--ID-->*/}
  <label htmlFor="Ename"><span>English Name:<span className="required">*</span></span><input id="EngName" name="Ename" type="text" autoFocus /></label>

  {/*<!--Name-->*/}
  <label htmlFor="Aname"><span>Arabic Name :<span className="required">*</span></span><input id="AName" name="Aname" type="text"/></label>

 {/*<!--Year-->*/}
  <label htmlFor=""><span>Year :</span><select id="Year" title='userdefined' name="Year"  required >
                                    <option title='userdefined' value='' selected>Choose</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>

                                   
           

                                </select></label>


  {/*<!--Month-->*/}
  <label htmlFor=""><span>Month :</span><select id="Month" title='userdefined' name="Month"  required >
                                    <option title='userdefined' value='' selected>Choose</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>

                                    

                                   
           

                                </select></label>

                                <label htmlFor=''><span>Year</span><input type='month'></input></label>


  <div className='bottomactionbar'>

    {/*<div className='img' onClick={savesettings}><Image id='saveimage' objectfit='contain' src={saveSettingsImage} /></div>*/}
    <div className='img'><input type="image" src='../../Images/save.png' ></input></div>



  </div>


</fieldset>




</form>








                </>

        



    );

    async function calculatesalary(e) {

      e.preventDefault();
  
  
  
      const calculationData = { year: e.target.Year.value, month: e.target.Month.value };
    
      try {
  
        const res = await FetchData('https://test87.online/calculatesalary.php', 'post', calculationData, true);
  
        var posts = await res.text();
  
        if (posts.trim() == 'data added successfully') {
          document.getElementById('myModal').style.display = 'none'
          //router.push(router.pathname.concat('?','code=',router.query.code,'&path=',router.query.path),router.asPath);
          router.push({ pathname: router.pathname, query: { mainpath: router.query.mainpath, code: router.query.code, path: router.query.path, pathname: router.query.pathname } }, router.asPath);
          document.getElementById('submitSettingsform').reset()
  
        }
  
  
  
      } catch (error) {
        console.log('ERROR: ' + error);
  
      }
  
  
  
  
  
    }
}


