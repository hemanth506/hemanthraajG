import React from "react";
import github from "../../assets/github.svg";
import leetcode from "../../assets/leetcode.svg";
import linkedIn from "../../assets/linkedIn.svg";
import instagram from "../../assets/instagram.svg";
import telephone from "../../assets/telephone.svg";
import scaler from "../../assets/scaler.svg";
import "./style.css";

export const LeftNav = () => {
  const socialMediaLinks = [
    { src: github, className: "github", link: "https://github.com/hemanth506" },
    { src: leetcode, className: "leetcode", link: "https://leetcode.com/hemanthraaj31" },
    { src: linkedIn, className: "linkedIn", link: "https://www.linkedin.com/in/hemanth-raaj-g" },
    // { src: instagram, className: "instagram", link: "https://www.instagram.com/hemanthraaj31" },
    {src: scaler, className: "scaler", link: "https://www.scaler.com/academy/profile/c9461cf63915"},
    {src: telephone, className: "telephone", link: "tel://+919962644103"},
  ];

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
