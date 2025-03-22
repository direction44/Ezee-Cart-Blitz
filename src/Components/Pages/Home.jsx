import React from 'react'
import data from '../../data'
import Products from '../Products/Products'

function Home() {
    return (
        <Products products={data}/>          
      )
}

export default Home
