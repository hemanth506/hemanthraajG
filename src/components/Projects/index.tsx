import React from "react";
import "./style.css";
import Github from "../../assets/github.svg";
import ExternalLink from "../../assets/external-link.svg";
import FlexO from "../../assets/FlexO.png";
import Techsol from "../../assets/Techsol-HomePage.png";
import Chatty from "../../assets/Chat-ty - Home.png";
import { useMyContext } from "../../Hooks/MyContext";

const Projects = () => {
  const { workRef } = useMyContext();
  const projectsDetails = [
    {
      title: "TechSol",
      description:
        "The Multilingual Corporate Website is a dynamic and responsive web application designed to represent a company's brand and its client portfolio.",
      toolList: ["React", "Express", "Typescript", "Nodemailer", "MongoDB"],
      links: {
        github: "https://github.com/hemanth506/Techsol",
        externalLink: "https://techsol-beryl.vercel.app",
        image: Techsol,
      },
    },
    {
      title: "FlexO",
      description:
        "FlexO is a lightweight and intuitive movie app designed for the seamless exploration of a diverse range of films. FlexO provides a user-friendly interface to effortlessly discover and manage your movie preferences. With powerful search functionality.",
      toolList: ["React", "Typescript", "MoveiDB API", "AntD"],
      links: {
        github: "https://github.com/hemanth506/FlixO",
        externalLink: "https://flex-o.vercel.app",
        image: FlexO,
      },
    },
    {
      title: "Chat-ty",
      description:
        "Chat-ty is a dynamic chat application that facilitates easy and secure communication using unique room IDs. Users can revisit previous rooms from the home page, providing access to shared conversations and connections.",
      toolList: ["React", "PubNub API", "AntD"],
      links: {
        github: "https://github.com/hemanth506/chat-ty",
        externalLink: "https://chat-ty-theta.vercel.app",
        image: Chatty,
      },
    },
  ];
  return (
    <div id="projects_main_content" ref={workRef}>
      <div id="projects_main">
        <h2 id="projects_heading">Some Things I’ve Built</h2>
        <div id="projects_view">
          {projectsDetails.map((project, index) => (
            <div
              className={`project_view  ${index % 2 === 0 && "project_view_rev"}`}
              key={index}
            >
              <div className="projects_left_view">
                <div
                  className={`project_title  ${
                    index % 2 === 0 && "project_title_rev"
                  }`}
                >
                  <p className="project_featured">Featured Project</p>
                  <p className="project_name">{project.title}</p>
                </div>
                <div className="project_description">
                  <span
                    className={`project_description_content ${
                      index % 2 === 0 && "project_description_content_rev"
                    }`}
                  >
                    {project.description}
                  </span>
                </div>
                <ul
                  className={`project_tools ${
                    index % 2 === 0 && "project_tools_rev"
                  }`}
                >
                  {project.toolList.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
                <div
                  className={`project_outcome ${
                    index % 2 === 0 && "project_outcome_rev"
                  }`}
                >
                  <a
                    href={project.links.github}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={Github}
                      alt="actualGithub"
                      className="project_outcome_link"
                    />
                  </a>
                  <a
                    href={project.links.externalLink}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={ExternalLink}
                      alt="ExternalLink"
                      className="project_outcome_link"
                    />
                  </a>
                </div>
              </div>
              <div
                className={`projects_right_view ${
                  index % 2 === 0 && "projects_right_view_rev"
                }`}
              >
                <div className="project_image_view">
                  <a
                    href={project.links.externalLink}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="project_image_view_image"
                      src={project.links.image}
                      alt="FlexO"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export  default Projects;