import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='class1'>
     <p> Sign in to view like follow your friends</p> 
    </div>
    <div className='form0'>
      <input type= "text" name="username" id="username" placeholder="Name"/>
    </div>
    <div className='form1'>
      <input type= "email" name=" email" id="email" placeholder="Email"/>
    </div>
    <div className='form2'>
      <input type= "password" name=" password" id="password" placeholder="Password"/>
    </div>
    <p>By signing up, you agree to our terms and policy</p>
    <button type="submit" id="submit-btn" >SignUp</button>
    </>
  )
}

export default SignUp
