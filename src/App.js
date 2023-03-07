import './App.css';
import React, { useEffect, useState } from 'react';
import {router} from '../src/Routes/Routes'
import {RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';
import Contribute from './Pages/Home/Contribute';
import { Helmet } from 'react-helmet';



function App() {



  ReactGA.initialize('G-YNXVWYCYPZ');

  return (
    <div className='max-w-7xl mx-auto'>
      <Helmet>
        <title>Blooms Girl</title>
        <meta 
           name='description'
           content='women empowerment'
         />
         <meta name='keywords' content="girls, women, women empowerment, gender, gender discrimination, girls blog, girls freedom, women power, amnesty international, girl, woman, women, girls, women rights, human rights, women presidents, women in power, women prime minister, female child protection, female education, international women day, women day, women day, queen, you are queen, how to study long time, blooms girl, bloomsgirl, girls app, girls education  "/>
        
        {/* <style type='text/css'>
           {
            `
              .App{
                background-color: #39445a;
              }
            `
           }
        </style> */}
         
      </Helmet>

         <RouterProvider router={router} />
      
      
    </div>
  );
}

export default App;
