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
    console.log(item)
    return (
        <tr key={Math.floor(Math.random() * 850)} className="ml-4">
            <td className='w-[50px] text-center'>X</td>
            <Image
                src={item.item.node.images.edges[0].node.url}
                alt={Math.floor(Math.random() * 50)}
                className={`w-[150px] h-[150px] cursor-pointer ml-5 mt-4`}
                width={1600}
                height={1600}
            />

            <td key={Math.floor(Math.random() * 50)} className="w-[120px] text-center">{item.item.node.title}</td>
            <td key={Math.floor(Math.random() * 500)} className="w-[120px] text-center">{item.item.node.priceRange.minVariantPrice.amount}</td>
            <td>
                <div className='flex flex-row opacity-60 outline outline-1 outline-black justify-center '>
                    <h1 className={`text-black text-center mr-1 cursor-pointer ml-1 mt-1 h-8 `} onClick={decrease}>&lt;</h1>
                    <h1 className={`text-black w-4 text-center mt-1 `}>{counter}</h1>
                    <h1 className={`text-black ml-1 cursor-pointer mr-2 mt-1`} onClick={increase}>&gt;</h1>
                </div>
            </td>
            <td key={Math.floor(Math.random() * 100)} className="w-[120px] text-center">{item.item.node.priceRange.minVariantPrice.amount}</td>
        </tr>
    )
}

export default TableCart