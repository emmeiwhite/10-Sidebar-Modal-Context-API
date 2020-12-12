import React, { useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { SidebarModalContext } from "./../context";

const Home = () => {
  const {
    iconClick,
    handleIconClick,
    modalBtnClick,
    handleModalBtnClick,
  } = useContext(SidebarModalContext);

  useEffect(() => {
    console.log(modalBtnClick);
  }, [modalBtnClick]);
  return (
    <section className="home-container">
      <FaBars className="fa-bars" onClick={() => handleIconClick("open")} />
      <Sidebar isIconClicked={iconClick} />
      <Modal isModalBtnClicked={modalBtnClick} />
      <button
        className={`modal-btn`}
        onClick={() => handleModalBtnClick("open")}
      >
        Show Modal
      </button>
    </section>
  );
};

export default Home;
