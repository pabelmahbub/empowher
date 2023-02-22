import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer/Footer'
import Navbar from '../Pages/Navbar/Navbar'
//import Header from '../components/Header/Header'

function MainLayout() {
  return (
    <div>

        <Navbar />
        <Outlet />
        <Footer />
      
    </div>
  )
}

export default MainLayout