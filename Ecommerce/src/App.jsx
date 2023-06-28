import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'

import { Route, Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import Items from './components/Items'
import ViewItem from './components/viewItem'



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
        <Route path="/:id/items/Description" element={<ViewItem/>}/>
      </Routes>
    </>
  )
}

export default App
