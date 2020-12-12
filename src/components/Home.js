import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useCustomContext } from "./../context";

const Home = () => {
  const {
    isSidebarOpen,
    handleComponentToggle,
    isModalOpen,
  } = useCustomContext();

  return (
    <section className="home-container">
      <FaBars
        className="fa-bars"
        onClick={() => handleComponentToggle("sidebar-open")}
      />
      <Sidebar isIconClicked={isSidebarOpen} />
      <Modal isisModalOpened={isModalOpen} />
      <button
        className={`modal-btn`}
        onClick={() => handleComponentToggle("modal-open")}
      >
        Show Modal
      </button>
    </section>
  );
};

export default Home;
