import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/index";
import { NotFoundPage } from "../../pages/NotFoundPage/index";
import { ArchievePage } from "../../pages/ArchievePage/index";
import { Header } from "../../components/Header";
import "./style.css";
import { LeftNav } from "../../components/LeftNav";
import { RightNav } from "../../components/RightNav";
import { MyContextProvider } from "../../Hooks/MyContext";

export const Home: React.FC = () => {
  
  const scrollToView = (
    currentRef: React.RefObject<HTMLElement>,
    section: string
  ): void => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: "smooth" });
      window.location.hash = `#${section}`;
    }
  };

  return (
    <div id="container">
      <BrowserRouter>
        <MyContextProvider>
          <Header controller={scrollToView} />
          <main id="main_content">
            <section id="left_nav_content">
              <LeftNav />
            </section>
            <section id="main_content_routes">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/archive" element={<ArchievePage />} />
                <Route path="/*" element={<NotFoundPage />} />
              </Routes>
            </section>
            <section id="right_nav_content">
              <RightNav />
            </section>
          </main>
        </MyContextProvider>
      </BrowserRouter>
    </div>
  );
};
