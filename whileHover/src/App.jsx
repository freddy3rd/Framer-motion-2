
import { useEffect, useState } from 'react'
import './App.css'

import MainContent from './components/MainContent'
import ActiveContent from './components/ActiveContent'


function App() {
  const [selected, setSelected] = useState(null)

  return (
   <>
    <MainContent setSelected={setSelected} />
    <ActiveContent selected={selected} setSelected={setSelected}/>
   </>
  )
}

export default App
