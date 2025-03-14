import React from 'react'
import CategorySelector from './CategorySelector'
import SearchBar from './SearchBar'
import CartButton from './CartButton'

function Nav() {
  return (
    <nav className='navbar navbar-eaxpand-lg navbar-dark bg-dark border-bottom fixed-top'>
        <div className='container-fluid px-md-5'>
          <span id='name' className='navbar-brand fw-bold pointer'>Ezee-Cart-Blitz</span>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bf-target='#navbarSupportedContent'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-contetnt-end' id='navbarSupportedContent'>
            Heelo
            <CategorySelector/>
            <SearchBar/>
            <CartButton/>
            </div>
        </div>
    </nav>
  )
}

export default Nav
