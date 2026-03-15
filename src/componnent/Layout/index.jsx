import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
    <div className='fixed z-50 w-full bg-white'>
      <Navbar/>
    </div>
    <div className='pt-44'>
      <Outlet/>
    </div>
    </>
  )
}

export default Layout
