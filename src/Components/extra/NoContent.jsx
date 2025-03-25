import React from 'react'
import { useNavigate } from 'react-router'
function NoContent(props) {
    const{text,btnText}=props
    const Nav=useNavigate()
    const handleHomeNavigation=()=>{
      Nav("/")
    }
  return (
    <div className='text-white text-center my-5 mx-auto p-0 p-md-5 rounded'>
      <h2>{text}</h2>
      <button onClick={handleHomeNavigation} className='btn btn-success btn-lg'>{btnText}</button>
    </div>
  )
}

export default NoContent
