import React, { useContext, useEffect, } from 'react'
import { CartContext } from './shopProvider'
import Link from 'next/link';
import { GrFormClose } from 'react-icons/gr';
import Image from 'next/image'
import TableCart from './tableCart'

const Cart = ({ font }) => {
    const { cart, checkoutUrl, removeCartItem, clearCart, cartLoading, incrementCartItem, decrementCartItem } = useContext(CartContext)
    const [note, setNote] = React.useState("");
    let cartTotal = 0
    cart.map(item => {
        cartTotal += item?.price * item?.quantity
    })

    const handleChange = (e) => {
        setNote(e)
        console.log(note)
    }
    return (
        <div className='ml-3 h-full overflow-auto'>
            <div className={`top-0 left-0 right-0 z-50 w-full h-full absolute ${cartLoading ? "bg-white opacity-60" : "hidden"}`}></div>
            {cart.length > 0 ?
                <div>
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
                                                <TableCart item={item} font={font} increment={incrementCartItem} loading={cartLoading} decrease={decrementCartItem} />
                                            </td>
                                        </td>
                                        <td className='px-5 py-5 border-t border-gray-300 bg-white text-sm'>
                                            <td key={Math.floor(Math.random() * 100)} className={`w-[120px] text-center ${font.className}`}>{parseFloat(item.node.priceRange.minVariantPrice.amount * item.quantity)} EUR</td>
                                        </td>
                                    </tr>
                                ))}


                            </tbody>
                        </table>
                    </div>
                    <div className='flex flex-row'>
                        <div className='flex flex-col w-[300px]'>
                            <Link href={`${checkoutUrl}`}>
                                <button className='text-white bg-black h-12 w-full mt-2'>Check out</button>
                            </Link>
                        </div>
                        <div className='flex-1' />
                        <div className='h-[200px] w-[300px] mr-5'>
                            <div className='flex flex-col justify-end items-end'>
                                <div className='flex flex-row justify-end'>
                                    <h1 className='text-black text-right'>Subtotal</h1>
                                    <h1 className='text-gray-900 text-right ml-6'>{cartTotal} EUR</h1>
                                </div>

                                <h1 className='text-black text-right text-[13px]'>Tax included. Shipping calculated at checkout.</h1>
                                <button className={`text-white bg-black ml-2 w-[100px] h-12 justify-end end`} onClick={() => clearCart()}>Clear cart</button>
                            </div>
                        </div>
                    </div>
                </div> : 
                <div className='flex justify-center'><h1 className='text-black text-[20px] justify-center'>Nothing in your cart!</h1></div>}

            {/* <button className='text-black' onClick={() => clearCart()}>a</button> */}
        </div >

    )
}

export default Cart