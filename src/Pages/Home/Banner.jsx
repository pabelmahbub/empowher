import React, { useEffect } from 'react'
import m5 from '../../Assets/52.avif';
import './Home.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Banner() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="hero min-h-screen" style={{ backgroundImage: `url(${m5})`, height:400 }}>
        <div className="hero-overlay bg-opacity-10">
          <h1  style={{fontFamily:'raleway'}}className=" imageText mb-8 text-2xl font-bold px-6 py-2">[Women Empowerment]</h1>
        </div>
        <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
        </div>
      </div>
   </div>

   <div style={{paddingTop:'80px',marginBottom:'40px',textAlign:'left',textDecoration:'underline',display:'flex',paddingLeft:'60px'}}>
      <AiOutlineArrowLeft className="h-6 w-5"/>
      <Link to='/whatWeDo'><p style={{fontFamily:'raleway', paddingLeft:'4px'}}>Back to what we do.</p></Link>
   </div>

   <div style={{backgroundColor:'#6B728E',marginRight:'2%',marginLeft:'2%'}} className="grid h-0.5"></div>

   
</>
  )
}

export default Banner