import React, { useEffect, useState } from 'react';
import './Blog.css';
import { Link, Navigate, NavLink, useLoaderData, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';
import OneBlog from './OneBlog';
import Loading from '../Shared/Loading';
import { Helmet } from 'react-helmet';

function Blog() {
    const [blogs, setBlogs] = useState([])
    const [myData, setMyData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

     //pagination 3 states
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
    fetch(`https://empower-server-production.up.railway.app/blogs?page=${page}&size=${size}`)
      .then(response => response.json())
      .then(json => setBlogs(json))
    }, [page,size])

    useEffect(() => {
      fetch(`https://empower-server-production.up.railway.app/blogs`)
        .then(response => response.json())
        .then(json => setMyData(json))
      }, [])


    useEffect(() => {
      fetch('https://empower-server-production.up.railway.app/serviceCount')
      .then(res=>res.json())
      .then(data =>{
          const count = data.count;
          const pages = Math.ceil(count/9);
          setPageCount(pages);
      })
  }, [])


    const navigate = useNavigate();

    const handleSearch = event => {
        setSearchTerm(event.target.value.trim());
        const filteredResults = myData.filter(blog => blog.Title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.Location.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredResults);
      };
    
      
      // const navigateToBlogDetail= id =>{
      //     Navigate(`/blogs/${id}`);
      //   }

        
  return (
    <>
  
<div className="navbar bg-base-100">

      <Helmet>
        <title>Blooms Girl Blogs</title>
        <meta 
           name='description'
           content='girls app Blog'
         />
      </Helmet>


  <div className="flex-1">

  <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul style={{backgroundColor:'#fff',width:'200px',marginTop:''}} tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2">
      <li><NavLink className={({ isActive }) =>
              isActive ? "active" : undefined
            } to='/home'>Home</NavLink></li>
       
        <li><NavLink to='/postBlog'>One Min. Advice</NavLink></li>
        <li><NavLink to='/blogs'>Life Thinking</NavLink></li>
        <li><NavLink to='/development'>Life Story</NavLink></li>
      </ul>
    </div>
    <div className="navbar-center">
    <Link to='/' className="btn btn-ghost normal-case" style={{fontSize:'16px', color:'tomato',fontWeight:900}}>B.Girl</Link>
  </div>
  </div>
  

  <div className="flex-none">
      <input type="text" placeholder="Search" style={{borderRadius:'0px'}} className="input input-bordered w-2/5 mr-10" 
      onChange={handleSearch}
      />

      <Link to='/postBlog'>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <button style={{borderRadius:'0px',padding:'5px'}} className="btn btn-outline btn-info">Create Post</button>
      </label>
      </Link>
   
  </div>
</div>
    



{blogs.length === 0 ? <Loading /> :
   <>
    <div class="my-10 mx-5 mb-36">
    <h2 style={{color:'#000',fontFamily:'raleway', fontWeight:700,textAlign:'center',fontSize:'28px', paddingBottom:'20px'}}>My Life Thinking/ Advice to my younger self: </h2>

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

      {/* pagination */}

      <div className='pagination'>
                    {
                        [...Array(pageCount).keys()].map(number =><button
                        className={page === number ? 'selected' : ''}
                        onClick={()=>setPage(number)}
                        >{number + 1}</button>)
                    }
                    <select className='selector' onChange={e=> setSize(e.target.value)}>
                        <option value ='9' selected>9</option>
                        <option value ='15'>15</option>
                        <option value ='21'>21</option>
                        <option value ='27'>27</option>
                    </select>
                </div>

                {/* pagination */}


    </div>
    </>
  }

  
   <Footer />
    </>
  )
}

export default Blog
