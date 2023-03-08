import React from 'react'
import { Link } from 'react-router-dom';

function OneBlog({ blog }) {
  const {_id, Title, Date, Name, Location, Old, Feel,Unhappy, Advice, Image, Life, Society, Education } = blog;
  
  return (
    <>
   

    <div style={{borderRadius:'8px', borderWidth:1,height:'300px',overflow:'scroll',backgroundColor:'rgb(111, 153, 159)'}} className="card  bg-base-100 shadow-xl">
  {/* <div style={{height:'300'}}><img src={Image} width="400"
    height="400" alt="Shoes" /></div> */}

    <Link to={`/blogs/${_id}`}>

  <div className="card-body">
    <h2 className="card-title">
    <div className="avatar">
         <div className="w-10 rounded-full">
           <img src={Image} alt="blog writer image" />
          </div>
       </div>
      {Title}<br/>
      <div className="badge badge-warning">NEW</div>
      
    </h2>
         <p>I am <span style={{color:'#fff', fontWeight:700}}>{Name}, {Old}</span>  years old.</p>
         <p> Location: <span style={{color:'#fff', fontWeight:700}}>{Location}</span></p>
         <p>In my surroundings educated female child-  <span style={{color:'#fff', fontWeight:700}}>{Education}</span></p>
         <p>Which area women need more attention? <span style={{color:'#fff', fontWeight:700}}>{Life}</span></p>
         <p>My feel about society is: <span style={{color:'#fff', fontWeight:700}}>{Unhappy}</span></p>
         <p>Any advice to anyone of your age?  - <span style={{color:'#fff', fontWeight:700}}>{Advice}</span> </p>
         <p>What is needed in our society most: <span style={{color:'#fff', fontWeight:700}}>{Society}</span></p>
         <p>what does it look like in your age?- <span style={{color:'#fff', fontWeight:700}}>{Feel}</span> </p>
         <span style={{color:'#230',fontSize:'11px'}}>{Date}</span>
    
        {/* <div className="card-actions justify-end">
      <div className="badge badge-outline">{Name}</div> 
      <div className="badge badge-outline">{Location}</div>
      <div className="badge badge-outline">{Unhappy}</div>
    </div> */}
  </div>
  </Link>
  
</div>
</>
  )
}

export default OneBlog