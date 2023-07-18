import React from "react";
import Contact from "./contact";

function Footer() {
  return (
    <footer
      id="footer"
      className="footer p-10 bg-slate-200 text-base-content ring-"
    >
      <div>
        <span className="footer-title">All About Me</span>
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Project</a>
      </div>

      <div>
        <span className="footer-title">Social Media</span>
        <a
          href="https://www.facebook.com/profile.php?id=100090103471650"
          target="_blank"
          className="link link-hover"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/arnejo_developer/"
          target="_blank"
          className="link link-hover"
        >
          Instagram
        </a>
        <a
          href="https://codepen.io/ARNEJOCLIFFORD"
          target="_blank"
          className="link link-hover"
        >
          Codepen
        </a>
        <a
          href="https://github.com/freddy3rd"
          target="_blank"
          className="link link-hover"
        >
          Github
        </a>
      </div>

      <div>
        <span className="footer-title">Get in Touch</span>
        <Contact />
      </div>
    </footer>
  );
}

export default Footer;
