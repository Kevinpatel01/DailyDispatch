import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import "./Navbar.css";
import { AiOutlineUser } from "react-icons/ai";
import Profile from "./Profile";

const Navbar = (props) => {
  const navigate = useNavigate();

  const [showprofile, setShowprofile] = useState(false);

  const handleClick = () => {
    navigate("/Login");
  };

  const handleProfile = () => {
    setShowprofile(!showprofile);
  };

  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link className="nav1">DailyDispatch</Link>
          </li>
          <li className="nav-item">
            <Link to="/buisness" className="nav1">
              Buisness
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/entertainment" className="nav1">
              Entertainment
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/general" className="nav1">
              General
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/health" className="nav1">
              Health
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/science" className="nav1">
              Science
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sports" className="nav1">
              Sports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav1" to="/technology">
              Technology
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav1" to="/about">
              About us
            </Link>
          </li>
        </ul>
        <div className="button-prof">
          <div className="profile-section">
            <i className="profile" onClick={handleProfile}>
              <AiOutlineUser />
              {showprofile && <Profile />}
            </i>
          </div>
          <div className="button" onClick={handleClick}>
            <i className="logouticon">
              <HiOutlineLogout />
            </i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
