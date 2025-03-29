import React from 'react'
import NoContent from '../extra/NoContent'
import data from '../../data'
import CartItem from '../cart/CartItem'
import CartNumbers from '../cart/CartNumbers'
import CartBuyButton from '../cart/CartBuyButton'
function Cart() {
  const cartItem=data.slice(0,2)
  if(cartItem.length===0)
  {
    return (
  
      <h1>
        <NoContent text="Nothing in your cart" btnText="Browse Product"/>
      </h1>
    )
  }
  else{
   return <div className='row py-3'>
    <div className='col-12 col-md-10 col-xl-8 mx-auto'>
      <div id="cart" className='border p-3 bg-white text-dark my-3 my-md-0 rounded'>
        <h4 className='mb-3 px-1'>Cart</h4>
        <ul className='list-group mb-3'>
        {
          cartItem.map((item)=>{
            return <CartItem key={item.id} item={item}/>
          })
        }
        </ul>
        <CartNumbers/>
        <CartBuyButton/>
      </div>
    </div>
   </div>
  }
}

export default Cart
