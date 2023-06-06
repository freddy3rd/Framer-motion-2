import React from 'react'
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

function ActiveContent({ selected, setSelected }) {
    const base_url = "http://source.unsplash.com/"

    if (!selected) {
        return <></>;
      }
    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, .8) 95.42%), url(${base_url}${selected.url})`,
    }

  return (
    <div
    //   onClick={() => setSelected(null)}
      className="absolute h-screen w-screen inset-0 bg-black/50 z-30 cursor-pointer overflow-hidden"
    >
    <FaArrowLeft onClick={() => setSelected(null)} className="font-bold text-[2rem] text-white absolute top-12 left-12 z-40"/>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-screen h-screen cursor-default overflow-hidden"
      >
        <motion.div layoutId={`card-${selected.id}`} className="h-screen w-screen relative px-10 bg-cover bg-no-repeat bg-center bg-fixed" style={backgroundImageStyle}>
          {/* <img src={`${base_url}${selected.url}`} className='w-100 h-100 object-cover'/> */}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
            duration: 0.5,
          }}
          className='absolute z-40 bottom-12 left-12'
        >
             <h2 className='text-[3.5rem] font-bold text-white'>{selected.title}</h2>
            <p className='text-white max-w-[600px]'>{selected.desc}</p>
        </motion.div>
      </div>
    </div>
  )
}

export default ActiveContent