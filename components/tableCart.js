import React from 'react'
import Image from 'next/image'


const TableCart = ({item, font, increment, loading, decrease}) => {
    const [counter, setCounter] = React.useState(item.quantity);
    return (
        <>
            <div className='flex flex-row opacity-60 outline outline-1 outline-black justify-center align-center'>
                <button className={`text-black text-center mr-1 cursor-pointer ml-1 h-8  ${font.className} mt-[3px]`} onClick={() => decrease(item)} disabled={loading}>&lt;</button>
                <h1 className={`text-black w-4 text-center mt-[9px] ${font.className}`}>{counter}</h1>
                <button className={`text-black ml-1 cursor-pointer mr-2  ${font.className} mt-[3px]`} onClick={() => increment(item)} disabled={loading}>&gt;</button>
            </div>
        </>
    )
}

export default TableCart