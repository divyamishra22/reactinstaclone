// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from  './components/Navbar'
import Home from './components/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
// import Profile from './components/Profile'
import Profile from './Pages/Profile';
import CreatePost from './components/CreatePost'
import Searchbar from './components/Searchbar'



function App() {
  

  return (
    <>
   <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/profile/:username" element={<Profile/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/CreatePost" element={<CreatePost/>}></Route>
      <Route path="/Search" element={<Searchbar/>}></Route>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
