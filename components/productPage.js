import React, { useContext } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useInView } from 'react-intersection-observer'
import { Parallax } from 'react-scroll-parallax'
import { ProductContext } from './productContext'

const ProductPage = ({ product, font }) => {

    const { title } = product.node || ""
    const { altText, url } = product.node?.images.edges[0].node || ""
    const price = product.node?.priceRange.minVariantPrice.amount || ""
    const description = product.node?.description || ""

    const [size, setSize] = React.useState()
    const [counter, setCounter] = React.useState(1);
    const [hidden, setHidden] = React.useState(false);
    const {setProduct} = useContext(ProductContext);

    const { ref, inView } = useInView()
    const images = [];

    React.useEffect(() => {
        if (inView) {
            setHidden(true);
        } else {
            setHidden(false)
        }
    }, [inView])

    product.node?.images.edges.map((image, i) => {
        console.log(i)
        images.push(
            <SwiperSlide key={`slide-${i}`}>
                <Image
                    src={image.node.url}
                    alt={image.node.altText}
                    className={`w-[300px] h-[250px] cursor-pointer ml-6 mt-4`}
                    width={600}
                    height={600}
                />
            </SwiperSlide>
        )
    })


    const increase = () => {
        setCounter(count => count + 1)
    }

    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1)
        }

    }

    return (
        <div className={`flex flex-row`}>
            <h1 className={`text-black ${font.className} ml-[570px] fixed z-20 text-[14px] cursor-pointer`} onClick={() => setProduct("")}>go back</h1>
            <div className='flex flex-col z-20'>
                <Swiper
                    navigation
                    pagination={{ clickable: true }}
                >
                    {console.log(images)}
                    {images}

                </Swiper>
                <span ref={ref} style={{ visibility: 'hidden' }}>marker</span>
                {/* <Image src={url}
                    alt={altText}
                    className={`w-[300px] h-[250px] cursor-pointer ml-6 mt-4`}
                    width={600}
                    height={600}
                /> */}
            </div>
            <div className={`flex flex-col fixed ml-[320px]`}>
                <div className=''>
                    <div className='ml-3 mt-4'>
                        <div className='flex flex-row'>
                            <h1 className={`text-black ${font.className} text-[20px]`}>{title?.toUpperCase()}</h1>
                        
                        </div>
                        <h1 className={`text-black ${font.className} text-[15px] ml-1`}>{price} eur</h1>
                    </div>
                    <div className='ml-5 mt-2 w-[280px] h-6 break-all'>
                        <h1 className={`text-black ${font.className} text-[15px]`}>{description}</h1>
                    </div>
                </div>

                <div className='mt-[105px] ml-3 '>
                    <h1 className={`text-black text-center ${font.className} text-[20px]`}>SIZE</h1>
                    <div className='flex justify-center mt-2 space-x-6'>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center  outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all ${size === "S" ? 'bg-black text-white' : ''}`} onClick={() => setSize("S")}>S</h1>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all ${size === "M" ? 'bg-black text-white' : ''}`} onClick={() => setSize("M")}>M</h1>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all ${size === "L" ? 'bg-black text-white' : ''}`} onClick={() => setSize("L")}>L</h1>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all ${size === "XL" ? 'bg-black text-white' : ''}`} onClick={() => setSize("XL")}>XL</h1>
                        <h1 className={`text-black ${font.className} w-10 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all ${size === "XXL{" ? 'bg-black text-white' : ''}`} onClick={() => setSize("XXL")}>XXL</h1>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=''>
                        <h1 className=''></h1>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='flex flex-row opacity-60 outline outline-1 outline-black ml-6 h-8 '>
                            <h1 className={`text-black text-center mr-1 cursor-pointer ml-1 mt-1 h-8 ${font.className}`} onClick={decrease}>&lt;</h1>
                            <h1 className={`text-black w-4 text-center mt-1 ${font.className}`}>{counter}</h1>
                            <h1 className={`text-black ml-1 cursor-pointer mr-2 mt-1 ${font.className}`} onClick={increase}>&gt;</h1>
                        </div>
                        <h1 className={`text-black ${font.className} w-[200px] h-6 outline outline-2 text-center ml-[15px] cursor-pointer hover:bg-black hover:text-white hover:outline-black  transition-all`}>ADD TO CART</h1>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default ProductPage