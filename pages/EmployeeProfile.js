import MasterSettingsLayout from "../components/MasterSettingsLayout"
import React, { Component, createElement } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import addEmployeeImage from '../components/Images/download (1).jpg'

export default function EmployeeProfile() {

    const router = useRouter();


    return (

        <div>

            <h1>Hello</h1>



            <div>

                <Image src={addEmployeeImage} width={50} height={50} onClick={addEmployee} />
                {/*<input id="myBtn" name="Image1" type="image" height="47" src="../components/Images/download (1).jpg" width="52" onClick={addEmployee} />*/}


            </div><br></br>

            {/* <div style="padding:0 16px">*/}

            <div name="ShowEmployeeData" id="data"></div>

            <div id="myModal" className="modal" name="Iframe1">

                <div id="closeModal" className="modal-content">
                    <span className="close" onClick={close}>&times;</span>
                    <div><br></br>
                        <form className="form-style-3" action="addEmployees.php" method="post">


                            {/*<Personal Information-->*/}
                            <fieldset name="Personal Information">
                                <legend>Personal Information</legend>


                                {/*<!--ID-->*/}
                                <label for=""><span>ID:<span className="required">*</span></span><input name="EID" type="text" /></label>

                                {/*<!--Name-->*/}
                                <label for=""><span>Name :<span className="required">*</span></span><input id='Fname' name="FirstName" type="text"
                                    placeholder="First Name" />
                                    <input name="SecondName" type="text" placeholder="Second Name" />
                                    <input name="ThirdName" type="text" placeholder="Third Name" />
                                    <input name="FamilyName" type="text" placeholder="Family Name" /></label>

                                {/*<!--nationality-->*/}
                                <label for=""><span>Nationality :</span><select title='userdefined' name="Nationality" id="1" >


                                </select></label>


                                {/*<!--Home Country-->*/}
                                <label for=""><span>Home Country:</span><select  title='userdefined' name="HomeCountry" id="3">
                                    

                                </select></label>

                                {/*<!--Gender-->*/}
                                <label for=""><span>Gender :</span><select name="Gender">
                                    <option value="0" selected>Choose</option>
                                    <option value="1">male</option>
                                    <option value="2">Female</option>
                                </select></label>


                                {/*<!--Religin-->*/}
                                <label for=""><span>Religion :</span><select title="userdefined" name="Religion" id="2">

                                </select></label>

                                {/*<!--Marital Status-->*/}
                                <label for=""><span>Marital Status :</span><select name="MaritalSatus">
                                    <option value="0" selected>Choose</option>
                                    <option value="1">Single</option>
                                    <option value="2">Married</option>
                                    <option value="3">Divorced</option>
                                </select></label>


                                {/*<!--birthday Date-->*/}
                                <label for=""><span>Birth Date:<span className="required">*</span></span><input name="BirthdayDate"
                                    type="date" /></label>

                                {/*<!--Mobile-->*/}
                                <label for=""><span>Mobile:<span className="required">*</span></span><input name="Mobile" type="tel"
                                    placeholder="Mobile" /></label>
                            </fieldset>




                            {/*<!--Employement Information-->*/}
                            <fieldset name="Employment Information">
                                <legend>Employement Information</legend>

                                {/*<!--Location-->*/}
                                <label for=""><span>Location<span className="required">*</span></span><select title="userdefined" name="Location" id="7">
                                </select></label>

                                {/*<!--Department-->*/}
                                <label for=""><span>Department<span className="required">*</span></span><select title="userdefined" name="Function" id='5'>
                                </select></label>

                                {/*<!--Section-->*/}
                                <label for=""><span>Section:</span><select title="userdefined" name="Section" id='6'>
                                   

                                </select></label>



                                {/*<!--Position-->*/}
                                <label for=""><span>Position</span><select title="userdefined" name="Position" id="4">

                                </select></label>



                                {/*<!--hiring Date-->*/}
                                <label for=""><span>Hiring Date<span className="required">*</span></span><input name="HiringDate"
                                    type="date" /></label>


                                {/*<!--Email-->*/}
                                <label for=""><span>Email<span className="required">*</span></span><input name="Email" type="email" /></label>








                            </fieldset>


                            <fieldset name="Financial Information">
                                <legend>Financial Information</legend>

                                {/*<!--Basic Salary-->*/}
                                <label for=""><span>basic Salary<span className="required">*</span></span><input name="BasicSalary"
                                    type="number" /></label> <br></br>

                                {/*<!--Benefits-->*/}
                                <div id="benefitTable">
                                    <table id="benefits" className="table">


                                        <tr>
                                            <th bgcolor="#EEEEEE">Benefit Name</th>
                                            <th bgcolor="#EEEEEE">Benefit Date</th>
                                            <th bgcolor="#EEEEEE">Benefit Amount</th>
                                            <th>
                                                <div id="addBenefit"><img src="images/download.jpg" height="20" width="30" alt=""></img></div>
                                            </th>
                                            <th>
                                                <div><img src="images/save.jpg" height="20" width="30" alt="" /></div>
                                            </th>
                                        </tr>
                                    </table>


                                </div>



                            </fieldset>


                            <input name="submit" type="submit" value="submit" />

                        </form>


                    </div>


                </div>



            </div>










        </div>




    );


    async function addEmployee() {

        document.getElementById('myModal').style.display = 'block'
        document.getElementById('Fname').focus();

        const settingData = { code: 1 };

        try {
            const res = await fetch('http://sktest87.000webhostapp.com/loademployeeprofilesettings.php', {

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
        var option = document.createElement("option");
        option.text = 'Choose';

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
        function close() {

            // router.reload({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path } }, router.asPath);
            document.getElementById('myModal').style.display = 'none'
            var allselectoptions = document.querySelectorAll("select[title='userdefined']");

            for (var i = 0; i < allselectoptions.length; i++) {
                allselectoptions[i].innerHTML = '';
            }



        }

    }








