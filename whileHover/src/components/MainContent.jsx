import React from 'react'
import { delay, motion} from 'framer-motion'
import { image_arr } from './data'
function MainContent({ setSelected}) {

  const base_url = "http://source.unsplash.com/"

  const image_container = {
    hidden:{
      width: "10%",
      opacity: 0,
    },
    visible:{
      opacity: 1,
      transition:{
        type: "spring",
        duration: 1
      }
    },
    hover:{
      width:"100%", 
      transition:{
        type:"spring", 
        damping: 15,
        velocity: 2,
      }
    }
  }

  // const overview = {
  //   open
  // }


  return (

    <>
      <div className="flex bg-slate-400">
        <motion.div 
        className="flex absolute box-border h-full overflow-hidden">
          
            {
                image_arr.map(image =>{
                    return(
                     
                        <motion.li
                        variants={image_container}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        whileTap="hover"
                        key={image.id}
                        className='flex flex-grow hover:cursor-pointer image_container relative overflow-hidden'
                        layoutId={`card-${image.id}`}

                          onClick={() => {
                            setSelected(image);
                          }}
                        
                        >
                        <motion.img 
                            src={`${base_url}${image.url}`} alt="" key={image.id} setSelected={setSelected} className='w-full h-full object-cover'/>
                        <motion.div 
                      
                        className="container px-10 information absolute bottom-0 w-[100%] h-[30%] ">
                          <h2 className='text-[3.5rem] font-bold text-white'>{image.title}</h2>
                        </motion.div>
                        </motion.li>
                       
                    )
                })    
            }
        </motion.div>
    </div>
    </>
  )
  
}

export default MainContent