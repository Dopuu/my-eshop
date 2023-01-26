import React, { useContext, useEffect, } from 'react'
import { CartContext } from './shopProvider'
import Image from 'next/image'
import TableCart from './tableCart'

const Cart = () => {
    const { cart, checkoutUrl, removeCartItem, clearCart } = useContext(CartContext)

    let cartTotal = 0
    cart.map(item => {
        cartTotal += item?.price * item?.quantity
    })
   

    return (
        <div className='text-black'>{cartTotal}
            <button onClick={() => clearCart()} className="text-black">aaaaa</button>
            <table class="table">
                <thead className='z-0'>
                    <tr className=''>
                        <th className=''></th>
                        <th className=''></th>
                        <th className=''>Product</th>
                        <th className=''>Price</th>
                        <th className=''>Quantity</th>
                        <th className=''>Subtotal</th>

                    </tr>

                </thead>

                <tbody>

                    {cart?.map(item => (

                        <TableCart item={item} key={Math.floor(Math.random() * 500)}/>
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default Cart