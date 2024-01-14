import React from "react";
import { Intro } from "../../components/Intro";
import "./style.css";
import { About } from "../../components/About";
import { Experience } from "../../components/Experience";
import { Contact } from "../../components/Contact";

export const HomePage = () => {
  return (
    <div id="home_page_main_content">
      <div id="contents">
        <Intro />
        <About />
        <Experience />
        
        <Contact />
        
      </div>
    </div>
  );
};
