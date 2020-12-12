import React, { useState, createContext, useContext } from "react";

export const SidebarModalContext = createContext();

/* --- Custom Hook : To avoid importing useContext and SidebarModalContext in my children components --- */

export const useCustomContext = () => {
  return useContext(SidebarModalContext);
};

export default function ContextComponent({ children }) {
  const [iconClick, setIconClick] = useState(false);
  const [modalBtnClick, setModalBtnClick] = useState(false);

  const handleModalBtnClick = (modalState) => {
    console.log("Modal Button Clicked !!!");
    switch (modalState) {
      case "open":
        setModalBtnClick(true);
        break;
      case "close":
        setModalBtnClick(false);
        break;
    }
  };

  const handleIconClick = (iconState) => {
    console.log("Icon clicked");
    switch (iconState) {
      case "open":
        setIconClick(true);
        break;
      case "close":
        setIconClick(false);
        break;
    }
  };

  return (
    <SidebarModalContext.Provider
      value={{ modalBtnClick, handleModalBtnClick, iconClick, handleIconClick }}
    >
      {children}
    </SidebarModalContext.Provider>
  );
}
