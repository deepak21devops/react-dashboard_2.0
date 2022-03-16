import React from "react";
import "./list.scss";
import SideBar from "../../components/Sidebar/SideBar";
import NavBar from "../../components/Navbar/NavBar";
import UserComp from "../../components/UsersComp/UserComp";
const List = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="usersContainer">
        <NavBar />
        <UserComp />
      </div>
    </div>
  );
};

export default List;
