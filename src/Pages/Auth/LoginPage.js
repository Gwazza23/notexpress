import React from 'react'
import { NavLink } from 'react-router-dom'

function LoginPage() {
  return (
    <div>
      <h1>LoginPage</h1>
      <NavLink to={'/'}>LandingPage</NavLink>
      <NavLink to={'/register'}>RegistrationPage</NavLink>
    </div>
  )
}

export default LoginPage