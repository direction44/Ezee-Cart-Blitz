import React from 'react'
import { useParams } from 'react-router'
import data from '../../data'
function Single() {
  const {id}=useParams()
    const product=data.find((product)=>product.id=== +id)
    const imagesPath="/images/"+product.id+".jpg"
    console.log(imagesPath,"**************")
    return (
      <div className='row'>
        <div className='col-6'>
          <img src={imagesPath} alt="" className='w-50' />
        </div>
        <div className='col-6'>
          <h2>{product.name}</h2>
          <h2>{product.price}</h2>
        </div>
      </div>
        
      )
}

export default Single
