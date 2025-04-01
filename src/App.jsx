import React, { useEffect } from 'react'
import Nav from './Components/NavBar/Nav'
import {Routes,Route} from "react-router-dom"
import Home from './Components/Pages/Home'
import Single from './Components/Pages/Single'
import Cart from './Components/Pages/Cart'
import { useDispatch,useSelector } from 'react-redux'
import { setCartNumbers } from './features/cart/cartSlice'
function App() {
  const dispatch=useDispatch()
  const{cartItems}=useSelector((state)=>state.cart)
  useEffect(()=>{
    dispatch(setCartNumbers())
  },[cartItems])
  return (
    <div className='wrapper bg-dark text-white'>
      <Nav title="Ezee-Cart-Blitz"/>
      <div className='container mt-5 py-5 px-3 px-md-5'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Single/:id" element={<Single/>}></Route>
          <Route path="/Cart"element={<Cart/>}></Route >
        </Routes>
      </div>
    </div>
  )
}

export default App
