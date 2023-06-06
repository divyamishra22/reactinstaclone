// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from  './components/Navbar'
import Home from './Pages/Home'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
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



function App() {
  

  return (
    <>
   <BrowserRouter>
    
    <AuthProvider>
    <UploadProvider>
    <FollowProvider>
      <FeedProvider>
      <Navbar/>
     <Routes>
      {/* <Route path="/" element={<Home/>}></Route> */}
      <Route path="/SignIn" element={<SignIn/>}></Route>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      <Route path="/profile/:username" element={<Profile/>}></Route>
      <Route path="/edit/:username" element={<Edit/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="/post/:postId" element={<Post/>}></Route>
      <Route path="/CreatePost" element={<CreatePost/>}></Route>
      <Route path="/Search" element={<Searchbar/>}></Route>
      </Routes>
      </FeedProvider>
      </FollowProvider>
      </UploadProvider>
      </AuthProvider>
      </BrowserRouter>

    </>
  )
}

export default App
