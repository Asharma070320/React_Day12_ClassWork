import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <br />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
