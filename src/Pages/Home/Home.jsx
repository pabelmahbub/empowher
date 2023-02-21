import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Banner from './Banner';
import StepOne from './StepOne';
import Services from './Services';

function Home() {
  return (
    <div>
      <Banner />
      <StepOne />
      <Services />
    </div>
  )
}

export default Home