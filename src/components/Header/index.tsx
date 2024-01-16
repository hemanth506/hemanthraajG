import React, { LegacyRef } from "react";
import "./style.css";
import { useMyContext } from "../../Hooks/MyContext";

interface ChildComponentProps {
  controller: (currentRef: React.RefObject<HTMLElement>, section: string) => void;
  headerEltRef: LegacyRef<HTMLDivElement> | undefined | null;
}

export const Header: React.FC<ChildComponentProps> = ({ controller, headerEltRef }) => {
  const { aboutRef, experienceRef, workRef, contactRef } = useMyContext();
  const headContentList = [
    { index: "01.", title: "About", onClick: () => controller(aboutRef, "about") },
    { index: "02.", title: "Experience", onClick: () => controller(experienceRef, "experience") },
    { index: "03.", title: "Work", onClick: () => controller(workRef, "work") },
    { index: "04.", title: "Contact", onClick: () => controller(contactRef, "contact") },
  ];
  return (
    <div id="header_main_component" >
      <div id="header_component" ref={headerEltRef}>
        <div id="header">
          <a href="#">
            <h1 id="header_logo">H<span id="header_logo_R">R</span></h1>
          </a>
          <div id="right_header">
            <div id="right_header_item">
              {headContentList.map((item) => (
                <p className="head_item" key={item.index} onClick={item.onClick}>
                  <span className="head_num">{item.index}</span>
                  <span className="head_title">{item.title}</span>
                </p>
              ))}
            </div>
            <p id="head_resume">
              <a href="#">Resume</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
