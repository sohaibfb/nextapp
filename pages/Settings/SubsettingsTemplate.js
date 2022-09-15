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
import EnableOption from '../../components/EnableOptions';
import FetchData from '../../components/FetchData';
import DisableImage from '../../components/DisableImg';





export default function SubsettingsTemplate({ posts }) {


  //const [posts1, setenglishname] = useState([]);
  const router = useRouter();
  const mainpath = router.query.mainpath;
  const defaultpath = router.query.path;
  const menulinkspath = router.query.pathname;

  const [checkbox, updatechecboxes] = useState("");


  useEffect(() => {
    // clearcheckboxes();
    DisableImage('deletesettingsimage');
    ClearSelectedCheckboxes('input[type=checkbox]:checked');
    updateLinksColor(mainpath, menulinkspath, defaultpath);
   



  })



  return (

    <>




      <div className='actionbar' >



        <div className='img'><Image id='addsettingsimage' objectfit='contain' src={addSettingsImage3} onClick={addSettings} /></div>
        <div className='img'> <Image id='deletesettingsimage' className='showhide' objectfit='contain' src={deleteSettingsImage} onClick={deleteSettings} /></div>
        {/*<input id="addsetttingbtn" name="submit" type="submit" defaultValue="save" height={35} width={52} />*/}
      </div>

      <div id="myModal" className="modal">


        <div id="closeModal" className="modal-content">
          <div className='close'><span onClick={() => ClosePage("myModal", "EngName")}>&times;</span></div><br></br>



          <form id='submitSettingsform' className="form-style-3" onSubmit={savesettings} method="post">


            {/*<Personal Information-->*/}
            <fieldset name="Personal Information">


              <legend>Personal Information</legend>


              {/*<!--ID-->*/}
              <label htmlFor="Ename"><span>English Name:<span className="required">*</span></span><input id="EngName" name="Ename" type="text" autoFocus /></label>

              {/*<!--Name-->*/}
              <label htmlFor="Aname"><span>Arabic Name :<span className="required">*</span></span><input id="AName" name="Aname" type="text"
              />
              </label>

              <div className='bottomactionbar'>

                {/*<div className='img' onClick={savesettings}><Image id='saveimage' objectfit='contain' src={saveSettingsImage} /></div>*/}
                <div className='img'><input type="image" src='../../Images/save.png' ></input></div>



              </div>


            </fieldset>




          </form>





        </div>



      </div >
      <input name="scode" id="scode" type="hidden" value={router.query.code} />

    {/*   <div className='showSettings'>
       <table>


<thead>
  <tr >

    <th>del</th>
    <th>code</th>
    <th>English Description</th>
    <th>Arabic Description</th>
  </tr>
</thead>
</table>
       </div>*/}
      

      <div className="ShowSettings">

        <table>


          <thead >
            <tr >

              <th>del</th>
              <th>code</th>
              <th>English Description</th>
              <th>Arabic Description</th>
            </tr>
  </thead>
          <tbody>
            {posts.map((post) => (
              <tr  key={post.id1}>
                <td>< input id='delete' name='delete[]' type={'checkbox'} onClick={() => EnableOption('deletesettingsimage', 'input[id="delete"]')} value={post.code}></input></td>
                <td>{post.code} </td>


                <td>{post.english_description} </td>
                <td>{post.arabic_description} </td>



              </tr>
            ))}

          </tbody>
        </table>

      </div>

      <div name="ShowEmployeeData" id="data" />







    </>
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
    if (document.getElementById('deletesettingsimage').style.opacity == "1") {
      var deleteArray = [];
      var selectedChecked = document.querySelectorAll('input[type=checkbox]:checked')
      for (var i = 0; i < selectedChecked.length; i++) {
        deleteArray.push(selectedChecked[i].value);
        console.log('selcted checkbox: ' + selectedChecked[i].value);

      }


      const deleteSettinges = { code: router.query.code, deletesettingsarray: deleteArray };
      //console.log('Settings Dats: ' + settingData);
      try {

        const res = await FetchData('http://sktest87.000webhostapp.com/deletesettings.php', 'post', deleteSettinges);
        var posts = await res.text();
        if (posts != null) {

          router.push({ pathname: router.pathname, query: { mainpath: router.query.mainpath, code: router.query.code, path: router.query.path, pathname: router.query.pathname } }, router.asPath);


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

      const res = await FetchData('http://sktest87.000webhostapp.com/addsettings.php', 'post', settingData);

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


  var posts = [];
  console.log('params: ' + params.query.code);
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
SubsettingsTemplate.GetLayout = MasterSettingsLayout;











