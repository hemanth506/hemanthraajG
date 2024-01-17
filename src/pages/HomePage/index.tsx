import React, { Suspense, lazy } from "react";
import "./style.css";

const Intro = lazy(() => import("../../components/Intro"));
const About = lazy(() => import("../../components/About"));
const Experience = lazy(() => import("../../components/Experience"));
const Contact = lazy(() => import("../../components/Contact"));
const Projects = lazy(() => import("../../components/Projects"));
const NoteWorthyProjects = lazy(() => import("../../components/NoteWorthyProjects"));

const HomePage: React.FC = () => {
  return (
    <div id="home_page_main_content">
      <div id="contents">
        <Suspense fallback={<div id="loadingpage" />}>
          <Intro />
        </Suspense>

        <Suspense fallback={<div id="loadingpage" />}>
          <About />
        </Suspense>

        <Suspense fallback={<div id="loadingpage" />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<div id="loadingpage" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div id="loadingpage" />}>
          <NoteWorthyProjects />
        </Suspense>

        <Suspense fallback={<div id="loadingpage" />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;