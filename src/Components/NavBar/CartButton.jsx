import React from 'react'
import { useNavigate } from 'react-router-dom'
function CartButton() {
  let items=["shirt","tshirt"]
  const Nav=useNavigate()
  let bgColorName=items.length===0?"none":"white"
  const handleCartNaviagtion=()=>{
    Nav("/cart")
  }
  return (
    <button type='button' className='btn btn-outline-success d-md-block mt-3 mt-lg-0' onClick={handleCartNaviagtion}>
      <i className='bi bi-cart3'></i>
      <span className='mx-2' onClick={handleCartNaviagtion}>Checkout</span>
      <span className={`badge text-success bg-${bgColorName}`}>{items.length}</span>
    </button>
  )
}

export default CartButton
