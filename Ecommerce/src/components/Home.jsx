import React, { useEffect, useState } from 'react'
import LandingPage from './landingPage'

import Sneaker from './sneaker'
import Outfit from './outfit'

function Home() {
  const [currentItem,setCurrentItem] = useState(null)
  const [isActive,setActive] = useState(false)
  const [isMobile,setIsMobile] = useState(false)

  useEffect(()=>{
    if(window.innerWidth > 785){
      setIsMobile(isMobile)
    }else{
      setIsMobile(!isMobile)
    }
  },[])


  return (  
   <>
    {!isMobile ? <LandingPage status={isActive} item={currentItem} selectedStatus={setActive} selectedItem={setCurrentItem} /> : <Sneaker status={isActive} selectedStatus={setActive}  itemStatus={setCurrentItem} />}
    {(currentItem === "sneakers") ? <Sneaker status={isActive} selectedStatus={setActive}  itemStatus={setCurrentItem} /> : (currentItem === "Outfits") ? <Outfit status={isActive} selectedStatus={setActive}  itemStatus={setCurrentItem} /> : null } 
   </>
  )
}

export default Home