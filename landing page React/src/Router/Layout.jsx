import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './../Components/Navbar/Nav';
import Footer from './../Components/Footer/Footer';

function Layout() {
  return (
    <div>

      <div className="mb-72">
        <Nav />
      </div>
      <Outlet></Outlet>

      
      <Footer />
    </div>
  )
}

export default Layout
