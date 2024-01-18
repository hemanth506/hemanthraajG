import React, { useEffect, useState } from "react";
import "./style.css";
import { Tabs } from "antd";
import { useMyContext } from "../../Hooks/MyContext";
import { experienceArr } from "../../utils";

type company = {
  name: string;
  role: string;
  content: {
    fullName: string;
    link: string;
    duration: string;
    description: string[];
    technologies: string[];
  };
};

const Experience = () => {
  const { experienceRef } = useMyContext();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const generateChildContent = (company: company) => {
    return (
      <div>
        <h2 className="exp_title">
          {company.role}
          <span className="exp_fullName">
            {company.content.fullName && (
              <span>
                <span> @ </span>
                <a
                  className="companyLink"
                  href={company.content.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {company.content.fullName}
                </a>
              </span>
            )}
          </span>
        </h2>
        <span className="exp_duration">{company.content.duration}</span>
        <ul className="expPointList">
          {company.content.description.map((point, index) => (
            <li className="exp_points" key={index}>{point}</li>
          ))}
        </ul>
      </div>
    );
  };

  const generateParent = (companyName: string) => (
    <span className="companyName">{companyName}</span>
  );

  return (
    <div id="experience_parent_conent"  ref={experienceRef}>
      <div id="experience_main_content">
        <div id="experience_main">
          <h2 id="experience_heading">Where I’ve Worked</h2>
          <Tabs
            className="tab_parent"
            tabPosition={screenWidth > 768 ?"left" : "top"}
            items={experienceArr.map((company, i) => {
              const id = String(i);
              return {
                label: generateParent(company.name),
                key: id,
                children: generateChildContent(company),
              };
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;