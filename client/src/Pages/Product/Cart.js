import React, { useContext, useState } from 'react'

const CartAuth = React.createContext()
export const Cart = (props) => {
    const[cartList, setCartList] = useState([])
    const updateCartList = (id) => {
        setCartList([...cartList, {id : id, count : 1}])
    }
    const findOccur = (id) => {
        for(let i = 0; i < cartList.length; i++){
            if(cartList[i].id === id)
                return true
        }
        return false
    }
    const updateCount = (id) => {
        for(let i = 0; i < cartList.length; i++){
            if(cartList[i].id === id){
                cartList[i].count = cartList[i].count + 1
            }
        }
    }
    const printCartList = () => {
        return cartList
    }
    return (
            <CartAuth.Provider value = {{cartList, updateCartList, findOccur, updateCount, printCartList}}>
                {props.children}
            </CartAuth.Provider>
    )
}

export const useCartAuth = () => {
    return useContext(CartAuth)
}
