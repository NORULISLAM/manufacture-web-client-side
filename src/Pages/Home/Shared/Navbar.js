import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Navbar = () => {
    const [user] = useAuthState(auth);
    const handlesignOut = () => {
        signOut(auth);
    }
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/myprotfolio">My Protfolio</Link></li>

        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }

        <li>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            {
                user?.uid ?
                    <Nav.Link onClick={handlesignOut}>
                        Sign Out
                    </Nav.Link>
                    :
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>

            }
        </li>
    </>





    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">SHOTEZ CAR SOLUTIONS</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;