import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/index";
import { NotFoundPage } from "../pages/NotFoundPage/index";
import { ArchievePage } from "../pages/ArchievePage/index";

export const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <section>Header</section>
        <section>Right nav</section>
        <section>Left Nav</section>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archive" element={<ArchievePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};
