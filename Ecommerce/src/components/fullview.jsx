import React, { useEffect, useState } from 'react'
import Sneaker from './sneaker'
import Outfit from './outfit'
import Items from './Items'


function Fullview({selectedItem}) {
  const [isSelected, setIsSelected] = useState("")
  
  useEffect(()=>{
    setIsSelected(selectedItem)
  },[isSelected])
  


  return (
    <>
    {/* <Outfit/> */}
    {/* <Sneaker/> */}
    {/* {(isSelected === "sneakers") ? <Sneaker/>: null} */}
    
    </>
  )
}

export default Fullview