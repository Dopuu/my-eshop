import '../styles/globals.css'
import React, { useState } from 'react';
import { ProductContext } from '../components/productContext';
import { ShopContext } from '../components/shopContext';

export default function App({ Component, pageProps }) {
  const [product, setProduct] = useState('');
  const [isActive, setIsActive] = useState(true);
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <ShopContext.Provider value={{ isActive, setIsActive }}>
        <Component {...pageProps} />
      </ShopContext.Provider>
    </ProductContext.Provider>
  )

}
