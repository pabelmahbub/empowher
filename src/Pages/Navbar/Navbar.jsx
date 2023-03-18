import React, { useContext, useEffect } from 'react'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';


function Navbar() {
  const {user, logOut} = useContext(AuthContext);
  console.log('My user', user);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


const handleLogOut = ()=>{
  logOut()
  .then( ()=>{

  })
  .catch(err => console.error(err));
}


  return (
    <div className='header'>


<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul style={{backgroundColor:'#fff',width:'200px',marginTop:''}} tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2">
      <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home' style={{fontFamily:'raleway'}}>Home</NavLink></li>
        <li><NavLink  to='/blogs' style={{fontFamily:'raleway'}}>Life Thinking</NavLink></li>
        <li><NavLink  to='/singleBlog' style={{fontFamily:'raleway'}}>Victory Story</NavLink></li>

        {user &&
             <>
                <li><NavLink to='/postBlog' style={{fontFamily:'raleway'}}>One Min. Advice</NavLink></li>
                <li><NavLink to='/development' style={{fontFamily:'raleway'}}>Life Story</NavLink></li>
             </>

         }

      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case" style={{fontFamily:'raleway',fontSize:'30px', color:'tomato',fontWeight:900}}>B<span style={{textDecoration:'underline',fontSize:"20px"}}>looms Girl</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink></li>
       
        {/* <li><NavLink to='/postBlog' style={{fontFamily:'raleway'}}>One Min. Advice</NavLink></li> */}
        <li><NavLink to='/blogs' style={{fontFamily:'raleway'}}>Life Thinking</NavLink></li>
        {/* <li><NavLink to='/development' style={{fontFamily:'raleway'}}>Life Story</NavLink></li> */}
        <li><NavLink to='/singleBlog' style={{fontFamily:'raleway'}}>Victory Story</NavLink></li>
        

        {user &&
         <div style={{backgroundColor:'#fff'}} className="dropdown dropdown-bottom">
           <label tabIndex={0} style={{backgroundColor:'#fff', color:'#333',fontFamily:'raleway',borderColor:'#fff'}}  className="btn">Contribute</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 w-52">
                <li><NavLink to='/postBlog' style={{fontFamily:'raleway'}}>One Min. Advice</NavLink></li>
                <li><NavLink to='/development' style={{fontFamily:'raleway'}}>Life Story</NavLink></li>
              </ul>
         </div>
         }

    </ul>
  </div>
  {(!user) ?
  <div className="navbar-end">
    <NavLink to='/signup'  className="btn text-sm" style={{borderColor:'none', borderRadius:'4px'}}>Let's Start!</NavLink>
  </div>
  :
  <div className="navbar-end">
    {(user?.photoURL) ? <img  style={{height:'26px',borderRadius:'13px',marginRight:'10px'}} roundedCircle src={user?.photoURL} alt="Bloomsgirl profile image"/> : <FaUserCircle style={{height:'30',marginRight:'10px'}}/> }
     
  </div>

  }
</div>

    </div>
  )
}

export default Navbar