import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Components imports
import NavBar from './NavBar';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import Provider from './Provider/Provider';


function App() {
  return (
    <>
      <NavBar/>
      <div className='App'>
              <Routes>
                  <Route path="/puntoVenta/public/products" element={<Product/>}/>
                  <Route path="/puntoVenta/public/providers" element={<Provider/>}/>
              </Routes>
      </div>
    </>
  );
}

export default App
