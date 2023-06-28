import React, { useState } from 'react'
import Sneaker from '../assets/sneacker.png'
import { IoIosCart,IoIosCheckmarkCircleOutline,IoIosAdd,IoIosRemove,IoMdArrowRoundBack } from "react-icons/io";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
function ViewItem({selectedItem}) {
  const [count,setCount] = useState(0)

  return (
   <>
    <div className='w-screen h-screen grid grid-cols-1 px-10 gap-5 place-items-center '>
    <div className='grid grid-cols-[400px_1fr] relative place-items-center'>
      <div className="col-span-2 my-4 w-full">
        <Link to='/:id/items'><IoMdArrowRoundBack className='font-bold text-4xl '/></Link>
      </div>
      <div className="activeItem w-full h-full shadow-xl rounded-2xl">
        <img src={Sneaker} className='w-full h-full object-cover' alt="" />
      </div>
      <div className='flex flex-col h-full  px-10 self-start py-5'>
        <h1 className='font-bold ff-achivo text-5xl my-5'>Item name</h1>
        <p className='max-w-[400px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus debitis consequatur quas nihil at minus earum assumenda unde voluptatibus illo.</p>
        
        <div className="rating rating-sm my-3">
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
          <h1 className='mx-2 text-sm ff-intern'>Ratings</h1>
        </div>
        <h3 className='font-semibold text-2xl px-1 items-end'>₱ 1,200</h3>
        
        <div className="flex gap-2 mt-4 flex-wrap items-end">
          <span>Quantity</span>
          <button className=' px-2 h-full bg-base-200'><IoIosRemove/></button>
          <input type="number" className="bg-white border border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 max-w-[50px] text-center" disabled value={count}/>
          <button className=' px-2 h-full bg-base-200'><IoIosAdd/></button>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap">
          <button className='btn flex gap-2 items-center'><IoIosCart/> ADD TO CART</button>
          <button className='btn flex gap-2 items-center'><IoIosCheckmarkCircleOutline/> CHECKOUT</button>
        </div>
        
      </div>
    </div>
    </div>
   </>
  )
}

export default ViewItem