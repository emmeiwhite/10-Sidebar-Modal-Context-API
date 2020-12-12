import React, { useState, createContext } from "react";

/* --- 
        This component has the gloabl data | our context.
        We'll create our context using createContext()
    ---*/

export const SidebarModalContext = createContext();
/* --- We have access to Provider now --- */

export default function ContextComponent({ children }) {
  const [btnClick, setBtnClick] = useState(false);

  const handleBtnClick = () => {
    setBtnClick(true);
  };
  return (
    <SidebarModalContext.Provider value={{ btnClick, handleBtnClick }}>
      {children}
    </SidebarModalContext.Provider>
  );
}
