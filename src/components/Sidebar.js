import React from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./../data";

const Sidebar = ({ isIconClicked }) => {
  return (
    <aside className={`sidebar ${isIconClicked ? "show" : "hide"}`}>
      <p>Links goes here</p>
    </aside>
  );
};

export default Sidebar;
