import React from "react";
import github from "../../assets/github.svg";
import leetcode from "../../assets/leetcode.svg";
import linkedIn from "../../assets/linkedIn.svg";
import instagram from "../../assets/instagram.svg";
import "./style.css";

export const LeftNav = () => {
  const socialMediaLinks = [
    { src: github, link: "" },
    { src: leetcode, link: "" },
    { src: linkedIn, link: "" },
    { src: instagram, link: "" },
  ];

  return (
    <div id="social-media-main-content">
      <div id="social-media-content">
        <div id="social-media-icons">
          {socialMediaLinks.map((media, index) => (
            <a href={media.link} target="_blank" key={index} rel="noreferrer">
              <img
                src={media.src}
                alt={`Social Media ${index}`}
                className="icons"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
