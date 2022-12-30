import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate()

  function logout() {
    localStorage.clear()
    navigate('/signin')
  }

  return (
    <div className='navbar'>
      {
        auth ?
          <ul className='nav-ul'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/add'>Add Product</Link></li>
            <li><Link to='/update'>Update Product</Link></li>
            <li><Link onClick={logout} to='/signin'>Logout ({JSON.parse(auth).firstName})</Link></li>
          </ul>
          :
          <ul className='nav-ul-right'>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signin'>Signin</Link></li>
          </ul>
      }
    </div>
  )
}

export default Navbar