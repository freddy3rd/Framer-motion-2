import React, { useEffect, useRef, useState } from "react";
import { projects } from "../data/project-data";
import { reveal, inview } from "../utils/animation";
import { motion, useAnimation, useInView } from "framer-motion";

import {
  FaExternalLinkAlt,
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
import Carousel from "./Carousel";

function Project() {
  const [isSelected, setSelected] = useState("Ecommerce Design");
  const [activeTab, setActiveTab] = useState(0);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("revealedVariant");
    }
  }, [isInView]);

  function toggleTab(index) {
    setActiveTab(index);
  }

  function selected(project) {
    setSelected(project);
  }

  return (
    <>
      <div
        id="project-section"
        ref={ref}
        className="grid md:grid-cols-2 grid-cols-1 gap-10 px-10 place-item-center py-32"
      >
        <div
          variants={reveal}
          className="project-preview min-h-[400px] max-h-[500px]"
        >
          {projects.map((data) => {
            if (data.ProjectName === isSelected) {
              return (
                <div key={crypto.randomUUID()} className="relative h-full">
                  <h1 className="ff-barlow text-4xl md:text-6xl text-gray-500">
                    {data.ProjectName}
                  </h1>

                  <span className="absolute top-0 -right-5">
                    <a
                      href={data.link}
                      target="_blank"
                      className="tooltip tooltip-left"
                      data-tip="Visit Website"
                    >
                      <FaExternalLinkAlt href={data.link} />
                    </a>
                  </span>

                  <div className="image-container h-full w-full md:mt-8 py-4 flex flex-col justify-center">
                    <div className="flex gap-2 flex-wrap mb-4 items-center">
                      {data.language.map((data) => (
                        <p
                          key={data}
                          className="px-3 py-1 rounded-full bg-slate-200 font-semibold capitalize text-sm"
                        >
                          {data}
                        </p>
                      ))}
                    </div>

                    <div className="w-full h-full relative">
                      <Carousel slides={data.thumnails} />
                      {/* <img
                        src={data.thumnails[0].image}
                        className="h-full object-contain"
                        alt=""
                      /> */}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <motion.div
          variants={inview}
          initial="hiddenVariant"
          animate={mainControl}
          transition={{
            duration: 0.5,
            delay: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.5,
            delayChildren: 0.5,
          }}
          className="project-list ff-monsterot grid"
        >
          {/* <motion.div 
        variants={reveal}
        className="tabs my-6">
          <a key="tab_1" className={`tab tab-lifted ${activeTab === 0 ? "tab-active" : ""}`} onClick={()=>{toggleTab(0)}}>ALL</a> 
          <a key="tab_2" className={`tab tab-lifted ${activeTab === 1 ? "tab-active" : ""}`} onClick={()=>{toggleTab(1)}}>RESPONSIVE LAYOUTS</a> 
          <a key="tab_3" className={`tab tab-lifted ${activeTab === 2 ? "tab-active" : ""}`} onClick={()=>{toggleTab(2)}}>REACT JS</a> 
          <a key="tab_4" className={`tab tab-lifted ${activeTab === 3 ? "tab-active" : ""}`} onClick={()=>{toggleTab(3)}}>VANILLA JS</a> 
        </motion.div> */}
          <h1 className="font-bold text-4xl mb-3">PROJECTS</h1>
          <p>
            With each project, I have gained a deeper understanding of web
            development concepts, languages, and frameworks. I have learned how
            to structure code more efficiently, write cleaner and more
            maintainable code, and leverage the power of libraries and
            frameworks to streamline development processes. The learning curve
            has been steep, but immensely rewarding.
          </p>
          <motion.div
            variants={reveal}
            className="projects grid gap-5 mt-10 self-end max-h-[350px] overflow-y-auto "
          >
            {/* iterate all the project  */}
            {projects.map((data) => {
              return (
                <div
                  key={data.ProjectName}
                  onClick={() => {
                    selected(data.ProjectName);
                    location.href = "#project-section";
                  }}
                  className={`project-thumbnails relative rounded-lg overflow-hidden shadow-md p-1 hover:bg-slate-500 ${
                    data.ProjectName === isSelected ? "bg-slate-500" : ""
                  }`}
                >
                  <img
                    src={data.thumnails[0].image}
                    alt=""
                    className="w-full h-full object-cover rounded-lg z-10"
                  />
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Project;
