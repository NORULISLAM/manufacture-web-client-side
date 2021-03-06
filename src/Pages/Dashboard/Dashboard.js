import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-5xl font-bold'>welcome to your Dashborad</h2>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* Sidebar content here  */}
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/dashboard/myprofile">My Profile</Link></li>
                    <li><Link to="/dashboard/addreview">Add Review</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/addnewproduct">Add New Product</Link></li>
                        <li><Link to="/dashboard/manageproduct">Manage Product</Link></li>

                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;