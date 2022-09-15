import React, { Component, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import SettingsLayout from '../temp/SettingsLayout';
import MasterSettingsLayout from '../../layouts/MasterSettingsLayout';
import addSettingsImage from '../../public/Images/addsettings.jpg';
import addSettingsImage2 from '../../public/Images/addsettings2.png';
import addSettingsImage3 from '../../public/Images/addsettings3.png';
import deleteSettingsImage from '../../public/Images/delete4.png';
import deleteSettingsImagehover from '../../public/Images/deletehover.png';
import updateLinksColor from '../../components/updateLinksColor';
import ClosePage from '../../components/ClosePage';
import ShowDeleteOption from '../../components/EnableOptions';
import ClearSelectedCheckboxes from '../../components/ClearSelectedCheckboxes';
import saveSettingsImage from '../../public/Images/save.png';
import FetchData from '../../components/FetchData';
import LoanTransactionTemplate from './LoanTransactionsTemplate';
import OtherIncomeTransactionTemplate from './OtherIncomeTransactionTemplate';
import OtherDeductionsTransactionTemplate from './OtherDeductionsTransactionTemplate';
import NonpayrolTransactionTemplate from './NonpayrolTransactionTemplate';
import OvertimeTransactionTemplate from './OvertimeTransactionTemplate';
import DisableImage from '../../components/Disableimage';





export default function FinancialTransactionsTemplate({ posts }) {


  //const [posts1, setenglishname] = useState([]);
  const router = useRouter();
  const mainpath = router.query.mainpath;
  const defaultpath = router.query.path;
  const menulinkspath = router.query.pathname;
  const code = router.query.code;

  const [checkbox, updatechecboxes] = useState("");


  useEffect(() => {
    DisableImage('deletetransactionimage');
    ClearSelectedCheckboxes('input[type=checkbox]:checked');
    updateLinksColor(mainpath, menulinkspath, defaultpath);



  })



  return (

    <>




      <div className='actionbar' >

        <div className='img'><Image id='addtransactionimage' objectfit='contain' src={addSettingsImage3} onClick={addTransactionForm} /></div>
        <div className='img'><Image id='deletetransactionimage'objectfit='contain' src={deleteSettingsImage} onClick={deleteTransaction} /></div>


      </div>


      <div className='employeesearchbar'>
        {/*<div className='employeesearch'>*/}
        <div className='employeesearch'>

          <label htmlFor="EmployeeName">Employee Name:</label>
          <input id="showEmployeeId" name="EmployeeName" type="text" onChange={handleChange} autoFocus />


        </div>


        <div className='showemployeename' id="showEmployeeName">Hello World</div>






      </div>
      <table id="ShowSearchEmployee">

        <thead>
          <tr >

          </tr>
        </thead>
        <tbody>

          <tr>








          </tr>


        </tbody>
      </table>








      <br></br>







      <div id="myModal" className="modal">

        <div id="closeModal" className="modal-content">
          <span className="close" onClick={() => ClosePage("myModal", "TransType")}>&times;</span>
          <div><br></br>
            <form id='submitSettingsform' className="form-style-3" onSubmit={saveTransaction} method="post">


              {/*<Transaction Form-->*/}
              <fieldset name="Transaction Details">
                {code == 9 && <OvertimeTransactionTemplate />}
                {code == 10 && <LoanTransactionTemplate />}
                {code == 11 && <OtherIncomeTransactionTemplate />}
                {code == 12 && <OtherDeductionsTransactionTemplate />}
                {code == 13 && <NonpayrolTransactionTemplate />}


                <div className='bottomactionbar' >
                  <div className='img'><input type="image" src='../../Images/save.png' ></input></div>
                  {/* <div className='img'><Image id='saveimage'  objectfit='contain' src={saveSettingsImage}/></div>*/}

                </div>





              </fieldset>






            </form>


          </div>


        </div>



      </div>
      <input name="scode" id="scode" type="hidden" value={router.query.code} />

      <div className="ShowTransaction">
        <table id="settings">


          <thead>
            <tr >

              <th>del</th>
              <th>Transaction Type</th>
              <th>Transaction Date</th>
              <th>Transaction End  Date</th>
              <th>hours</th>
              <th>amount</th>

            </tr>
          </thead>
          <tbody>
            {posts.map((post,index) => (
              <tr>
                <td>< input id='delete' name='delete[]' type={'checkbox'} onClick={() => ShowDeleteOption('deletetransactionimage', 'input[id="delete"]')} value={post.code}></input></td>
                <td>{post.code} </td>


                <td>{post.english_description} </td>
                <td>{post.arabic_description} </td>



              </tr>
            ))}

          </tbody>
        </table>
      </div>








    </>
  );



  async function handleChange(e) {



  


    const searchEmployee = { code: router.query.code, name: document.getElementById('showEmployeeId').value };
    const searchTable = document.getElementById('ShowSearchEmployee');
    if (document.getElementById('showEmployeeId').value === "") {

    
      searchTable.style.visibility = 'hidden'
      DisableImage( 'addtransactionimage');
      document.getElementById('showEmployeeName').innerHTML=' ';

    }

    else {


      try {

        const ressult1 = await FetchData('http://sktest87.000webhostapp.com/loademployeesearch.php', 'post', searchEmployee);
        const result2  = await FetchData('http://sktest87.000webhostapp.com/loademployeesearch.php', 'post', searchEmployee);
        var posts = await ressult1.json();
        // var data1=await JSON.parse(posts);




        searchTable.innerHTML = "";
        searchTable.style.visibility = 'visible';



        for (var key in posts) {
          console.log("serched employee: " + posts[key].ID);
          var row = document.createElement('tr');
          var rowData1 = row.insertCell(0);
          var rowData2 = row.insertCell(1);
          rowData1.innerHTML = posts[key].ID;
          rowData2.innerHTML = posts[key].First_Name;
          row.addEventListener('click', () => selectSearchedEmployee(posts[key].ID, posts[key].First_Name, posts[key].Family_Name));


          searchTable.appendChild(row);


        }



        //  posts.map(post => (searchTable.innerHTML += '<tr><td>' + post.ID + '</td>' + '<td>' + post.First_Name + '</td></li>'));





      } catch (error) {
        console.log('ERROR: ' + error);

      }






    }




    // const name=e.target.name;
    // const value=e.target.value;
    //  setInputs(values => ({...values, [name]: value}))


  }

  function selectSearchedEmployee(id, name, familyName) {

   document.getElementById('addtransactionimage').style.opacity='1';
   document.getElementById('addtransactionimage').style.cursor='pointer';
    const searchTable = document.getElementById('ShowSearchEmployee');
    searchTable.style.visibility = 'hidden';
    console.log("serched employee111");
    document.getElementById('showEmployeeId').value = id;
    document.getElementById('showEmployeeName').innerHTML = name + "   " + familyName;




  }






  async function addTransactionForm() {

    if (document.getElementById('addtransactionimage').style.opacity == "1") {
    document.getElementById('myModal').style.display = 'block'
    document.getElementById('TransType').focus();



    const transDetails = { code: code };

    try {
      const res = await FetchData('http://sktest87.000webhostapp.com/loadsettings.php', 'post', transDetails)



      var posts = await res.json();

      if (posts != null) {


        // loadselectoptions(posts);
        var TransType = document.getElementById('TransType');
        for (var i = 0; i < posts.length; i++) {

          var obj = posts[i];
          console.log('Post: ' + obj['english_description']);

          var option = document.createElement("option");
          option.text = obj['english_description'];
          option.value = obj['code'];
          TransType.appendChild(option);

        }


      }


    } catch (error) {
      console.log('ERROR: ' + error);

    }
  }






  }






  async function deleteTransaction() {
    if (document.getElementById('deletetransactionimage').style.opacity == "1") {
      var deleteArray = [];
      var selectedChecked = document.querySelectorAll('input[type=checkbox]:checked')
      for (var i = 0; i < selectedChecked.length; i++) {
        deleteArray.push(selectedChecked[i].value);
        console.log('selcted checkbox: ' + selectedChecked[i].value);

      }


      const transDetails = { code: router.query.code, deletesettingsarray: deleteArray };
      console.log('Settings Dats: ' + settingData);
      try {
        const res = await FetchData('http://sktest87.000webhostapp.com/deletesettings.php', 'post', transDetails);


        console.log('Settings Data: ' + settingData);
        var posts = await res.text();
        console.log('post Data: ' + posts);
        if (posts != null) {
          //document.getElementById('myModal').style.display = 'none'
          //router.push(router.pathname.concat('?','code=',router.query.code,'&path=',router.query.path),router.asPath);
          router.push({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path, pathname: router.query.pathname } }, router.asPath);


        }





      } catch (error) {
        console.log('ERROR: ' + error);

      }
    }

  }




  async function saveTransaction(e) {

    e.preventDefault();
   
     
    const transDetails = { id:document.getElementById('EmployeeName').value, code: router.query.code, TransType: e.target.TransType.value, TransDate: e.target.TransDate.value, Hours: e.target.Hours.value, TransAmount: e.target.TransAmount.value };
  




    


 
    try {
      const res = await FetchData('http://sktest87.000webhostapp.com/savetransaction.php', 'post', transDetails);


  
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



export async function getServerSideProps(params) {

  //var posts=[{"english_description":"IT"}];
  var posts = [];
  //router.push({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path } }, router.asPath);

  console.log('params: ' + params.query.code);
  //var FormData = require('form-data');
  //var formdata = new FormData();
  //formdata.append("code", "5");
  //console.log('formdata : ' + formdata);
  const data1 = { code: params.query.code };
  try {
    const res = await FetchData('http://sktest87.000webhostapp.com/loadsettings.php', 'post', data1);


    var res1 = res[0];

    posts = await res.json();




  } catch (error) {
    console.log('ERROR: ' + error);

  }



  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts: await posts, flag: '1' } // will be passed to the page component as props
  }
}
//SubsettingsTemplate.GetLayout = SettingsLayout
FinancialTransactionsTemplate.GetLayout = MasterSettingsLayout;










