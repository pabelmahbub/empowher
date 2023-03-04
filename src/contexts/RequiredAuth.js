import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

function RequiredAuth({children}) {
          //from react firebase hook authstate library
          const {user } = useContext(AuthContext);
          const location = useLocation();

      
        if(!user){
           return <Navigate to='/login' state={{from: location}} replace></Navigate>
        }
  return children;
}

export default RequiredAuth;