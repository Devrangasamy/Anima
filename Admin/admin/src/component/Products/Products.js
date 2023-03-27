import React,{useState,useEffect} from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import "./Product.css"

const Products = () => {
    const[List, setList] = useState([])
    const[serachedList, setSearchedList] = useState([])
    const[search, setSearch] = useState('')
    useEffect(() => {
            axios.get('https://rich-gray-macaw-sock.cyclic.app/api/product')
            .then((response) => {setList(response.data)})
            .catch((error) => console.log(error))    
        },[]
    )
    const deletepro=(e)=>{
        // console.log(e.currentTarget.value);
        axios.delete( `https://rich-gray-macaw-sock.cyclic.app/api/product/${e.currentTarget.value}`);
        axios.get('https://rich-gray-macaw-sock.cyclic.app/api/product')
        .then((response) => {setList(response.data)})
        .catch((error) => {console.log(error)})
    }
    
    // This is the main search that search and updates the serach data from the list
    const newSearch = () => {
        let searchName = search
        let lst = []
        for(let i = 0; i < List.length; i++){
            let val = List[i].productname.toLowerCase()
            if(val.indexOf(searchName.toLowerCase()) != -1)
                lst.push(List[i])
        }
        setSearchedList(lst)
    }

    const displayAllData = List.map((x, index) => 
    <div key = {index} className='product-container'>
        <button className="close-btn" value={x._id} onClick={deletepro}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
        <img className='convert-img' src = {x.photos} alt = {""}></img><br></br>
        <div id='product-page-data-container'>
            <div id='product-name'>{x.productname}</div>
            <h4 id='price-container'>MRP₹-{x.cost}</h4>
        </div>
    </div>
    )
    
    const displaySearchedData = serachedList.map((x, index) => 
    <div key = {index} className='product-container'>
        <button className="close-btn" value={x._id} onClick={deletepro}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </button>
        <img className='convert-img' src = {x.photos} alt = {""}></img><br></br>
        <div id='product-page-data-container'>
            <div id='product-name'>{x.productname}</div>
            <div id='price-container'>MRP₹-{x.cost}</div>
        </div>
    </div>
    )   

  return (
    <div className='outside-container'>
        <div className= 'container-pro'>
        <input className='prodin1' type="text" onChange = {(event) => {setSearch(event.target.value); newSearch()}} placeholder="Search" value = {search}/>
            <Link to="/addproduct" className='sub-but'>Add Products</Link>
            <div className='inner'>
                {!search && displayAllData}
                {search && displaySearchedData}
                </div>
            </div>   
    </div>
  )
}

export default Products