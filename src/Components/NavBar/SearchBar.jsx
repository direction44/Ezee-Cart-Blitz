import React, { useState } from 'react'

function SearchBar() {
 let[text,setText]= useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
  }

  const handleChnage=(e)=>{
    setText(e.target.value)
  }
  console.log(text)
  return (
   <form className='d-flex ms-md-0 ms-lg-3' onSubmit={handleSubmit}>
    <input type="search" name="" id=""  placeholder='search products' className='form-control ms-md-auto me-2' onChange={handleChnage} value={text}/>
   </form>
  )
}

export default SearchBar
