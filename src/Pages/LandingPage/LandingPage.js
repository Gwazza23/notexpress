import React from 'react'
import { NavLink } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
        <h1>Landing Page</h1>
        <NavLink to={'/login'} >Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
    </div>
  )
}

export default LandingPage