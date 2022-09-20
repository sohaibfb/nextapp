import MasterSettingsLayout from "../layouts/MasterSettingsLayout"
import React, { Component, createElement, useEffect,useState } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import addEmployeeImage from '../public/Images/download (1).jpg'
import addEmployeeImage1 from '../public/Images/addemployee.png'
import addallowanceImage from '../public/Images/addsettings3.png';
import saveallowanceImage from '../public/Images/save.png';
import deleteSettingsImage from '../public/Images/delete4.png';
import selectAllcheckboxes from "../components/SelectAllCheckboxes";
import ClearSelectedCheckboxes from "../components/ClearSelectedCheckboxes";
import UpdateFormFields from "../components/EmployeeProfile/UpdateFormFields";
import EnableOption from '../components/EnableOptions';
import saveEmployeeImage from '../public/Images/save.png';
import DisableImage from "../components/DisableImg";
import EnableImage from "../components/EnableImage";






export default function EmployeeProfile({ posts }) {
  
const [inputs, setInputs] = useState({});
  
    const router = useRouter();
    var openedflag = false;

    useEffect(() => {
       
       DisableImage('savebenefitimage');
       DisableImage('deletebenefitimage');
       ClearSelectedCheckboxes('input[type=checkbox]:checked');
       UpdateFormFields();
      
   
   
   
     },[inputs])

    


    return (

        <div className="employeeprofiletemplate">


            <div className="employeeprofileactionbar" id="actionbar">



               <div className='img'><Image  id='addemployeeimage' src={addEmployeeImage1}  onClick={openAddEmployeePage} /></div> 
               
                <div className='img'><Image id='addtransactionimage' objectfit='contain' src={addallowanceImage} onClick={addTransaction} /></div>
                {/*<input id="myBtn" name="Image1" type="image" height="47" src="../components/Images/download (1).jpg" width="52" onClick={addEmployee} />*/}
                 

            </div>

            <div id="ShowEmployeeData">


                <table>

                    <thead>
                        <tr>
                            <th>< input id='headercheckbox' name='headercheckbox[]' type={'checkbox'} onClick={() => selectAllcheckboxes('headercheckbox','input[id="employeedatacheckbox"]','addtransactionimage')} ></input></th>
                            <th>id</th>
                            <th>first Name</th>
                            <th>Last Name</th>
                            <th>Hiring Date</th>
                            <th>Nationality</th>
                            <th>Start Salary</th>



                        </tr>
                    </thead>


                    <tbody>
   
                        {posts.map((post) => (
                            <tr key={post.id1}>
                                <td>< input id='employeedatacheckbox' name='datacheckbox[]' type={'checkbox'} onClick={() => EnableOption('addtransactionimage','input[id="employeedatacheckbox"]')} ></input></td>
                                <td >{post.ID}</td>
                                <td >{post.First_Name} </td>
                                <td >{post.Family_Name} </td>
                                <td >{post.Hiring_Date} </td>
                                <td key={post.Nationality}>{post.Nationality} </td>
                                <td key={post.Start_Salary}>{post.Start_Salary} </td>



                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>












            <div id="myModal" className="modal">

                <div id="closeModal" className="modal-content">
                    <span className="close" onClick={close}>&times;</span>
                    <div><br></br>
                        <form id="submitemployeeform" className="form-style-3" onSubmit={saveEmployee} method="post">


                            {/*<Personal Information-->*/}
                            <fieldset name="Personal Information">
                                <legend>Personal Information</legend>


                                {/*<!--ID-->*/}
                                <label htmlFor=""><span>ID:<span className="required">*</span></span><input id="EID" name="EID" title='userdefined' type="text" value={inputs.EID || ""} onChange={handleChange} onBlur={handleFocusOut} required /></label>

                                {/*<!--Name-->*/}
                                <label htmlFor=""><span>Name :<span className="required">*</span></span><input id='Fname' name="FirstName" title='userdefined' type="text"
                                    placeholder="First Name" value={inputs.FirstName} onChange={handleChange} onBlur={handleFocusOut} required/>
                                    <input id='Sname' name="Sname" title='userdefined' type="text" placeholder="Second Name" value={inputs.Sname} onChange={handleChange} onBlur={handleFocusOut} required />
                                    <input id='Tname' name="Tname" title='userdefined' type="text" placeholder="Third Name"  value={inputs.Tname} onChange={handleChange} onBlur={handleFocusOut} required />
                                    <input id='Famname' name="Famname" title='userdefined' type="text" placeholder="Family Name" value={inputs.Famname} onChange={handleChange} onBlur={handleFocusOut} required /></label>

                                {/*<!--nationality-->*/}
                                <label htmlFor=""><span>Nationality :</span><select  id="1"  name="Nationality" title='userdefined' value={inputs.Nationality}  onChange={handleChange} onBlur={handleFocusOut} required  >


                                </select></label>


                                {/*<!--Home Country-->*/}
                                <label htmlFor=""><span>Home Country:</span><select id="3" title='userdefined' name="HomeCountry" onChange={handleChange} onBlur={handleFocusOut}  >


                                </select></label>

                                {/*<!--Gender-->*/}
                                <label htmlFor=""><span>Gender :</span><select id="Gender" title='userdefined' name="Gender" onChange={handleChange} onBlur={handleFocusOut} required >
                                    <option title='userdefined' value='' selected>Choose</option>
                                    <option value="1">male</option>
                                    <option value="2">Female</option>

                                   
           

                                </select></label>


                                {/*<!--Religin-->*/}
                                <label htmlFor=""><span>Religion :</span><select id="2" title="userdefined" name="Religion" onChange={handleChange} onBlur={handleFocusOut} >

                                </select></label>

                                {/*<!--Marital Status-->*/}
                                <label htmlFor=""><span>Marital Status :</span><select id="MaritalStatus" title='userdefined'  name="MaritalStatus" onChange={handleChange} onBlur={handleFocusOut} required >
                                <option title='userdefined' value='' selected>Choose</option>
                                    <option value="1">Single</option>
                                    <option value="2">Married</option>
                                    <option value="3">Divorced</option>
                                </select></label>


                                {/*<!--birthday Date-->*/}
                                <label htmlFor=""><span>Birth Date:<span className="required">*</span></span><input title='userdefined' id="BirthdayDate" name="BirthdayDate"
                                    type="date" value={inputs.BirthdayDate} onChange={handleChange} onBlur={handleFocusOut} required  /></label>

                                {/*<!--Mobile-->*/}
                                <label htmlFor=""><span>Mobile:<span className="required">*</span></span><input id="Mobile" title='userdefined' name="Mobile" type="tel"
                                    placeholder="Mobile" value={inputs.Mobile} onChange={handleChange} onBlur={handleFocusOut}   /></label>
                            </fieldset>




                            {/*<!--Employement Information-->*/}
                            <fieldset name="Employment Information">
                                <legend>Employement Information</legend>

                                {/*<!--Location-->*/}
                                <label htmlFor=""><span>Location<span className="required">*</span></span><select id="7" title="userdefined" name="Location"  onBlur={handleFocusOut}   required >
                                </select></label>

                                {/*<!--Department-->*/}
                                <label htmlFor=""><span>Department<span className="required">*</span></span><select id='5' title="userdefined" name="Function"  onBlur={handleFocusOut}   required >
                                </select></label>

                                {/*<!--Section-->*/}
                                <label htmlFor=""><span>Section:</span><select id='6' title="userdefined" name="Section" onBlur={handleFocusOut}    required>


                                </select></label>



                                {/*<!--Position-->*/}
                                <label htmlFor=""><span>Position</span><select id="4" title="userdefined" name="Position" onBlur={handleFocusOut}   required >

                                </select></label>



                                {/*<!--hiring Date-->*/}
                                <label htmlFor=""><span>Hiring Date<span className="required">*</span></span><input id="HiringDate" title="userdefined" name="HiringDate"
                                    type="date" value={inputs.HiringDate} onChange={handleChange} onBlur={handleFocusOut}   required  /></label>


                                {/*<!--Email-->*/}
                                <label htmlFor=""><span>Email<span className="required">*</span></span><input id="Email" title="userdefined" name="Email" type="email" value={inputs.Email} onChange={handleChange} onBlur={handleFocusOut}    required /></label>








                            </fieldset>


                            <fieldset name="Financial Information">
                                <legend>Financial Information</legend>

                                {/*<!--Basic Salary-->*/}
                                <label htmlFor=""><span>basic Salary<span className="required">*</span></span><input id="BasicSalary" title="userdefined" name="BasicSalary"
                                    type="number" value={inputs.BasicSalary} onChange={handleChange} onBlur={handleFocusOut}  required /></label> <br></br>

                                {/*<!--Benefits-->*/}

                                <div className='addrecordactionbar' >

                                    <div className='img'><Image id='addbenefitimage' objectfit='contain' src={addallowanceImage} onClick={addBenefit} /></div>
                                    <div className='img'><Image id='savebenefitimage' className="showhide" objectfit='contain' src={saveallowanceImage} onClick={saveBenefit} /></div>
                                    <div className='img'><Image id='deletebenefitimage' className='showhide' objectfit='contain' src={deleteSettingsImage} /></div>

                                </div>
                                <div id="benefitTable">
                                    <table id="benefits" className="table">

                                        <thead>
                                            <tr>
                                                <th>< input id='benefitheadercheckbox' name='headercheckbox[]' type={'checkbox'} onClick={() => selectAllcheckboxes('benefitheadercheckbox','input[id="benefitdatacheckbox"]','deletebenefitimage')} ></input></th>
                                                
                                                <th >Benefit Name</th>
                                                <th >Benefit Date</th>
                                                <th >Benefit Amount</th>
                                                <th ></th>



                                            </tr>
                                        </thead>
                                    </table>


                                </div>



                            </fieldset>


                           {/*<input name="submit" type="image" value="submit" />*/}
                           
                            <div className='bottomactionbar'>
                            <div className='img'><input type="image" src='../../Images/save.png' ></input></div>
                        {/* <div className='img' onClick={saveEmployee}><Image id='saveimage' objectfit='contain' src={saveEmployeeImage}/></div> */}   
                            </div>

                        </form>


                    </div>


                </div>



            </div>










        </div>




    );


    async function addTransaction(){



    }




    async function openAddEmployeePage() {

        if (openedflag == false) {

            document.getElementById('myModal').style.display = 'block'
            document.getElementById('Fname').focus();
            openedflag = true;
        }


        const settingData = { code: 1 };

        try {
            const res = await fetch('https://sktest87.000webhostapp.com/loademployeeprofilesettings.php', {

                method: 'post', // or 'PUT'
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Accept': 'application/x-www-form-urlencoded',
                    'Accept': 'multipart/form-data',
                    //'Access-Control-Allow-Origin': '*',
                    'User-Agent': 'ANYTHING_WILL_WORK_HERE'
                    //'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62'
                },
                referrerPolicy: 'no-referrer',

                body: JSON.stringify(settingData),

            })


            var posts = await res.json();

            if (posts != null) {

                loadselectoptions(posts);


            }


        } catch (error) {
            console.log('ERROR: ' + error);

        }




    }
    //load Settings data
    function loadselectoptions(data) {

        var allselectoptions = document.querySelectorAll("select[title='userdefined']");

        for (var i = 0; i < allselectoptions.length; i++) {
            if(allselectoptions[i].length===0){
            var option = document.createElement("option");
            option.text = 'Choose';
            option.value='';
            option.title='userdefined';

            allselectoptions[i].add(option);
           
            for (var ii = 0; ii < data.length; ii++) {
                var obj = data[ii]
                if (obj['code_type'] == allselectoptions[i].id) {
                    var option = document.createElement("option");
                    option.text = obj['english_description'];
                    option.value = obj['code'];
                    allselectoptions[i].add(option);
                }
            }
        }

        }



    }


    function addBenefit() {

        EnableImage('savebenefitimage');
        var table = document.getElementById("benefits");
        var row = table.insertRow();
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        cell1.innerHTML = "<select title='userdefined'  name='Allowances[]' id='8'></select>";
        openAddEmployeePage();
        var cell2 = row.insertCell(2);
        cell2.innerHTML = "<input type='date' name='date[]'/>";
        var cell3 = row.insertCell(3);
        cell3.innerHTML = "<input type='number' name='amount[]'/>";
        var cell4 = row.insertCell(4);

    }

    function saveBenefit() {
        if (document.getElementById('savebenefitimage').style.opacity =="1") {
        var rows = document.getElementById('benefits').rows;
        const benefits=[]
        const benefit={};
      
        for (var i = 1; i < rows.length; i++) {
            var checkboxElement =document.createElement("input");
            checkboxElement.setAttribute("type","checkbox");
            checkboxElement.setAttribute("name","delete[]");
            checkboxElement.setAttribute("id","benefitdatacheckbox");
            checkboxElement.addEventListener('click',()=>EnableOption('deletebenefitimage','input[id="benefitdatacheckbox"]'));
            rows[i].cells[0].appendChild(checkboxElement);
            
        }
        DisableImage('savebenefitimage');
        
    }

    }
    
    function handleFocusOut(e) {
          
       // var element=document.getElementById(id);
        if(e.target.value===''){
            console.log('FOCUSOUT :'+e.target.value);
       e.target.style.backgroundColor='red';
        }
       else{

        e.target.style.backgroundColor='lightblue';
       }
        
       
   

    }

    function handleChange(e) {
         
        const name=e.target.name;
        const value=e.target.value;
        console.log('values: '+JSON.stringify(inputs));
        setInputs({...inputs, [name]: value})
        
   

    }

    async function saveEmployee(e) {
 
        e.preventDefault();
        
    
        const benefits=[]
        
        var rows = document.getElementById('benefits').rows;


        for(var i = 1; i < rows.length; i++){
            const benefit=new Object;
            benefit['Allowance']=rows[i].cells[1].childNodes[0].value;
            benefit['Date']=rows[i].cells[2].childNodes[0].value;
            benefit['Amount']=rows[i].cells[3].childNodes[0].value;
            benefits.push(benefit);


        }
        console.log('benefit1: '+  JSON.stringify(benefits))

        const employeedata = {



            
            ID: e.target.EID.value, 
            Fname: e.target.Fname.value,
            Sname: e.target.Sname.value,
            Tname: e.target.Tname.value,
            Famname: e.target.Famname.value,
            Nationality: e.target.Nationality.value,
            HomeCountry: e.target.HomeCountry.value,
            Religion: e.target.Religion.value,
            Gender: e.target.Gender.value,
            MaritalStatus: e.target.MaritalStatus.value,
            BirthdayDate: e.target.BirthdayDate.value,
            Mobile: e.target.Mobile.value,
            Location: e.target.Location.value,
            Function: e.target.Function.value,
            Section: e.target.Section.value,
            Position: e.target.Position.value,
            HiringDate: e.target.HiringDate.value,
            Email: e.target.Email.value,
            BasicSalary: e.target.BasicSalary.value,
            Benefits: benefits,


          /* ID: document.getElementById("EID").value,
            Fname: document.getElementById("Fname").value,
            Sname: document.getElementById("Sname").value,
            Tname: document.getElementById("Tname").value,
            Famname: document.getElementById("Famname").value,
            Nationality: document.getElementById("Nationality").value,
            HomeCountry: document.getElementById("HomeCountry").value,
            Religion: document.getElementById("Religion").value,
            Gender: document.getElementById("Gender").value,
            MaritalStatus: document.getElementById("MaritalStatus").value,
            BirthdayDate: document.getElementById("BirthdayDate").value,
            Mobile: document.getElementById("Mobile").value,
            Location: document.getElementById("Location").value,
            Function: document.getElementById("Function").value,
            Section: document.getElementById("Section").value,
            Position: document.getElementById("Position").value,
            HiringDate: document.getElementById("HiringDate").value,
            Email: document.getElementById("Email.value"),
            BasicSalary: document.getElementById("BasicSalary").value,
            Benefits: benefits,*/





        };

        // const settingData = { code: router.query.code, Ename: e.target.Ename.value, Aname: e.target.Aname.value };
        console.log('employeedata: ' + JSON.stringify(employeedata));
        try {
            const res = await fetch('https://sktest87.000webhostapp.com/addemployee.php', {

                method: 'post', // or 'PUT'
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                    'Accept': 'application/x-www-form-urlencoded',
                    'Accept': 'multipart/form-data',
                    //'Access-Control-Allow-Origin': '*',
                    'User-Agent': 'ANYTHING_WILL_WORK_HERE'
                    //'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62'
                },
                referrerPolicy: 'no-referrer',

                body: JSON.stringify(employeedata),

            })


            var posts = await res.text();
            console.log('post Data: ' + posts);





            if (posts.trim() == 'data added successfully') {
                document.getElementById('myModal').style.display = 'none'
                //router.push(router.pathname.concat('?','code=',router.query.code,'&path=',router.query.path),router.asPath);
                router.push({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path } }, router.asPath);
                document.getElementById('submitemployeeform').reset()

            }





        } catch (error) {
            console.log('ERROR: ' + error);

        }





    }
    function close() {
        openedflag = false;
        // router.reload({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path } }, router.asPath);
        document.getElementById('myModal').style.display = 'none'
        var allselectoptions = document.querySelectorAll("select[title='userdefined']");

        for (var i = 0; i < allselectoptions.length; i++) {
            allselectoptions[i].innerHTML = '';
        }



    }

}


export async function getStaticProps(params) {

   

 
    var posts = [];
   

    //console.log('params: ' + params.query.code);

    const data = { code: 1 };
    try {
        const res = await fetch('https://sktest87.000webhostapp.com/loademployeedata.php', {
            method: 'post', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
            },
      

            body: /*data,*/JSON.stringify(data),







        })

 
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
        props: { posts: await posts } // will be passed to the page component as props
    }
}









