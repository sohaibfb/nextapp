import React, { Component } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import SettingsLayout from '../pages/temp/SettingsLayout';
import Navigation from './Navigation';
import SubSettingsLayout from './SubSettingsLayout';






export default function MasterSettingsLayout({ children }) {


    const router = useRouter();
    const path = router.query.path;
    const mainpath = router.query.mainpath;

    return (








        <div className="sidenavtemplate">
            {mainpath == 1 &&
                <>
                    <fieldset>
                        {/*<div className="settingsmainmenu">*/}

                            {Navigation('Nationality', '1', '1', '1', 'Nationality', 'PersonalSettings', "Personnel Settings")}
                            {Navigation('Positions', '1', '4', '2', 'Positions', 'EmploymentSettings', "Employment Settings")}
                            {Navigation('Allowances', '1', '8', '3', 'Allowances', 'FinancialSettings', "Financial Settings")}
                            {Navigation('Functions', '1', '5', '4', 'Functions', 'StructureSettings', "Structure Settings")}
                            {/*
                            <Link as='Positions'  href={{ pathname: './SubsettingsTemplate', query: { mainpath:'1', code: '4', path: '2', pathname: 'Positions' } }}><a title='MenuLinks' id='EmploymentSettings'>Employment Settings</a></Link>
                            <Link as='Allowances' href={{ pathname: './SubsettingsTemplate', query: {mainpath:'1', code: '8', path: '3', pathname: 'Allowances' } }}><a title='MenuLinks' id='FinancialSettings'>Financial Settings</a></Link>
                            <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { mainpath:'1',code: '5', path: '4', pathname: 'Functions' } }}><a title='MenuLinks' id='StructureSettings'>Structure Settings</a></Link>*/}



                        {/*</div>*/}

                    </fieldset>




                    <div className="sidenavdetails">

                       


                           { /*<div className="subsettingsheader">*/}
                                <fieldset>
                                    <div className="sidenavdetailsheader">

                                        {path == 1 &&
                                            <>
                                                <Link as='Nationality' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '1', path: '1', pathname: 'Nationality' } }}><a title='MenuLinks' id='Nationality'>Nationality</a></Link>
                                                <Link as='Religion' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '2', path: '1', pathname: 'Religion' } }}><a title='MenuLinks' id='Religion'>Religion</a></Link>
                                                <Link as='HomeCountry' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '3', path: '1', pathname: 'HomeCountry' } }}><a title='MenuLinks' id='HomeCountry'>Home Country</a></Link>
                                            </>
                                        }

                                        {path == 2 &&
                                            <>
                                                <Link as='Positions' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '4', path: '2', pathname: 'Positions' } }}><a title='MenuLinks' id='Positions'>Positions</a></Link>
                                            </>
                                        }

                                        {path == 3 &&
                                            <>

                                                <Link as='Allowances' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '8', path: '3', pathname: 'Allowances' } }}><a title='MenuLinks' id='Allowances'>Allowances</a></Link>
                                                <Link as='Overtime' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '9', path: '3', pathname: 'Overtime' } }}><a title='MenuLinks' id='Overtime'>Overtime</a></Link>
                                                <Link as='Loans' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '10', path: '3', pathname: 'Loans' } }}><a title='MenuLinks' id='Loans'>Loans</a></Link>
                                                <Link as='MonthlyIncome' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '11', path: '3', pathname: 'MonthlyIncome' } }}><a title='MenuLinks' id='MonthlyIncome'>Monthly Income</a></Link>
                                                <Link as='MonthlyDeduction' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '12', path: '3', pathname: 'MonthlyDeduction' } }}><a title='MenuLinks' id='MonthlyDeduction'>Monthly Deduction</a></Link>
                                                <Link as='NonPayroll' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '13', path: '3', pathname: 'NonPayroll' } }}><a title='MenuLinks' id='NonPayroll'>Non Payroll</a></Link>

                                            </>

                                        }

                                        {path == 4 &&
                                            <>

                                                <Link as='Functions' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '5', path: '4', pathname: 'Functions' } }}><a title='MenuLinks' id='Functions'>Functions </a></Link>
                                                <Link as='Sections' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '6', path: '4', pathname: 'Sections' } }}><a title='MenuLinks' id='Sections'>Sections</a></Link>
                                                <Link as='Locations' href={{ pathname: './SubsettingsTemplate', query: { mainpath: '1', code: '7', path: '4', pathname: 'Locations' } }}><a title='MenuLinks' id='Locations'>Locations</a></Link>



                                            </>

                                        }
                                    </div>
                                </fieldset>

                                <div className='sidenavdetailsbody'>{children}</div>


                           {/* </div>*/}

                        

                    </div>
                </>

            }

            {mainpath == 2 &&


                <>
                    <fieldset>
                        {/*<div className="settingsmainmenu">*/}

                            <Link as='Overtime' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '9', path: '1', pathname: 'Overtime' } }}><a title='MenuLinks' id='EmployeeTransactions'>Employee Transactions</a></Link>
                            <Link as='EOS' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '1', path: '2', pathname: 'EOS' } }}><a title='MenuLinks' id='EOSTransactions'>EOS Transactions</a></Link>

                       {/* </div>*/}

                    </fieldset>


                    <div className="sidenavdetails">

                     

                           {/* <div className="subsettingsheader">*/}
                                <fieldset>
                                    <div className="sidenavdetailsheader">
                                        {path == 1 &&
                                            <>

                                                <Link as='Overtime' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '9', path: '1', pathname: 'Overtime' } }}><a title='MenuLinks' id='Overtime'>Overtime</a></Link>
                                                <Link as='Loans' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '10', path: '1', pathname: 'Loans' } }}><a title='MenuLinks' id='Loans'>Loans</a></Link>
                                                <Link as='Other Income' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '11', path: '1', pathname: 'OtherIncome' } }}><a title='MenuLinks' id='OtherIncome'>Other Income</a></Link>
                                                <Link as='OtherDeductions' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '12', path: '1', pathname: 'OtherDeductions' } }}><a title='MenuLinks' id='OtherDeductions'>Other Deductions</a></Link>
                                                <Link as='Nonpayroll' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '13', path: '1', pathname: 'Nonpayroll' } }}><a title='MenuLinks' id='Nonpayroll'>Non payroll</a></Link>
                                            </>
                                        }

                                        {path == 2 &&
                                            <>

                                                <Link as='EOS' href={{ pathname: './FinancialTransactionsTemplate', query: { mainpath: '2', code: '4', path: '2', pathname: 'EOS' } }}><a title='MenuLinks' id='EOS'>EOS</a></Link>

                                            </>
                                        }
                                    </div>
                                </fieldset>

                                <div className='sidenavdetailsbody'>{children}</div>


                           {/* </div>*/}

                       

                    </div>




                </>
            }
        </div>




















    );
}



