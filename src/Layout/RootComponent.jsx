import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Topbar from '../Components/Topbar'

const RootComponent = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </div>
  )
}

export default RootComponent

