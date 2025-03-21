import React from 'react'
import Nav from './Components/NavBar/Nav'
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className='wrapper bg-dark text-white'>
      <Nav title="Ezee-Cart-Blitz"/>
      <div className='container mt-5 py-5 px-3 px-md-5'>
        <Routes>
          <Route path="/" element={<h1>Home Routes</h1>}></Route>
          <Route path="/Single/:id" element={<h1>Single Routes</h1>}></Route>
          <Route path="/Cart"element={<h1>Cart Routes</h1>}></Route >
        </Routes>
      </div>
    </div>
  )
}

export default App
