import './App.css';
import {router} from '../src/Routes/Routes'
import {RouterProvider } from 'react-router-dom';

function App() {
  
  return (
    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
