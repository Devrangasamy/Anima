import React from 'react'
import { Userprofile } from "../../components/Profile/Userprofile"; 
import { useAuth } from "../../Utilis/Authentication";
export const Profile = () => {
    const Auth = useAuth()
    console.log(Auth)
    return(
        <div>
            <h1>{Auth.user}</h1>
        </div>
    )
}
