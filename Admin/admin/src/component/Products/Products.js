import React,{useState,useEffect} from 'react'
import axios from "axios";
import "./Product.css"
var dispData 

const Products = () => {
    const[List, setList] = useState([])
    // const[List1, setList1] = useState([])
    useEffect(() => {
            axios.get('http://localhost:8000/api/product')
            .then((response) => {setList(response.data)})
            .catch((error) => console.log(error))    
        },[]
    )
    const deletepro=(e)=>{
        // console.log(e.currentTarget.value);
        axios.delete( `http://localhost:8000/api/product/${e.currentTarget.value}`);
        axios.get('http://localhost:8000/api/product')
        .then((response) => {setList(response.data)})
        .catch((error) => {console.log(error)})
    }
    
 
    
    // const a=List.map((x,index)=>{return <div key={index}><p>{x.photos}</p></div>})
  return (
    dispData = 
    <div className='outside-container'>
         <div className= 'container-pro'>
         <input className='prodin1' type="text" placeholder="Search" />
            <Link to="/addproduct" className='sub-but'>Add Products</Link>
            <div className='inner'>
                {List.map((x, index) => 
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
                )}
                </div>
            </div>   
    </div>
  )
}

export default Products