import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import SideBar from "../../components/Sidebar/SideBar";
import Widget from "../../components/Widgets/Widget";

import "./home.scss";
const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="mainContainer">
        <NavBar />
        <div className="widgetContainer">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
