import React from 'react'
import { NavLink } from 'react-router-dom'

function RegistrationPage() {
  return (
    <div>
        <h1>RegistrationPage</h1>
        <NavLink to={'/'} >LandingPage</NavLink>
        <NavLink to={'/login'} >Login</NavLink>
    </div>
  )
}

export default RegistrationPage