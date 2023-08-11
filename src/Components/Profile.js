import React from "react";
import "./Profile.css";
import dpp from "./profile.png";
import { useEffect } from "react";
import axios from "axios";

const Profile = () => {
  return (
    <div className="sub-menu-wrap" id="submenu">
      <div className="sub-menu">
        <div className="user-info">
          <img src={dpp} alt="...."></img>
          <h3 id="mname">Your Name</h3>
        </div>
        <hr />
        <a href="/" className="sub-menu-link">
          <i class="fa-solid fa-user" style={{ color: "#000000" }}></i>
          <p>Edit Profile</p>
          <span>{">"}</span>
        </a>
        <a href="/" className="sub-menu-link">
          <i className="fa-solid fa-gear"></i>
          <p>Setting & Privacy</p>
          <span>{">"}</span>
        </a>
        <a href="/" className="sub-menu-link">
          <i class="fa-solid fa-circle-info"></i>
          <p>Help and Support</p>
          <span>{">"}</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
