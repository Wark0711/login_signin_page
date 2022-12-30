import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Login from './components/Login'
import PrivateComp from './components/PrivateComp'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path='/' element={<h2>Product List Component</h2>} />
            <Route path='/add' element={<h2>Add Product Component</h2>} />
            <Route path='/update/' element={<h2>Update Product Component</h2>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
