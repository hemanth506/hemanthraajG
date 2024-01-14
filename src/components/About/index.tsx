import React from "react";
import "./style.css";
import Hemanth from "../../assets/ReadyPlayerMe-Avatar.png";

export const About = () => {
  const skillSet = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Node.js",
    "Twilio",
    "GCP Generative AI",
    "Docker",
    "Core Java",
    "Core PHP",
    "Git",
    "MongoDB",
    "MySQL",
    "Micro-services (Basics)",
    "Micro-frontends (Basics)",
  ];
  return (
    <div id="about_me_main_content">
      <div id="about_me_main">
        <h2 id="about_heading">About Me</h2>
        <div id="about_content">
          <section id="about_section">
            <div>
              <p>
                Hello! My name is Hemanth and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2019 when I was doing my final year project❤️.
              </p>
              <p>
                In my <span className="text_highlight">3+ years</span> of experience, I have learnt a bunch of technologies, like React.js,
                Node.js, and Typescript, and I have started exploring React
                Native gradually. I love solving DSA problems, and I've solved
                more than <span className="text_highlight">400</span> of them on different platforms.
              </p>
              <p>
                I have worked on Twilio for creating IVRs to provide Contact
                center solutions to the Customers. Recently I got a
                chance to do R&D work on Generative AI tools from Google Cloud
                and AWS which helps me understand the basics of AI.
              </p>
              <div>
                Here are a few technologies I’ve been working with recently:
                <ul className="skillset">
                  {skillSet.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section id="image_section">
            <img src={Hemanth} alt="" width={380} id="image" />
          </section>
        </div>
      </div>
    </div>
  );
};
