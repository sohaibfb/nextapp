import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import SettingsLayout from '../pages/temp/SettingsLayout';
import Navigation from './Navigation';






export default function SubSettingsLayout(as,mainpath,code,path,pathname,id,name,children) {


    return(


        
        <div className="subsettingsheader">
        <fieldset>
            <div className="subsettingsmainmenu">

               {Navigation(as,mainpath,code,path,pathname,id,name)}

                
            </div>
        </fieldset>

        <div className='subsettingsbody'>{children}</div>


    </div>
        





    )

}
