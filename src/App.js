import React, { useState } from 'react'
import './App.css';
import './Navbar.css';
import './Sidebar.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Product from './components/Product';
import Compare from './components/Compare'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Context from './Context';


function App() {
  const [value, setValue] = useState([])
  return (
    <div className='App'>
      <Context.Provider value={{ value, setValue }}>
        <BrowserRouter>
          <div className='Navbar'><Navbar /></div>
          <div className='Sidebar'><Sidebar /></div>
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/products' element={<Product />} />
            <Route path='/compare' element={<Compare />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App; 
