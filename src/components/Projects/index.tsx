import React from "react";
import "./style.css";
import Github from "../../assets/github.svg";
import ExternalLink from "../../assets/external-link.svg";
import FlexO from "../../assets/FlexO.png";
import Techsol from "../../assets/Techsol-HomePage.png";
import Chatty from "../../assets/Chat-ty - Home.png";

export const Projects = () => {
  const projectsDetails = [
    {
      title: "TechSol",
      description:
        "The Multilingual Corporate Website is a dynamic and responsive web application designed to represent a company's brand and its client portfolio. The website is built using React JS for the front end, Node JS (with TypeScript) for the back end, and MongoDB for data storage.",
      toolList: ["React", "Express", "Typescript", "Nodemailer"],
      links: { github: "https://github.com/hemanth506/Techsol", externalLink: "https://techsol-beryl.vercel.app", image: Techsol },
    },
    {
      title: "FlexO",
      description:
        "FlexO is a lightweight and intuitive movie app designed for the seamless exploration of a diverse range of films. From recently released blockbusters to top-rated classics and upcoming releases, FlexO provides a user-friendly interface to effortlessly discover and manage your movie preferences. With powerful search functionality and the ability to create a personal watchlist, FlexO simplifies your movie-watching experience",
      toolList: ["React", "Typescript", "MoveiDB API", "AntD"],
      links: { github: "https://github.com/hemanth506/FlixO", externalLink: "https://flex-o.vercel.app", image: FlexO },
    },
    {
      title: "Chat-ty",
      description:
        "Chat-ty is a dynamic chat application that facilitates easy and secure communication in groups, one-on-one conversations, or with a specific individual using unique room IDs. The app stores messages locally, ensuring a seamless experience even after reloading. Users can revisit previous rooms from the home page, providing access to shared conversations and connections.",
      toolList: ["React", "PubNub API", "AntD"],
      links: { github: "https://github.com/hemanth506/chat-ty", externalLink: "https://chat-ty-theta.vercel.app", image: Chatty },
    },
  ];
  return (
    <div id="projects_main_content">
      <div id="projects_main">
        <h2 id="projects_heading">Some Things I’ve Built</h2>
        <div id="projects_view">
          {projectsDetails.map((project, index) => (
            <div
              className={`project_view  ${index === 1 && "project_view_rev"}`}
            >
              <div className="projects_left_view">
                <div
                  className={`project_title  ${
                    index === 1 && "project_title_rev"
                  }`}
                >
                  <p className="project_featured">Featured Project</p>
                  <p className="project_name">{project.title}</p>
                </div>
                <div className="project_description">
                  <span
                    className={`project_description_content ${
                      index === 1 && "project_description_content_rev"
                    }`}
                  >
                    {project.description}
                  </span>
                </div>
                <ul
                  className={`project_tools ${
                    index === 1 && "project_tools_rev"
                  }`}
                >
                  {project.toolList.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
                <div
                  className={`project_outcome ${
                    index === 1 && "project_outcome_rev"
                  }`}
                >
                  <a href={project.links.github} target="__blank">
                    <img
                      src={Github}
                      alt="actualGithub"
                      className="project_outcome_link"
                    />
                  </a>
                  <a href={project.links.externalLink} target="__blank">
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
                  index === 1 && "projects_right_view_rev"
                }`}
              >
                <div className="project_image_view">
                  <a href={project.links.externalLink} target="__blank">
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
          {/* 
          <div className="project_view">
            <div className="projects_left_view">
              <div className="project_title">
                <p className="project_featured">Featured Project</p>
                <p className="project_name">Spotify Profile 1</p>
              </div>
              <div className="project_description">
                <span className="project_description_content">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </span>
              </div>
              <ul className="project_tools">
                {listItem.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
              <div className="project_outcome">
                <img
                  src={Github}
                  alt="actualGithub"
                  className="project_outcome_link"
                />
                <img
                  src={ExternalLink}
                  alt="ExternalLink"
                  className="project_outcome_link"
                />
              </div>
            </div>
            <div className="projects_right_view">
              <div className="project_image_view">
                <a href="#">
                  <img src={FlexO} alt="FlexO" width="580px" height="365px" />
                </a>
              </div>
            </div>
          </div>

          <div className="project_view project_view_rev">
            <div className="projects_left_view">
              <div className="project_title project_title_rev">
                <p className="project_featured">Featured Project</p>
                <p className="project_name">Spotify Profile 2</p>
              </div>
              <div className="project_description">
                <span className="project_description_content project_description_content_rev">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </span>
              </div>
              <ul className="project_tools project_tools_rev">
                {listItem.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
              <div className="project_outcome project_outcome_rev">
                <img
                  src={Github}
                  alt="actualGithub"
                  className="project_outcome_link"
                />
                <img
                  src={ExternalLink}
                  alt="ExternalLink"
                  className="project_outcome_link"
                />
              </div>
            </div>
            <div className="projects_right_view projects_right_view_rev">
              <div className="project_image_view">
                <a href="#">
                  <img src={FlexO} alt="FlexO" width="580px" height="365px" />
                </a>
              </div>
            </div>
          </div>

          <div className="project_view">
            <div className="projects_left_view">
              <div className="project_title">
                <p className="project_featured">Featured Project</p>
                <p className="project_name">Spotify Profile 3</p>
              </div>
              <div className="project_description">
                <span className="project_description_content">
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </span>
              </div>
              <ul className="project_tools">
                {listItem.map((tool, index) => (
                  <li key={index}>{tool}</li>
                ))}
              </ul>
              <div className="project_outcome">
                <img
                  src={Github}
                  alt="actualGithub"
                  className="project_outcome_link"
                />
                <img
                  src={ExternalLink}
                  alt="ExternalLink"
                  className="project_outcome_link"
                />
              </div>
            </div>
            <div className="projects_right_view">
              <div className="project_image_view">
                <a href="#">
                  <img src={FlexO} alt="FlexO" width="580px" height="365px" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
