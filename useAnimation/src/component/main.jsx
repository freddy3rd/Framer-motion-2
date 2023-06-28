import { motion, useAnimate } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaCloudDownloadAlt } from "react-icons/fa";

function Home() {
  const animate = useAnimate()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Check initial screen width

    window.addEventListener('resize', handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up the event listener
    };
  }, []);


  const mobileAnimation = {
    initialState : {
      
      // position: "absolute"
      // transformOrigin:"bottom"
    },
    endState: { 
      height:["0%","100%","35%"],
      transition:{
        duration: 2,
        delay: 1.2
      }
    }
  };

  const desktopAnimation = {
    initialState : {
      
      // scaleX:1,
      transformOrigin:"right"
    },
    endState: { 
       width:["0%","100%","35%"],
      // scaleX:.5,
      transition:{
        duration: 2,
        delay: 1.2
      }
    }
  };


  const scaleX = {
    hidden : {
      opacity: 0,
      height: 400,
      transformOrigin :"right"
    },
    visible :{
      opacity: 1,
        height: "unset",
      transition: {
        duration: .3,
      },
    }
  }

  const scaleY ={
    initialState:{
      opacity: 0,
      transformOrigin: "Bottom",
    },
    endState: {
      opacity: 1,
      transition:{
        ease: "anticipate",
        type:"Spring",
        duration: .5,
        delay: .6
      }
    }
  }
  
  const textAnimation = {
    hidden: {
      x: -50  
    },
    visible:{
      opacity:[0,1],
      x:0,
      transition:{
        duration: .7,
        delay: 1.2
      }
    }
    
  }
  
  return (
    
   <div className="fluid-container flex items-center justify-center bg-slate-700w-full h-screen ">
    <div className="fluid-container grid sm:grid-cols-[1fr_600px] h-screen items-center w-screen" >
        
    <motion.div 
        variants={scaleX}
        initial = "hidden"
        animate = "visible"
        className='image-container relative h-screen text-black bg-white bg-[url("./assets/hero.jpg")]  bg-no-repeat bg-cover bg-right-bottom rounded-br-2xl overflow-hidden'>

    {isMobile ? (
        <motion.div
          variants={desktopAnimation}
          initial="initialState"
          animate="endState"
          className='w-screen bg-black text-white relative cols-span-1'

        >   
          
        </motion.div>
      ) : (
        <motion.div
        variants={desktopAnimation}
        initial="initialState"
        animate="endState"
        className='h-screen bg-black text-white relative '

        >
         
        </motion.div>
      )}

        <motion.h1 
        variants={textAnimation}
        initial ="hidden"
        animate ="visible" 
        className='text-9xl font-bold ff-barlow absolute top-40 px-10 mix-blend-difference text-white '>CLIFFORD DLE M. ARNEJO</motion.h1>
      </motion.div>

        <div className='max-w-[650px] h-screen relative'>
            <motion.div 
            variants={scaleY}
            // initial = "initialState"
            // animate ="endState"
            className='relative sm:absolute ff-monsterot leading-6 text-justify grid gap-5 px-4 md:translate-y-44 md:-translate-x-20'>
           
           <div className="flex gap-20">

           <motion.button 
           whileHover={{ scale: 1.2 }}
           className='flex gap-2 relative text-white font-bold bg-black p-4 max-w-[max-content]'>HIRE ME
           <motion.span
      
           className='flex items-center absolute h-[100%] left-[100%] top-[50%] translate-y-[-50%] justify-end px-3 bg-black'><FaArrowRight/></motion.span>
           </motion.button>
           <button className='flex gap-2 relative text-black font-bold ring-2 ring-inset ring-black  p-4 max-w-[max-content]'>DOWNLOAD CV 
           
           <span className='flex items-center absolute h-[100%] left-[100%] top-[50%] translate-y-[-50%] justify-end px-3 text-white border-3 border-black bg-black'><FaCloudDownloadAlt/> </span>
           
           </button>
           </div>
            </motion.div>
        </div>
    </div>
   </div>
  )
}

export default Home