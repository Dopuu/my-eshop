import React, { useContext, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { ProductContext } from './productContext'
import axios from "axios"
import useSWR from 'swr'
import { CartContext } from './shopProvider'

const fetchInventory = (url, id) =>
    axios
        .get(url, {
            params: {
                id: id,
            },
        })
        .then((res) => res.data)

const ProductPage = ({ product, font }) => {
    const { handle, title } = product.node || ""
    const { data: productInventory } = useSWR(
        ['/api/available?id=' + handle],
        (url, id) => fetchInventory(url, id),
        { errorRetryCount: 3 }
    )
    const { altText, url } = product.node?.images.edges[0].node || ""
    const price = product.node?.priceRange.minVariantPrice.amount || ""
    const description = product.node?.description || ""
    const [size, setSize] = React.useState()
    const [counter, setCounter] = React.useState(1);
    const [hidden, setHidden] = React.useState(false);
    const { setProduct } = useContext(ProductContext);

    const { addToCart } = useContext(CartContext)

    const [available, setAvailable] = React.useState(true)
    const { ref, inView } = useInView()
    const images = [];
    const sizes = [];

    React.useEffect(() => {
        if (inView) {
            setHidden(true);
        } else {
            setHidden(false)
        }
    }, [inView])
   
    // React.useEffect(() => {
    //     if (productInventory) {
    //       const checkAvailable = productInventory?.variants?.edges.filter(item => item.node.id === selectedVariant.id) || ""
    //       if (checkAvailable[0]?.node.availableForSale) {
    //         setAvailable(true)
    //       } else {
    //         setAvailable(false)
    //       }
    //     }
    //   }, [productInventory])
    product.node?.images.edges.map((image, i) => {
        images.push(
           
                <Image
                    src={image.node.url}
                    alt={image.node.altText}
                    className={`w-[300px] h-[300px] cursor-pointer ml-5 mt-4`}
                    width={600}
                    height={600}
                />
         
        )
    })
    product.node?.variants.edges.map((i) => {
        sizes.push(i)
      
    })
    // sizes.map((i) =>
    //     console.log(i.node?.title)
    // )
    const increase = () => {
        setCounter(count => count + 1)
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1)
        }
    }
    let k = 0;
    let bool = false
    sizes.map((i) => {

        if (i.node?.availableForSale === false) {
            k += 1
        }
        if (k === 5) {
            bool = true
        }
    })

    const add2Cart = () => {
        if(size === undefined){
            alert("Please select your size before adding to cart.")
        } else{
            sizes.map((i) => {
                if(i.node?.title === size){
                    // console.log((i.node.id).split("ProductVariant/")[1])
                    //parseInt((i.node.id).split("ProductVariant/")[1])
                    addToCart({id: i.node.id, quantity: counter, price: price, node: product.node, size: size})
                }
            })
        }
    }

    return (
        <div className={`flex flex-row`}>
            <h1 className={`text-black ${font.className} ml-[650px] fixed z-20 text-[14px] cursor-pointer`} onClick={() => { setProduct(""); setCounter(1); setSize('') }}>go back</h1>
            <div className='flex flex-col z-20'>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                >

                    {images}
                </Swiper>
                <div className='ml-6 mt-4'>
                    <h1 className={`text-black text-center ${font.className} mr-[20px]`}>ADDITIONAL INFORMATION</h1>
                    <div className='bg-black w-[300px] h-[2px]'></div>
                    <div className='w-[260px] ml-2 mr-2'>
                        <p className={`text-black break-all ${font.className} text-[15px]`}>
                            HEAVY TEE by 7K RPM.
                            <br></br><br></br>
                            Quality print and a design that stands out, made by 7K RPM.

                            <br></br><br></br>
                            Check the product’s gallery for details regarding sizing.
                            <br></br><br></br>
                            Size doesn’t fit? No problem. We will gladly take care of that!
                            <br></br><br></br>
                            Delivery time not more than 20 working days</p>
                    </div>
                </div>
                {/* <Image src={url}
                    alt={altText}
                    className={`w-[300px] h-[250px] cursor-pointer ml-6 mt-4`}
                    width={600}
                    height={600}
                /> */}
            </div>
            <div className={`flex flex-col fixed ml-[330px]`}>
                <div className=''>
                    <div className='ml-3 mt-4'>
                        <div className='flex flex-row'>
                            <h1 className={`text-black ${font.className} text-[20px]`}>{title?.toUpperCase()}</h1>
                            {/* <h1 className={`text-black ${font.className} text-[20px]`}>{tags[0]?.toUpperCase()}</h1> */}
                        </div>
                        <h1 className={`text-black ${font.className} text-[15px] ml-1`}>{price} eur</h1>
                    </div>
                    <div className='ml-5 mt-2 w-[350px] max-h-6 break-all'>
                        <h1 className={`text-black ${font.className} text-[15px]`}>{description}</h1>
                    </div>
                </div>

                <div className='mt-[105px] ml-3 '>
                    <h1 className={`text-black text-center ${font.className} text-[20px]`}>SIZE</h1>
                    <div className='flex justify-center mt-2 space-x-4'>

                        {sizes.map((i) => {
                            if (i.node.availableForSale === true) {
                                return (
                                    <h1 className={`text-black ${font.className} w-10 h-8 outline text-center  outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all ${size === i.node.title.toString() ? 'bg-black text-white' : ''}`} onClick={() => setSize(i.node.title.toString())} key={i.node.title.toString()}>{i.node.title.toString()}</h1>
                                )
                            } else {
                                return (
                                    <h1 className={`text-black ${font.className} w-10 h-8 outline text-center  outline-2 text-[20px] opacity-50 cursor-not-allowed	`} key={i.node.title}>{i.node.title}</h1>
                                )
                            }
                        })}
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=''>
                        <h1 className=''></h1>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-row opacity-60 outline outline-1 outline-black ml-[59px] h-8 '>
                            <h1 className={`text-black text-center mr-1 cursor-pointer ml-1 mt-1 h-8 ${font.className}`} onClick={decrease}>&lt;</h1>
                            <h1 className={`text-black w-4 text-center mt-1 ${font.className}`}>{counter}</h1>
                            <h1 className={`text-black ml-1 cursor-pointer mr-2 mt-1 ${font.className}`} onClick={increase}>&gt;</h1>
                        </div>
                        {bool ?
                            <h1 className={`text-black ${font.className} w-[200px] h-6 outline outline-2 text-center ml-[10px] cursor-pointer hover:bg-black hover:text-white hover:outline-black  transition-all`}>SOLD OUT</h1>
                            :

                            <h1 className={`text-black ${font.className} w-[200px] h-6 outline outline-2 text-center ml-[10px] cursor-pointer hover:bg-black hover:text-white hover:outline-black  transition-all`} onClick={() => add2Cart()}>ADD TO CART</h1>

                            }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage