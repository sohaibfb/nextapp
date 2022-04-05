import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import SettingsLayout from '../pages/temp/SettingsLayout';






export default function MasterSettingsLayout({ children }) {

   
    const router = useRouter();
    const path = router.query.path;

    return (


        //  <div className="bodydata">
        



            <div className="settingsheaders">
                <fieldset>
                    <div className="settingsmainmenu">

                        
                        <Link  as='Nationality' href={{ pathname: './SubsettingsTemplate', query: { code: '1', path: '1' } }}><a title='MenuLinks' id='PersonalSettingsLink'>Personnel Settings</a></Link>
                        <Link as='Positions' href={{ pathname: './SubsettingsTemplate', query: { code: '4', path: '2' } }}><a title='MenuLinks'   id='EmploymentSettingsLink'>EmploymentSettings</a></Link>
                        <Link as='Allowances' href={{ pathname: './SubsettingsTemplate', query: { code: '8', path: '3' } }}><a title='MenuLinks' id='FinancialSettingsLink'>Financial Settings</a></Link>
                        <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { code: '5', path: '4' } }}><a title='MenuLinks' id='StructureSettingsLink'>Structure Settings</a></Link>
                        
                      

                    </div>

                </fieldset>




                <div className="settingsbody">

                    <div>



                        {path == 1 &&

                            <div className="subsettingsheader">
                                <fieldset>
                                    <div className="subsettingsmainmenu">

                                        <Link  as='Nationality' href={{ pathname: './SubsettingsTemplate', query: { code: '1', path: '1' } }}><a title='MenuLinks' id='NationalityLink'>Nationality</a></Link>
                                        <Link  as='Religion'href={{ pathname: './SubsettingsTemplate', query: { code: '2', path: '1' } }}><a title='MenuLinks' id='ReligionLink'>Religion</a></Link>
                                        <Link  as='HomeCountry'href={{ pathname: './SubsettingsTemplate', query: { code: '3', path: '1' } }}><a title='MenuLinks' id='HomeCountryLink'>Home Country</a></Link>
                                    </div>
                                </fieldset>

                                <div className='subsettingsbody'>{children}</div>


                            </div>
                        }






                        {path == 2 &&


                            <div className="subsettingsheader">
                                <fieldset>
                                    <div className="subsettingsmainmenu">
                                        <Link as='Positions' href={{ pathname: './SubsettingsTemplate', query: { code: '4', path: '2' } }}><a title='MenuLinks' id='PositionsLink'>Positions </a></Link>


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

                                            <Link as='Allowances' href={{ pathname: './SubsettingsTemplate', query: { code: '8', path: '3' } }}><a title='MenuLinks' id='AllowancesLink'>Allowances</a></Link>
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
                                            <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { code: '5', path: '4' } }}><a title='MenuLinks' id='FunctionsLink'>Functions </a></Link>
                                            <Link as='Sections' href={{ pathname: './SubsettingsTemplate', query: { code: '6', path: '4' } }}><a title='MenuLinks' id='SectionsLink'>Sections</a></Link>
                                            <Link as='Locations' href={{ pathname: './SubsettingsTemplate', query: { code: '7', path: '4' } }}><a title='MenuLinks' id='LocationsLink'>Locations</a></Link>
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





       





    );
}



