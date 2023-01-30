import React, { useContext, useEffect, } from 'react'
import { CartContext } from './shopProvider'
import Link from 'next/link';
import { GrFormClose } from 'react-icons/gr';
import Image from 'next/image'
import TableCart from './tableCart'

const Cart = ({ font }) => {
    const { cart, checkoutUrl, removeCartItem, clearCart, cartLoading } = useContext(CartContext)

    let cartTotal = 0
    cart.map(item => {
        cartTotal += item?.price * item?.quantity
    })


    return (
        <div className='ml-3 h-full overflow-auto'>
            <div className='flex flex-col w-[720px] justify-between items-center text-black mt-2'>
                <table className="table ">
                    <thead className=''>
                        <tr className=''>
                            <th className=''></th>
                            <th className=''></th>
                            <th className=''>Product</th>
                            <th className=''>Quantity</th>
                            <th className=''>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map(item => (

                            <tr key={Math.floor(Math.random() * 850)} className="">
                                {console.log(item)}
                                <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'>
                                    <td className='w-[50px] text-center '>
                                        <button className={`text-black `} onClick={() => removeCartItem(item.id)}><GrFormClose size={25} /></button>
                                    </td>
                                </td>
                                <td className='border-t border-gray-300 bg-white text-sm'>
                                    <td>
                                        <Image
                                            src={item.node.images.edges[0].node.url}
                                            alt={Math.floor(Math.random() * 50)}
                                            className={`w-[200px] h-[150px] cursor-pointer ml-5 mt-2 mb-2`}
                                            width={3200}
                                            height={3200}
                                        />
                                    </td>
                                </td>
                                <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'>
                                    <td key={Math.floor(Math.random() * 50)} className={`w-[120px] text-center text-[15px] ${font.className}`}>{item.node.title}<br />Size: {item.size} <br />
                                        {item.node.priceRange.minVariantPrice.amount} EUR</td>
                                </td>

                                <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'>
                                    <td>
                                        <TableCart item={item} font={font} />
                                    </td>
                                </td>
                                <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'>
                                    <td key={Math.floor(Math.random() * 100)} className={`w-[120px] text-center ${font.className}`}>{parseFloat(item.node.priceRange.minVariantPrice.amount * item.quantity)} EUR</td>
                                </td>
                            </tr>
                        ))}
                            <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'></td>
                            <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'></td>
                            <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'></td>
                            <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'></td>
                            <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'></td>

                    </tbody>
                </table>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col'>
                    <button className={`text-white bg-black ml-2 w-[100px] h-12`} onClick={() => clearCart()}>Clear cart</button>
                    <div className={`text-black ml-2 ${font.className}`}>Order special instructions</div>
                    <textarea className='w-[300px] overflow-auto resize-y outline outline-1 outline-black ml-2 text-black'></textarea>
                </div>
                <div className='flex-1' />
                <div className='h-[200px] w-[300px] mr-5'>
                    <div className='flex flex-row justify-end'>
                        <h1 className='text-black text-right'>Subtotal</h1>
                        <h1 className='text-gray-900 text-right ml-6'>{cartTotal} EUR</h1>
                    </div>
                    <h1 className='text-black text-right text-[13px]'>Tax included. Shipping calculated at checkout.</h1>
                    <Link href={`${checkoutUrl}`}>
                        <button className='text-white bg-black h-12 w-full mt-2'>Check out</button>
                    </Link>

                </div>
            </div>
            {/* <button className='text-black' onClick={() => clearCart()}>a</button> */}
        </div >

    )
}

export default Cart