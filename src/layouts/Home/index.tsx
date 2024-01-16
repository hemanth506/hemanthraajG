import React, { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { HomePage } from "../../pages/HomePage/index";
import { NotFoundPage } from "../../pages/NotFoundPage/index";
import { ArchievePage } from "../../pages/ArchievePage/index";
import { Header } from "../../components/Header";
import "./style.css";
import { LeftNav } from "../../components/LeftNav";
import { RightNav } from "../../components/RightNav";
import { MyContextProvider } from "../../Hooks/MyContext";
import "./style.css";

const HomePage = lazy(() => import("../../pages/HomePage/index"));

export const Home: React.FC = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const [isScrollingUp, setIsScrollingUp] = useState(false);

  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;
  //   console.log(isScrollingUp)
  //   if (currentScrollPos < scrollPosition && !isScrollingUp) {
  //     console.log(
  //       "🚀 currentScrollPos:", currentScrollPos, " scrollPosition:", scrollPosition
  //     );
  //     console.log("Scrolling up!");
  //     setIsScrollingUp(true);
  //   } else if (isScrollingUp) {
  //     setIsScrollingUp(false);
  //   }

  //   setScrollPosition(currentScrollPos);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrollPosition]);

  const scrollToView = useCallback((
    currentRef: React.RefObject<HTMLElement>,
    section: string
  ): void => {
    if (currentRef.current) {
      currentRef.current.scrollIntoView({ behavior: "smooth" });
      window.location.hash = `#${section}`;
    }
  }, []);

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
                <Route
                  path="/"
                  element={
                    <Suspense fallback={<div id="loadingpage" />}>
                      <HomePage />
                    </Suspense>
                  }
                />
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

const loadingStyle = {
  height: "100vh",
  width: "100vw",
  backgroundColor: "#0a192f",
};
