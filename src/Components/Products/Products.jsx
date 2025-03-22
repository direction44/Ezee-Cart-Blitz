import React from 'react'

function Products(props) {
    const {products}=props
  return (
    <div>
      <ul>
      {products.map((product)=>{
        return(
            <li key={product.id}>{product.name}</li>
        )
      })}
      </ul>
    </div>
  )
}

export default Products
