import axios from 'axios'
import React,{useState,useEffect} from 'react'

const User = () => {
    const[List, setList] = useState([])
    useEffect(() => {
            axios.get('http://localhost:8000/api/auth/')
            .then((response) => {setList(response.data)})
            .catch((error) => console.log(error))    
        },[]
    )
    console.log(List);
  return (
    <div className='user-container'>
        <div className='user-inner'>
            
        </div>
    </div>
  )
}

export default User