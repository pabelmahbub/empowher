import './App.css';
import React, { useEffect } from 'react';
import {router} from '../src/Routes/Routes'
import {RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';



function App() {
  ReactGA.initialize('4672193337');
  
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
