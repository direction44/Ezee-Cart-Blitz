import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProductButton from './ProductButton'
function Product(props) {
  const {product}=props
  const imagePath="/images/"+product.id+".jpg"
  const Nav=useNavigate()
  const handleClick=()=>
  {
      Nav(`/Single/${product.id}`)
  }
  return (
    <div className='col'>
      <div className='card h-100' id="product">
        <img src={imagePath} title={product.name} alt="" className='card-img-top pointer' onClick={handleClick}/>
        <div className='card-body p-4'>
          <div className='text-center'>
            <h6 className='fw-bolder'>{product.name}</h6>
            <span>{product.price}</span>
          </div>
        </div>
        <div className='card-footer p-4 pt-4 border-top-0 bg-transparent'>
          <ProductButton product={product}/>
        </div>
      </div>
    </div>
      )
}

export default Product
