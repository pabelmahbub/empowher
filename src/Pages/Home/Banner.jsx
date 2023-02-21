import React from 'react'
import m5 from '../../Assets/11.avif'
import { AiOutlineArrowLeft } from 'react-icons/ai';


function Banner() {
  return (
    <>




    <div className="hero min-h-screen" style={{ backgroundImage: `url(${m5})`, height:400 }}>
 <div className="hero-overlay bg-opacity-10">
 <h1 style={{fontFamily:'raleway',marginLeft:'40px',position:"absolute", color:'#fff', marginTop:'150px',backgroundColor:'#000'}} className="mb-8 text-5xl font-bold px-6 py-2">Women Empower</h1>
 </div>
 <div className="hero-content text-center text-neutral-content">
   <div className="max-w-md">
     {/* <h1 style={{fontFamily:'raleway'}} className="mb-8 text-6xl font-bold">eMPOWHEr</h1>
     <p style={{fontFamily:'raleway'}} className="mb-5 text-xl font-bold">“We entrepreneurs are loners, vagabonds, troublemakers. Success is simply a matter of finding and surrounding ourselves with those open-minded and clever souls who can take our insanity and put it to good use.”
<br/><span style={{fontFamily:'raleway'}}  className="mb-5 text-sm font-bold">- Anita Roddick, founder of The Body Shop</span></p>
    */}
     {/* <button style={{borderRadius:'0px',marginRight:'70px',position:'absolute'}} className="btn btn-primary">Women Right</button>  */}
   </div>
 </div>
</div>

<div style={{paddingTop:'80px',marginBottom:'40px',textAlign:'left',textDecoration:'underline',display:'flex',paddingLeft:'60px'}}>
<AiOutlineArrowLeft style={{height:'22',width:'30px',marginRight:''}}/>
<p>Back to what we do.</p>
</div>


<div style={{backgroundColor:'#6B728E',marginRight:'2%',marginLeft:'2%'}} className="grid h-0.5"></div>


   
</>
  )
}

export default Banner