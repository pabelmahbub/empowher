import React, { useState } from 'react'
import { Link, Navigate, NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';
import OneBlog from './OneBlog';

function Blog() {
    const [blogs, setBlogs] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    fetch(`https://empower-server-production.up.railway.app/blogs`)
      .then(response => response.json())
      .then(json => setBlogs(json))

    const navigate = useNavigate();

    const handleSearch = event => {
        setSearchTerm(event.target.value.trim());
        const filteredResults = blogs.filter(blog => blog.Title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.Location.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredResults);
      };
    
      
      // const navigateToBlogDetail= id =>{
      //     Navigate(`/blogs/${id}`);
      //   }

        
  return (
    <>
  
<div className="navbar bg-base-100">
  <div className="flex-1">

  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink></li>
       
        <li><NavLink to='/postBlog'>One Min. Advice</NavLink></li>
        <li><NavLink to='/blogs'>Life Thinking</NavLink></li>
        <li><NavLink to='/development'>Life Advice</NavLink></li>
      </ul>
    </div>
    <div className="navbar-center">
    <Link to='/' className="btn btn-ghost normal-case lg:text-3xl sm:text-xl" style={{fontFamily:'raleway', color:'tomato',fontWeight:900}}>Empow(h)er</Link>
  </div>
  </div>
  

  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" style={{borderRadius:'0px'}} className="input input-bordered w-2/3 md:mr-10" 
      onChange={handleSearch}
      />
    </div>
    <div className="dropdown dropdown-end">
        <Link to='/postBlog'>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <button style={{borderRadius:'0px'}} className="btn btn-outline btn-info lg:mr-16 md:mr-24">Create Post</button>
      </label>
      </Link>
    </div>
  </div>
</div>
    



   
    <div class="my-10 mx-5 mb-36">
    <h2 style={{color:'#000',fontFamily:'raleway', fontWeight:700,textAlign:'center',fontSize:'27px', paddingBottom:'20px'}}>My Life Thinking/ Advice to my younger self: </h2>

      <div style={{backgroundColor:''}} className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

       {(searchTerm.length == 0) && blogs.map(blog=>(
          <OneBlog
            key={blog._id}
            blog={blog}></OneBlog>)
       )}

{/* 
      { blogs.map(blogs.map(blog=>(
          <OneBlog
            key={blog._id}
            blog={blog}></OneBlog>)
       ))}  */}
        {(searchTerm.length !== 0) && searchResults.map(blog => (
                 <OneBlog
                 key={blog._id}
                 blog={blog}></OneBlog>)
                 )}




      </div>
    </div>
   <Footer />
    </>
  )
}

export default Blog
