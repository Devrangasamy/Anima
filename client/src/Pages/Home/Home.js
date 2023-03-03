import React from 'react'
import { NavLink } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="home">
       <NavLink to="/signup">signup</NavLink>
    </div>  
  )
}
