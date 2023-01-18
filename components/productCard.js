import React, { useContext, useState, useEffect } from 'react'
import Image from 'next/image'
import { ProductContext } from './productContext'


const ProductCard = ({ product, font }) => {
    const { handle, title } = product.node
    const { altText, url } = product.node.images.edges[0].node
    const { altText2, url2 } = product.node.images.edges[1].node
    const price = product.node.priceRange.minVariantPrice.amount

    const [isHovering, setIsHovered] = useState(false);
    const { setProduct } = useContext(ProductContext);

    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);


    return (
        <div className='h-64 w-1/3 outline-white' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <div className='flex flex-col'>
                {isHovering ?
                    <>
                        <Image
                            src={url}
                            alt={altText}
                            className="w-full h-[200px] cursor-pointer"
                            onClick={() => setProduct(product)}
                            width={600}
                            height={600}
                            
                        ></Image>
                        <div className='h-full text-center'>
                            <h1 className={`text-black ${font.className} cursor-pointer underline underline-offset-3`}>{title.toUpperCase()}</h1>
                            <h1 className={`text-black ${font.className}`}>{price} e</h1>
                        </div>
                    </>
                    :
                    <>
                        <Image
                            src={url}
                            alt={altText}
                            className="w-full h-[200px] cursor-pointer "
                            onClick={() => setProduct(product)}
                            width={600}
                            height={600}
                        ></Image>
                        <div className='h-full text-center hover:underline hover:underline-offset-2'>
                            <h1 className={`text-black ${font.className} cursor-pointer hover:underline hover:underline-offset-3`}>{title.toUpperCase()}</h1>
                            <h1 className={`text-black ${font.className}`}>{price} e</h1>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default ProductCard