import React, { useState, createContext, useContext } from "react";

export const SidebarModalContext = createContext();

/* --- Custom Hook : To avoid importing useContext and SidebarModalContext in my children components --- */

export const useCustomContext = () => {
  return useContext(SidebarModalContext);
};

export default function ContextComponent({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleIsModalOpen = (modalState) => {
    console.log("Modal Button Clicked !!!");
    switch (modalState) {
      case "open":
        setisModalOpen(true);
        break;
      case "close":
        setisModalOpen(false);
        break;
    }
  };

  const handleIsSidebarOpen = (iconState) => {
    console.log("Icon clicked");
    switch (iconState) {
      case "open":
        setIsSidebarOpen(true);
        break;
      case "close":
        setIsSidebarOpen(false);
        break;
    }
  };

  return (
    <SidebarModalContext.Provider
      value={{
        isModalOpen,
        handleIsModalOpen,
        isSidebarOpen,
        handleIsSidebarOpen,
      }}
    >
      {children}
    </SidebarModalContext.Provider>
  );
}
