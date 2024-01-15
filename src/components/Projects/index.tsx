import React from "react";
import "./style.css";
import Github from "../../assets/github.svg";
import ExternalLink from "../../assets/external-link.svg";
import FlexO from "../../assets/FlexO.png";

export const Projects = () => {
  const projectsDetails = [
    {
      title: "Spotify Profile 1",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      toolList: [
        "React",
        "Styled Components",
        "Express",
        "Spotify API",
        "Heroku",
      ],
      links: { github: "#", externalLink: "#", image: FlexO },
    },
    {
      title: "Spotify Profile 2",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      toolList: [
        "React",
        "Styled Components",
        "Express",
        "Spotify API",
        "Heroku",
      ],
      links: { github: "#", externalLink: "#", image: FlexO },
    },
    {
      title: "Spotify Profile 3",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      toolList: [
        "React",
        "Styled Components",
        "Express",
        "Spotify API",
        "Heroku",
      ],
      links: { github: "#", externalLink: "#", image: FlexO },
    },
  ];
  const listItem = [
    "React",
    "Styled Components",
    "Express",
    "Spotify API",
    "Heroku",
  ];
  return (
    <div id="projects_main_content">
      <div id="projects_main">
        <h2 id="projects_heading">Some Things I’ve Built</h2>
        <div id="projects_view">
          {projectsDetails.map((project, index) => (
            <div className={`project_view  ${index === 1 && "project_view_rev"}`}>
              <div className="projects_left_view">
                <div className={`project_title  ${index === 1 && "project_title_rev"}`}>
                  <p className="project_featured">Featured Project</p>
                  <p className="project_name">{project.title}</p>
                </div>
                <div className="project_description">
                  <span className={`project_description_content ${index === 1 && "project_description_content_rev"}`}>
                    {project.description}
                  </span>
                </div>
                <ul className={`project_tools ${index === 1 && "project_tools_rev"}`}>
                  {project.toolList.map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
                <div className={`project_outcome ${index === 1 && "project_outcome_rev"}`}>
                  <a href={project.links.github}>
                    <img
                      src={Github}
                      alt="actualGithub"
                      className="project_outcome_link"
                    />
                  </a>
                  <a href={project.links.externalLink}>
                    <img
                      src={ExternalLink}
                      alt="ExternalLink"
                      className="project_outcome_link"
                    />
                  </a>
                </div>
              </div>
              <div className={`projects_right_view ${index === 1 && "projects_right_view_rev"}`}>
                <div className="project_image_view">
                  <a href="#">
                    <img
                      src={project.links.image}
                      alt="FlexO"
                      width="580px"
                      height="365px"
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
