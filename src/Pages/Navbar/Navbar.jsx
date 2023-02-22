import React from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink></li>
       
        <li><NavLink to='/postBlog'>Post Blog</NavLink></li>
        <li><NavLink to='/'> Blog</NavLink></li>
        <li><NavLink to='/development'>Development</NavLink></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-4xl" style={{fontFamily:'raleway', color:'tomato',fontWeight:900}}>Empow(h)er</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink></li>
       
        <li><NavLink to='/postBlog'>Post Blog</NavLink></li>
        <li><NavLink to='/login'>Blog</NavLink></li>
        <li><NavLink to='/development'>Development</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/signup' className="btn" style={{borderColor:'none', borderRadius:'4px'}}>Let's Start!</NavLink>
  </div>
</div>



      {/* Navlink is used instead of Link for active link */}

      
      {/* <NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink>

      <NavLink to='/postBlog'>Post Blog</NavLink>
      <NavLink to=''>mYStory</NavLink>
      <NavLink to=''>LifeStyle</NavLink>
      <NavLink to=''>Personal dEveloMent</NavLink> */}
    </div>
  )
}

export default Navbar