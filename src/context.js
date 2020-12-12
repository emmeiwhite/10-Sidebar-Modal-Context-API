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

  const handleModalBtnClick = () => {
    setModalBtnClick(true);
    console.log("Modal Button Clicked !!!");
  };

  const handleIconClick = () => {
    console.log("Icon clicked");
    setIconClick(true);
  };

  return (
    <SidebarModalContext.Provider
      value={{ modalBtnClick, handleModalBtnClick, iconClick, handleIconClick }}
    >
      {children}
    </SidebarModalContext.Provider>
  );
}
