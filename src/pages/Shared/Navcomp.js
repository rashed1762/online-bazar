import React from 'react'
import './Nav.css';
import img1 from '../../assests/istockphoto-962574306-612x612-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navcomp = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
};
  return (
    <div>

<div className="navbar bg-accent">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {
              user?  <button className="btn btn-primary" onClick={logout} >Sign Out</button> :
                 <NavLink className="navstyle" to="/login" as={Link}> <FontAwesomeIcon className='navicon' icon={faUser} /></NavLink> 
            }
      <NavLink to="/cart" as={Link}><FontAwesomeIcon className='navicon1' icon={faShoppingCart} /> cart</NavLink>
      
        
      </ul>
    </div>
    

    <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={img1} alt="" />
    
    <span className='logoinfo'>Online <br /> Bazar</span></a>
  </div>
  <input type="text" placeholder="Type here" className="input search mx-auto input-bordered " />
  <button className="btn btn-outline btn-secondary">search</button>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu firstnav menu-horizontal p-0">
    {
              user?  <button className="btn btn-primary" onClick={logout} >Sign Out</button> :
                 <NavLink className="navstyle" to="/login" as={Link}> <FontAwesomeIcon className='navicon' icon={faUser} /></NavLink> 
            }
   
      <NavLink to="/cart" as={Link}>
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
        </NavLink>
    </ul>
  </div>
  
</div>


{/* .................................................................................. */}
<div className='cat' >
<ul className="menu secondnav menu-horizontal bg-base-100 rounded-box p-2">
    <NavLink to="/" as={Link}><li><a>Home</a></li></NavLink>

  <NavLink to="/about" as={Link}><li><a>About</a></li></NavLink>
  <NavLink to="/shop" as={Link}><li><a>Shop</a></li></NavLink>
  <NavLink to="/contact" as={Link}><li><a>Contact</a></li></NavLink>
  {
            user && <NavLink to="/dashboard" as={Link}><li><a>Admin Dashboard</a></li></NavLink>
           }
  
  
  <div className="avatar online placeholder">
  <div className="bg-error  offer text-neutral-content rounded-full w-12">
  <NavLink to="/offer" as={Link}>Offer</NavLink>
    
    
  </div>
</div> 

  
</ul>


</div>
  <div className="divider "></div> 
  
    </div>
  )
}

export default Navcomp;