import React from 'react'
import Image from 'next/image'


const TableCart = (item) => {
    const [counter, setCounter] = React.useState(item.item.quantity);
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
            <div className='flex flex-row opacity-60 outline outline-1 outline-black justify-center '>
                <h1 className={`text-black text-center mr-1 cursor-pointer ml-1 mt-1 h-8 `} onClick={decrease}>&lt;</h1>
                <h1 className={`text-black w-4 text-center mt-1 `}>{counter}</h1>
                <h1 className={`text-black ml-1 cursor-pointer mr-2 mt-1`} onClick={increase}>&gt;</h1>
            </div>
        </>
    )
}

export default TableCart