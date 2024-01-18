import React from "react";
import "./style.css";
import Hemanth from "../../assets/ReadyPlayerMe-Avatar.png";
import { useMyContext } from "../../Hooks/MyContext";
import { aboutSkillSet } from "../../utils";

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
                Hello! I'm Hemanth, and I enjoy creating things that live on the
                internet. My interest in web development began in 2019 during my
                final year project <span className="heart">❤️</span>.
              </p>
              <p>
                With over <span className="text_highlight">3 years</span> of
                experience, I've delved into various technologies such as
                React.js, Node.js, and Typescript. I've also started exploring
                React Native gradually. Solving DSA problems is a passion of
                mine, and I've successfully tackled over{" "}
                <span className="text_highlight">400</span> problems across
                various platforms.
              </p>
              <p>
                I've applied my skills in working with Twilio to create IVRs for
                Contact center solutions, providing enhanced customer
                experiences. Recently, I had the opportunity to delve into
                Generative AI tools from Google Cloud and AWS, which deepened my
                understanding of the basics of AI.
              </p>
              <div>
                I have experience working with the following technologies:
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
