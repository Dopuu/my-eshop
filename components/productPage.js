import React from 'react'
import Image from 'next/image'


const ProductPage = ({ product, font }) => {
    const { title } = product.node || ""
    const { altText, url } = product.node?.images.edges[0].node || ""
    const price = product.node?.priceRange.minVariantPrice.amount || ""
    const description = product.node?.description || ""
    const [size, setSize] = React.useState()
    const [counter, setCounter] = React.useState(1);

    const increase = () => {
        setCounter(count => count + 1)
    }

    const decrease = () => {
        setCounter(count => count - 1)
    }

    return (
        <div className={`flex flex-row`}>
            <Image src={url}
                alt={altText}
                className={`w-[300px] h-[250px] cursor-pointer ml-6 mt-4`}
                width={600}
                height={600} />
            <div className='flex flex-col'>
                <div className='ml-6 mt-4'>
                    <h1 className={`text-black ${font.className} text-[20px]`}>{title?.toUpperCase()}</h1>
                    <h1 className={`text-black ${font.className} text-[15px] ml-1`}>{price} eur</h1>
                </div>
                <div className='ml-7 mt-7  h-[94px] w-[280px]'>
                    <h1 className={`text-black ${font.className} text-[15px]`}>{description}</h1>
                </div>
                <div className='mt-2 ml-7'>
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
                    <div className='flex flex-row'>
                        <div className='flex flex-row opacity-60 outline outline-1 outline-black ml-[34px] h-8 mb-6'>
                            <h1 className={`text-black text-center mr-1 cursor-pointer ml-1 mt-1 ${font.className}`} onClick={decrease}>&lt;</h1>
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