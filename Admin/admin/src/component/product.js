import React from 'react';
import './product.css'
import Entry from './fileentry';
import { Link } from 'react-router-dom';
const AddProduct = () => {
    const[product_name,setproductname, resetProductName]=Entry('')
    const[animal,setanimal, resetAnimal]=Entry('')
    const[product_cost,setproductcost, resetProductCost]=Entry('')
    const[product_photo,setproductphoto, resetProductPhoto]=Entry('')
    const[product_description,setproductdescription, resetProductDescription]=Entry('')
    const gotoproduct=()=>{
    }
  const publishnow = async (event) => {
    const response = await fetch("https://rich-gray-macaw-sock.cyclic.app/api/product/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productname:product_name,
        animal:animal,
        cost:product_cost,
        photos:product_photo,
        desc:product_description
      }),
    });
    const json = await response.json();
    console.log(json);
    resetProductName()
    resetAnimal()
    resetProductCost()
    resetProductPhoto()
    resetProductDescription()
  };
    return (
        <div className='items-entry'>     
            <div className='header'> 
                <div>
                <Link to="/products" className='but' onClick={gotoproduct}>Go to products</Link>
                </div>
                <h1>Add Product</h1>
                <div>
                <button className='but' onClick={publishnow}>Publish Now</button>
                </div>
            </div>
             <div className='container'>
                <div className='list-items'>
                    <h4 className='label'>Product Name</h4>
                    <input className='prodin' type="text" placeholder="Enter product name"{...setproductname}/>
                    <h4 className='label'>Animal Name</h4>
                    <input className='prodin' type="text" placeholder="Enter animal name"{...setanimal}/>
                    <h4 className='label'>Product Cost</h4>
                    <input className='prodin' type="text" placeholder="Enter product cost"{...setproductcost}/>
                    <h4 className='label'>Product Photos Url</h4>
                    <input className='prodin' type="text" placeholder="Enter product photo url"{...setproductphoto}/>
                    <h4 className='label'>Product Description</h4>
                    <textarea className='prodin' type="text" placeholder="Enter product name"{...setproductdescription}/>
                    <h4 className='label'>Product Rating</h4>
                    <input className='prodin' type="text" placeholder="Enter product rating on a scale of 5"{...setproductdescription}/>
                    </div>
                </div>
        </div>
    );
}

export default AddProduct;
