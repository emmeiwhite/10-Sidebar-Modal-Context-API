import React, { useState, createContext, useContext } from "react";

export const SidebarModalContext = createContext();

/* --- Custom Hook  --- */
export const useCustomContext = () => {
  return useContext(SidebarModalContext);
};

export default function ContextComponent({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setisModalOpen] = useState(false);

  const handleComponentToggle = (state) => {
    switch (state) {
      case "modal-open":
        setisModalOpen(true);
        break;
      case "modal-close":
        setisModalOpen(false);
        break;
      case "sidebar-open":
        setIsSidebarOpen(true);
        break;
      case "sidebar-close":
        setIsSidebarOpen(false);
        break;
    }
  };

  return (
    <SidebarModalContext.Provider
      value={{
        isModalOpen,
        handleComponentToggle,
        isSidebarOpen,
      }}
    >
      {children}
    </SidebarModalContext.Provider>
  );
}
