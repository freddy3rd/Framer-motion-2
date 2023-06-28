import { useState } from 'react'
import './App.css'
import Home from './component/home'
import Navigation from './component/Navigation'

function App() {
  

  return (
  <div className='grid place-items-center relative'>
  <Navigation/>
  <Home/>
  </div>
   
    
  )
}

export default App
