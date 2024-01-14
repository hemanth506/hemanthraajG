import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/HomePage/index";
import { NotFoundPage } from "../../pages/NotFoundPage/index";
import { ArchievePage } from "../../pages/ArchievePage/index";
import { Header } from "../../components/Header";
import "./style.css";
import { LeftNav } from "../../components/LeftNav";
import { RightNav } from "../../components/RightNav";

export const Home = () => {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
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
      </BrowserRouter>
    </div>
  );
};
