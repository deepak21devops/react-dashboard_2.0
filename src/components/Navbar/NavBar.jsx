import React from "react";
import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..."></input>
          <SearchIcon />
        </div>
        <div className="navItems">
          <div className="itemIcons">
            <LanguageIcon className="icon" />
            <span>English</span>
          </div>

          <div className="itemIcons">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="itemIcons">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="itemIcons">
            <NotificationsActiveOutlinedIcon className="icon" />
            <div className="notify">1</div>
          </div>
          <div className="itemIcons">
            <MessageOutlinedIcon className="icon" />
            <div className="notify">2</div>
          </div>
          <div className="itemIcons">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="itemIcons">
            <img src="/images/man.jpg" alt="" className="avatar"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
