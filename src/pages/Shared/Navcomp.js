import React from 'react'
import './Nav.css';
import img1 from '../../assests/istockphoto-962574306-612x612-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Navcomp = () => {
  return (
    <div>

<div className="navbar bg-accent">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/login" as={Link}><FontAwesomeIcon className='navicon1' icon={faUser} /> Login</NavLink>
      <NavLink to="/login" as={Link}><FontAwesomeIcon className='navicon1' icon={faShoppingCart} /> cart</NavLink>
      
        
      </ul>
    </div>
    

    <a className="btn btn-ghost normal-case text-xl"><img className='logo' src={img1} alt="" /><span>Online Bazar</span></a>
  </div>
  <input type="text" placeholder="Type here" className="input search mx-auto input-bordered " />
  <button className="btn btn-outline btn-secondary">search</button>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu firstnav menu-horizontal p-0">
    <NavLink to="/login" as={Link}><FontAwesomeIcon className='navicon' icon={faUser} /> </NavLink>
      <NavLink to="/login" as={Link}><FontAwesomeIcon className='navicon' icon={faShoppingCart} /> </NavLink>
    </ul>
  </div>
  
</div>


{/* .................................................................................. */}
<div className='cat' >
<ul className="menu secondnav menu-horizontal bg-base-100 rounded-box p-2">
    <NavLink to="/" as={Link}><li><a>Home</a></li></NavLink>
  
  <li tabIndex={0}>
    <span>Categories</span>
    <ul className="rounded-box bg-base-100 p-2">
      <li><a>Submenu 1</a></li>
      <li><a>Submenu 2</a></li>
      <li><a>Submenu 3</a></li>
    </ul>
  </li>
  <NavLink to="/about" as={Link}><li><a>About</a></li></NavLink>
  <NavLink to="/contact" as={Link}><li><a>Contact</a></li></NavLink>
  
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