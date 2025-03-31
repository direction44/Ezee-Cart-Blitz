import React from 'react'
import { useParams } from 'react-router'
import data from '../../data'
import ProductButton from '../Products/ProductButton'
import Line from '../extra/Line'
import Products from "../Products/Products"
import { useSelector } from 'react-redux'

function Single() {
  const{single,singleSimilarProduct}=useSelector((state)=>state.products)
  // const {id}=useParams()
  //   const product=data.find((product)=>product.id=== +id)
    const imagesPath="/images/"+single.id+".jpg"
    return (
      <div id='single' className='row justify-content-center align-items-center text-white mx-auto'>
        <div className='col-md-6'>
          <img src={imagesPath} alt={single.name} className='card-img-top mb-5 mb-md-0 p-0 p-lg-5'/>
        </div>
        <div className='col-md-6 text-center text-md-start'>
          <h2 className='fs-1 fw-bold'>{single.name}</h2>
          <div className='fs-5 mb-2'>{single.price}</div>
          <p className='lead'>
            {single.description}
          </p>
          <ProductButton/>
        </div>
        <Line/>
        <h2 className='text-white my-4 text-center'>Similar Products Like This</h2>
        <Products products={singleSimilarProduct}/>
      </div>        
      )
}

export default Single
