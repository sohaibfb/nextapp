import Link from 'next/link'
import SettingsTemplate from '../pages/temp/SettingsTemplate';
SettingsTemplate
export default function HeaderPage({ children }) {

  return (




    <div className="headerrow">
      <div className="mainmenu" id='mainmenu'>

        <Link href="/">
          <a>Home</a>
        </Link>



        <div className="submenu">
          <button className="submenubtn">Settings</button>
          <div className="submenu-content">
            <Link href="/Settings/AdminSettings">Admin Settings</Link>
            {/*<Link href="/Settings/MasterSettings">MasterSettings</Link>*/}
            <Link as='Settings/Nationality' href={{ pathname: "/Settings/SubsettingsTemplate", query: { code: '1', path: '1' } }}>Master Settings</Link>
            {/* <Link href="/Settings/StructureSettings">Structure Settings</Link>*/}
          </div>




        </div>
        <Link href="/EmployeeProfile"><a>Employee Profile</a></Link>
        <div className="submenu">
          <button className="submenubtn">Transactions</button>
          <div className="submenu-content">
            <a href>Financial Transactions</a>
            <a href>Salary Process</a>
            <a href>Voucher Process</a>
          </div>
        </div>
        <div className="submenu">
          <button className="submenubtn">Reports</button>
          <div className="submenu-content">
            <a href>Personnel Reports</a>
            <a href>Financial Reports</a>
            <a href>Dynamic Reports</a>
          </div>
        </div>
      </div>





      <div className='bodydata'>{children}</div>

    </div>













  );
}