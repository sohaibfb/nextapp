import React from 'react';
import Link from 'next/link'
import MasterSettingsLayout from '../../../components/MasterSettingsLayout'

export default function  ClassificationSettings()  {
    return (
        
        <div>
            
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">
        <Link  href={{pathname:'./SubsettingsTemplate',query:{code:'5'}}}>Functions </Link>
        
        <Link href='/Sections'>Sections</Link>
        <Link href='/Locations'>Locations</Link>
    </div> 
  </fieldset>
  {/*<iframe src="personnelsettings/Nationality.html" title="2" className="subsettingsbody" />*/}
</div>





        </div>
        
    );
}

ClassificationSettings.GetLayout = MasterSettingsLayout;


