import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import SettingsLayout from './SettingsLayout';






export default function MasterSettingsLayout({ children }) {

    console.log("Master Setting style");
    const router = useRouter();
    const path = router.query.path;

    return (


        //  <div className="bodydata">
        <div className='bodydata'>



            <div className="settingsheaders">
                <fieldset>
                    <div className="settingsmainmenu">

                        <Link href={{ pathname: './SettingsTemplate', query: { path: '1' } }}  >Personnel Settings</Link>
                        <Link href={{ pathname: './SettingsTemplate', query: { path: '2' },shallow:true }} >EmployementSettings</Link>
                        <Link  as='FinancialSettings' href={{ pathname: './SettingsTemplate', query: { path: '3' } }}>Financial Settings</Link>
                        <Link as='ClassificationSettings' href={{ pathname: './SettingsTemplate', query: { path: '4' } }}>Classifications Settings</Link>
                        <Link as='StructureSettings' href={{ pathname: './SettingsTemplate', query: { path: '5' } }}>StructureSettings</Link>

                    </div>

                </fieldset>




                <div className="settingsbody">

                    <div>



                        {path == 1 &&

                            <div className="subsettingsheader">
                                <fieldset>
                                    <div className="subsettingsmainmenu">

                                        <Link href={{ pathname: './mastersettings/SubsettingsTemplate', query: { code: '1', path: '1' } }}>Nationality</Link>
                                        <Link href={{ pathname: './mastersettings/SubsettingsTemplate', query: { code: '2', path: '1' } }}>Religion</Link>
                                        <Link href={{ pathname: './SubsettingsTemplate', query: { code: '3', path: '1' } }}>Home Country</Link>
                                    </div>
                                </fieldset>

                                <div className='subsettingsbody'>{children}</div>


                            </div>
                        }






                        {path == 2 &&


                            <div className="subsettingsheader">
                                <fieldset>
                                    <div className="subsettingsmainmenu">
                                        <Link as='Positions' href={{ pathname: './SubsettingsTemplate', query: { code: '4', path: '2' } }}>Positions </Link>


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



                </div>
            </div>





        </div>





    );
}



