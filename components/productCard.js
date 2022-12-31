import React, { useContext } from 'react'
import Image from 'next/image'
import { ProductContext } from './productContext'

const ProductCard = ({ product, font }) => {
    const { handle, title } = product.node
    const { altText, url } = product.node.images.edges[0].node
    const price = product.node.priceRange.minVariantPrice.amount
    const {setProduct} = useContext(ProductContext);
    console.log(product.node)
    return (
        <div className='h-64 w-1/3   outline-white ' >
            <div className='flex flex-col'>
                <Image
                    src={url}
                    alt={altText}
                    className="w-full h-[200px] cursor-pointer"
                    onClick={() => setProduct(product)}
                    width={600}
                    height={600}
                ></Image>
                <div className='h-full text-center'>
                    <h1 className={`text-black ${font.className} cursor-pointer`}>{title.toUpperCase()}</h1>
                    <h1 className={`text-black ${font.className}`}>{price} e</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductCard