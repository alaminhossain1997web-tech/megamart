import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { API } from './Services/api.js'
import { CartProvider } from './Services/cart.jsx'

createRoot(document.getElementById('root')).render(
  <ApiProvider api ={API}>
    <CartProvider>
      <App />
    </CartProvider>
  </ApiProvider>,
)
