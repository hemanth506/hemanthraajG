import React, { useCallback, useState } from "react";
import "./style.css";
import folder from "../../assets/folder.svg";
import externalLink from "../../assets/external-link.svg";
import github from "../../assets/github.svg";
import { noteWorthyProjectsArr } from "../../utils";

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
        {noteWorthyProjectsArr.map((project, i) => (
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