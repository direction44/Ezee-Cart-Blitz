import React from 'react'
import data from '../../data'
import Products from '../Products/Products'
import { useSelector,useDispatch } from 'react-redux'
function Home() {
  const{productsFromSearch}=useSelector((state)=>state.products)
    return (
        <Products products={productsFromSearch}/>          
      )
}

export default Home
