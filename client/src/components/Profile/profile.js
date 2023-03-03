import React from 'react'
import { useAuth } from '../../Utilis/Authentication'
import './profile.css'
import {  useNavigate } from 'react-router-dom'
export default function Profile() {
    const Navigate=useNavigate()
    const auth = useAuth()
    const logout =()=>
    {
        auth.logout()
        Navigate('/')
    }
  return (
    <div>
        <h2>Welcome {auth.user}</h2>
        <button onClick={logout}>logout</button>
    </div>
  )
}
