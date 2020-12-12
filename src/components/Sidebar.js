import React from "react";
import logo from "./../logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./../data";
import { useCustomContext } from "./../context";

const Sidebar = ({ isIconClicked }) => {
  const { handleComponentToggle } = useCustomContext();
  return (
    <aside className={`sidebar ${isIconClicked ? "show" : "hide"}`}>
      <header className="sidebar-heading">
        <img src={logo} alt="logo" width="150" />
        <FaTimes
          className="sidebar-close-icon"
          onClick={() => handleComponentToggle("sidebar-close")}
        />
      </header>

      <nav>
        <ul className="sidebar-links">
          {links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <span>{icon}</span>
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </nav>

      <footer>
        {social.map((socialIcon) => {
          const { icon, id, url } = socialIcon;
          return (
            <a href={url} key={id} target="_blank">
              {icon}
            </a>
          );
        })}
      </footer>
    </aside>
  );
};

export default Sidebar;
