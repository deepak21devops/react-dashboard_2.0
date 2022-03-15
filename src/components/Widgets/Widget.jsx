import React from "react";
import "./widget.scss";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
const Widget = ({ type }) => {
  let data = "";
  let amount = "100";

  switch (type) {
    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        percentage: "20%",
        subtitle: "See all Users",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#E0777D", color: "#8E3B46" }}
          />
        ),
      };
      break;

    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        percentage: "20%",
        subtitle: "View all orders",
        icon: (
          <PaidOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#73E2A7", color: "#1C7C54" }}
          />
        ),
      };
      break;

    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        percentage: "20%",
        subtitle: "View net Earnings",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#91C4F2", color: "#8CA0D7" }}
          />
        ),
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        percentage: "20%",
        subtitle: "See details",
        icon: (
          <PermIdentityOutlinedIcon
            className="icon"
            style={{ backgroundColor: "#EA3788", color: "#361134" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <p className="title">{data.title}</p>
        <p className="counter">{data.isMoney ? `$ ${amount}` : amount}</p>
        <p className="subtitle">{data.subtitle}</p>
      </div>
      <div className="right">
        <div className="rightpercentage">
          <KeyboardArrowDownOutlinedIcon />
          <span className="percent">20%</span>
        </div>
        <div className="userProfile">{data.icon}</div>
      </div>
    </div>
  );
};

export default Widget;
