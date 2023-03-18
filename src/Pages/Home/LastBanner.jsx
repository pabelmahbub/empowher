import React, { useEffect } from 'react';
import './Home.css';
import m5 from '../../Assets/34.webp'
import { Link } from 'react-router-dom';

function LastBanner() {

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
     <div className="bg-image" style={{ backgroundImage: `url(${m5})`, marginBottom:'70px' }}>
        <div className="hero-overlay bg-opacity-30">
            
        </div>
            <div className="hero-content text-center text-neutral-content">
                 <div style={{marginTop:"-450px"}}>
                    <h1 style={{fontFamily:'raleway'}}className="mb-5 text-4xl font-bold">"Think like a queen. A queen is not afraid to fail."</h1>
                    <Link to='/development'><button style={{borderRadius:'0px'}} className="btn btn-outline btn-info px-12">Contribute Now</button></Link>
                 </div>
            </div>
     </div>
      
  )
}

export default LastBanner
