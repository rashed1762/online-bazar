import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay "></label> 
    <ul className="menu  p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li className='bg-error rounded-lg'><Link to="/dashboard/add"> image upload</Link></li>
      <br />
      <li className='bg-error rounded-lg'><Link to="/dashboard/user"> All Users</Link></li>
    </ul>
  
  </div>
</div>
    </div>
  )
}

export default AdminDashboard;
