// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from  './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Profile from './components/Profile'


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
       </BrowserRouter>

    </>
  )
}

export default App
