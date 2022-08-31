import Link from 'next/link'
import Head from 'next/head'
import SettingsTemplate from '../pages/temp/SettingsTemplate';
SettingsTemplate
export default function HeaderPage({ children }) {


  return (






    <>
      <Head>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>


      </Head>
      <div className="navbar" id='mainmenu'>


      <div className="navbar-element">
        <Link href="/">
          <a><i class="fa fa-fw fa-home"></i> Home</a>
        </Link>
        </div>



        <div className="navbar-element">
          <button className="navbar-element-btn"><i class="fa fa-cog"></i> Settings</button>
          <div className="dropdown">
            <Link href="/Settings/AdminSettings">Admin Settings</Link>
            {/*<Link href="/Settings/MasterSettings">MasterSettings</Link>*/}
            <Link as='/Settings/Nationality' href={{ pathname: "/Settings/SubsettingsTemplate", query: { mainpath: 1, code: '1', path: '1', pathname: 'Nationality' } }}>Master Settings</Link>
            {/* <Link href="/Settings/StructureSettings">Structure Settings</Link>*/}
          </div>
        </div>


        <div className="navbar-element">
          <Link href="/EmployeeProfile"><a><i class="fa fa-id-card-o"></i> Employee Profile</a></Link>
        </div>
        
        <div className="navbar-element">
          <button className="navbar-element-btn"><i class="fa fa-calculator"></i> Transactions</button>
          <div className="dropdown">
            <Link as='Transactions/Overtime' href={{ pathname: "/Transactions/FinancialTransactionsTemplate", query: { mainpath: 2, code: '9', path: '1', pathname: 'Overtime' } }}>Financial Transactions</Link>
            <a href>Salary Process</a>
            <a href>Voucher Process</a>
          </div>
        </div>

        
        <div className="navbar-element">
          <button className="navbar-element-btn"><i class="fa fa-file-o"></i> Reports</button>
          <div className="dropdown">
            <a href>Personnel Reports</a>
            <a href>Financial Reports</a>
            <a href>Dynamic Reports</a>
          </div>
        </div>
      </div>





      <div className='templatebody'>{children}</div>

    </>













  );
}