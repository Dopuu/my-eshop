import React, { useContext, useEffect, } from 'react'
import { CartContext } from './shopProvider'
const Cart = () => {
    const { cart, checkoutUrl, removeCartItem, clearCart } = useContext(CartContext)
    
    let cartTotal = 0
    cart.map(item => {
        cartTotal += item?.price * item?.quantity
    })

    return (
        <div className='text-black'>{cartTotal}
        <button onClick={() => clearCart()} className="text-black">aaaaa</button></div>
    )
}

export default Cart