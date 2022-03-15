import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="titleContainer">
          <p className="title">Total Revenue</p>
          <MoreVertIcon className="icon" />
        </div>
        <div className="progressContainer">
          <CircularProgressbar value={70} text={`${70}%`} strokeWidth={5} />
        </div>
        <div className="saleContainer">
          <p className="saleTitle">Total Sales made Today</p>
          <p className="amount">$420</p>
          <p className="saledesc">
            Previous transactions processing Last payments may not be included
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottomContainer">
          <div className="contentBox">
            <p className="contentTitle">Target</p>
            <div className="contentPrice">
              <KeyboardArrowDownOutlinedIcon className="icon negative" />
              <p className="contentAmount negative">$12.4k</p>
            </div>
          </div>

          <div className="contentBox">
            <p className="contentTitle">Last Week</p>
            <div className="contentPrice ">
              <ArrowDropUpOutlinedIcon className="icon positive" />
              <p className="contentAmount positive">$12.4k</p>
            </div>
          </div>

          <div className="contentBox">
            <p className="contentTitle">Last Month</p>
            <div className="contentPrice">
              <ArrowDropUpOutlinedIcon className="icons positive" />
              <p className="contentAmount positive">$12.4k</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
