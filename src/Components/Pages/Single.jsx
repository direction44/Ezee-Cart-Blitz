import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import data from '../../data'
import ProductButton from '../Products/ProductButton'
import Line from '../extra/Line'
import Products from "../Products/Products"
import { useSelector,useDispatch } from 'react-redux'
import { setSingleProduct } from '../../features/product/productSlice'
import Price from '../extra/Price'
function Single() {
  const{single,singleSimilarProduct}=useSelector((state)=>state.products)
  const dispatch=useDispatch()
  const {id}=useParams()
  useEffect(()=>{
    dispatch(setSingleProduct(id))
  },[id])
    const imagesPath="/images/"+single.id+".jpg"
    return (
      <div id='single' className='row justify-content-center align-items-center text-white mx-auto'>
        <div className='col-md-6'>
          <img src={imagesPath} alt={single.name} className='card-img-top mb-5 mb-md-0 p-0 p-lg-5'/>
        </div>
        <div className='col-md-6 text-center text-md-start'>
          <h2 className='fs-1 fw-bold'>{single.name}</h2>
          <div className='fs-5 mb-2'><Price value={single.price}/></div>
          <p className='lead'>
            {single.description}
          </p>
          <ProductButton product={single}/>
        </div>
        <Line/>
        <h2 className='text-white my-4 text-center'>Similar Products Like This</h2>
        <Products products={singleSimilarProduct}/>
      </div>        
      )
}

export default Single
