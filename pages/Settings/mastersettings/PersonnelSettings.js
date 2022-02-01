import React from 'react';
import Link from 'next/link';
import MasterSettings from '../../../components/MasterSettingsLayout';

import SubsettingsTemplate from './SubsettingsTemplate';
import MasterSettingsLayout from '../../../components/MasterSettingsLayout';

export default function PersonnelSettings() {
    return (
        
            <div>
            
                    <div className="subsettingsheader">
                        <fieldset>
                            <div className="subsettingsmainmenu">
                            
    <Link as='Nationality' href={{pathname:'./SubsettingsTemplate',query:{code:'1'}}}>Nationality</Link>
    <Link as='Religion' href={{pathname:'./SubsettingsTemplate',query:{code:'2'}}}>Religion</Link>
    <Link as='Home Country' href={{pathname:'./SubsettingsTemplate',query:{code:'3'}}}>Home Country</Link>
                            </div>
                        </fieldset>

                       
                    

                   
                    </div>
               
            </div>
        
    );
}
PersonnelSettings.GetLayout = MasterSettingsLayout;


