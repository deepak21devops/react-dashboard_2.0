import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Sidebar/SideBar";
import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="mainContainer">
        <NavBar />
        HomeContainer
      </div>
    </div>
  );
};

export default Home;
