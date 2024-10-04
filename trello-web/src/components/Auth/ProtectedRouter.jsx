import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
function ProtectedRoute({ element: Component }) {
  const accessToken =Cookies.get('accessToken')
  return accessToken ? <Component /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
