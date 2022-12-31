import '../styles/globals.css'
import React, { useState } from 'react';
import { ProductContext } from '../components/productContext';
export default function App({ Component, pageProps }) {
  const [ product, setProduct ] = useState('');

  return (
  <ProductContext.Provider value={{product, setProduct}}>
    <Component {...pageProps} />
  </ProductContext.Provider>)
}
