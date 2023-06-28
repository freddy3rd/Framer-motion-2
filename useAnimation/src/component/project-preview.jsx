import React, { useEffect, useState } from 'react'
import {reveal} from "../utils/animation"
import { motion } from 'framer-motion'
import {projects} from '../data/project-data'

function Project_preview({activePreview}) {
  const [Preview, setPreview] = useState("Responsive Message")

  useEffect(()=>{
    setPreview(activePreview)   
    console.log(activePreview);
  },[Preview])

 return(
  <>
    {
      projects.map((data)=>{
        if(data.ProjectName === Preview){     
          return <div key={data.ProjectName} className="preview-container w-full h-full bg-slate-400"> {data.ProjectName }</div>;
        }
      })
    }
  </>
 )
  
  // <>
  //   return(
  // projects.map(data=>{
  //   if(data.ProjectName == Preview ){
  //       <h1 className='ff-barlow text-4xl md:text-6xl'>{data.ProjectName}</h1>
  //       <motion.div
  //       variants={reveal}
  //       className="preview flex items-center w-full h-full py-6">
  //         <div className="preview-container w-full h-full bg-slate-400">
  //           <img src={data.thumnails[0]} alt="" />
  //         </div>
  //       </motion.div>
  //       )
  //     }
  //     </>
  // })


}

export default Project_preview