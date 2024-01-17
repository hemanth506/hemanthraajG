import React, { useCallback, useState } from "react";
import "./style.css";
import folder from "../../assets/folder.svg";
import externalLink from "../../assets/external-link.svg";
import github from "../../assets/github.svg";

const NOTE_WORTHY_PROJECTS = [
  {
    title: "Organize Me",
    description:
      "A comprehensive and intuitive organizational app designed to streamline your daily tasks, thoughts, and resources with efficiency and simplicity.",
    links: {
      github: "https://github.com/hemanth506/OrganizeMe-Todo-App",
      externalLink: "https://todo-peach-nine.vercel.app",
    },
    tools: ["React", "MUI", "Styled Component"],
  },
  {
    title: "Personal Website",
    description:
      "My first portfolio website built using React which showcases my interest and my works.",
    links: {
      github: "https://github.com/hemanth506/hemanthraajG",
      externalLink: "https://hemanthraaj.vercel.app",
    },
    tools: ["React", "Typescript", "CSS"],
  },
  {
    title: "Color game on CSS colors",
    description:
      "A game developed just for fun which makes the users study while playing.",
    links: {
      github: "https://github.com/hemanth506/color-quiz-game",
      externalLink: "https://color-quiz-game-delta.vercel.app",
    },
    tools: ["JS", "HTML", "CSS"],
  },
  {
    title: "Netflix clone",
    description:
      "A project which helped me to gain knowledge in CSS and improve my web development skill.",
    links: {
      github: "https://github.com/hemanth506/CSS-Netflix-Clone",
      externalLink: "https://css-netflix-clone.vercel.app",
    },
    tools: ["CSS", "HTML", "JS"],
  },
  {
    title: "Weather forecasting app",
    description:
      "An application which tells us about the climate of a region all over the world.",
    links: {
      github: "https://github.com/hemanth506/weather-app",
      externalLink: "https://weather-app-psi-nine-98.vercel.app",
    },
    tools: ["React", "Weather API"],
  },
  {
    title: "Codepen",
    description:
      "An online development environemnt for testing and showcasing user-created HTML, CSS and JavaScript code snippets.",
    links: {
      github: "https://github.com/hemanth506/codepen-clone",
      externalLink: "https://codepen-clone-olive.vercel.app",
    },
    tools: ["JS", "HTML", "CSS"],
  },
  {
    title: "Nested Comments",
    description:
      "An usual comment section just created for practise which is used in almost all the user interacting websites.",
    links: {
      github: "https://github.com/hemanth506/nested-comment",
      externalLink: "https://nested-comments-eosin.vercel.app",
    },
    tools: ["JS", "CSS"],
  },
  {
    title: "Kanban board",
    description:
      "A tool for visualizing workflows and managing tasks and it can be used to manage work at a personal or organizational level.",
    links: {
      github: "https://github.com/hemanth506/kanban-board",
      externalLink: "https://kanban-board-green-one.vercel.app",
    },
    tools: ["JS", "CSS", "HTML"],
  },
  {
    title: "Otp input validator",
    description:
      "A mini project in which you can input the OTP password for Multi-factor authentication.",
    links: {
      github: "https://github.com/hemanth506/otp-input-validator",
      externalLink: "https://otp-input-validator.vercel.app",
    },
    tools: ["JS", "CSS"],
  },
  {
    title: "Online Grocery Shop",
    description:
      "A mini E-Com website consists of a login portal for users where they can select the groceries which is fetched from the MySQL and generate bill after shopping.",
    links: {
      github: "https://github.com/hemanth506/Online-Grocery-Shop",
      externalLink: "",
    },
    tools: ["PHP", "JS", "Jquery", "MySql"],
  },
  {
    title: "User login Authentication",
    description:
      "A basic express login app which authenticates the user based on the credentials and allowed to hit API if it is valid.",
    links: {
      github: "https://github.com/hemanth506/typescript-backend",
      externalLink: "",
    },
    tools: ["Node", "Express", "Typescript"],
  },
];

const NoteWorthyProjects = () => {
  const [paginationCount, setPaginationCount] = useState<number>(6);
  const [isShowMore, setIsShowMore] = useState<boolean>(true);

  const handlePagination = useCallback(() => {
    if (isShowMore) {
      setPaginationCount((prev) => prev + 6);
      setIsShowMore(false);
    } else {
      setPaginationCount(6);
      setIsShowMore(true);
    }
  }, [isShowMore]);

  return (
    <div id="worthyProjects_main_content">
      <h2 id="worthyProjects_header">Other Noteworthy Projects</h2>
      <div id="worthyProjects_view">
        {NOTE_WORTHY_PROJECTS.map((project, i) => (
          <a
            key={i}
            href={project.links.externalLink}
            target="__blank"
            style={{ display: paginationCount > i ? "block" : "none" }}
          >
            <div className="worthyProject_inner">
              <header className="worthyProject_inner_header">
                <div className="worthyProject_top">
                  <img src={folder} alt="folder" className="folder" />
                  <div
                    className="worthyProject_top_links"
                    style={{
                      justifyContent: project.links.externalLink
                        ? ""
                        : "flex-end",
                    }}
                  >
                    {project.links.github ? (
                      <a href={project.links.github} target="__blank">
                        <img
                          src={github}
                          alt="github"
                          className="worthyProject_icons"
                        />
                      </a>
                    ) : null}

                    {project.links.externalLink ? (
                      <a href={project.links.externalLink} target="__blank">
                        <img
                          src={externalLink}
                          alt="externalLink"
                          className="worthyProject_icons"
                        />
                      </a>
                    ) : null}
                  </div>
                </div>
                <h3 className="worthyProject_title">{project.title}</h3>
                <p className="worthyProject_description_content">
                  {project.description}
                </p>
              </header>
              <footer className="worthyProject_tools">
                <ul className="worthyProject_tools_list">
                  {project.tools.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </a>
        ))}
      </div>
      <span className="show_bottons" onClick={handlePagination}>
        Show {isShowMore ? "More" : "Less"}
      </span>
    </div>
  );
};

export  default NoteWorthyProjects;