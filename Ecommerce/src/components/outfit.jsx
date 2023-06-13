import React from 'react'
import { AiOutlineArrowRight, AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";
import {overview} from '../utils/animate.jsx'
import model from '../assets/model_man.png'
import { motion} from 'framer-motion'
import Customer from "./customer.jsx";

function Outfit() {
  return (
      <>
        <motion.div
              variants={overview}
              animate="overview"
              key="Outfits"
              className='flex flex-grow h-screen hover:cursor-pointer image_container relative overflow-hidden sm:mt-0 bg-custom-gradient-2'
              layoutId="Outfits"
              
              >
             <div className='item2-container lg:w-[50%] h-full lg:absolute lg:right-0 xl:me-40'>
             <motion.img
              src={model} width="450px" height="100%" className=' hidden sm:block absolute z-10 right-0 bottom-0' alt="" />
             </div>
             
              <motion.div 
            
            className='container xl:ms-40 overflow-hidden px-5 mt-10 flex  justify-center flex-col text-[#1a1919]'>
              <span className=" tracking-wider font-bold ff-achivo flex gap-2 items-center"> <BsFillDiamondFill/>CLOTHINGS</span>
              <h1 className=' uppercase font-bold ff-archivo text-6xl md:text-7xl z-20 max-w-[550px]'>Elevate your look, elevate your mood.</h1>

                <p className='py-5 max-w-[550px] ff-intern z-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eius ratione culpa ex officia non est labore commodi possimus perspiciatis quasi officiis, blanditiis ad doloremque perferendis molestias illum reiciendis iure.</p>
              <motion.button

            whileHover={{scale:1.05,y:"-7px", boxShadow:"0px 15px 20px rgba(46, 229, 157, 0.4);"}}
        
              className='px-5 py-2 rounded-full ring-1 bg-transparent ring-[#1a1919] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20 '>View Items<AiOutlineArrowRight/> </motion.button>
            <Customer/>
              </motion.div>
              <div className='h-[100%] flex items-center text-4xl absolute right-0 text-[#1a1919] px-2'>
                <AiOutlineCaretLeft/>
              </div>
              
            </motion.div>
            </>     
  )
}

export default Outfit