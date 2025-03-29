import React from 'react'
const cartNumber={
    Subtotal:1500.00,
    Shipping:40.00,
    Tax:287.82,
    Total:1926.82
}
function CartNumbers() {
    const items=[{title:"Subtotal",price:cartNumber.Subtotal},{title:"Shipping",price:cartNumber.Shipping},{title:"Tax",price:cartNumber.Tax},{title:"Total",price:cartNumber.Total}]
  return (
    <div id='cart-numbers'>
        <ul className='list-group mb-3'>
            {
                items.map((item)=>{
                    return(
                        <li className='list-group-item d-flex justify-content-between'>
                            <span>{item.title}</span>
                            <span className='text-muted'>{item.price}</span>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default CartNumbers
