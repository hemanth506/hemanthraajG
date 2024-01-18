import React from "react";
import "./style.css";
import { socialMediaLinks } from "../../utils";


export const LeftNav = () => {
  return (
    <div id="social-media-main-content">
      <div id="social-media-content">
        <div id="social-media-icons">
          {socialMediaLinks.map((media, index) => (
            <a href={media.link} target="_blank" key={index} rel="noopener noreferrer">
              <img
                src={media.src}
                alt={`Social Media ${index}`}
                className={`icons ${media.className}`}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
