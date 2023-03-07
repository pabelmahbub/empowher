import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import StepOne from './StepOne';
import Services from './Services';
import ImagesCards from './ImagesCards';
import LastBanner from './LastBanner';
import Contribute from './Contribute';

function Home() {
  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 8000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
       
      <Banner />
      <StepOne />
      <Services />
      <ImagesCards />
      <div style={{position:''}}>
         {showComponent && <Contribute />}
      </div>
      <LastBanner />
      
    </div>
  )
}

export default Home