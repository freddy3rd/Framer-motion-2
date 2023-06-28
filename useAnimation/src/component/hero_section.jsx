import React from 'react'
import video from '../assets/video/hero_video.mp4'
// import projects from '../data/project-data'
function Hero_section() {
  return (
    <>
        <div className="hero-section w-full relative grid grid-cols-1 place-items-center">
            <video className='w-screen h-screen object-cover'
            autoPlay 
            muted 
            loop>
                <source src={video} type="video/mp4"/>
            </video>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1200px]">
                <div className='w-full h-full hidden md:flex items-center justify-center '>
                    <div className="marquee_container relative overflow-hidden w-[100%] max-h-[700px] h-[600px] grid grid-cols-[200px_250px_250px] gap-5">

                        <marquee direction="up" behavior="scroll" scrollamount="12" className="grid gap-5">
                            <div  className=' w-full h-[150px] bg-slate-300 rounded-xl opacity-30 '></div >
                            <div  className=' w-full h-[250px] bg-lime-400 rounded-xl opacity-30 my-2'></div >
                            <div  className=' w-full h-[300px] bg-slate-300 rounded-xl opacity-30 '></div >
                           
                        </marquee> 
                        <marquee direction="down" behavior="scroll" scrollamount="10" className="grid gap-5">
                            <div  className=' w-full h-[450px] bg-slate-300 rounded-xl opacity-30 '></div >
                            <div  className=' w-full h-[350px] bg-slate-300 rounded-xl opacity-30 my-2'></div >
                            <div  className=' w-full h-[250px] bg-lime-400 rounded-xl opacity-30 '></div >
                        </marquee> 
                        <marquee direction="up" behavior="scroll" scrollamount="5" className="grid gap-5" >
                            <div  className=' w-full h-[550px] bg-slate-300 rounded-xl opacity-30 '></div >
                            <div  className=' w-full h-[350px] bg-slate-300 rounded-xl opacity-30 my-2'></div >
                            <div  className=' w-full h-[250px] bg-slate-300 rounded-xl opacity-30 '></div >
                        </marquee> 
                      
                     
                    </div>
                </div>
                <div className='w-full h-full px-4 grid place-items-center'>
                    <div className="container text-white">
                       <div className='flex flex-col ff-barlow font-bold max-w-[max-content]'>
                       <span className='xl:text-end text-4xl tracking-wide '>CLIFFORD FRONT-END WEB DEVELOPER</span>
                        <h1 className='text-6xl md:text-8xl'>UI DISCOVERIES</h1>
                       </div>
                       <p className='max-w-[500px] py-5'>Hello and welcome to my web portfolio! I'm <b>Clifford</b>, a passionate and aspiring web developer with a strong dedication to creating aesthetically pleasing, user-friendly, and functional websites. With a deep understanding of modern web technologies and a keen eye for design, I strive to deliver outstanding digital experiences that leave a lasting impact.</p>
                        <div className='flex gap-4'>
                        <div className="drawer drawer-end w-[max-content] z-50">
                            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="drawer-button btn bg-transparent ring-1 ring-white text-white hover:text-black">Get In Touch</label>
                            </div> 
                            <div className="drawer-side">
                            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                {/* <li><a>Sidebar Item 1</a></li>
                                <li><a>Sidebar Item 2</a></li> */}
                            </ul>
                            </div>
                        </div>
                        <button className='ring-1 ring-white z-10 px-4 py-2'>Download CV</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Hero_section