import React from 'react'

function CategorySelector() {
  let Categories=["All","Scalves","Hats","Jackets","Socks"]
  let title="All"
  return (
    <div className='dropdown mb-3 mb-lg-0'>
      <button className='btn btn-outline-success text-white dropdown-toggle'type='button' id='dropDownButton1' data-bs-toggle='dropdown'>{title}</button>
      <ul className='dropdown-menu'>
        {
            Categories.map((Category)=>{
              return <li key={Category}><a href="#" className='dropdown-item pointer'>{Category}</a></li>
            })
        }
      </ul>
    </div>
  )
}

export default CategorySelector
