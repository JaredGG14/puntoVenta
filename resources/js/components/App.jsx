import './bootstrap.js'
import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//Components imports


function App() {
  return (
    <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route path="/category_all" element={<ShowCategory_All/>} />
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
                <Route/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
