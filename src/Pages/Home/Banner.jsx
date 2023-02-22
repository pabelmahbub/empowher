import React from 'react'
import m5 from '../../Assets/53.avif';
import './Home.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';


function Banner() {
  return (
    <>




    <div className="hero min-h-screen" style={{ backgroundImage: `url(${m5})`, height:400 }}>
 <div className="hero-overlay bg-opacity-10">
 <h1  className=" imageText mb-8 text-4xl font-bold px-6 py-2">[Women Empowerment]</h1>
 </div>
 <div className="hero-content text-center text-neutral-content">
   <div className="max-w-md">
   </div>
 </div>
</div>

<div style={{paddingTop:'80px',marginBottom:'40px',textAlign:'left',textDecoration:'underline',display:'flex',paddingLeft:'60px'}}>
<AiOutlineArrowLeft className="h-6 w-6"/>
<p>Back to what we do.</p>
</div>


<div style={{backgroundColor:'#6B728E',marginRight:'2%',marginLeft:'2%'}} className="grid h-0.5"></div>


   
</>
  )
}

export default Banner