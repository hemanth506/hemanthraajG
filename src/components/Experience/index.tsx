import React from "react";
import "./style.css";
import { Tabs, ConfigProvider } from "antd";
import { useMyContext } from "../../Hooks/MyContext";

type company = {
  name: string;
  role: string;
  content: {
    fullName: string;
    link: string;
    duration: string;
    description: string[];
    technologies: string[];
  };
};

const experienceArr = [
  {
    name: "Factana",
    role: "Full-stack Web Developer",
    content: {
      fullName: "Factana Solution Pvt Ltd",
      link: "",
      duration: "Oct 2021 - Present",
      description: [
        "Proficient in working with client APIs to facilitate seamless integration between applications and services.",
        "Built serverless APIs and IVR flows using an Interactive voice response platform - Twilio.",
        "Successfully managed multiple client accounts concurrently, effectively balancing competing priorities and meeting deadlines.",
        "Implemented and maintained PCI compliance measures for the organization, ensuring adherence to security protocols and regulatory requirements.",
      ],
      technologies: [""],
    },
  },
  {
    name: "FreeLancing",
    role: "Full-stack Web Developer - MERN",
    content: {
      fullName: "",
      link: "",
      duration: "Oct 2021 - July 2022 | July 2023 - Present",
      description: [
        "Worked for a small startup company on website development using PHP, HTML, CSS, JavaScript, JQuery, and SQL database.",
        "Develop several e-commerce websites tailored to client specifications using the MERN Stack. Currently, the primary focus is on constructing a mobile application using React Native for the purpose of organizing tournament events.",
      ],
      technologies: [],
    },
  },
  {
    name: "Prviga",
    role: "Software developer",
    content: {
      fullName: "Prviga Solution Ltd",
      link: "",
      duration: "July 2020 - Sept 2021",
      description: [
        "Wrote server-side and client-side code for a product named 'Widuni' using Node.js, Express.js, PHP, Java, HTML, CSS, JavaScript, JQuery, MongoDB, and SQL database.",
        "Handled forms and data reports in various aspects of client requirements using the D3.js framework for graphical representation.",
        "Performed software demonstrations for potential clients, highlighting strengths of Product and Service.",
      ],
      technologies: [
        "PHP",
        "Node.js",
        "React.js",
        "D3.js",
        "MySQL",
        "MongoDB",
        "Javascript",
        "Jquery",
        "HTML",
        "CSS",
      ],
    },
  },
  
];

export const Experience = () => {
  const { experienceRef } = useMyContext();

  const generateChildContent = (company: company) => {
    return (
      <div>
        <h2 className="exp_title">
          {company.role}
          <span className="exp_fullName">
            {company.content.fullName && (
              <span>
                <span> @ </span>
                <a
                  className="companyLink"
                  href="https://prviga.com"
                  target="_blank"
                >
                  {company.content.fullName}
                </a>
              </span>
            )}
          </span>
        </h2>
        <span className="exp_duration">{company.content.duration}</span>
        <ul className="expPointList">
          {company.content.description.map((point, index) => (
            <li className="exp_points" key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  };

  const generateParent = (companyName: string) => (
    <span className="companyName">{companyName}</span>
  );

  return (
    <div id="experience_main_content" ref={experienceRef}>
      <div id="experience_main">
        <h2 id="experience_heading">Where I’ve Worked</h2>
        <Tabs
            className="tab_parent"
            tabPosition="left"
            items={experienceArr.map((company, i) => {
              const id = String(i);
              return {
                label: generateParent(company.name),
                key: id,
                children: generateChildContent(company),
              };
            })}
          />
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
