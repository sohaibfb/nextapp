import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import MasterSettingsLayout from './MasterSettingsLayout';



export default function SettingsLayout({ children }) {
    console.log("Setting style");
    const router = useRouter();
    const path = router.query.path;

    //switch (path){case 1:1;}
    return (


       <div>
            


                {path == 1 &&

                    <div className="subsettingsheader">
                        <fieldset>
                            <div className="subsettingsmainmenu">

                                <Link as='Nationality' href={{ pathname: './SubsettingsTemplate', query: { code: '1',path:'1' } }}>Nationality</Link>
                                <Link  href={{ pathname: './SubsettingsTemplate', query: { code: '2',path:'1' } }}>Religion</Link>
                                <Link   href={{ pathname: './SubsettingsTemplate', query: { code: '3',path:'1' } }}>Home Country</Link>
                            </div>
                        </fieldset>

                        <div className='subsettingsbody'>{children}</div>


                    </div>
                }






                {path == 2 &&


                    <div className="subsettingsheader">
                        <fieldset>
                            <div className="subsettingsmainmenu">
                                <Link  href={{ pathname: './SubsettingsTemplate', query: { code: '4', path: '2' } }}>Positions </Link>


                            </div>
                        </fieldset>
                        <div className='subsettingsbody'>{children}</div>
                    </div>

}


                {path == 3 &&
                    <div>

                        <div className="subsettingsheader">
                            <fieldset>
                                <div className="subsettingsmainmenu">

                                    <Link as='Allowances' href={{ pathname: './SubsettingsTemplate', query: { code: '8', path: '3' } }}>Allowances</Link>
                                </div>
                            </fieldset>
                            <div className='subsettingsbody'>{children}</div>
                        </div>



                    </div>

                }

                {path == 4 &&
                    <div>

                        <div className="subsettingsheader">
                            <fieldset>
                                <div className="subsettingsmainmenu">
                                    <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { code: '5', path: '4' } }}>Functions </Link>
                                    <Link as='Sections' href={{ pathname: './SubsettingsTemplate', query: { code: '6', path: '4' } }}>Sections</Link>
                                    <Link as='Locations' href={{ pathname: './SubsettingsTemplate', query: { code: '7', path: '4' } }}>Locations</Link>
                                </div>
                            </fieldset>
                            <div className='subsettingsbody'>{children}</div>
                        </div>





                    </div>
                }



                {path == 5 &&

                    <div className="settingsbody" >





                        <div className="subsettingsheader">
                            <fieldset>
                                <div className="subsettingsmainmenu">
                                    <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { code: '5', path: '5' } }}>Functions </Link>
                                    <Link as='Sections' href={{ pathname: './SubsettingsTemplate', query: { code: '6', path: '5' } }}>Sections </Link>
                                    <Link as='Locations' href={{ pathname: './SubsettingsTemplate', query: { code: '7', path: '5' } }}>Locations </Link>

                                </div>
                            </fieldset>
                            <div className='subsettingsbody'>{children}</div>
                        </div>


                    </div>

                }
           
        

           </div>

    )
}



