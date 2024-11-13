import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './App';

export default function ProtectedRoute({ element }) {
    const { userAuth } = useContext(AuthContext);

  const isAuthenticated = userAuth ==="0000"
  console.log({userAuth:userAuth})
  const location = useLocation();

    
  if (!isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} />;
  }

   return element;
}
