import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./dashboard.css"
// import imag1 from '../../../public/icons/product.png'
const Dashboard = () => {
    const[List, setList] = useState([])
    const[List1, setList1] = useState([])
    useEffect(() => {
            axios.get('https://rich-gray-macaw-sock.cyclic.app/api/product')
            .then((response) => {setList(response.data)})
            .catch((error) => console.log(error))
            axios.get('https://rich-gray-macaw-sock.cyclic.app/api/auth')
            .then((response) => {setList1(response.data)})
            .catch((error) => console.log(error))
              
        },[]
    )
   
  return (
    <div className='dashboard-container'>
        <div className='inner-dash'>
           <h4 className='dash-style'> Total Sales </h4>
        </div>
        <div className='inner-dash'>
        <h4 className='dash-style'> Total Users -   {List1.length} </h4>
        </div>
        <div className='inner-dash'>
        <h4 className='dash-style'> Total Products - {List.length} </h4>
        <img src = {require('../../icons/product.png')} alt="img" className = 'dashboard-icon'></img>
        </div>

    </div>
  )
}

export default Dashboard