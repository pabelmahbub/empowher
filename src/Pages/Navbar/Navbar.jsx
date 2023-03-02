import React from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import useAnalyticsEventTracker from "../../useAnalyticsEventTracker";

function Navbar() {
  const gaEventTracker = useAnalyticsEventTracker('Navbar');
  return (
    <div className='header'>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul style={{backgroundColor:'#fff',width:'200px',marginTop:''}} tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2">
      <li><NavLink onClick={()=>gaEventTracker('home')} className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home' style={{fontFamily:'raleway'}}>Home</NavLink></li>
       
        <li><NavLink onClick={()=>gaEventTracker('postBlog')} to='/postBlog' style={{fontFamily:'raleway'}}>One Min. Advice</NavLink></li>
        <li><NavLink onClick={()=>gaEventTracker('blogs')} to='/blogs' style={{fontFamily:'raleway'}}>Life Thinking</NavLink></li>
        <li><NavLink onClick={()=>gaEventTracker('development')} to='/development' style={{fontFamily:'raleway'}}>Life Story</NavLink></li>
        <li><NavLink onClick={()=>gaEventTracker('singleBlog')} to='/singleBlog' style={{fontFamily:'raleway'}}>Victory Story</NavLink></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case" style={{fontFamily:'raleway',fontSize:'40px', color:'tomato',fontWeight:900}}>B<span style={{textDecoration:'underline',fontSize:"30px"}}>looms Girl</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink></li>
       
       <li><NavLink to='/postBlog' style={{fontFamily:'raleway'}}>One Min. Advice</NavLink></li>
        <li><NavLink to='/blogs' style={{fontFamily:'raleway'}}>Life Thinking</NavLink></li>
        <li><NavLink to='/development' style={{fontFamily:'raleway'}}>Life Story</NavLink></li>
        <li><NavLink to='/singleBlog' style={{fontFamily:'raleway'}}>Victory Story</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink to='/signup' className="btn text-sm" style={{borderColor:'none', borderRadius:'4px'}}>Let's Start!</NavLink>
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