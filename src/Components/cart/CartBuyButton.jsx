import React from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
function CartBuyButton() {
  const nav=useNavigate()
    const  handleBuyButton=async()=>{
      const result=await Swal.fire({
        title:"Do you want to place the order?",
        showDenyButton:true,
        confirmButtonText:"Place Order",
        denyButtonText:"Don't place"
      })
      if(result.isConfirmed)
      {
       await Swal.fire({
          title:"Done!",
          text:"Order place successfully",
          icon:"success",
        })
        nav("/")
        window.location.reload()
      }
      else if(result.isDenied)
      {
        await Swal.fire({
          title:"Order not placed",
          text:"",
          icon:"info"
        })
      }
    }
  return (
   <button onClick={handleBuyButton} className='btn btn-success d-block w-100 fw-bold mt-3'>Buy Now</button>
  )
}

export default CartBuyButton
