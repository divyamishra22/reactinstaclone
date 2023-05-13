import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'
const SignIn = () => {
  return (
    <div className='signin'>
      <div>
        
        <div className='loginform'>
          <div>
          <input type="email" name="email" id="email" placeholder='Email'/>
        </div>
        <div>
          <input type="password" name="password" id="password" placeholder='Password'/>
        </div>
        <button type='submit' id="login-btn" >LogIn</button>
      </div>
      
      <div className="loginform2">
          Don't have an account ?
          <Link to="/signup">
            <span style={{ color: "blue", cursor: "pointer" }}>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
