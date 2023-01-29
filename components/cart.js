import React, { useContext, useEffect, } from 'react'
import { CartContext } from './shopProvider'
import styles from '../styles/ClientSide.module.css';

import Image from 'next/image'
import TableCart from './tableCart'

const Cart = ({font}) => {
    const { cart, checkoutUrl, removeCartItem, clearCart, cartLoading } = useContext(CartContext)

    let cartTotal = 0
    cart.map(item => {
        cartTotal += item?.price * item?.quantity
    })


    return (
        <div className='ml-3 h-full overflow-auto'>
            <div className='flex flex-col w-[720px] justify-between items-center text-black mt-2'>
                <table class="table ">
                    <thead className=''>
                        <tr className=''>
                            <th className={`${font.className}`}></th>
                            <th className=''></th>
                            <th className=''>Product</th>
                            <th className=''>Price</th>
                            <th className=''>Quantity</th>
                            <th className=''>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map(item => (

                            <tr key={Math.floor(Math.random() * 850)} className="">
                                {console.log(item)}
                                <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                                    <td className='w-[50px] text-center '>
                                        <button className={`text-black `} onClick={() => removeCartItem(item.id)}>X</button>
                                    </td>
                                </td>
                                <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                                    <td>
                                        <Image
                                            src={item.node.images.edges[0].node.url}
                                            alt={Math.floor(Math.random() * 50)}
                                            className={`w-[250px] h-[150px] cursor-pointer ml-5 `}
                                            width={1600}
                                            height={1600}
                                        />
                                    </td>
                                </td>
                                <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                                    <td key={Math.floor(Math.random() * 50)} className={`w-[120px] text-center text-[15px] ${font.className}`}>{item.node.title}<br />SIZE: {item.size} </td>
                                </td>
                                <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                                    <td key={Math.floor(Math.random() * 500)} className={`w-[120px] text-center  ${font.className}`}>{item.node.priceRange.minVariantPrice.amount} eur</td>

                                </td>
                                <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                                    <td>
                                        <TableCart item={item} font={font}/>
                                    </td>
                                </td>
                                <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                                    <td key={Math.floor(Math.random() * 100)} className={`w-[120px] text-center ${font.className}`}>{item.node.priceRange.minVariantPrice.amount} eur</td>
                                </td>
                            </tr>
                        ))}
                        <td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                        </td><td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                        </td><td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                        </td><td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                        </td><td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                        </td><td className='px-5 py-5 border-t border-gray-500 bg-white text-sm'>
                        </td>
                        
                    </tbody>
                </table>
            </div>
            <button className='text-black' onClick={() => clearCart()}>a</button>
        </div>

    )
}

export default Cart