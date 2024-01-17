import React, {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  // const [isLastEventScrollToView, setIsLastEventScrollToView] = useState(false);
  const headerEltRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos < scrollPosition) {
      // console.log("Scrolling up!");
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    setScrollPosition(currentScrollPos);
  }, [scrollPosition, setIsScrollingUp]);

  useEffect(() => {
    const headerElt = headerEltRef.current;
    // console.log("Effect event", isScrollingUp);
    if (headerElt) {
      if (isScrollingUp) {
        // console.log("changing to fixed");
        headerElt.style.position = "fixed";
      } else {
        headerElt.style.position = "relative";
      }
    }
  }, [isScrollingUp]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const scrollToView = useCallback(
    (currentRef: React.RefObject<HTMLElement>, section: string): void => {
      if (currentRef.current) {
        if (headerEltRef.current) {
          headerEltRef.current.style.position = "relative";
          setIsScrollingUp(true);
          // console.log("relative in the scrollToView", isScrollingUp);
        }
        currentRef.current.scrollIntoView({ behavior: "smooth" });
        window.location.hash = `#${section}`;
      }
    },
    [headerEltRef]
  );

  return (
    <div id="container">
      <BrowserRouter>
        <MyContextProvider>
          <Header controller={scrollToView} headerEltRef={headerEltRef} />
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
