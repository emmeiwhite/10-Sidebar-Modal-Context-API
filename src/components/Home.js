import React, { useContext, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { SidebarModalContext } from "./../context";

const Home = () => {
  const { handleBtnClick, btnClick, handleIconClick, iconClick } = useContext(
    SidebarModalContext
  );

  useEffect(() => {
    console.log(btnClick);
  }, [btnClick]);
  return (
    <section className="home-container">
      <FaBars className="fa-bars" onClick={handleIconClick} />
      <Sidebar isIconClicked={iconClick} />
      {/*  <Modal />*/}
      <button className={`modal-btn`} onClick={handleBtnClick}>
        Show Modal
      </button>
    </section>
  );
};

export default Home;
