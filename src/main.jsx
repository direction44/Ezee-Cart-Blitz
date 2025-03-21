import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap"//import bootstrap js file
import "bootstrap/dist/css/bootstrap.css"//import bootstrap css file
import "bootstrap-icons/font/bootstrap-icons.css"//import bootstrap icon file
import "./main.css"
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
