import React from 'react'
import { useSelector } from 'react-redux'
import Price from '../extra/Price'

function CartNumbers() {
    const {cartNumber}=useSelector((state)=>state.cart)
    const items=[{title:"Subtotal",price:cartNumber.subtotal},{title:"Shipping",price:cartNumber.shipping},{title:"Tax",price:cartNumber.tax},{title:"Total",price:cartNumber.total}]
  return (
    <div id='cart-numbers'>
        <ul className='list-group mb-3'>
            {
                items.map((item)=>{
                    return(
                        <li className='list-group-item d-flex justify-content-between'>
                            <span>{item.title}</span>
                            <span className='text-muted'><Price value={item.price} decimals={2}/></span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default CartNumbers
