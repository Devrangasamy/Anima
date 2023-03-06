import React, { useState } from 'react'
import { useCartAuth } from './Cart'
import './Product.css'
import axios from 'axios'
var value = 0

export const Product = () => {
	const cartAuth = useCartAuth()
    const[sortingOption, setSortingOption] = useState('Alphabetical')
    const[dataList, setDataList] = useState([])
	const[searchText, setSearchText] = useState('')

	const fetchData = () => {
		return (
			axios.get('http://localhost:8000/api/product')
			.then((response) => {setDataList(response.data)})
			.catch((error) => console.log(error))
		)
	}
	fetchData()
	fetchData()
	
    const addToCart = (event) => {
        const id = event.target.value
        if(cartAuth.findOccur(id)){
            cartAuth.updateCount(id)
        }
        else{
            cartAuth.updateCartList(id)
        }
        console.log(cartAuth.printCartList())
    }
    const buyNow = (event) => {
        console.log(event.target.value)
    }
    const optionChange = (event) => {
        setSortingOption(event.target.value)
        console.log(sortingOption)
    }
	//This function will invoke when the search button is pressed
	const searchThisItem = () => {

	}
    
    return (
        <div>

            <div id='product-sorting-main-container'>
                <div id='total-items-container'>
                    <span>Showing {dataList.length} items</span>
                </div>
                <div id='product-search-container'>
                    <span>Search</span>
                    <input onChange = {(event) => setSearchText(event.target.value)} value = {searchText}></input>
					<button onClick = {() => searchThisItem()}>Search</button>
                </div>
                <div id='products-sorting-container'>
                <span>Sort by :</span>
                    <select onChange={(event) => optionChange(event)}>
                        <option value={'alphabetical'}>Alphabetical</option>
                        <option value={'low to high'}>Low to High</option>
                        <option value={'high to low'}>High to Low</option>
                    </select>
                </div>
            </div>
            <div id = 'grid-container'>
                {/* This is using the index as the keyprops and the value for the buttons */}
                {/* Need to check during the time of error */}
                {dataList.map((x, index) => 
                    <div key = {value++} className='product-container'>
                        <img className='convert-image' src = {x.photos} alt = {""}></img><br></br>
                        <div id='product-page-data-container'>
                            <div id='product-container-product-name'>{x.productname}</div>
                            <div id='product-container-price-container'>MRP₹-{x.cost}</div>
                        </div>
                        <br></br><button value = {x._id} onClick = {(event) => addToCart(event)}>Add to Cart</button>
                        <button value = {x._id} onClick = {(event) => buyNow(event)}>Buy Now</button>
                    </div>
                )}
            </div>
        </div>
    )
}
