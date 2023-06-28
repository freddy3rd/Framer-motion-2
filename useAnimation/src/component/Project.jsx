import React, { useEffect, useRef, useState } from 'react'
import {projects} from '../data/project-data'
import {reveal,inview} from "../utils/animation"
import { motion, useAnimation, useInView } from 'framer-motion'
import Project_preview from './project-preview'
import { FaExternalLinkAlt } from "react-icons/fa";
import { Splide, SplideSlide } from '@splidejs/react-splide'


function Project() {

  const [isSelected, setSelected] = useState("Responsive Message")
  const [activeTab,setActiveTab] = useState(0)
  const [thumbnails,setThumbnails] = useState([])

  const ref = useRef(null)
  const isInView = useInView(ref, {once:true})
  const mainControl = useAnimation()

  useEffect(()=>{
    if(isInView){
      mainControl.start("revealedVariant")
    }
  },[isInView])

  useEffect(()=>{
    console.log(isSelected);
  },[isSelected])

  function toggleTab(index){
    setActiveTab(index)
  }
  
  function selected(project){
    setSelected(project)
  }


  const option ={

  }
  return (
    <>
    <div ref={ref}  className="grid md:grid-cols-2 grid-cols-1 gap-10 px-10 place-item-center py-32">
      <div
      variants={reveal}
      className="project-preview min-h-[400px] max-h-[500px]">
         {
        projects.map((data)=>{
          if(data.ProjectName === isSelected){     
       
            return (
              <div key={crypto.randomUUID()} className='relative h-full'>
              <h1 className='ff-barlow text-4xl md:text-6xl text-gray-500'>{data.ProjectName}</h1>
              <span className='absolute top-0 right-0'><a href={data.link} target='_blank'> <FaExternalLinkAlt href={data.link}/></a></span>
                 <div className='h-full'>
                  <img src={data.thumnails[0]} className='w-full h-full object-scale-down' alt="" />
                 </div>
              </div>
            )
          }
        })
      }

      </div>
      <motion.div
       variants={inview}
       initial="hiddenVariant"
       animate={mainControl}
       transition={{duration:0.5, delay:0.5,ease:"easeInOut", staggerChildren: 0.5, delayChildren: .5}}
      className="project-list ff-monsterot grid">
        <motion.div 
        variants={reveal}
        className="tabs my-6">
          <a key="tab_1" className={`tab tab-lifted ${activeTab === 0 ? "tab-active" : ""}`} onClick={()=>{toggleTab(0)}}>ALL</a> 
          <a key="tab_2" className={`tab tab-lifted ${activeTab === 1 ? "tab-active" : ""}`} onClick={()=>{toggleTab(1)}}>RESPONSIVE LAYOUTS</a> 
          <a key="tab_3" className={`tab tab-lifted ${activeTab === 2 ? "tab-active" : ""}`} onClick={()=>{toggleTab(2)}}>REACT JS</a> 
          <a key="tab_4" className={`tab tab-lifted ${activeTab === 3 ? "tab-active" : ""}`} onClick={()=>{toggleTab(3)}}>VANILLA JS</a> 
        </motion.div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium impedit ex aspernatur cupiditate sed optio. Hic officia molestias voluptate aspernatur quaerat quis, maxime dolore laudantium ipsa reprehenderit velit sint cum illo vero repudiandae. Perferendis non modi provident animi unde distinctio.</p>
        <motion.div
        variants={reveal}
        className="projects grid gap-5 mt-10 self-end max-h-[350px] overflow-y-auto ">
          {/* iterate all the project  */}
          {
            projects.map(data=>{
              
              return(
              <div 
              key={data.ProjectName}
                onClick={() => {
                 
                  selected(data.ProjectName)
                }}
              className={`project-thumbnails relative rounded-lg overflow-hidden shadow-md p-1 hover:bg-slate-500 ${(data.ProjectName === isSelected )? "bg-slate-500" : ""}`}>
                <img
                src={data.thumnails[0]} alt="" className='w-full h-full object-cover rounded-lg' />
               </div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default Project