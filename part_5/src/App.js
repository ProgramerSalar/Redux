import React, { useEffect, useState } from 'react'
import { Cart } from './features/cart/Cart'
import { Product } from './features/counter/Product'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsync } from './features/cart/cartReducer'

const App = () => {

  const [showCart, setShowCart] = useState(false)
  const item = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsync())
  },[])
  return (
    <div>
      <button onClick={() => setShowCart(!showCart)}>Go to Cart [{item.length}]</button> 
    {
      showCart ? <Cart/> : <Product/>
    }

      
    </div>
  )
}

export default App