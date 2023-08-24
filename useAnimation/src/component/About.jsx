import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { FaDirections } from "react-icons/fa";
import { reveal } from "../utils/animation";
import SHS from "../assets/high_school.jpg";
import QCU from "../assets/Quezon-City-University.jpg";
import img_2 from "../assets/image-2.png";

export default function About() {
  const [activeSchool, setACtiveSchool] = useState("HS");

  const skills = [
    "HTML",
    "CSS",
    "BOOTSTRAP",
    "TAILWINDCSS",
    "JAVASCRIPT",
    "JQUERY",
    "REACT JS",
    "MYSQL",
    "PHOTOSHOP",
    "FIGMA",
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("revealedVariant");
    }
  }, [isInView]);

  return (
    <>
      <div
        id="about-section"
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 max-w-[1200x] gap-5 px-5 justify-center items-center my-20 snap-center snap-y"
      >
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate={mainControl}
          transition={{ duration: 0.5 }}
          className="mx-5"
        >
          <h1 className="text-4xl font-bold text-black uppercase self-end mb-10 text-center sm:text-start">
            My Journey
          </h1>
          <p className=" md:max-w-[450px] ff-monsterot text-justify font-light text-black my-4">
            {" "}
            I prioritize continuous learning and staying up-to-date with the
            latest front-end technologies, trends, and best practices. This
            allows me to adapt quickly to evolving industry standards and
            deliver modern, cutting-edge web experiences.
          </p>
          <b>Related Skills</b>
          <div className="flex flex-wrap gap-2 mt-4 w-[100%] lg:max-w-[350px] font-semibold ff-barlow text-base-200 ">
            {skills.map((skill) => {
              return (
                <span
                  key={skill}
                  className="px-4 py-2 uppercase bg-slate-500 rounded-full hover:cursor-pointer"
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </motion.div>

        <div className="mx-5">
          <div className=" w-[100%] md:max-w-[500px] h-[300px] self-center">
            <img src={img_2} className="w-full h-full " alt="" />
          </div>
        </div>
      </div>
      <h1 className="ff-barlow text-4xl text-black text-center mb-10">
        Educational Background
      </h1>
      <div className="grid grid-cols-1 xl:grid-cols-2 relative w-[100%] xl:gap-10 items-center">
        <div className="grid place-items-center relative h-full px-5 mb-10 xl:justify-end school">
          <motion.div
            key="HS"
            layouId="HS"
            initial={{ display: "none" }}
            animate={
              activeSchool === "HS"
                ? { opacity: 1, scale: [0, 1], display: "block" }
                : { opacity: 0 }
            }
            className="opacity-0 card card-compact text-[#171515] bg-white xl:w-96 w-[100%] max-w-[600px] shadow-2xl xl:translate-x-96 z-10"
          >
            <figure className="h-[200px] ">
              <img src={SHS} alt="JFBSHS" width="100%" />
            </figure>
            <div className="card-body text-start">
              <h2 className="card-title text-2xl lg:text-center text-start ff-barlow capitalize">
                judge felician belmonte sr high school
              </h2>
              <span className="flex gap-2 items-center text-lg ff-barlow uppercase">
                <FaDirections />
                Address:
              </span>
              <li className="ff-monsterot text-xs ff-monsterot px-2">
                AFP Road, Garcia Heights, Holy Spirit, Quezon City, Quezon City,
                Philippines
              </li>
              <div className="card-actions justify-end mt-4 relative">
                <button className="px-8 ff-barlow font-semibold ff-barlow text-base-200  text-md py-2 bg-slate-500 rounded-full">
                  VISIT
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            key="SHS"
            layouId="SHS"
            initial={{ display: "none" }}
            animate={
              activeSchool === "SHS"
                ? { opacity: 1, scale: [0, 1], display: "block" }
                : { opacity: 0 }
            }
            className="opacity-0 card card-compact text-[#171515] bg-white xl:w-96 w-[100%] max-w-[600px] shadow-2xl xl:translate-x-96 z-10"
          >
            <figure className="h-[200px] ">
              <img src={SHS} alt="JFBSHS" width="100%" />
            </figure>
            <div className="card-body text-start">
              <h2 className="card-title text-2xl lg:text-center text-start ff-barlow capitalize">
                judge felician belmonte sr high school
              </h2>
              <span className="text-[10px] ff-achivo font-semibold text-gray-700 uppercase">
                Graduated As
              </span>
              <span className=" text-gray-700 ff-monsterot text-[12px]">
                TVL TRACK : ANIMATION
              </span>
              <span className="flex gap-2 items-center text-lg ff-barlow uppercase">
                <FaDirections />
                Address:
              </span>
              <li className="ff-monsterot text-xs ff-monsterot px-2">
                AFP Road, Garcia Heights, Holy Spirit, Quezon City, Quezon City,
                Philippines
              </li>
              <div className="card-actions justify-end mt-4">
                <button className="  px-8 ff-barlow font-semibold ff-barlow text-base-200  text-md py-2 bg-slate-500 rounded-full">
                  VISIT
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            key="COLLEGE"
            layouId="COLLEGE"
            initial={{ display: "none" }}
            animate={
              activeSchool === "COLLEGE"
                ? { opacity: 1, scale: [0, 1], display: "block" }
                : { opacity: 0 }
            }
            className="opacity-0 card card-compact text-[#171515] bg-white xl:w-96 w-[100%] max-w-[600px] shadow-2xl xl:translate-x-96 z-10"
          >
            <figure className="h-[200px] ">
              <img src={QCU} alt="JFBSHS" width="100%" />
            </figure>
            <div className="card-body text-start">
              <h2 className="card-title text-2xl lg:text-center text-start ff-barlow capitalize">
                quezon city university
              </h2>
              <span className="text-[10px] ff-achivo font-semibold text-gray-700 uppercase">
                Graduated As
              </span>
              <span className=" text-gray-700 ff-monsterot">
                Bachelor of Science in Information Technology
              </span>
              <span className="flex gap-2 items-center text-lg ff-barlow uppercase">
                <FaDirections />
                Address:
              </span>
              <li className="ff-monsterot text-xs ff-monsterot px-2">
                673 Quirino Hwy, Novaliches, Quezon City, Metro Manila
              </li>
              <div className="card-actions justify-end mt-4">
                <button className=" px-8 ff-barlow font-semibold ff-barlow text-base-200  text-md py-2 bg-slate-500 rounded-full">
                  VISIT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative w-[100%] flex lg:items-center  ">
          <ul className="steps w-[100%] overflow-hidden xl:steps-vertical steps-horizontal xl:h-screen">
            <motion.li
              key="HS"
              layouId="HS"
              onClick={() => setACtiveSchool("HS")}
              data-content="✓"
              className={`step ff-barlow text-black font-semibold hover:cursor-pointer z-30 ${
                activeSchool === "HS" ||
                activeSchool === "SHS" ||
                activeSchool === "COLLEGE"
                  ? "active"
                  : ""
              }`}
            >
              <div className="text-start relative px-3 ">
                <p className="xl:text-2xl text-md text-center">
                  JUDGE FELICIANO BELMONTE HIGH SCHOOL
                </p>
                <p className=" text-gray-700 xl:text-start text-center">
                  HIGH SCHOOL
                </p>
                <span className="xl:text-start text-center">2013 - 2017</span>
              </div>
            </motion.li>
            <motion.li
              key="SHS"
              layouId="SHS"
              onClick={() => setACtiveSchool("SHS")}
              data-content="✓"
              className={`step ff-barlow text-black font-semibold hover:cursor-pointer z-20 ${
                activeSchool === "SHS" || activeSchool === "COLLEGE"
                  ? "active"
                  : ""
              }`}
            >
              <div className="text-start relative  px-3">
                <p className="xl:text-2xl text-md text-center ">
                  JUDGE FELICIANO BELMONTE HIGH SCHOOL
                </p>
                <p className=" text-gray-700 xl:text-start text-center">
                  SENIOR HIGH SCHOOL
                </p>
                <span className="xl:text-start text-center">2017 - 2019</span>
              </div>
            </motion.li>
            <motion.li
              key="COLLEGE"
              layouId="COLLEGE"
              data-content="✓"
              onClick={() => setACtiveSchool("COLLEGE")}
              className={`step ff-barlow text-black font-semibold hover:cursor-pointer z-10 ${
                activeSchool === "COLLEGE" ? "active" : ""
              }`}
            >
              <div className="text-start relative lg:self-center self-start">
                <p className="xl:text-2xl text-md text-center">
                  QUEZON CITY UNIVERSITY
                </p>
                <p className=" text-gray-700 xl:text-start text-center">
                  COLLEGE
                </p>
                <span className="xl:text-start text-center">2019 - 2023</span>
              </div>
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
}
