import React, { useContext } from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./../data";
import { SidebarModalContext } from "./../context";

const Sidebar = ({ isIconClicked }) => {
  const { handleIconClick } = useContext(SidebarModalContext);
  return (
    <aside className={`sidebar ${isIconClicked ? "show" : "hide"}`}>
      <div className="sidebar-heading">
        <img src={logo} alt="logo" width="150" />
        <FaTimes
          className="sidebar-close-icon"
          onClick={() => handleIconClick("close")}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
