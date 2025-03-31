import React from 'react'
import { useSelector } from 'react-redux'

function CategorySelector() {
  let {categories,selectedCategory}=useSelector((state)=>state.products)
  
  let title=selectedCategory
  return (
    <div className='dropdown mb-3 mb-lg-0'>
      <button className='btn btn-outline-success text-white dropdown-toggle'type='button' id='dropDownButton1' data-bs-toggle='dropdown'>{title}</button>
      <ul className='dropdown-menu'>
        {
            categories.map((Category)=>{
              return <li key={Category}><a href="#" className='dropdown-item pointer'>{Category}</a></li>
            })
        }
      </ul>
    </div>
  )
}

export default CategorySelector
