import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import m5 from '../../Assets/images/66.webp'

function StepOne() {
  const services = [{
    _id: 1,
    name: 'Violence and oppression directed against women',
    
  },
  {
    _id: 2,
    name: 'Less wage for women in workplace',
    
  },
  {
    _id: 3,
    name: 'Freedom of voice and freedom to grow',
   
  },
  {
    _id: 4,
    name: 'Having no right to express opinion',
   
  },
  ]
  return (
    <>
     <h1 className="lg:text-4xl font-bold mt-24 mb-3 text-center lg:mb-[-80px]">WOMEN’S RIGHTS ARE HUMAN RIGHTS!</h1>
    
    
   
        <div className="hero min-h-screen"> 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={m5} className="h-72"/>
    <div>
      
    <div>
                    <p className='pt-3' style={{fontSize:'19px',fontWeight:'700',fontFamily:'raleway'}}>Voice! <span style={{color:'#0096FF'}}>What Is Our Motto?</span></p>
                    <p className='pt-3' style={{fontSize:'16px',fontWeight:'400',fontFamily:'raleway'}}>Violence and oppression directed against women in developing countries is extensive and is often encouraged or legitimized by religious and cultural beliefs and practices <span style={{color:'#0096FF'}}>Terms of Use </span>for more details.</p>
                    <p className='pt-3' style={{fontSize:'16px',fontWeight:'400',fontFamily:'raleway'}}>“What was previously bad is now worse with the COVID-19 pandemic which has resulted in unintended pregnancies, and new barriers to health access along with job and education losses.”</p>
                    <p className='pt-3' style={{fontSize:'16px',fontWeight:'400',fontFamily:'raleway'}}>“Gender inequality is the most insidious and pervasive impediment to <span style={{color:'#0096FF'}}>bodily autonomy</span>. It starts from the cradle,” Kanem, a paediatrician and epidemiologist, told reporters in an online media briefing."</p>
                </div>
      
    </div>
  </div>
</div>

{/* 4 links */}
{/* <div style={{background:'red',justifyContent:'space-around',marginRight:'5%', marginLeft:'5%',}}> 
   <NavLink to='/postBlog' style={{}}>Post Blog</NavLink>
   <NavLink to='/postBlog'>Post Blog</NavLink>
   <NavLink to='/postBlog'>Post Blog</NavLink>

</div> */}


{/* <div className="container">
<div className="item">

  <div style={{borderColor:'#fff', borderWidth:1, marginRight:'6%'}}><p className='textBox text-xl text-white px-1'>What are we fighting for</p></div>
</div>

<div className="item">

    <div style={{borderColor:'#fff', borderWidth:1,marginRight:'6%'}}><p className='textBox text-xl text-white px-1'>What are we fighting for being violated</p></div>
</div>

<div className="item">

    <div style={{borderColor:'#fff', borderWidth:1,marginRight:'6%'}}><p className='textBox text-xl text-white px-1'>What are we fighting for bei</p></div>
</div>

<div className="item">

    <div style={{borderColor:'#fff', borderWidth:1}}><p className='textBox text-xl  text-white px-1'>What are we fighting for</p></div>
</div>

</div> */}


<div  className="bigBox grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-5 px-5 py-5">
{
          services.map(service => 
       <div className="boxContainer card lg:card-side bg-base-100 shadow-xl">
          <div className="">
          <h2 style={{fontFamily:'raleway'}} className="text-xl pl-3 pr-2 py-3">{service.name}</h2>
   
       </div>
</div>
)
}


      
    </div>




</>
  )
}

export default StepOne