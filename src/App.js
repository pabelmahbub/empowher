import './App.css';
import {router} from '../src/Routes/Routes'
import {RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga';

function App() {

  const TRACKING_ID = "G-YNXVWYCYPZ"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
