import React, { useEffect, useState } from 'react'
import LandingPage from './landingPage'
import Fullview from './fullview'
import Sneaker from './sneaker'
import Outfit from './outfit'

function Home() {
  const [currentItem,setCurrentItem] = useState(null)
  const [isActive,setActive] = useState(false)

  return (  
   <>
    <LandingPage status={isActive} item={currentItem} selectedStatus={setActive} selectedItem={setCurrentItem} />  
    {(currentItem === "sneakers") ? <Sneaker status={isActive} selectedStatus={setActive}  itemStatus={setCurrentItem} /> : (currentItem === "Outfits") ? <Outfit status={isActive} selectedStatus={setActive}  itemStatus={setCurrentItem} /> : null } 
   </>
  )
}

export default Home