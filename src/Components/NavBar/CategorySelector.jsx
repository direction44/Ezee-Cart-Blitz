import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setSelectedCategory } from '../../features/product/productSlice'
function CategorySelector() {
  let {categories,selectedCategory}=useSelector((state)=>state.products)
  const dispatch=useDispatch()
  let title=selectedCategory
  const handleMouseEnter=(e)=>{
    console.log(e.target.innerText)
    dispatch(setSelectedCategory(e.target.innerText))
  }
  return (
    <div className='dropdown mb-3 mb-lg-0'>
      <button className='btn btn-outline-success text-white dropdown-toggle'type='button' id='dropDownButton1' data-bs-toggle='dropdown'>{title}</button>
      <ul className='dropdown-menu'>
        {
            categories.map((Category)=>{
              return <li onMouseEnter={handleMouseEnter}key={Category}><a href="#" className='dropdown-item pointer'>{Category}</a></li>
            })
        }
      </ul>
    </div>
  )
}

export default CategorySelector
