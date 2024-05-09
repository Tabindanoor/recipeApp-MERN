import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import {  Navigate, Outlet } from 'react-router-dom'
const ProtectedRoute = () => {

    const {isAuthenticated} = useAuth0()
    // outlet is to render all the components
    // if the user is authenticated 
  return  isAuthenticated? (<Outlet/>):(<Navigate to={"/"} replace />)
}

export default ProtectedRoute
