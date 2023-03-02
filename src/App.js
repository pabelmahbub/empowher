import './App.css';
import React, { useEffect } from 'react';
import {router} from '../src/Routes/Routes'
import {RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';


const TRACKING_ID = "G-YNXVWYCYPZ"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);


function App() {

  useEffect(() => {
   
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
