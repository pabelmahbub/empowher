import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';
import m5 from '../../Assets/13.avif'

function StepOne() {
  return (
    <>
     <h1 className="text-3xl font-bold mt-24 mb-6">WOMEN’S RIGHTS ARE HUMAN RIGHTS!</h1>
    
    
   
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={m5} width='800px' className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
    <div>
      
      <p className="py-6 text-xl">We are all entitled to human rights. These include the right to live free from violence and discrimination; to enjoy the highest attainable standard of physical and mental health; to be educated; to own property; to vote; and to earn an equal wage.<br/><br/>

But across the globe many women and girls still face discrimination on the basis of sex and gender. Gender inequality underpins many problems which disproportionately affect women and girls, such as domestic and sexual violence, lower pay, lack of access to education, and inadequate healthcare.<br/><br/>

For many years women’s rights movements have fought hard to address this inequality, campaigning to change laws or taking to the streets to demand their rights are respected. And new movements have flourished in the digital age, such as the #MeToo campaign which highlights the prevalence of gender-based violence and sexual harassment.

Through research, advocacy and campaigning, Amnesty International pressures the people in power to respect women’s rights. <br/><br/>

On this page we look at the history of women’s rights, what women’s rights actually are, and what Amnesty is doing.</p>
      
    </div>
  </div>
</div>

{/* 4 links */}
{/* <div style={{background:'red',justifyContent:'space-around',marginRight:'5%', marginLeft:'5%',}}> 
   <NavLink to='/postBlog' style={{}}>Post Blog</NavLink>
   <NavLink to='/postBlog'>Post Blog</NavLink>
   <NavLink to='/postBlog'>Post Blog</NavLink>

</div> */}


<div className="container">
<div className="item">

  <div style={{borderColor:'#fff', borderWidth:1, marginRight:'6%'}}><p className='textBox text-xl text-white px-1'>What are we fighting for</p></div>
</div>

<div className="item">

    <div style={{borderColor:'#fff', borderWidth:1,marginRight:'6%'}}><p className='textBox text-xl text-white px-1'>What are we fighting for being violated</p></div>
</div>

<div className="item">

    <div style={{borderColor:'#fff', borderWidth:1,marginRight:'6%'}}><p className='textBox text-xl text-white px-1'>What are we fighting for being violated</p></div>
</div>

<div className="item">

    <div style={{borderColor:'#fff', borderWidth:1}}><p className='textBox text-xl  text-white px-1'>What are we fighting for</p></div>
</div>

</div>
</>
  )
}

export default StepOne