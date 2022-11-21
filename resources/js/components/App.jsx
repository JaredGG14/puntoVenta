import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Components imports
import NavBar from './NavBar';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import Provider from './Provider/Provider';
import Sell from './Sells/Sell';
import User from './User/User'


function App() {
  return (
    <>
    <NavBar/>
      <div className='App'>
              <Routes>
                  <Route path="/puntoVenta/public/products" element={<Product />}/>
                  <Route path="/puntoVenta/public/providers" element={<Provider />}/>
                  <Route path="/puntoVenta/public/sells" element={<Sell />}/>
                  <Route path="/puntoVenta/public/users" element={<User />}/>
                  <Route path="/puntoVenta/public/" element={<Product/>}/>
              </Routes>
      </div>
    </>
  );
}

export default App
