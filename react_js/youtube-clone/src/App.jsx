import React from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Video from './pages/video/Video'

function App() {
  return (
    <>
      <NavBar/>
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
      </Router>
      </>
  )
}

export default App