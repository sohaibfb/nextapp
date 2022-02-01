import React, { Component, useState, useEffect } from 'react';
import { useRouter } from "next/router";
import SettingsLayout from '../../../components/SettingsLayout';
import MasterSettingsLayout from '../../../components/MasterSettingsLayout';


export default function SubsettingsTemplate({ posts }) {
  //console.log("Hello world");
 // console.log('Posts Result: ' + posts);

  const arr = { "key1": "value1", "key2": "value2" }
  const [posts1, setenglishname] = useState([]);
  const router = useRouter();
  const path = router.query.path;

  return (
    <div className='subsettingsheader'>
      <div>
        <form className="form-style-3" action="../../addsettings.php" method="post">
          <div className="actionbar"><img id="addsettingsbtn" alt="pic" height={35} src="../../images/images.png" width={52} />
            <input id="addsetttingbtn" name="submit" type="submit" defaultValue="save" height={35} width={52} /></div>
          <input name="scode" id="scode" type="hidden" value={router.query.code} />

          <table id="settings">
            <tr>
              <th>del</th>
              <th>code</th>
              <th>English Description</th>
              <th>Arabic Description</th>
            </tr>

            {posts.map((post) => (
              <tr>
                <td></td>
                <td>{post.code} </td>


                <td>{post.english_description} </td>
                <td>{post.arabic_description} </td>



              </tr>
            ))}


          </table>
          <div name="ShowEmployeeData" id="data" />
        </form>
      </div>





    </div>
  );




}
//SubsettingsTemplate.GetLayout = SettingsLayout
SubsettingsTemplate.GetLayout = MasterSettingsLayout;
export async function getServerSideProps(params) {

  //var posts=[{"english_description":"IT"}];
  var posts = [];

  console.log('params: ' + params.query.code);
  var FormData = require('form-data');
  var formdata = new FormData();
  //formdata.append("code", "5");
  //console.log('formdata : ' + formdata);
  const data1 = { code: params.query.code };
  try {
    const res = await fetch('http://sktest87.000webhostapp.com/loaddepartment.php', {
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

    console.log('res: ' + res);
    const headers = await res.headers;
    const status = await res.status;
    const type = await res.type;
    console.log('headers: ' + headers);
    console.log('status: ' + status);
    console.log('type: ' + type);
    console.log('fetch: ' + res);
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
    props: { posts: await posts } // will be passed to the page component as props
  }
}




