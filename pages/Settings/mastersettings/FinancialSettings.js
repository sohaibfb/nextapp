import React from 'react';
import Link from 'next/link'

import SubsettingsTemplate from './SubsettingsTemplate';
import { useRouter } from 'next/router';
import MasterSettingsLayout from '../../../components/MasterSettingsLayout';


export default function FinancialSettings()  {
 const  router=useRouter();
 console.log('path: '+router.pathname);

    return (
     
        <div>
          
           <div className="subsettingsheader">
  <fieldset>
    <div className="subsettingsmainmenu">

        <Link as='Allowances' href={{ pathname: './SubsettingsTemplate', query: { code: '8' } }}>Allowances</Link>
    </div> 
  </fieldset>
</div>



        </div>
      
    );
}
FinancialSettings.GetLayout = MasterSettingsLayout;


