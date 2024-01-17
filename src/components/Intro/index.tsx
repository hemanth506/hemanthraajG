import React from "react";
import "./style.css";

const Intro = () => {
  return (
    <div id="about_main_content">
      <div id="about_intro_content">
        <div className="about_introduction">
          <span id="about_intro">Hi, my name is</span>
        </div>
        <div className="about_introduction">
          <h2 id="about_name">Hemanth Raaj G.</h2>
        </div>
        <div>
          <h2 id="about_brief">I build things for the web.</h2>
        </div>
      </div>
      <div id="about_description">
        <span>
          I'm a Full-stack web developer and a Freelancer. I've been doing this for over three
          years, and I enjoy creating websites and solving problems.
        </span>
      </div>
    </div>
  );
};

export default Intro;