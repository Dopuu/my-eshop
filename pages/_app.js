import '../styles/globals.css'
import React, { useState } from 'react';
import { ProductContext } from '../components/productContext';
import { ShopContext } from '../components/shopContext';
import ShopProvider from '../components/shopProvider';

export default function App({ Component, pageProps }) {
  const [product, setProduct] = useState('');
  const [isActive, setIsActive] = useState(true);
  return (
    <ShopProvider>
      <ProductContext.Provider value={{ product, setProduct }}>
        <ShopContext.Provider value={{ isActive, setIsActive }}>
          <Component {...pageProps} />
        </ShopContext.Provider>
      </ProductContext.Provider>
    </ShopProvider>
  )

}
