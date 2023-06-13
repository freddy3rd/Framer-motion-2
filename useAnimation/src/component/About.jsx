import { useInView } from 'framer-motion';
import React, { useRef, useState } from 'react'
import { motion, useAnimate } from 'framer-motion'
import { FaDirections } from "react-icons/fa";
import SHS from '../assets/high_school.jpg'

export default function About() {
  // const [isOpen, setIsOpen] = useState(false)
 

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-[1200x] gap-5 px-5 justify-center items-center my-20">
        <div className='mx-5'>
              <h1 className='text-4xl font-bold text-black uppercase self-end mb-10 text-center sm:text-start'>Lorem Ipsum</h1>
              <p className=' md:max-w-[400px] ff-monsterot text-justify font-light text-black' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio harum necessitatibus laudantium, vitae nobis dolore corporis consequuntur ad repellat, animi expedita! Illum eius qui, ea quisquam a repellendus ratione facere.</p>
              Related Skills
              <div className="flex flex-wrap gap-2 mt-4 w-[100%] lg:max-w-[300px]">
                <span className='px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer'>HTML</span>
                <span className='px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer'>CSS</span>
                <span className='px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer'>BOOTSTRAP</span>
                <span className='px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer'>TAILWIND CSS</span>
                <span className='px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer'>Javascript</span>
                <span className='px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer'>REACT</span>
              </div>
        </div>
        <div className='mx-5'>
          <div className=' w-[100%] md:max-w-[500px] h-[300px] self-center'>
            <img src="http://source.unsplash.com/Bd7gNnWJBkU" className='w-[100%] h-[100%] object-cover rounded-md shadow-2xl' alt="" />
          </div>
        </div>
      </div>
      <h1 className='ff-barlow text-4xl text-black text-center mb-10'>Educational Background</h1>
      <div className="grid grid-cols-1 xl:grid-cols-[200px_minmax(100px,_1fr)] relative w-[100%] items-center">
        <div className="grid place-items-center relative w-100% h-100% px-5 mb-10">
                  <div
                  key="SHS"
                  className="opacity-0 card card-compact text-[#171515] bg-white xl:w-96 w-[100%] max-w-[600px] shadow-xl xl:translate-x-96 z-10">
                  <figure className='h-[200px] '><img src={SHS} alt="JFBSHS" width="100%" /></figure>
                  <div className="card-body text-start">
                      <h2 className="card-title text-2xl lg:text-center text-start ff-barlow capitalize">judge felician belmonte sr high school</h2>
                      <span className='flex gap-2 items-center text-lg ff-barlow uppercase'>
                      <FaDirections/>
                      Address: 
                      </span>
                      <li className='ff-monsterot text-xs ff-monsterot px-2'>AFP Road, Garcia Heights, Holy Spirit, Quezon City, Quezon City, Philippines</li>
                      <div className="card-actions justify-end">
                        <button className=' px-6 py-2 bg-slate-600 ff-barlow rounded-2xl text-md'>VISIT</button>
                      </div>
                    </div>
                  </div> 
        </div>
        <div className="relative w-[100%] flex lg:items-center">
            <ul className="steps w-[100%] overflow-hidden xl:steps-vertical steps-horizontal xl:h-screen ">
                <li 

                data-content="✓" 
                className="step ff-barlow text-black font-semibold hover:cursor-pointer xl:translate-x-[50%] z-30" >
                  <div className='text-start relative  px-3'>
                    <p className='md:text-2xl text-center '>JUDGE FELICIANO BELMONTE HIGH SCHOOL</p>
                    <p className=' text-gray-700 xl:text-start text-center'>HIGH SCHOOL</p>
                  </div>
                </li>
                <li 
                data-content="✓" 
                className="step ff-barlow text-black font-semibold hover:cursor-pointer relative xl:translate-x-[50%] z-20" >
                  <div className='text-start relative  px-3'>
                    <p className='md:text-2xl text-center '>JUDGE FELICIANO BELMONTE HIGH SCHOOL</p>
                    <p className=' text-gray-700 xl:text-start text-center'>SENIOR HIGH SCHOOL</p>
                  </div> 
                  
                </li>
                <li 
                data-content="✓" 
                className="step ff-barlow text-black font-semibold hover:cursor-pointer xl:translate-x-[50%] z-10" >
                  <div className='text-start relative lg:self-center self-start'>
                  <p className='md:text-2xl text-center'>QUEZON CITY UNIVERSITY</p>
                  <p className=' text-gray-700 xl:text-start text-center'>COLLEGE</p>
                  </div> 
                </li>   
              </ul>
          </div>
        </div>
    </>

  )
}
