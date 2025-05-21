import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRedirect: React.FC = () => {
  const token = localStorage.getItem('token')
  return token ? <Navigate to='/userProfil?mode=home' replace /> : <Navigate to='/profile/sign-in' replace />
}

export default ProtectedRedirect
