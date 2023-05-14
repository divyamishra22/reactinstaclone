import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
     <ul className='nav-menu'>
      <Link to="SignUp">
      <li>SignUp</li>
      </Link>

      <Link to="SignIn">
      <li>SignIn</li>
      </Link>

      <Link to="Profile">
      <li>Profile</li>
      </Link>

      <Link to="/Home">
      <li>Home</li>
      </Link>

      <Link to="/CreatePost">
      <li>CreatePost</li>
      </Link>

     </ul>
    </div>
    </>
  )
}

export default Navbar
