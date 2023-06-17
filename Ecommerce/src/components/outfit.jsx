import React from 'react'
import { AiOutlineArrowRight,AiOutlineCaretRight} from "react-icons/ai";
import { BsFillDiamondFill } from "react-icons/bs";
import {overview,fadeInOut,animationStart} from '../utils/animate.jsx'
import model from '../assets/model_man.png'
import { delay, motion} from 'framer-motion'
import Customer from "./customer.jsx";

function Outfit({selectedStatus,itemStatus}){
  return (
      <>
        <motion.div
              variants={overview}
              animate="overview"
              transition={{transition:{ease:"easeIn",type:"inertia", velocity:2},delay:.8}}
              exit={{opacity: 0,y:"5px", transition:{delay:.2}}}
              className='flex flex-grow h-[100%] hover:cursor-pointer image_container w-[100%] absolute z-20 sm:mt-0 bg-custom-gradient-2 overflow-hidden'
              
              key="Outfits"
              layoutId="Outfits"
              
              >
           
             <motion.div
              animate={{opacity:[0,1],transition:{delay:.8}}}
              className='item2-container lg:w-[50%] h-full lg:absolute lg:right-0 xl:me-40'>
             
             <motion.img
             animate={{opacity:[0,1],x:[-20,0] ,transition:{ease:"easeIn",delay:1}}}
              src={model} width="450px" height="100%" className=' hidden sm:block absolute z-10 right-0 bottom-0' alt="" />
             </motion.div>

             <motion.div
              whileHover={{x:"5px"}}
              onClick={() => 
                {
                selectedStatus(false)
                itemStatus(null)
                }
              }
              className='h-[100%] flex items-center text-4xl absolute left-0 text-[#1a1919] px-2'>
                <AiOutlineCaretRight/>
              </motion.div>
              <motion.div 
             variants={fadeInOut}
             initial="fadeOut"
             animate="fadeIn"
             transition={{
               ease: "easeIn",
               type: "tween",
               delay:.6,
               staggerChildren: .2 ,
               duration: .5,
               staggerDirection:"reverse",
               delayChildren: animationStart + 0.2,
             }}
            className='container xl:ms-40 overflow-hidden px-5 mt-10 flex  justify-center flex-col text-[#1a1919]'>
              <motion.span 
              variants={fadeInOut}
              className=" tracking-wider font-bold ff-achivo flex gap-2 items-center"> <BsFillDiamondFill/>CLOTHINGS</motion.span>
              <motion.h1
              variants={fadeInOut}
              className=' uppercase font-bold ff-archivo text-6xl md:text-7xl z-20 max-w-[550px] py-4'>Elevate your look, elevate your mood.</motion.h1>
              <motion.p
              variants={fadeInOut}
              className='motion.y-5 max-w-[550px] ff-intern z-20 px-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem eius ratione culpa ex officia non est labore commodi possimus perspiciatis quasi officiis, blanditiis ad doloremque perferendis molestias illum reiciendis iure.</motion.p>
              <motion.button
              variants={fadeInOut}
              whileHover={{scale:1.05,y:"-7px", boxShadow:"0px 15px 20px rgba(46, 229, 157, 0.4);"}}
              className='px-5 py-2 rounded-full ring-1 bg-transparent ring-[#1a1919] flex items-center gap-2 ff-archivo font-bold mt-5 w-[max-content] z-20 '>View Items<AiOutlineArrowRight/> </motion.button>
            <Customer/>
              </motion.div>
              
            </motion.div>
            </>     
  )
}

export default Outfit