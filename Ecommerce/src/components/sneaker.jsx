import React, { useEffect, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineCaretLeft,AiOutlineCaretRight} from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";
import {overview,fadeInOut,animationStart} from '../utils/animate.jsx'
import sneaker from '../assets/sneacker.png'
import { motion} from 'framer-motion'
import Customer from "./customer.jsx";
import { Link, useParams } from 'react-router-dom';

function Sneaker({selectedStatus,itemStatus}) {
  const {id} = useParams()
  return (
      <>
        <motion.div
              variants={overview}
              animate="overview"
              transition={{transition:{ease:"easeIn",type:"inertia", velocity:2},delay:.8}}
              exit={{opacity: 0,y:"5px", transition:{delay:.2}}}
              className='flex flex-grow h-[100%] hover:cursor-pointer image_container w-[100%] absolute z-20 sm:mt-0 bg-custom-gradient-1 overflow-hidden'
              
              key="sneakers"
              layoutId="sneakers"
              
              >
             <motion.div
             animate={{opacity:[0,1],transition:{delay:.8}}}
             className='item1-container lg:w-[50%] h-full lg:absolute lg:right-0 xl:me-40'>
            
             <motion.img
              animate={{opacity:[0,1],x:[-20,0] ,transition:{ease:"easeIn",delay:1}}}
              src={sneaker} className=' hidden sm:block absolute z-10 right-0 bottom-0' alt="" />
             </motion.div>
             
              <motion.div 
              variants={fadeInOut}
              initial="fadeOut"
              animate="fadeIn"
              transition={{
                ease: "easeIn",
                type: "tween",
                delay:.5,
                staggerChildren: .2 ,
                duration: .5,
                // staggerDirection:"reverse",
                delayChildren: animationStart + 0.2,
              }}
              className='container xl:ms-40 overflow-hidden px-5 mt-10 flex  justify-center flex-col text-[#F6F6F6]'>
              <motion.span
              variants={fadeInOut}
              className=" tracking-wider font-bold ff-achivo flex gap-2 items-center"> <BsFillDiamondFill/>SNEAKERS</motion.span>
              <motion.h1
              variants={fadeInOut}
              className=' uppercase font-bold ff-archivo text-6xl md:text-7xl z-20 max-w-[550px] py-4'>Walk in style, rock good sneakers.</motion.h1>
              <motion.p
              variants={fadeInOut}
              className='py-5 max-w-[550px] ff-intern z-20 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eius ratione culpa ex officia non est labore commodi possimus perspiciatis quasi officiis, blanditiis ad doloremque perferendis molestias illum reiciendis iure.</motion.p>
             

            <Link to={`/${id}/items`}>
             <motion.button
              variants={fadeInOut}
              whileHover={{scale:1.05,y:"-7px", boxShadow:"0px 15px 20px rgba(46, 229, 157, 0.4);"}}
              className='px-5 py-2 rounded-full ring-1 bg-transparent ring-[#F6F6F6] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20 '>View Items<AiOutlineArrowRight/> </motion.button>
            </Link>
              <Customer/>
              </motion.div>

              <Link to='/' 
                onClick={() => 
                  {
                    selectedStatus(false)
                    itemStatus(null)
                  }
                }
              >
              <motion.div
              // layoutId="sneakers"
              whileHover={{x:"-5px"}}
              
              className='h-[100%] flex items-center text-4xl absolute right-0 text-[#F6F6F6] px-2'>
                <AiOutlineCaretLeft/>
              </motion.div>
                </Link>
              
            </motion.div>
            </>     
  )
}

export default Sneaker