import React from 'react'
import NavBar from './NavBar'
import Footer from "./Footer"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="relative">
      <div className="bg-transparent absolute">
        <NavBar />
      </div>
      <main><Outlet /></main>
      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default Layout