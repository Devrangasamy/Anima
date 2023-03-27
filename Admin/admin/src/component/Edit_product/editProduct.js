import React, { useEffect } from 'react'
import './editProduct.css'
import Entry from '../fileentry'
import axios from 'axios'
import { useState } from 'react'

export const EditProduct = () => {
  const[product_name,setproductname, resetProductName]=Entry('')
  const[animal,setanimal, resetAnimal]=Entry('')
  const[product_cost,setproductcost, resetProductCost]=Entry('')
  const[product_photo,setproductphoto, resetProductPhoto]=Entry('')
  const[product_description,setproductdescription, resetProductDescription]=Entry('')
  const[dataList, setDataList] = useState([])
  
  useEffect(() => {
    axios.get('https://rich-gray-macaw-sock.cyclic.app/api/product/')
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
  }, [])
  const updateProductDetails = () => {
    console.log('The details have been updated')
  }
  return (
    <div className='edit-product-page-main-container'>
      <div className = "edit-product-page-search-container">

      </div>
      <div className='list-items'>
        <h4 className = 'label'>Product name</h4>
        <input className = 'prodin' value={product_name} {...setproductname}></input><br></br>
        <h4 className = 'label'>Animal name</h4>
        <input className = 'prodin' value={animal} {...setanimal}></input><br></br>
        <h4 className = 'label'>Product Cost</h4>
        <input className = 'prodin' value={product_cost} {...setproductcost}></input><br></br>
        <h4 className = 'label'>Product Photos URL</h4>
        <input className = 'prodin' value={product_photo} {...setproductphoto}></input><br></br>
        <h4 className = 'label'>Product description</h4>
        <input className = 'prodin' value={product_description} {...setproductdescription}></input><br></br>
      </div>
      <div>
        <button onClick = {() => updateProductDetails()}>Update product</button>
      </div>
    </div>
  )
}