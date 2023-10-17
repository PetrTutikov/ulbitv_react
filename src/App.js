import React from 'react'
import './styles/App.css'
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'
import NavBar from './components/UI/Navbar/NavBar'
function App () {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/about" element={<About />}/>
        <Route path="/posts" element={<Posts />}/>
        <Route path="/" element={<Posts />}/>
        <Route path="*" element={<Navigate to='/error' replace/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
