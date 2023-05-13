import React from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
    <div classname='form'>
    <div className='signup'>
    {/* <div className='form'> */}
     <p> Sign In to view like follow your friends</p> 
    <div className='form0'>
      <input type= "text" name="username" id="username" placeholder="Name"/>
    </div>
    <div className='form1'>
      <input type= "email" name=" email" id="email" placeholder="Email"/>
    </div>
    <div className='form2'>
      <input type= "password" name=" password" id="password" placeholder="Password"/>
    </div>
    <p>By Signing Up, You Agree to our Terms and Policy</p>
    <button type="submit" id="submit-btn" >SignUp</button>
    {/* </div> */}
    
    </div>
    <div className='form3'>
    Aready have an Account?
    <Link to="/SignIn">
    <span> SignIn</span>
    </Link>
    </div>
    </div>
    </>
  )
}

export default SignUp
