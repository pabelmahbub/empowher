import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'

function WhatWeDo() {
  return (
    <div className='px-6 pt-5'>
         <img style={{ height: 420, width:'100%', objectFit:'cover' }} src="https://images.unsplash.com/photo-1473605768212-7e1f2c756179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"></img>
       <h1 className="lg:text-4xl font-bold mt-12 mb-3" style={{fontWeight:'600',fontFamily:'raleway'}}>Blooms Girl Agenda</h1>
         <p className='pt-2' style={{fontSize:'15px',fontWeight:'400',fontFamily:'raleway'}}>BloomsGirl a platform to create awareness amongst mass people to ensure women rights as a human being and girls share their life experience of how she overcome all obstacles, social superstition and share her knowledge, experience about career and life for other fellow girls.</p>

       <h1 className="lg:text-3xl font-bold my-3" style={{fontWeight:'600',fontFamily:'raleway'}}>Our Vision and mission</h1>
         <p className='pt-2' style={{fontSize:'15px',fontWeight:'400',fontFamily:'raleway'}}>BloomsGirl's mission is of a world in which every person live as a human being and this world will be a place where nobody is treated based on gender rather human being. It's a platform where girls from all over the world would share experience, knowledge, life struggle, survival technique, career, study and so on and it will be an advanced life lesson for others. </p>
       <h1 className="lg:text-3xl font-bold my-3" style={{fontWeight:'600',fontFamily:'raleway'}}>Our core values</h1>
         <p className='pt-3 pb-6' style={{fontSize:'15px',fontWeight:'400',fontFamily:'raleway'}}>BloomsGirl a platform for global community of women rights defenders based on the principles of international solidarity, effective action of every girl, global coverage, impartiality and mutual respect. </p>
    </div>
  )
}

export default WhatWeDo
