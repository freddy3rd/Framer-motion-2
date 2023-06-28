import React from 'react'

function Footer() {
  return (
    <footer className="footer p-10 bg-slate-200 text-base-content ring-">
      <div>
        <span className="footer-title">All About Me</span> 
        <a className="link link-hover">Home</a> 
        <a className="link link-hover">About us</a> 
        <a className="link link-hover">Project</a> 
      </div> 
      
      <div>
        <span className="footer-title">Social Media</span> 
        <a className="link link-hover">Facebook</a> 
        <a className="link link-hover">Instagram</a> 
        <a className="link link-hover">Codepen</a>
        <a className="link link-hover">Github</a>
      </div> 

      <div>
        <span className="footer-title">Get in Touch</span> 
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label> 
          <div className="relative">
            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
          <textarea name="" id="" cols="30" rows="10" className='w-full mt-4 resize-none' ></textarea>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer