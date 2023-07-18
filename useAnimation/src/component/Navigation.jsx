import React from "react";
import { motion } from "framer-motion";
import { animationStart, reveal, scaleY } from "../utils/animation";
import logo from "../assets/Ui_Discoveries Logo.png";

function Navigation() {
  return (
    <motion.div
      initial={{
        scaleY: 0,
        transformOrigin: "top",
      }}
      animate={{
        scaleY: 1,
        transition: {
          delay: 1.7,
        },
      }}
      className="navbar fixed top-0 justify-between z-40 bg-white shadow-lg  "
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <motion.ul
            variants={scaleY}
            initial="hiddenVariant"
            animate="revealedVariant"
            transition={{
              ease: "easeIn",
              type: "tween",
              staggerChildren: 0.2,
              duration: 0.5,
              delayChildren: animationStart + 0.7,
            }}
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ff-barlow text-xl tracking-wider"
          >
            <motion.li variants={reveal}>
              <a href="#hero-section">Home</a>
            </motion.li>
            <motion.li variants={reveal}>
              <a href="#about-section">About</a>
            </motion.li>
            <motion.li variants={reveal}>
              <a className="">Project</a>
              <motion.ul className="p-2">
                <motion.li variants={reveal}>
                  <a href="#project-section">ALL</a>
                </motion.li>
                <motion.li variants={reveal}>
                  <a>JAVASCRIPT</a>
                </motion.li>
                <motion.li variants={reveal}>
                  <a>REACT</a>
                </motion.li>
                <motion.li variants={reveal}>
                  <a>ANIMATED DESIGNS</a>
                </motion.li>
              </motion.ul>
            </motion.li>
            <motion.li variants={reveal}>
              <a>Contact</a>
            </motion.li>
          </motion.ul>
        </div>
        <a className="btn btn-ghost normal-case ff-barlow text-2xl tracking-wider">
          UI Discoveries
        </a>
        {/* <a className="btn btn-ghost normal-case ff-barlow text-2xl tracking-wider"><motion.img src={logo} width="50px" height="50px" alt="" loading="lazy" /> UI Discoveries</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <motion.ul
          variants={reveal}
          initial="hiddenVariant"
          animate="revealedVariant"
          transition={{
            ease: "easeIn",
            type: "tween",
            //  when: "afterparent",
            staggerChildren: 0.2,
            duration: 0.5,
            delayChildren: animationStart + 0.7,
          }}
          className="menu menu-horizontal px-1 font-semibold ff-barlow tracking-wider"
        >
          <motion.li variants={reveal}>
            <a href="#hero-section">Home</a>
          </motion.li>
          <motion.li variants={reveal}>
            <a href="#about-section">About</a>
          </motion.li>
          <motion.li variants={reveal} tabIndex={0}>
            <details>
              <summary>Projects</summary>
              <motion.ul className="p-2 font-semibold">
                <motion.li variants={reveal}>
                  <a href="#project-section">ALL</a>
                </motion.li>
                <motion.li variants={reveal}>
                  <a>JAVASCRIPT</a>
                </motion.li>
                <motion.li variants={reveal}>
                  <a>REACT</a>
                </motion.li>
                <motion.li variants={reveal}>
                  <a>ANIMATED DESIGNS</a>
                </motion.li>
              </motion.ul>
            </details>
          </motion.li>
          <motion.li variants={reveal}>
            <a href="#footer">Contact</a>
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Navigation;
