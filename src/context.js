import React, { useState, createContext } from "react";

/* --- 
        This component has the gloabl data | our context.
        We'll create our context using createContext()
    ---*/

export const SidebarModalContext = createContext();
/* --- We have access to Provider now --- */

export default function ContextComponent({ children }) {
  const [btnClick, setBtnClick] = useState(false);
  const [iconClick, setIconClick] = useState(false);

  const handleBtnClick = () => {
    setBtnClick(true);
    console.log("Button Clicked !!!");
  };

  const handleIconClick = () => {
    console.log("Icon clicked");
    setIconClick(true);
  };
  return (
    <SidebarModalContext.Provider
      value={{ btnClick, handleBtnClick, iconClick, handleIconClick }}
    >
      {children}
    </SidebarModalContext.Provider>
  );
}
