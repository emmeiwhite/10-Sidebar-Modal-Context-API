import React, { useState, createContext } from "react";

/* --- 
        This component has the gloabl data | our context.
        We'll create our context using createContext()
    ---*/

export const SidebarModalContext = createContext();
/* --- We have access to Provider now --- */

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
