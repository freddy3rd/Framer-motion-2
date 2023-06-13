import { motion, useAnimate } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { FaArrowRight, FaCloudDownloadAlt } from "react-icons/fa";
import { animationStart, reveal, scaleY } from "../utils/animation";
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


  return (
    <div className="container-fluid grid lg:grid-cols_1 border-5 border-red w-[100%]" >
    <motion.div
    //  variants={scaleY}
    //  initial="hiddenVariant"
    //  animate="revealedVariant"
     transition={{
       ease: "easeIn",
       type: "tween",
       staggerChildren: .1,
       duration: 0.5,
       delayChildren: animationStart,
     }}
      
      // className='image_container grid grid-cols-1fr relative h-screen text-black bg-white bg-[url("./assets/hero.jpg")]  bg-no-repeat bg-cover bg-right-bottom sm:rounded-br-2xl overflow-hidden'>
      className='image_container grid grid-cols-1fr relative h-screen text-black bg-[url("./assets/hero.jpg")] bg-white bg-no-repeat bg-cover bg-right-bottom lg:rounded-br-full overflow-hidden shadow-lg'>

      {isMobile ? (
         
         <motion.div 
         initial={{height:"50%"}}
         animate={{width:["0%","100%","50%"],borderTopRightRadius:[0,0,50],borderBottomRightRadius:[0,0,50],transition:{delay: .7}}}
         className='w-[100%] h-[50%] bg-black text-white self-center'></motion.div>
      ) : (   
        <motion.div 
        animate={{width:["0%","100%","35%"],transition:{delay: .7}}}
        className='w-[40%] h-screen bg-black text-white self-end'></motion.div>
      )}

        <motion.h1 
        variants={reveal}
        className='lg:text-9xl md:text-8xl  text-6xl font-bold ff-barlow  px-5 mix-blend-difference text-white self-center md:self-center md:translate-y-0 uppercase'>FRONT-END developer</motion.h1>
      </motion.div>

   
    </div>
  )
}

export default Home