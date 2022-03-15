import React from "react";
import Chart from "../../components/Chart/Chart";
import Featured from "../../components/Featured/Featured";
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
        <div className="chartContainer">
          <Featured />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Home;
