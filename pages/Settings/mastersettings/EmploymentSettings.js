import React from 'react';
import Link from 'next/link'
import MasterSettingsLayout from '../../../components/MasterSettingsLayout'

export default function EmploymentSettings()  {
    return (
      
        <div>
           
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">
    <Link as='Positions' href={{ pathname: './SubsettingsTemplate', query: { code: '4' } }}>Positions </Link>
        
       
    </div> 
  </fieldset>
  {/*<iframe src="personnelsettings/Nationality.html" title="2" className="subsettingsbody" />*/}
</div>





        </div>
       
    );
}
EmploymentSettings.GetLayout = MasterSettingsLayout;


