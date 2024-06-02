import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Authentication';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

   const {userId}=useContext(AuthContext)
   const location=useLocation();
   console.log(location)

   if(userId){
    return children;

   }
  return <Navigate  to="/login"></Navigate>
        
  
};

export default PrivateRoute;