import React from "react";
import { Intro } from "../../components/Intro";
import "./style.css";
import { About } from "../../components/About";

export const HomePage = () => {
  return (
    <div id="home_page_main_content">
      <div id="contents">
        <Intro />
        <About />
      </div>
    </div>
  );
};
