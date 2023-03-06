import React from 'react';
import './product.css'
import Entry from './fileentry';
const Product = () => {
    const[product_name,setproductname, resetProductName]=Entry('')
    const[animal,setanimal, resetAnimal]=Entry('')
    const[product_cost,setproductcost, resetProductCost]=Entry('')
    const[product_photo,setproductphoto, resetProductPhoto]=Entry('')
    const[product_description,setproductdescription, resetProductDescription]=Entry('')
    const gotoproduct=()=>{
    }
  const publishnow = async (event) => {
    const response = await fetch("http://localhost:8000/api/product/", {
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
                <h1/>
                <div>
                <button className='but' onClick={gotoproduct}>Go to products</button>
                </div>
                <h1>Add Product</h1>
                <div>
                <button className='but' onClick={publishnow}>Publish Now</button>
                </div>
                <h1/>
            </div>
             <div className='container'>
                <div className='list-items'>
                    <h3>Product Name</h3>
                    <input className='prodin' type={Text} placeholder="Enter product name"{...setproductname}/>
                    <h3>Animal Name</h3>
                    <input className='prodin' type={Text} placeholder="Enter animal name"{...setanimal}/>
                    <h3>Product Cost</h3>
                    <input className='prodin' type={Text} placeholder="Enter product cost"{...setproductcost}/>
                    <h3>Product Photos Url</h3>
                    <input className='prodin' type={Text} placeholder="Enter product photo url"{...setproductphoto}/>
                    <h3>Product Description</h3>
                    <textarea className='prodin' type={Text} placeholder="Enter product name"{...setproductdescription}/>
                    <h3>Product Rating</h3>
                    <input className='prodin' type={Text} placeholder="Enter product rating on a scale of 5"{...setproductdescription}/>
                    </div>
                </div>
        </div>
    );
}

export default Product;
