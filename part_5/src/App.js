

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import React from 'react'
import { Cart } from './features/cart/Cart'
import { Product } from './features/counter/Product'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/' element={<Product/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App