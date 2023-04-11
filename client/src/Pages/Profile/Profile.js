import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../../Utilis/Authentication";
// This is to import the css file
import './profile.css'
export const Profile = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
        console.log(auth.user)
    })
    const logout = () => {
        auth.logout()
        navigate('/login')
    }
    return(
        <div className='profile-page-main-container'>
            <div className='profile-side-container'>
                <button onClick = {logout}>logout</button>
            </div>
            <div className='profile-main-container'></div>
        </div>
    )
}
