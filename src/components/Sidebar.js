import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className=' sbar sbar-title'>Menu</div>
      <Link className='link' to='/products'><div className='sbar'>Product Details</div></Link>
      <Link className='link' to='/compare'><div className='sbar'>Compare Product Details</div></Link>
    </div>
  )
}

export default Sidebar