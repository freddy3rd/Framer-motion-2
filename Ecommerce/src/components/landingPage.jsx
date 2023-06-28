import { AiOutlineArrowRight, AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";
import {image_container,fadeInOut, initialState} from '../utils/animate.jsx'
import sneaker from '../assets/sneacker.png'
import model_man from '../assets/model_man.png'

import React from 'react'
import { motion} from 'framer-motion'
import { Link } from "react-router-dom";



function LandingPage({status,item,selectedStatus,selectedItem}) {
  
  return (   
    <>
      <motion.div
      className="flex flex-wrap bg-slate-400 overflow-hidden">
        <motion.div 
            className="flex w-[100%] absolute box-border h-[100%] overflow-hidden">
            
            <motion.div
              variants={image_container}
              initial="hidden"
              whileHover="hover"
              // whileTap="hover"
              className='flex flex-grow hover:cursor-pointer image_container relative'
              
              key="sneakers"
              layoutId="sneakers"
              >
              <motion.img
              variants={initialState}
              animate={(item === "sneakers" && status) ? "fadeOut" : "fadeIn"}
              src={sneaker} className='absolute z-10 right-0 bottom-0 opacity-[70%]' alt="" />
              <motion.div 
            
              className='container overflow-hidden px-10 flex justify-start md:justify-center flex-col bg-custom-gradient-1 text-[#F6F6F6]'>
              <motion.span
              variants={fadeInOut}
              animate={(item === "sneakers" && status) ? "fadeOut" : "fadeIn"}
              //  animate={(item === "sneakers") ? {opacity: [1,0],y:["5px","0px"]} : {opacity:1}}
               transition={{delay:.2}}
              className=" tracking-wider font-bold ff-achivo flex gap-2 items-center mt-5"> <BsFillDiamondFill/>SNEAKERS</motion.span>
              <motion.h1
               variants={fadeInOut}
              animate={(item === "sneakers" && status) ? "fadeOut" : "fadeIn"}
              // animate={(item === "sneakers") ? {opacity: [1,0],y:["5px","0px"]}  : {opacity:1}}
              transition={{delay:.4}}
              className=' uppercase font-bold ff-archivo text-6xl lg:text-7xl z-10 max-w-[550px]'>Walk in style, rock good sneakers.</motion.h1>
              <motion.p
               variants={fadeInOut}
              animate={(item === "sneakers" && status) ? "fadeOut" : "fadeIn"}
              // animate={(item === "sneakers") ? {opacity: [1,0],y:["5px","0px"]} : {opacity:1}}
              transition={{delay:.6}}
              className='py-5 max-w-[550px] ff-intern z-10'>Put on a great pair of sneakers, and suddenly you're ready to conquer the world, one stylish step at a time.</motion.p>
              <Link to={`/sneakers`}>
                <motion.button
                variants={fadeInOut}
                animate={(item === "sneakers" && status) ? "fadeOut" : "fadeIn"}
                transition={{delay:.8}}
                onClick={() => {
                  selectedStatus(true)
                  selectedItem("sneakers")}
                  }
                 
                  className='px-5 py-2 rounded-full ring-1 bg-transparent ring-[#F6F6F6] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-10 button hover:bg-gradient-to-tr from-[] z-30'>Discover More <AiOutlineArrowRight className="icon"/> </motion.button>
                </Link>
                
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
                className='flex flex-grow hover:cursor-pointer image_container'
                
                key="Outfits"
                layoutId="Outfits"
                >

              <motion.img
                variants={initialState}
                animate={(item === "Outfits" && status) ? "fadeOut" : "fadeIn"}
                src={model_man} width="450px" height="100%"  className='opacity-[70%] absolute -right-10 bottom-0' alt="" />

                <div className='h-[100%] flex items-center text-4xl text-[#F6F6F6] bg-transparent absolute px-2'>
                  <AiOutlineCaretRight/>
                </div>

              <motion.div 

                className='container overflow-hidden px-10 flex justify-start md:justify-center flex-col bg-custom-gradient-2 text-[#1a1919]'>
                <motion.span 
                variants={fadeInOut}
                animate={(item === "Outfits" && status) ? "fadeOut" : "fadeIn"}
                transition={{delay:.2}}

                className=" tracking-wider font-bold ff-achivo flex gap-2 items-center mt-5"><BsFillDiamondFill/> CLOTHINGS</motion.span>
                <motion.h1
                variants={fadeInOut}
                animate={(item === "Outfits" && status) ? "fadeOut" : "fadeIn"}
                transition={{delay:.4}}

                className=' uppercase font-bold ff-archivo text-6xl lg:text-7xl z-20 max-w-[550px]'>Elevate your look, elevate your mood.</motion.h1>
                <motion.p
                variants={fadeInOut}
                animate={(item === "Outfits" && status) ? "fadeOut" : "fadeIn"}
                transition={{delay:.6}}

                className='y-5 max-w-[550px] ff-intern z-20 '>Dress well, feel confident, and let your outfit speak volumes without saying a word.</motion.p>
                <Link to={`/Outfits`}>

                <motion.button
                variants={fadeInOut}
                animate={(item === "Outfits" && status) ? "fadeOut" : "fadeIn"}
                transition={{delay:.8}}
                onClick={() => {
                  selectedStatus(true)
                  selectedItem("Outfits")}
                }
                className='px-5 py-2 rounded-full ring-1 ring-[#1a1919] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20 button hover:bg-black hover:text-white' >Discover More <AiOutlineArrowRight className="icon"/> </motion.button>
                </Link>
                </motion.div>
  
              </motion.div>
            
        </motion.div>
    </motion.div>
    </>
  )
  
}

export default LandingPage