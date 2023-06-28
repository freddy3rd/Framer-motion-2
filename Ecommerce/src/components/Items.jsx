import React from 'react'
import sneaker from '../assets/sneacker.png'
import {Items_data} from '../data/db.jsx'
import { easeIn, motion } from 'framer-motion'
import {fadeInOut,animationStart} from '../utils/animate'
import { FaSearch } from "react-icons/fa";

function Items() {

return (
  <motion.div 
  variants={fadeInOut}
  initial="fadeOut"
  animate="fadeIn"
  transition={{
    type:"tween",
    ease:"easeInOut",
    duration: .5,
    staggerChildren: .1,
    delayChildren: animationStart + .01,
  }}
  className='w-full h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] gap-5 items-center justify-center sm:px-10 px-2'>
    <div className='margin-auto  p-5 shadow-lg rounded-2xl md:max-w-[200px] md:mx-2 mx-10 md:inline-block'>
     <div className='flex-1'>
     <label className="relative block ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FaSearch/>
        </span>
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
      </label>
     </div>
      <div className='py-2 flex-1'>
        <h1 className='font-semibold'>Sneakers</h1>
        <div className="form-control px-2">
          <label className="label cursor-pointer gap-10 ">
            <input type="checkbox"  className="checkbox" />
            <span className="label-text font-bold">Nike</span> 
          </label>
        </div>
        <div className="form-control px-2">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text font-bold">Jordan</span> 
          </label>
        </div>
      </div>
      <div className='py-4'>
        <h1 className='font-semibold'>Clothings</h1>
        <div className="form-control px-2">
          <label className="label cursor-pointer gap-10 ">
            <input type="checkbox"  className="checkbox" />
            <span className="label-text font-bold">Gucci</span> 
          </label>
        </div>
        <div className="form-control px-2">
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox" />
            <span className="label-text font-bold">Chanel</span> 
          </label>
        </div>
      </div>

    </div>
  <div className="overflow-x-auto w-[100%] flex gap-20 min-h-[500px] max-h-[500px]">
  <table className="table table-xs table-pin-rows table-pin-cols ">
    <thead>
      <tr className='text-center'>
      <th colSpan={2} className='text-center'>Item</th>
      <th>Available Size</th>
      <th>Available Color</th>
      <th></th>
      </tr>
    </thead>
    <tbody>
    {Items_data.map((data) =>{
      
       return(
        
        <motion.tr
        variants={fadeInOut}
        className='text-center' key={data.id}>

          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>

          <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={sneaker} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{data.item}</div>
             
            </div>
          </div>
        </td>
          <td>{data.Size.join(', ')}</td>
          <td>{data.Color.join(', ')}</td>

          <th>
            <button className="btn btn-ghost btn-xs px-4 font-bold" key={data.id} layoutID={`current_${data.id}`}>View Detail</button>
          </th>
          <th className=' shadow-sm'>
            <button className="btn btn-ghost btn-xs px-4 font-bold">Check Out</button>
          </th>
        </motion.tr>
        
       )
           
    }).slice(0,20)
    }
   
      </tbody>
    </table>
  </div>  
</motion.div>
  )
}

export default Items






