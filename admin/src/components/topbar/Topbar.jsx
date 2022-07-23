import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">shashwatadmin</span>
        </div>
        <div className="topRight">
       
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://pps.whatsapp.net/v/t61.24694-24/261629731_811097543619973_5144205219536461212_n.jpg?ccb=11-4&oh=01_AVzbTQY-mv14EQNNosEFJyGmhB0zlotrKfQ55LWQKhW_fw&oe=62E94927" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
