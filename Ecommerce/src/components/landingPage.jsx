import { AiOutlineArrowRight, AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";
import {scale,image_container} from '../utils/animate.jsx'
import sneaker from '../assets/sneacker.png'
import model_man from '../assets/model_man.png'

import React, { useEffect, useRef, useState } from 'react'
import { motion} from 'framer-motion'

function LandingPage() {
 
  return (

    <>
      <div className="flex flex-wrap bg-slate-400">
        <motion.div 
        className="flex w-full absolute box-border h-full overflow-hidden">

            <motion.div
              variants={image_container}
             
              initial="hidden"
              whileHover="hover"
              whileTap="hover"
              key="sneakers"
              className='flex flex-grow hover:cursor-pointer image_container relative overflow-hidden'
              layoutId="sneakers"
              
              >
              <motion.img
              variants={scale}
              src={sneaker} className='absolute z-10 right-0 bottom-0 opacity-[70%]' alt="" />
              <motion.div 
            
              className='container overflow-hidden px-10 flex justify-start md:justify-center flex-col bg-custom-gradient-1 text-[#F6F6F6]'>
              <span className=" tracking-wider font-bold ff-achivo flex gap-2 items-center mt-5"> <BsFillDiamondFill/>SNEAKERS</span>
              <h1 className=' uppercase font-bold ff-archivo text-6xl lg:text-7xl z-20 max-w-[550px]'>Walk in style, rock good sneakers.</h1>
              <p className='py-5 max-w-[550px] ff-intern z-20 '>Put on a great pair of sneakers, and suddenly you're ready to conquer the world, one stylish step at a time.</p>
              <motion.button

               whileHover={{scale:1.05,y:"-7px", boxShadow:"0px 15px 20px rgba(46, 229, 157, 0.4);"}}
        
              className='px-5 py-2 rounded-full ring-1 bg-transparent ring-[#F6F6F6] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20 '>Discover More <AiOutlineArrowRight/> </motion.button>
              </motion.div>
              <div className='h-[100%] flex items-center text-4xl absolute right-0 text-[#F6F6F6] px-2'>
                <AiOutlineCaretLeft/>
              </div>
            </motion.div>

            <motion.div
              variants={image_container}
              initial="hidden"
              whileHover="hover"
              whileTap="hover"
              
              className='flex flex-grow hover:cursor-pointer image_container relative overflow-hidden'
              key="outfit"
              layoutId="outfit"
          
              >
              <motion.img
              variants={scale}
              src={model_man} width="450px" height="100%"  className='opacity-[70%] absolute z-10 -right-10 bottom-0' alt="" />
              <div className='h-[100%] flex items-center text-4xl text-[#F6F6F6] bg-transparent absolute px-2'>
                <AiOutlineCaretRight/>
              </div>
              <motion.div 
            
              className='container overflow-hidden px-10 flex justify-start md:justify-center flex-col bg-custom-gradient-2 text-[#1a1919]'>
              <span className=" tracking-wider font-bold ff-achivo flex gap-2 items-center mt-5"><BsFillDiamondFill/> CLOTHINGS</span>
              <h1 className=' uppercase font-bold ff-archivo text-6xl lg:text-7xl z-20 max-w-[550px]'>Elevate your look, elevate your mood.</h1>
              <p className='py-5 max-w-[550px] ff-intern z-20 '>Dress well, feel confident, and let your outfit speak volumes without saying a word.</p>
              <motion.button
              
              whileHover={{scale:1.05,y:"-7px", boxShadow:"0px 15px 20px rgba(46, 229, 157, 0.4);"}}
              className='px-5 py-2 rounded-full ring-1 ring-[#1a1919] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20'>Discover More <AiOutlineArrowRight/> </motion.button>
              </motion.div>
 
            </motion.div>
            
        </motion.div>
    </div>
    </>
  )
  
}

export default LandingPage