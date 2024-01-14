import React from "react";
import "./style.css";

export const Header = () => {
  const headContentList = [
    { index: "01.", title: "About" },
    { index: "02.", title: "Experience" },
    { index: "03.", title: "Work" },
    { index: "04.", title: "Contact" },
  ];
  return (
    <div id="header_component">
      <div id="header">
        <a href="#">
          <h1 id="header_logo">H<span id="header_logo_R">R</span></h1>
        </a>
        <div id="right_header">
          <div id="right_header_item">
            {headContentList.map((item) => (
              <a href="#" key={item.index}>
                <p className="head_item">
                  <span className="head_num">{item.index}</span>
                  <span className="head_title">{item.title}</span>
                </p>
              </a>
            ))}
          </div>
          <p id="head_resume">
            <a href="#">Resume</a>
          </p>
        </div>
      </div>
    </div>
  );
};
