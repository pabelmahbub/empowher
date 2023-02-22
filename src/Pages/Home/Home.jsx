import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import StepOne from './StepOne';
import Services from './Services';
import ImagesCards from './ImagesCards';
import LastBanner from './LastBanner';

function Home() {
  return (
    <div>
      <Banner />
      <StepOne />
      <Services />
      <ImagesCards />
      <LastBanner />
    </div>
  )
}

export default Home