import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home';
import Register from './components/Register';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
