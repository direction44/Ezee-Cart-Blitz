import React from 'react'
import { useParams } from 'react-router'
import data from '../../data'
import ProductButton from '../Products/ProductButton'
import Line from '../extra/Line'
function Single() {
  const {id}=useParams()
    const product=data.find((product)=>product.id=== +id)
    const imagesPath="/images/"+product.id+".jpg"
    return (
      <div id='single' className='row justify-content-center align-items-center text-white mx-auto'>
        <div className='col-md-6'>
          <img src={imagesPath} alt={product.name} className='card-img-top mb-5 mb-md-0 p-0 p-lg-5'/>
        </div>
        <div className='col-md-6 text-center text-md-start'>
          <h2 className='fs-1 fw-bold'>{product.name}</h2>
          <div className='fs-5 mb-2'>{product.price}</div>
          <p className='lead'>
            {product.description}
          </p>
          <ProductButton/>
        </div>
        <Line/>
      </div>        
      )
}

export default Single
