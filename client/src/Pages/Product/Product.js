import React, { useEffect, useState } from 'react'
import { useCartAuth } from './Cart'
import './Product.css'
import axios from 'axios'
var value = 0

export const Product = () => {
	const cartAuth = useCartAuth()
    const[, setSortingOption] = useState('Alphabetical')
    const[dataList, setDataList] = useState([])
	const[searchText, setSearchText] = useState('')
    const[searchedData, setSearchedData] = useState([])
    const[sortFlag, setSortFlag] = useState(false)  
    const[sortedData, setSortedData] = useState([])
	useEffect(() => {
        axios.get("http://localhost:8000/api/product")
        .then((response) => setDataList(response.data))
        .catch((error) => console.log(error)) 
    }, [])
    const addToCart = (event) => {
        const id = event.target.value
        console.log(id)
        if(cartAuth.findOccur(id) === true){
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
    // This function will invoke when there is a change in the sort and updateds the data in the page
    const optionChange = (event) => {
        setSortingOption(event.target.value)
        switch(event.target.value){
            case 'alphabetical':
                    let sorted = dataList.sort((a, b) => {
                        if(a.productname < b.productname)   return -1
                        else if(a.productname > b.productname) return 1
                        return 0
                    })
                    setSortedData(sorted)
                    break;
            case "low to high": 
                    let sorted1 = dataList.sort((a, b) => a.cost - b.cost)
                    setSortedData(sorted1)
                    break
            case "high to low":
                    let sorted2 = dataList.sort((a, b) => b.cost - a.cost)
                    setSortedData(sorted2)
                    break
            default:
            break

        }
    }
	//This function will invoke when the search button is pressed
	const searchThisItem = () => {
        let search = searchText.toLowerCase()
        let lst = []
        for(let i = 0; i < dataList.length; i++){
            let val = dataList[i].productname.toLowerCase()
            if(val.indexOf(search) !== -1)
                lst.push(dataList[i])
        }
        setSearchedData(lst)
	}
    const displaySortedData = sortedData.map((x, index) => 
    <div key = {value ++} className='product-container'>
        <img className='convert-image' src = {x.photos} alt = {""}></img><br></br>
        <div id='product-page-data-container'>
            <div id='product-container-product-name'>{x.productname}</div>
            <div id='product-container-price-container'>MRP₹-{x.cost}</div>
        </div>
        <button value = {x._id} onClick = {(event) => addToCart(event)}>Add to Cart</button>
        <button value = {x._id} onClick = {(event) => buyNow(event)}>Buy Now</button>
    </div>
    )
    const displayAllData = dataList.map((x, index) => 
        <div key = {value++} className='product-container'>
            <img className='convert-image' src = {x.photos} alt = {""}></img><br></br>
            <div id='product-page-data-container'>
                <div id='product-container-product-name'>{x.productname}</div>
                <div id='product-container-price-container'>MRP₹-{x.cost}</div>
            </div>
            <button value = {x._id} onClick = {(event) => addToCart(event)}>Add to Cart</button>
            <button value = {x._id} onClick = {(event) => buyNow(event)}>Buy Now</button>
        </div>
    )
    const displaySearchedData = searchedData.map((x, index) => 
    <div key = {value++} className='product-container'>
        <img className='convert-image' src = {x.photos} alt = {""}></img><br></br>
        <div id='product-page-data-container'>
            <div id='product-container-product-name'>{x.productname}</div>
            <div id='product-container-price-container'>MRP₹-{x.cost}</div>
        </div>
        <button value = {x._id} onClick = {(event) => addToCart(event)}>Add to Cart</button>
        <button value = {x._id} onClick = {(event) => buyNow(event)}>Buy Now</button>
    </div>
    )
    
    return (
        <div>
            <div id='product-page-nav-container'>
                <div id='product-page-nav-total-data-container'>
                    <span>Showing {dataList.length} items</span>
                </div>
                <div id='product-page-nav-serach-container'>
                    <span>Search</span>
                    <input onChange = {(event) => {setSearchText(event.target.value); searchThisItem();}} value = {searchText}></input>
                </div>
                <div id='product-page-nav-sort-container'>
                <span>Sort by :</span>
                    <select onChange={(event) => optionChange(event)}>
                        <option value= {'none'}>None</option>
                        <option value={'alphabetical'}>Alphabetical</option>
                        <option value={'low to high'}>Low to High</option>
                        <option value={'high to low'}>High to Low</option>
                    </select>
                </div>
            </div>
            <div id = 'grid-container'>
                {/* This is using the index as the keyprops and the value for the buttons */}
                {/* Need to check during the time of error */}
                {!searchText && displayAllData}
                {searchText && displaySearchedData}
                {sortFlag && displaySortedData}
            </div>
        </div>
    )
}
