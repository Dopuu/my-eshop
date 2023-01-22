import React, { useState, useEffect, useContext, createContext } from 'react';
import { createCheckout, updateCheckout } from '../lib/shopify'
const CartContext = createContext()

export default function ShopProvider({ children }) {
    const [cart, setCart] = useState([])
    const [checkoutId, setCheckoutId] = useState('')
    const [checkoutUrl, setCheckoutUrl] = useState('')

    useEffect(() => {
        if (localStorage.checkout_id) {
            const cartObject = JSON.parse(localStorage.checkout_id)

            if (cartObject[0].id) {
                setCart([cartObject[0]])
            } else if (cartObject[0].length > 0) {
                setCart(...[cartObject[0]])
            }

            setCheckoutId(cartObject[1].id)
            setCheckoutUrl(cartObject[1].webUrl)
        }

    }, [])

    async function addToCart(addedItem) {
        const newItem = { ...addedItem }
        console.log("NEW ITEM ", newItem)
        //console.log(cart)
        if (cart.length === 0) {
            setCart([newItem])

            const checkout = await createCheckout(newItem.id, newItem.quantity)
            console.log("CART ", cart)
            setCheckoutId(checkout.id)
            setCheckoutUrl(checkout.webUrl)
            console.log("CHECKOUT ID ", checkout.id)
            console.log("CHECKOUT WEBURL ", checkout.webUrl)
            localStorage.setItem("checkout_id", JSON.stringify([newItem, checkout]))
        } else {
            let newCart = []
            let added = false

            cart.map(item => {
                if (item.id === newItem.id) {
                    item.variantQuantity++
                    newCart = [...cart]
                    added = true
                }
            })

            if (!added) {
                newCart = [...cart, newItem]
            }

            setCart(newCart)
            console.log("!", checkoutId)
            console.log("!", checkoutUrl)
            const newCheckout = await updateCheckout(checkoutId, newCart)
            localStorage.setItem("checkout_id", JSON.stringify([newCart, newCheckout]))
        }
    }
    async function clearCart() {
        const updatedCart = []

        setCart(updatedCart)

        const newCheckout = await updateCheckout(checkoutId, updatedCart)

        localStorage.setItem("checkout_id", JSON.stringify([updatedCart, newCheckout]))

    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            checkoutUrl,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
const ShopConsumer = CartContext.Consumer

export { ShopConsumer, CartContext }