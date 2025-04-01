import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addToCart,removeFromCart}  from "../../features/cart/cartSlice"
function ProductButton(props) {
  const {product}=props
  const{cartItems}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const isItemPresentInCart=Boolean(cartItems.find((item)=>item.id===product.id))
  const handleAddItem=()=>{
    dispatch(addToCart(product))
  }
  const handleRemoveItem=()=>{
    dispatch(removeFromCart(product))
  }
  if(isItemPresentInCart)
  {
    return (
      <button onClick={handleRemoveItem} className='btn btn-outline-danger d-block w-100'>Remove From Cart</button>
     )
  }
  else{
    return (
     <button onClick={handleAddItem} className='btn btn-outline-success d-block w-100'>Add To Cart</button>
    )

  }
}

export default ProductButton
