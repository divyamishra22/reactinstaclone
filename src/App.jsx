// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from  './components/Navbar'
import Home from './Pages/Home'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import SignIn from './Pages/SignIn'
import SignUp from './components/SignUp'
import Profile from './Pages/Profile';
import CreatePost from './components/CreatePost'
import Searchbar from './components/Searchbar'
import { FollowProvider } from './hooks/follow'
import { AuthProvider } from './hooks/auth'
import Edit from './Pages/Edit'
import { FeedProvider } from './hooks/feed'
import { UploadProvider } from './hooks/upload'
import Post from './Pages/Post'
import Layout from './components/Layout'


function App() {
  

  return (
    <>
   <Router>
    
   
    <AuthProvider>
    <UploadProvider>
    <FollowProvider>
      <FeedProvider>
   
     <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/" element={<SignUp/>}></Route>
      <Route  element={<Layout/>}>
      <Route path="/profile/:username" element={<Profile/>}></Route>
      <Route path="/edit/:username" element={<Edit/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      {/* <Route path="/post/:postId" element={<Post/>}></Route> */}
      <Route path="/CreatePost" element={<CreatePost/>}></Route>
      <Route path="/Search" element={<Searchbar/>}></Route>
      </Route>
      </Routes>
      </FeedProvider>
      </FollowProvider>
      </UploadProvider>
      </AuthProvider>
      </Router>

    </>
  )
}

export default App
