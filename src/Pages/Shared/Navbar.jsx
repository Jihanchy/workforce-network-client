import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext/AuthContext';
import logo from '/favicon.png'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logout } = useContext(AuthContext)
    const links =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/myApplications'>My Applications</NavLink></li>
            <li><NavLink to='/addJob'>Add Job</NavLink></li>
            <li><NavLink to='/myPostedJob'>My Posted Job</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100 px-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div onClick={() => setToggle(!toggle)} tabIndex={0} role="button" className='pr-2 lg:hidden'>
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
                        className={`menu menu-sm ${toggle ? '' : 'hidden'} dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow`}>
                        {links}
                    </ul>
                </div>
                <Link className="text-3xl font-semibold flex gap-1 items-center">
                <img className='h-12 w-12' src={logo} alt="" />
                <p>Workforce <span className='text-blue-500'>Network</span></p></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user ?
                        <>
                            <div className='flex gap-2 items-center'>
                                {
                                    user?.photoURL ? 
                                    <div>
                                        <img className='w-11 h-11 rounded-full' src={user?.photoURL} alt="" />
                                    </div>
                                    :
                                    ''
                                }
                                <button onClick={logout} className='btn bg-blue-500 text-white rounded-md'>LogOut</button>
                            </div>
                        </>
                        :
                        <>
                            <Link to='/register'>Register</Link>
                            <Link to='/login' className="btn rounded-md bg-blue-500 text-white">Sign in</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;