import React from 'react'
import Navbar from './Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import Devices from '../components/Devices'
import Contact from '../components/Contact'
import './Header.scss'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/devices' element={<Devices />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default Header
