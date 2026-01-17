import React from "react";
import "./style.css";
import Hemanth from "../../assets/ReadyPlayerMe-Avatar.png";
import { useMyContext } from "../../Hooks/MyContext";
import { aboutDetails, aboutSkillSet } from "../../utils";

const About = () => {
  const { aboutRef } = useMyContext();
  return (
    <div id="about_me_main_content" ref={aboutRef}>
      <div id="about_me_main">
        <h2 id="about_heading">About Me</h2>
        <div id="about_content">
          <section id="about_section">
            <div>
              <p>
                {aboutDetails.para1.content1}
                <span className="text_highlight">
                  {aboutDetails.para1.content2}
                </span>{" "}
                {aboutDetails.para1.content3} <span className="heart">❤️</span>
              </p>
              <p>
                {aboutDetails.para2}
              </p>
              <p>{aboutDetails.para3}</p>
              <p>
                {aboutDetails.para4.content1}{" "}
                <a
                  href="https://leetcode.com/u/hemanthraaj31/"
                  target="__blank"
                >
                  <span className="text_highlight">
                    {aboutDetails.para4.content2}
                  </span>
                </a>{" "}
                {aboutDetails.para4.content3}{" "}
              </p>
              <div>
                {aboutDetails.para5}
                <ul className="skillset">
                  {aboutSkillSet.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section id="image_section">
            {/* <div id="image_layer_1"> */}
            {/* <div id="image_layer_2"> */}
            <img src={Hemanth} alt="hemanth-avatar" id="image" />
            {/* </div> */}
            {/* </div> */}
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
