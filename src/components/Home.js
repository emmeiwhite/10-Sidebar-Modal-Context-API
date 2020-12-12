import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import { SidebarModalContext } from "./../context";

const Home = () => {
  const globalData = useContext(SidebarModalContext);

  console.log(globalData);
  return (
    <section className="home-container">
      <FaBars className="fa-bars" />
      <Sidebar />
      {/*  <Modal />*/}
      <button className={`modal-btn`}>Show Modal</button>
    </section>
  );
};

export default Home;
