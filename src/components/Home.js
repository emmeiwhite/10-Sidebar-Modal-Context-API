import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import Modal from "./Modal";
import Sidebar from "./Sidebar";

const Home = () => {
  const [btnClick, setBtnClick] = useState(false);

  const handleButtonClick = () => {};
  return (
    <section className="home-container">
      <FaBars className="fa-bars" />
      <Sidebar />
      {/*  <Modal />*/}
      <button
        className={`modal-btn ${btnClick ? "btn-click" : null}`}
        onClick={handleButtonClick}
      >
        Show Modal
      </button>
    </section>
  );
};

export default Home;
