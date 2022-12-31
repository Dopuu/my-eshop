import React from 'react'
import Image from 'next/image'


const ProductPage = ({ product, font }) => {
    const { title } = product.node || ""
    const { altText, url } = product.node?.images.edges[0].node || ""
    const price = product.node?.priceRange.minVariantPrice.amount || ""
    const description = product.node?.description || ""
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
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center  outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all`}>S</h1>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all`}>M</h1>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all`}>L</h1>
                        <h1 className={`text-black ${font.className} w-8 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all`}>XL</h1>
                        <h1 className={`text-black ${font.className} w-10 h-8 outline text-center outline-2 text-[20px] cursor-pointer hover:bg-black hover:text-white hover:outline-black transition-all`}>XXL</h1>
                    </div>
                </div>
                <div className='mt-12'>
                    <div className=''>
                        <h1 className=''></h1>
                    </div>
                    <div className=''>
                        <h1 className={`text-black ${font.className} w-[200px] h-6 outline outline-2 text-center ml-[100px] cursor-pointer hover:bg-black hover:text-white hover:outline-black  transition-all`}>ADD TO CART</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage