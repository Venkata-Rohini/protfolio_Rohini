import React from "react";
import About from "./about/index";
import Projects from "./projects";
import Skills from "./skills";
import Contact from "./contact";

function MainContent() {
  return (
    <div className="content">
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default MainContent;
