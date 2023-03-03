import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Utilis/Authentication';
import './Popup.css';

function Profile(props) {
   const Navigate=useNavigate()
    const auth = useAuth()
    const logout =()=>
    {
        auth.logout()
        props.setTrigger(false)
        Navigate('/')
    }
  return (props.trigger)?(
    <div className="popup">
         <div className="popup-inner">
            <button className="close-btn" onClick={()=>props.setTrigger(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</button>
            <h2>Welcome {auth.user}</h2>
            <button className='but' onClick={logout}>logout</button>
         </div>
    </div>
  ):"";
}

export default Profile