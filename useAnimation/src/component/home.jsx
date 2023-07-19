import React from "react";
import About from "./About";
import Project from "./Project";
import Footer from "./footer";
import Hero_section from "./hero_section";

function Home() {
  return (
    <>
      <Hero_section />
      <About />
      <Project />
      <Footer />
    </>
  );
}

export default Home;
