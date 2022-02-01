import React from 'react';
import Link from 'next/link'
import MasterSettings from '../../../components/MasterSettingsLayout';
import MasterSettingsLayout from '../../../components/MasterSettingsLayout';



export default function StructureSettings() {
  return (


       

        <div className="settingsbody" >





          <div className="subsettingsheader">
            <fieldset>
              <div className="subsettingsmainmenu">
                <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { code: '5' } }}>Functions </Link>
                <Link as='Sections' href={{ pathname: './SubsettingsTemplate', query: { code: '6' } }}>Sections </Link>
                <Link as='Locations' href={{ pathname: './SubsettingsTemplate', query: { code: '7' } }}>Locations </Link>

              </div>
            </fieldset>
           
          </div>


        </div>
   





   



  );
}

StructureSettings.GetLayout = MasterSettingsLayout;
 




