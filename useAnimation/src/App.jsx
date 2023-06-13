import { useState } from 'react'
import './App.css'
import Home from './component/home'
import About from './component/About'
import Navigation from './component/Navigation'
import Project from './component/Project'

function App() {

  return (
  <div className='grid place-items-center relative'>
  <Navigation/>
  <Home/>
  <About/>
  <Project/>
  </div>
   
    
  )
}

export default App
