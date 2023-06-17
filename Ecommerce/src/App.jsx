import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'

import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'


function App() {
  // const [currentItem,setCurrentItem] = useState(null)
  // const [isActive,setActive] = useState(false)

  return (
    <>
     <Navigation/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/:id' element={<Home />} />
        <Route path="/:id/items" element={<Items/>}/>
      </Routes>
    </>
  )
}

export default App
