import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './componnent/Layout/Index'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/> }></Route>
      <Route path="/signup" element={<Signup/> }></Route>
      <Route path="/" element={<Layout/> }>
         <Route index element={<Home/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
