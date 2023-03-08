import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';

function NotFound() {
  return (
    <div className='py-12'>
      <div className='flex justify-center text-center items-center py-12'>
        <img style={{ height: 420, width: 1000 }} src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png" alt="not found"></img>
      </div>

      <div className='flex justify-center text-center items-center px-48 pb-35'>
        <Link to='/'><button  style={{borderRadius:'0px'}} className='btn btn-outline btn-info px-12 mb-12'>Back to Home</button></Link>
      </div>
      <Footer />

    </div>
  )
}

export default NotFound