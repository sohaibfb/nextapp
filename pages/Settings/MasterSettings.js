import React, { Component } from 'react';
import Link from 'next/link'
import Layout from '../../components/Layout';
import MasterSettingsLayout from '../../components/MasterSettingsLayout';







export default function MasterSettings() {

    console.log("Hello world Master Settings page");

    return (


   <div></div>
      /* <div className='bodydata'>



         <div className="settingsheaders">
                <fieldset>
                    <div className="settingsmainmenu">
                   
                        <Link  href={{pathname:'./mastersettings/SettingsTemplate',query:{path:'1'}}}>Personnel Settings</Link>
                        <Link as='EmploymentSettings' href={{pathname:'./mastersettings/EmploymentSettings',query:{path:'2'}}}>EmployementSettings</Link>
                        <Link as='FinancialSettings' href={{pathname:'./mastersettings/FinancialSettings',query:{path:'3'}}}>Financial Settings</Link>
                        <Link as='ClassificationSettings' href={{pathname:'./mastersettings/ClassificationSettings',query:{path:'4'}}}>Classifications Settings</Link>
                        <Link as='StructureSettings' href={{pathname:'./mastersettings/StructureSettings',query:{path:'5'}}}>StructureSettings</Link>

                    </div>

                </fieldset>


                

                <div className="settingsbody" >




                </div>
            </div>





        </div>*/

    );
}
MasterSettings.GetLayout = MasterSettingsLayout;




