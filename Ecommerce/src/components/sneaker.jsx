import React from 'react'
import { AiOutlineArrowRight, AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";
import {overview} from '../utils/animate.jsx'
import sneaker from '../assets/sneacker.png'
import { motion} from 'framer-motion'
import Customer from "./customer.jsx";
function Sneaker() {
  return (
      <>
        <motion.div
              variants={overview}
              animate="overview"
              key="sneakers"
              className='flex flex-grow h-screen hover:cursor-pointer image_container relative sm:mt-0 bg-custom-gradient-1'
              layoutId="sneakers"
              
              >
             <div className='item1-container lg:w-[50%] h-full lg:absolute lg:right-0 xl:me-40'>
             <motion.img
              src={sneaker} className=' hidden sm:block absolute z-10 right-0 bottom-0' alt="" />
             </div>
             
              <motion.div 
            
            className='container xl:ms-40 overflow-hidden px-5 mt-10 flex  justify-center flex-col text-[#F6F6F6]'>
              <span className=" tracking-wider font-bold ff-achivo flex gap-2 items-center"> <BsFillDiamondFill/>SNEAKERS</span>
              <h1 className=' uppercase font-bold ff-archivo text-6xl md:text-7xl z-20 max-w-[550px]'>Walk in style, rock good sneakers.</h1>

                <p className='py-5 max-w-[550px] ff-intern z-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eius ratione culpa ex officia non est labore commodi possimus perspiciatis quasi officiis, blanditiis ad doloremque perferendis molestias illum reiciendis iure.</p>
              <motion.button

            whileHover={{scale:1.05,y:"-7px", boxShadow:"0px 15px 20px rgba(46, 229, 157, 0.4);"}}
        
              className='px-5 py-2 rounded-full ring-1 bg-transparent ring-[#F6F6F6] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20 '>View Items<AiOutlineArrowRight/> </motion.button>
            <Customer/>
              </motion.div>
              <div className='h-[100%] flex items-center text-4xl absolute right-0 text-[#F6F6F6] px-2'>
                <AiOutlineCaretLeft/>
              </div>
              
            </motion.div>
            </>     
  )
}

export default Sneaker