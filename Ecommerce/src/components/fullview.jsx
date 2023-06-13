import React from 'react'
import Sneaker from './sneaker'
import Outfit from './outfit'
import Items from './Items'


function Fullview({ selected, setSelected }) {
  return (
    <>
   <Sneaker/>
   <Outfit/>
   <Items/>
    </>
  )
}

export default Fullview