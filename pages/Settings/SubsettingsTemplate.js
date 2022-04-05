import React, { Component, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image'
import SettingsLayout from '../temp/SettingsLayout';
import MasterSettingsLayout from '../../components/MasterSettingsLayout';
import addSettingsImage from '../../public/Images/addsettings.jpg';
import addSettingsImage2 from '../../public/Images/addsettings2.png';
import addSettingsImage3 from '../../public/Images/addsettings3.png';
import deleteSettingsImage from '../../public/Images/delete4.png';
import deleteSettingsImagehover from '../../public/Images/deletehover.png';
import updateLinksColor1 from '../../components/updateLinksColor1';
import ClosePage from '../../components/ClosePage';
import ShowDeleteOption from '../../components/ShowDeleteOption';
import ClearSelectedCheckboxes from '../../components/ClearSelectedCheckboxes';
import saveSettingsImage from '../../public/Images/save.png';





export default function SubsettingsTemplate({ posts }) {


  //const [posts1, setenglishname] = useState([]);
  const router = useRouter();
  const path = router.query.path;
  var defaultcode = router.query.code;
  const [checkbox, updatechecboxes] = useState("");

  useEffect(() => {
     // clearcheckboxes();
    
    ClearSelectedCheckboxes('showhide');
    updateLinksColor1(path, defaultcode);



  })



  return (

    <div className='subsettingsheader'>




      <div className='actionbar' >



        <div className='img'><Image id='addimage' objectfit='contain' src={addSettingsImage3} onClick={addSettings}  /></div>
        <div className='img'><Image id='showhide' className='showhide' objectfit='contain' src={deleteSettingsImage} onClick={deleteSettings} /></div>





        {/*<input id="addsetttingbtn" name="submit" type="submit" defaultValue="save" height={35} width={52} />*/}
        </div>

      <div id="myModal" className="modal">

        <div id="closeModal" className="modal-content">
          <span className="close" onClick={() => ClosePage("myModal")}>&times;</span>
          <div><br></br>
            <form id='submitSettingsform' className="form-style-3" onSubmit={savesettings} method="post">


              {/*<Personal Information-->*/}
              <fieldset name="Personal Information">
                <legend>Personal Information</legend>


                {/*<!--ID-->*/}
                <label htmlFor="Ename"><span>English Name:<span className="required">*</span></span><input id="EngName" name="Ename" type="text" autoFocus /></label>

                {/*<!--Name-->*/}
                <label htmlFor="Aname"><span>Arabic Name :<span className="required">*</span></span><input name="Aname" type="text"
                />
                </label>

              </fieldset>

              
              <div className='img'><input type="image" src='../../Images/save.png' ></input></div>
             {/* <div className='img'><Image id='saveimage' className="showhide" objectfit='contain' src={saveSettingsImage}/></div>*/}

            </form>


          </div>


        </div>



      </div>
      <input name="scode" id="scode" type="hidden" value={router.query.code} />
     

      <table id="settings">


        <thead>
          <tr >

            <th>del</th>
            <th>code</th>
            <th>English Description</th>
            <th>Arabic Description</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <td>< input id='delete' name='delete[]' type={'checkbox'} onClick={() => ShowDeleteOption('showhide','input[id="delete"]')} value={post.code}></input></td>
              <td>{post.code} </td>


              <td>{post.english_description} </td>
              <td>{post.arabic_description} </td>



            </tr>
          ))}

        </tbody>
      </table>
      <div name="ShowEmployeeData" id="data" />







    </div>
  );






  function addSettings() {

    console.log('basepath: ' + router.basePath);
    console.log('aspath: ' + router.asPath);
    console.log('pathname: ' + router.pathname);
    console.log('locale: ' + router.locale);
    console.log('back: ' + router.back);
    document.getElementById('myModal').style.display = 'block'
    document.getElementById('EngName').focus();




  }



  
  

  async function deleteSettings() {
    if (document.getElementById('showhide').style.opacity =="1") {
      var deleteArray = [];
      var selectedChecked = document.querySelectorAll('input[type=checkbox]:checked')
      for (var i = 0; i < selectedChecked.length; i++) {
        deleteArray.push(selectedChecked[i].value);
        console.log('selcted checkbox: ' + selectedChecked[i].value);

      }


      const settingData = { code: router.query.code, deletesettingsarray: deleteArray };
      console.log('Settings Dats: ' + settingData);
      try {
        const res = await fetch('http://sktest87.000webhostapp.com/deletesettings.php', {

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

        console.log('Settings Data: ' + settingData);
        var posts = await res.text();
        console.log('post Data: ' + posts);
        if (posts != null) {
          //document.getElementById('myModal').style.display = 'none'
          //router.push(router.pathname.concat('?','code=',router.query.code,'&path=',router.query.path),router.asPath);
          router.push({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path } }, router.asPath);


        }





      } catch (error) {
        console.log('ERROR: ' + error);

      }
    }

  }




  async function savesettings(e) {

    e.preventDefault();



    const settingData = { code: router.query.code, Ename: e.target.Ename.value, Aname: e.target.Aname.value };
    console.log('Settings Dats: ' + settingData);
    try {
      const res = await fetch('http://sktest87.000webhostapp.com/addsettings.php', {

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

      console.log('Settings Data: ' + settingData);
      var posts = await res.text();
      console.log('post Data: ' + posts);
      if (posts.trim() == 'data added successfully') {
        document.getElementById('myModal').style.display = 'none'
        //router.push(router.pathname.concat('?','code=',router.query.code,'&path=',router.query.path),router.asPath);
        router.push({ pathname: router.pathname, query: { code: router.query.code, path: router.query.path } }, router.asPath);
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
    const res = await fetch('http://sktest87.000webhostapp.com/loadsettings.php', {
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
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'ANYTHING_WILL_WORK_HERE'
        //'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36 Edg/96.0.1054.62'
      },
      referrerPolicy: 'no-referrer',

      body: JSON.stringify(data1),
      //formdata,






    })

    // console.log('res: ' + res);
    //const headers = await res.headers;
    //const status = await res.status;
    //const type = await res.type;
    //console.log('headers: ' + headers);
    //console.log('status: ' + status);
    //console.log('type: ' + type);
    //console.log('fetch: ' + res);
    var res1 = res[0];
    //posts= await res.text();
    // posts= await posts.length;
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
SubsettingsTemplate.GetLayout = MasterSettingsLayout;











