import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './componnent/Layout/index'
import ProtectedRoute from './componnent/ProtectedRoute'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Signup from './Pages/Signup'
import Shop from './Pages/Shop'
import Productdetails from './Pages/Productdetails'
import Sopingcart from './Pages/Sopingcart'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/> }></Route>
      <Route path="/signup" element={<Signup/> }></Route>
      <Route path="/" element={<Layout/> }>
         <Route index element={<Home/>}/>
         <Route path="shop" element={<Shop/>}/>
         <Route path="/shop/productdetails/:id" element={<Productdetails />} />
         <Route path="sopingcart" element={<Sopingcart/>}/>
         <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
         </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
