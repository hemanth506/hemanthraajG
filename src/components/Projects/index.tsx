import React from "react";
import "./style.css";
import Github from "../../assets/github.svg";
import ExternalLink from "../../assets/external-link.svg";
import { useMyContext } from "../../Hooks/MyContext";
import { projectsDetails } from "../../utils";

const Projects = () => {
  const { workRef } = useMyContext();
  return (
    <div id="projects_main_content" ref={workRef}>
      <div id="projects_main">
        <h2 id="projects_heading">Some Things I’ve Built</h2>
        <div id="projects_view">
          {projectsDetails.map((project, index) => (
            <div className="project_container_view" key={index}>
              <div
                className={`project_view bigScreen ${index % 2 === 0 && "project_view_rev"
                  }`}
              >
                <div className="projects_left_view">
                  <div
                    className={`project_title  ${index % 2 === 0 && "project_title_rev"
                      }`}
                  >
                    <p className="project_featured">Featured Project</p>
                    <p className="project_name">{project.title}</p>
                  </div>
                  <div className="project_description">
                    <span
                      className={`project_description_content ${index % 2 === 0 && "project_description_content_rev"
                        }`}
                    >
                      {project.description}
                    </span>
                  </div>
                  <ul
                    className={`project_tools ${index % 2 === 0 && "project_tools_rev"
                      }`}
                  >
                    {project.toolList.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                  <div
                    className={`project_outcome ${index % 2 === 0 && "project_outcome_rev"
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
                  className={`projects_right_view ${index % 2 === 0 && "projects_right_view_rev"
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

              <div className="project_view smallScreen">
                <div className="project_inner_smallScreen">
                  <a
                    href={project.links.externalLink}
                    target="__blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="project_background"
                      style={{
                        backgroundImage: `url(${project.links.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: 'center',
                      }}
                    ></div>
                    <div className="project_content">
                      <div className={`project_title`}>
                        <p className="project_featured">Featured Project</p>
                        <p className="project_name">{project.title}</p>
                      </div>

                      <div className="project_description">
                        <span className={`project_description_content`}>
                          {project.description}
                        </span>
                      </div>

                      <ul className={`project_tools`}>
                        {project.toolList.map((tool, index) => (
                          <li key={index}>{tool}</li>
                        ))}
                      </ul>
                      <div className={`project_outcome`}>
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

export default Projects;
