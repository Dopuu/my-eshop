import '../styles/globals.css'
import React, { useState } from 'react';
import { ProductContext } from '../components/productContext';
import { ShopContext } from '../components/shopContext';
import { CartContext } from '../components/cartContext';

export default function App({ Component, pageProps }) {
  const [product, setProduct] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <ProductContext.Provider value={{ product, setProduct }}>
        <ShopContext.Provider value={{ isActive, setIsActive }}>
          <Component {...pageProps} />
        </ShopContext.Provider>
      </ProductContext.Provider>
    </CartContext.Provider>
  )

}
