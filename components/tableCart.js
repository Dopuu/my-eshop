import React from 'react'
import Image from 'next/image'


const TableCart = ({item, font}) => {
    const [counter, setCounter] = React.useState(item.quantity);
    const increase = () => {
        setCounter(count => count + 1)
    }
    const decrease = () => {
        if (counter > 1) {
            setCounter(count => count - 1)
        }
    }

 
    return (
        <>
            <div className='flex flex-row opacity-60 outline outline-1 outline-black justify-center align-center'>
                <h1 className={`text-black text-center mr-1 cursor-pointer ml-1 mt-[9px] h-8  ${font.className}`} onClick={decrease}>&lt;</h1>
                <h1 className={`text-black w-4 text-center mt-[9px] ${font.className}`}>{counter}</h1>
                <h1 className={`text-black ml-1 cursor-pointer mr-2 mt-[9px] ${font.className}`} onClick={increase}>&gt;</h1>
            </div>
        </>
    )
}

export default TableCart