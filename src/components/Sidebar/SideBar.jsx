import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import ExtensionIcon from "@mui/icons-material/Extension";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">AdminDeep</span>
      </div>
      <div className="center">
        <ul className="sideList">
          <p className="title">MAIN</p>
          <li className="sideItems">
            <DashboardIcon className="icon" />
            <span className="item">DashBoard</span>
          </li>

          <p className="title">LISTS</p>
          <li className="sideItems">
            <GroupIcon className="icon" />
            <span className="item">Users</span>
          </li>
          <li className="sideItems">
            <ExtensionIcon className="icon" />
            <span className="item">Products</span>
          </li>
          <li className="sideItems">
            <TurnedInIcon className="icon" />
            <span className="item">Orders</span>
          </li>
          <li className="sideItems">
            <ShoppingCartIcon className="icon" />
            <span className="item">Delivery</span>
          </li>

          <p className="title">USEFUL</p>
          <li className="sideItems">
            <InsertChartIcon className="icon" />
            <span className="item">Stats</span>
          </li>
          <li className="sideItems">
            <NotificationsActiveIcon className="icon" />
            <span className="item">Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li className="sideItems">
            <HealthAndSafetyIcon className="icon" />
            <span className="item">System Health</span>
          </li>
          <li className="sideItems">
            <BookIcon className="icon" />
            <span className="item">Logs</span>
          </li>
          <li className="sideItems">
            <SettingsIcon className="icon" />
            <span className="item">Settings</span>
          </li>
          <p className="title">USERS</p>
          <li className="sideItems">
            <InsertEmoticonIcon className="icon" />
            <span className="item">Profile</span>
          </li>
          <li className="sideItems">
            <LogoutIcon className="icon" />
            <span className="item">Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOptions"></div>
        <div className="colorOptions"></div>
      </div>
    </div>
  );
};

export default SideBar;
