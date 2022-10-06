import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from "next/router";
import Image from 'next/image'
import MasterSettingsLayout from '../../layouts/MasterSettingsLayout';
import addSettingsImage3 from '../../public/Images/addsettings3.png';
import deleteSettingsImage from '../../public/Images/delete4.png';
import updateLinksColor from '../../components/updateLinksColor';
import ClosePage from '../../components/ClosePage';
import ShowDeleteOption from '../../components/EnableOptions';
import ClearSelectedCheckboxes from '../../components/ClearSelectedCheckboxes';
import FetchData from '../../components/FetchData';
import LoanTransactionTemplate from './LoanTransactionsTemplate';
import OtherIncomeTransactionTemplate from './OtherIncomeTransactionTemplate';
import OtherDeductionsTransactionTemplate from './OtherDeductionsTransactionTemplate';
import NonpayrolTransactionTemplate from './NonpayrolTransactionTemplate';
import OvertimeTransactionTemplate from './OvertimeTransactionTemplate';
import DisableImage from '../../components/DisableImg';





export default function FinancialTransactionsTemplate({ posts }) {

 
  const [data, setData] = useState(null);
  const [isloading,setLoading]= useState(false)
  
  const router = useRouter();
  const mainpath = router.query.mainpath;
  const defaultpath = router.query.path;
  const menulinkspath = router.query.pathname;
  const code = router.query.code;
  const inputs={code:code,ID:employeeID};

  const [checkbox, updatechecboxes] = useState("");
  const [employeeID, updateemployeeID] = useState("");
 // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  //const { data, error } = useSWR(
   // ("https://sktest87.000webhostapp.com/loademployeetransactionsdetails.php"),{method:'post'},
    //fetcher
  //);
  //if (error) return <div>failed to load</div>
  //if (!data) return <div>loading...</div>


  useEffect(() => {
    setLoading(true);
    fetch("https://sktest87.000webhostapp.com/loadtransactiondetails.php", {

      method: 'post', 
    
  

      body: JSON.stringify(inputs),

    })
.then((res)=>res.json()).then((data1)=>{
      console.log("transaction details: ",data1)
    setData(data1);
   setLoading(false);});
   
    DisableImage('deletetransactionimage');
    ClearSelectedCheckboxes('input[type=checkbox]:checked');
    updateLinksColor(mainpath, menulinkspath, defaultpath);



  },[])

  //if (isloading) return <div>failed to load</div>;
 // if (!data) return <div>loading...</div>;



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
          <input id="showEmployeeId" value={employeeID} name="EmployeeName" type="text" onChange={handleChange} autoFocus />


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
        <table id="transactionsdetailstable">


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
          <tbody id="transactiondetailstbody">
              {data.map((data1) => (
              <tr  key={data1.ID+data1.tranaction_code+data1.transaction_date}>
                <td>< input id='delete' name='delete[]' type={'checkbox'} onClick={() => ShowDeleteOption('deletetransactionimage', 'input[id="delete"]')} value={data1.code}></input></td>
                <td>{data1.transaction_name} </td>
                <td>{data1.transaction_date} </td>
                <td>{data1.transaction_end_date} </td>
                <td>{data1.hours} </td>
                <td>{data1.amount} </td>



              </tr>
              ))}

          </tbody>
        </table>
      </div>








    </>
  );







  async function handleChange(e) {





    updateemployeeID(e.target.value);
    const searchEmployee = { code: router.query.code, name: document.getElementById('showEmployeeId').value };
    const searchTable = document.getElementById('ShowSearchEmployee');
    if (document.getElementById('showEmployeeId').value === "") {


      searchTable.style.visibility = 'hidden'
      DisableImage('addtransactionimage');
      document.getElementById('showEmployeeName').innerHTML = ' ';

    }

    else {




      try {

        const result = await FetchData('https://sktest87.000webhostapp.com/loademployeesearch.php', 'post', searchEmployee, true);
        var posts = await result.json();




        searchTable.innerHTML = "";
        searchTable.style.visibility = 'visible';



        for (var key in posts) {
          console.log("serched employee: " + posts[key].ID);
          var row = document.createElement('tr');
          row.id = posts[key].Family_Name;
          var rowData1 = row.insertCell(0);
          var rowData2 = row.insertCell(1);
          rowData1.innerHTML = posts[key].ID;
          rowData2.innerHTML = posts[key].First_Name;
          row.addEventListener('click', selectSearchedEmployee);




          searchTable.appendChild(row);


        }





        //  posts.map(post => (searchTable.innerHTML += '<tr><td>' + post.ID + '</td>' + '<td>' + post.First_Name + '</td></li>'));





      } catch (error) {
        console.log('ERROR: ' + error);

      }






    }







  }

  async function selectSearchedEmployee() {




    document.getElementById('addtransactionimage').style.opacity = '1';
    document.getElementById('addtransactionimage').style.cursor = 'pointer';
    const searchTable = document.getElementById('ShowSearchEmployee');
    const transacionsDetailsTable = document.getElementById('transactiondetailstbody');
    searchTable.style.visibility = 'hidden';
    console.log("serched employee11: " + this.childNodes[0].innerHTML);
    updateemployeeID(this.childNodes[0].innerHTML);
    document.getElementById('showEmployeeName').innerHTML = this.childNodes[1].innerHTML + " " + this.id;



    var posts = [];

    const data = {code:code,ID:this.childNodes[0].innerHTML};
    try {
      const result = await FetchData('https://sktest87.000webhostapp.com/loademployeetransactionsdetails.php', 'post', data, true);




      posts = await result.json();






      for (var key in posts) {
        console.log("serched employee: " + posts[key].ID);
        var row = document.createElement('tr');
        row.id = posts[key].ID
        var rowData1 = row.insertCell(0);
        var rowData2 = row.insertCell(1);
        var rowData3 = row.insertCell(2);
        var rowData4 = row.insertCell(3);
        var rowData5 = row.insertCell(4);
        var rowData6 = row.insertCell(5);
        var checkboxElement = document.createElement("input");
        checkboxElement.setAttribute("type", "checkbox");
        checkboxElement.setAttribute("id", "delete")
        checkboxElement.setAttribute("name", "delete[]")
        checkboxElement.setAttribute("value", posts[key].ID);
        checkboxElement.addEventListener('click', () => ShowDeleteOption('deletetransactionimage', 'input[id="delete"]'));

        rowData1.appendChild(checkboxElement);
        rowData2.innerHTML = posts[key].transaction_name;
        rowData3.innerHTML = posts[key].transaction_date;
        rowData4.innerHTML = posts[key].transaction_end_date;
        rowData5.innerHTML = posts[key].hours;
        rowData6.innerHTML = posts[key].amount;






        transacionsDetailsTable.appendChild(row);


      }





    } catch (error) {
      console.log('ERROR: ' + error);

    }





    if (!posts) {
      return {
        notFound: true,
      }
    }





  }






  async function addTransactionForm() {

    if (document.getElementById('addtransactionimage').style.opacity == "1") {
      document.getElementById('myModal').style.display = 'block'
      document.getElementById('TransType').focus();



      const transDetails = { code: code };

      try {
        const res = await FetchData('https://sktest87.000webhostapp.com/loadsettings.php', 'post', transDetails, true)



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
        const res = await FetchData('https://sktest87.000webhostapp.com/deletesettings.php', 'post', transDetails, true);


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


    const transDetails = { id: document.getElementById('showEmployeeId').value, code: router.query.code, TransType: e.target.TransType.value, TransDate: e.target.TransDate.value, Hours: e.target.Hours.value, TransAmount: e.target.TransAmount.value };









    try {
      const res = await FetchData('https://sktest87.000webhostapp.com/savetransaction.php', 'post', transDetails, true);



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



/*export async function getServerSideProps(params) {


  var posts = [];
  


  console.log('params: ' + params.query.code);

  const data = { code: params.query.code,ID:employeeID };
  try {
    const result = await FetchData('https://sktest87.000webhostapp.com/loademployeetransactionsdetails.php', 'post', data, true);




    posts = await result.json();




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


}*/

FinancialTransactionsTemplate.GetLayout = MasterSettingsLayout;











