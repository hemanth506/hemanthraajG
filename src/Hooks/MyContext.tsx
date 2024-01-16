import React, { createContext, useContext, useRef } from "react";

interface MyContextProps {
  aboutRef: React.RefObject<HTMLInputElement>;
  experienceRef: React.RefObject<HTMLInputElement>;
  workRef: React.RefObject<HTMLInputElement>;
  contactRef: React.RefObject<HTMLInputElement>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<any> = ({ children }) => {
  const aboutRef = useRef<HTMLInputElement>(null);
  const experienceRef = useRef<HTMLInputElement>(null);
  const workRef = useRef<HTMLInputElement>(null);
  const contactRef = useRef<HTMLInputElement>(null);

  const contextValue: MyContextProps = {
    aboutRef,
    experienceRef,
    workRef,
    contactRef,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};


export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }

  return context;
};