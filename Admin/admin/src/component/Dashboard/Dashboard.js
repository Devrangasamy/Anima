import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./dashboard.css"
// import imag1 from '../../../public/icons/product.png'
const Dashboard = () => {
    const[List, setList] = useState([])
    useEffect(() => {
            axios.get('http://localhost:8000/api/product')
            .then((response) => {setList(response.data)})
            .catch((error) => console.log(error))    
        },[]
    )
  return (
    <div className='dashboard-container'>
        <div className='inner-dash'>
           <h4 className='dash-style'> Total Sales </h4>
        </div>
        <div className='inner-dash'>
        <h4 className='dash-style'> Total Orders </h4>
        </div>
        <div className='inner-dash'>
        <h4 className='dash-style'> Total Products - {List.length} </h4>
        {/* <img src="icons/product.png" alt=''></img> */}
        </div>

    </div>
  )
}

export default Dashboard