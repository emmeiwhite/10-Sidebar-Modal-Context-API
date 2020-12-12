import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { useCustomContext } from "./../context";

const Home = () => {
  const {
    isSidebarOpen,
    handleIsSidebarOpen,
    isModalOpen,
    handleIsModalOpen,
  } = useCustomContext();

  return (
    <section className="home-container">
      <FaBars className="fa-bars" onClick={() => handleIsSidebarOpen("open")} />
      <Sidebar isIconClicked={isSidebarOpen} />
      <Modal isisModalOpened={isModalOpen} />
      <button className={`modal-btn`} onClick={() => handleIsModalOpen("open")}>
        Show Modal
      </button>
    </section>
  );
};

export default Home;
