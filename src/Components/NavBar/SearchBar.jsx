import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setSearchTerm } from '../../features/product/productSlice'
function SearchBar() {
 const {searchTerm}=useSelector((state)=>state.products)
 const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleChnage=(e)=>{
    dispatch(setSearchTerm(e.target.value))
  }
  return (
   <form className='d-flex ms-md-0 ms-lg-3' onSubmit={handleSubmit}>
    <input type="search" name="" id=""  placeholder='search products' className='form-control ms-md-auto me-2' onChange={handleChnage} value={searchTerm}/>
   </form>
  )
}

export default SearchBar
