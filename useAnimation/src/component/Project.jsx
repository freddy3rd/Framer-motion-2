import React from 'react'
import { animate, motion, useAnimate } from 'framer-motion'
import SHS from '../assets/high_school.jpg'
import hero from '../assets/hero.jpg'
import ArrowRight from './ArrowRight'

function Project() {
  return (
    <div className="grid items-center w-[100%] max-w-[1200px] px-4 py-10">
        <h1 className='ff-barlow text-4xl text-black text-center mb-10'>Projects</h1>
        <div className="flex justify-end items-center gap-3">
        <button className='py-4 text-end text-black ff-barlow'>SEE ALL </button>
        <ArrowRight/>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-5'>
            <motion.div
                whileHover={{scale:1.01}}
            className='grid relative project-container row-span-2 h-[100%] w-[100%] hover:cursor-pointer'>
                <img src={SHS}  className='w-[100%] h-[100%] object-cover rounded-lg shadow-lg ' alt=""  />
                <h1 className='font-bold ff-barlow text-black p-4 text-xl uppercase'>Javascript Projects</h1>
            </motion.div>
            <motion.div
                whileHover={{scale:1.01}}
            className='grid relative project-container h-[100%] w-[100%] hover:cursor-pointer'>
                <img src={hero} className='w-[100%] h-[100%] object-cover rounded-lg shadow-lg '   alt="" />
                <h1 className='font-bold ff-barlow text-black p-4 text-xl uppercase'>PHP Projects</h1>
            </motion.div>
            <motion.div
                whileHover={
                    {scale: 1.02}
                }
            className='grid relative project-container  h-[100%] w-[100%] hover:cursor-pointer'>
                <img src={SHS}  className='w-[100%] h-[100%] object-cover rounded-lg shadow-lg '  alt="" />
                <h1 className='font-bold ff-barlow text-black p-4 text-xl uppercase'>React Projects</h1>
            </motion.div>

        </div>
    </div>
  )
}

export default Project