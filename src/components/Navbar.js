import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="container">
      <div className="box1">
        <img className="logo" src="https://www.kychub.com/hubfs/kyc%20hub%20logo.png" alt="no" />
        <div className="item1"><Link className='link' to='/'>Home</Link></div>
        <div className="item1">
          <div className="dropdown">Dashboard
            <div className="dropcont">
              <ul className="dc">
                <li>Start</li>
                <li>Progess</li>
                <li>Finish</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item1">Services</div>
        <div className="item1">Partners</div>
        <div className="item1">About Us</div>
        <div className="item1">Conatct Us</div>
      </div>
      <div className="box2">
        <div className="item2">
          <form className="frm">
            <input className="ip" type="text" placeholder="Search Here" />
            <button className="btn" type="button">Search</button>
          </form>
        </div>
        <div className="item2"><button className="btn"><a href='/' className="lks">Log In</a> </button></div>
        <div className="item2"><button className="btn"><a href='/'  className="lks">Sign In</a></button></div>
      </div>
    </div>
  )
}

export default Navbar