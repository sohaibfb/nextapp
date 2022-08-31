import React from 'react';
import Link from 'next/link'

export default function AdminSettings() {
    return (
        <div className='template'>

            <div className='navbartest'>
                <div className='navbartest-element'>
                    <button className='navbartest-btn'>test1</button>
                    <div className='dropdowntest'>
                        <a>link1</a>
                        <a>link2</a>
                        <a>link3</a>
                        <a>link4</a>

                    </div>


                </div>

                <div className='navbartest-element'>
                    <button className='navbartest-btn'>test2</button>
                    <div className='dropdowntest'>
                       
                        <Link href="/EmployeeProfile">Employee Profile</Link>
                        <a>link6</a>
                        <a>link7</a>
                        <a>link8</a>

                    </div>


                </div>



            </div>


            <div className='test'>

                <div className='test1'>
                    <label htmlFor="EmployeeName">Employee ID:</label>

                    <input id="EmployeeName" name="EmployeeName" type="text" autoFocus />


                </div>
                <div>Hello World</div>

            </div>
        </div>


    );
}


