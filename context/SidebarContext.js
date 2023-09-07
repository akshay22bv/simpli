"use client";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const sideBarContext = createContext();

export const useSidebar = () => {
  return useContext(sideBarContext);
};

const SidebarProvider = ({ children }) => {
  const [open, setopen] = useState(false);

  const handleOpenSidebar = () => {
    setopen(!open);
  };

  const handleCloseSidebar = () => {
    setopen(false);
  };

  // const checkWindowWidth = () => {
  //   if (window.innerWidth < 780) {
  //     setopen(true);
  //   }
  // };

  // useEffect(() => {
  //   // Add a resize event listener to monitor window width changes
  //   window.addEventListener("resize", checkWindowWidth);

  //   // Initialize the open state based on the initial window width
  //   checkWindowWidth();

  //   // Don't forget to remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("resize", checkWindowWidth);
  //   };
  // }, []);

  console.log("open: ", open);
  return (
    <sideBarContext.Provider
      value={{ open, handleOpenSidebar, handleCloseSidebar, setopen }}
    >
      {children}
    </sideBarContext.Provider>
  );
};

export default SidebarProvider;
