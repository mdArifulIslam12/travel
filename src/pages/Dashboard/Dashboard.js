import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import CustomLink from '../Shered/CustomLink/CustomLink';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div className="container-fluid">
  <div className="row my-5">
  <div className='col-lg-2 text-center   abcd '>
  <CustomLink to={"/dashborad"} className='navbar-links btn '>My Booking</CustomLink>
  </div>
  <div className='col-lg-9 mt-5 '>
    <h4 className='mb-5'>Welcome to your Dashboard</h4>
  <Outlet/>
  </div>
  </div>
</div>
    );
};

export default Dashboard;