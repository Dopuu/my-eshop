import React, { useState, useEffect, use, useContext } from 'react';
import localFont from '@next/font/local';
import styles from '../styles/ClientSide.module.css';
import Draggable from 'react-draggable';
import { getAllProducts } from "../lib/shopify"
import ProductCard from '../components/productCard';
import { ProductContext } from '../components/productContext';
import ProductPage from '../components/productPage';

const appleFont = localFont({ src: '../public/ChicagoFLF.ttf' })



export default function ClientSide({ products }) {

  const [currentTime, setCurrentTime] = useState(new Date())
  const [isActive, setIsActive] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(true);
  const [isTOSopen, setisTOSopen] = useState(true);
  const [zIndex, setzIndex] = useState("");
  const {product} = useContext(ProductContext)

  useEffect(() => {
    setInterval(() => setCurrentTime(new Date()), 500);
  }, [])

  let words = currentTime.toString().split(' ');

  // console.log(products)
  return (
    <div className={`bg-black w-screen h-screen overflow-hidden`}>
      <div className='flex items-center justify-center h-screen'>
        <div className={`w-[800px] h-[600px] rounded-[11px] ml-4 mr-4 ${styles.screen}`}>
          <div className={`flex flex-col rounded-[11px] `}>
            <div className='bg-white rounded-t-[11px]'>
              <div className='flex flex-row '>
                <div className='h-[28px]'>
                  <div className='w-[40px] h-[30px]'>
                    <img src='apple.png' className=' fixed w-[17px] h-[20px] mt-[5px] ml-[16px]'></img>
                  </div>
                </div>
                <div className={`w-[48px] h-[26px] ml-1 ${appleFont.className} hover:bg-black z-0 `}>
                  <h1 className='text-black text-center text-[14.5px] mt-[3px] hover:text-white'>File</h1>
                </div>
                <div className={`w-[48px] h-[26px] ml-1 ${appleFont.className} hover:bg-black`}>
                  <h1 className='text-black text-center text-[14.5px] mt-[3px] hover:text-white'>Edit</h1>
                </div>
                <div className={`w-[80px] h-[26px] ml-1 ${appleFont.className} hover:bg-black`}>
                  <h1 className='text-black text-center text-[14.5px] mt-[3px] hover:text-white'>Special</h1>
                </div>
                <div className='flex-1'></div>
                <div className='h-[28px]'>
                  <div className={` ${appleFont.className} mr-3 mt-[2px]`}>
                    <h1>{currentTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} - {words[1]}. {words[2]}, {words[3]}</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='screen h-[576px] rounded-b-[11px] '>
              <div className='flex flex-col'>
                {/* store icon */}
                <div className={`h-16 `}>
                  <div className='flex flex-row'>
                    <div className='flex flex-1'></div>
                    <div className='flex h-16 w-[90px] mt-5 justify-center  cursor-pointer'>
                      <div className='flex flex-col' onClick={() => { setIsActive(false); setzIndex("STORE") }}>
                        <div className='flex justify-center'>
                          <img src='public.png' className='h-[26px] w-[34px]' alt='public'></img>
                        </div>
                        <div className='bg-white h-[18px] mt-2 flex justify-center items-center'>
                          <h1 className={`${appleFont.className} mr-1 ml-1 cursor-pointer `}>STORE</h1>
                        </div>
                      </div>
                    </div>
                    <div className='flex h-16 w-[90px] mr-10 mt-5 justify-center  cursor-pointer'>
                      <div className='flex flex-col' onClick={() => { setIsCartOpen(false); setzIndex("MY CART") }}>
                        <div className='flex justify-center'>
                          <img src='public.png' className='h-[26px] w-[34px]' alt='public'></img>
                        </div>
                        <div className='bg-white h-[18px] mt-2 flex justify-center items-center'>
                          <h1 className={`${appleFont.className} mr-1 ml-1 cursor-pointer`}>MY CART</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end store icon */}

                {/* contact icon */}
                <div className='h-16'>
                  <div className='flex flex-row'>
                    <div className='flex flex-1'></div>
                    <div className='flex h-16 w-[90px] mr-10 mt-5 justify-center  cursor-pointer'>
                      <div className='flex flex-col' onClick={() => { setIsContactOpen(false); setzIndex("CONTACT") }}>
                        <div className='flex justify-center'>
                          <img src='public.png' className='h-[26px] w-[34px]' alt='public'></img>
                        </div>
                        <div className='bg-white h-[18px] mt-2 flex justify-center items-center'>
                          <h1 className={`${appleFont.className} mr-1 ml-1 cursor-pointer`}>CONTACT</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end contact icon */}

                {/* TOS icon */}
                <div className='h-16'>
                  <div className='flex flex-row'>
                    <div className='flex flex-1'></div>
                    <div className='flex h-16 w-[90px] mr-10 mt-5 justify-center  cursor-pointer'>
                      <div className='flex flex-col' onClick={() => { setisTOSopen(false); setzIndex("TOS") }}>
                        <div className='flex justify-center'>
                          <img src='public.png' className='h-[26px] w-[34px]' alt='public'></img>
                        </div>
                        <div className='bg-white mt-2 flex justify-center items-center'>
                          <h1 className={`${appleFont.className} ml-1 mr-1 cursor-pointer`}>Terms <br></br>& Info</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end TOS icon */}

              </div>

              <div className={`${isActive ? 'hidden' : ''}`}>
                <Draggable bounds="body" handle="strong">
                  <div className={`${isActive ? 'hidden' : `${styles.animation} text-white w-[650px] h-[400px] bg-white flex flex-col outline outline-black outline-1 absolute ${zIndex === "STORE" ? 'z-10' : ''}`}`} onClick={() => setzIndex("STORE")}>
                    <strong className='flex flex-row'>
                      <div className={`${styles.drag} w-full`}>
                        <div className={`h-2 w-2 ml-3 mt-[6px] outline outline-black outline-2 ${isActive ? 'bg-black' : 'bg-white'} hover:bg-black`} onClick={() => setIsActive(true)}></div>
                      </div>
                      <div className={`text-black text-center z-3`}>
                        <div className='ml-2 mr-2'>
                          <h1 className='cursor-default'>STORE</h1>
                        </div>
                      </div>
                      <div className={`${styles.drag} w-full`}>
                      </div>
                    </strong>
                    <hr className={`${styles.line} mb-1`}></hr>
                    <div className={`w-full h-full overflow-y-auto`}>
                      <div className={`flex flex-row ml-2 mr-2 max-w-[650px] mt-[3px] flex-wrap ${product === "" ? '' : `${styles.anim_opacity} hidden`}`}>
                      
                        {
                          products.map(product => (
                            <ProductCard key={product.node.id} product={product} font={appleFont}/>
                          ))
                        }
                      </div>
                      <div className={`${product === "" ? 'hidden' : `${styles.anim_opacity}`}`}>
                          <ProductPage product={product} font={appleFont}/>
                        
                      </div>
                    </div>
                  </div>
                </Draggable>
              </div>

              <div className={`${isCartOpen ? 'hidden' : ``}`}>
                <Draggable bounds="body" handle="strong">
                  <div className={`${isCartOpen ? 'hidden' : `${styles.animation} text-white w-[650px] h-[400px] bg-white flex flex-col outline outline-black outline-1 absolute ${zIndex === "MY CART" ? 'z-10' : ''}`}`} onClick={() => setzIndex("MY CART")}>
                    <strong className='flex flex-row' onClick={() => setzIndex("MY CART")}>
                      <div className={`${styles.drag} w-full`}>
                        <div className={`h-2 w-2 ml-3 mt-[6px] outline outline-black outline-2 ${isCartOpen ? 'bg-black' : 'bg-white'} hover:bg-black`} onClick={() => setIsCartOpen(true)}></div>
                      </div>
                      <div className={`text-black text-center z-3`}>
                        <div className='ml-2 mr-2'>
                          <h1 className='cursor-default'>CART</h1>
                        </div>
                      </div>
                      <div className={`${styles.drag} w-full`}></div>
                    </strong>
                    <hr className={`${styles.line}`}></hr>
                  </div>
                </Draggable>
              </div>

              <div className={`${isContactOpen ? 'hidden' : ''}`}>
                <Draggable bounds="body" handle="strong">
                  <div className={`${isContactOpen ? 'hidden' : `${styles.animation} text-white w-[650px] h-[400px] bg-white flex flex-col outline outline-black outline-1 absolute ${zIndex === "CONTACT" ? 'z-10' : ''}`}`} onClick={() => setzIndex("CONTACT")}>
                    <strong className='flex flex-row' onClick={() => setzIndex("CONTACT")}>
                      <div className={`${styles.drag} w-full`}>
                        <div className={`h-2 w-2 ml-3 mt-[6px] outline outline-black outline-2 ${isContactOpen ? 'bg-black' : 'bg-white'} hover:bg-black`} onClick={() => setIsContactOpen(true)}></div>
                      </div>
                      <div className={`text-black text-center z-3`}>
                        <div className='ml-2 mr-2'>
                          <h1 className='cursor-default'>CONTACT</h1>
                        </div>
                      </div>
                      <div className={`${styles.drag} w-full`}></div>
                    </strong>
                    <hr className={`${styles.line}`}></hr>
                  </div>
                </Draggable>
              </div>

              <div className={`${isTOSopen ? 'hidden' : ''}`}>
                <Draggable bounds="body" handle="strong">
                  <div className={`${isTOSopen ? 'hidden' : `${styles.animation} text-white w-[650px] h-[400px] bg-white flex flex-col outline outline-black outline-1 absolute ${zIndex === "TOS" ? 'z-10' : ''}`}`} onClick={() => setzIndex("TOS")}>
                    <strong className='flex flex-row' onClick={() => setzIndex("TOS")}>
                      <div className={`${styles.drag} w-full`}>
                        <div className={`h-2 w-2 ml-3 mt-[6px] outline outline-black outline-2 ${isTOSopen ? 'bg-black' : 'bg-white'} hover:bg-black`} onClick={() => setisTOSopen(true)}></div>
                      </div>
                      <div className={`text-black text-center z-3`}>
                        <div className='ml-2 mr-2'>
                          <h1 className='cursor-default'>TOS</h1>
                        </div>
                      </div>
                      <div className={`${styles.drag} w-full`}></div>
                    </strong>
                    <hr className={`${styles.line}`}></hr>
                  </div>
                </Draggable>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products }
  }
}