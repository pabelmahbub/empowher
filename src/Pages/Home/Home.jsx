import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import StepOne from './StepOne';
import Services from './Services';
import ImagesCards from './ImagesCards';
import LastBanner from './LastBanner';
import Contribute from './Contribute';
import { Helmet } from 'react-helmet';

function Home() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 8000);
  
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
       <Helmet>
        <title>Blooms Girl home</title>
        <meta 
           name='description'
           content='women empowerment app'
         />
      </Helmet>
       
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