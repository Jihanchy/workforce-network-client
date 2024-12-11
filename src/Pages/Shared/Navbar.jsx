import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
    const links = 
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={()=>setToggle(!toggle)} tabIndex={0} role="button" className='pr-2 lg:hidden'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7 font-bold"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu menu-sm ${toggle? '': 'hidden'} dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                        {links}
                    </ul>
                </div>
                <Link className="text-3xl font-semibold">Workforce <span className='text-blue-500'>Network</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <Link to='/register'>Register</Link>
                <Link to='/login' className="btn rounded-md bg-blue-500 text-white">Sign in</Link>
            </div>
        </div>
    );
};

export default Navbar;