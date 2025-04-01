import React from 'react'
import { useDispatch } from 'react-redux'
import {addToCart}  from "../../features/cart/cartSlice"
function ProductButton(props) {
  const {product}=props
  const dispatch=useDispatch()
  const handleAddItem=()=>{
    dispatch(addToCart(product))
  }
  return (
   <button onClick={handleAddItem} className='btn btn-outline-success d-block w-100'>Add To Cart</button>
  )
}

export default ProductButton
