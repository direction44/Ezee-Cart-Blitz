import React from 'react'

function CartBuyButton() {
    const handleBuyButton=()=>{
        alert("button clicked")
    }
  return (
   <button onClick={handleBuyButton} className='btn btn-success d-block w-100 fw-bold mt-3'>Buy Now</button>
  )
}

export default CartBuyButton
