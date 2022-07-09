import React, { useState } from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./sidebar.data";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  const signInNavigate = () => {
    console.log("yes");
    navigate("/signIn");
  };

  return (
    <>
      <div className="navbar">
        <div className="yoo">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={toggleSideBar} />
          </Link>
          <div className="logo-name-container">
            <BsDisplay className="logo" />
            <span className="logo-text">Dressvid</span>
          </div>
        </div>

        <div className="signIn-btn-container">
          <button className="signIn-btn" onClick={signInNavigate}>
            <FaRegUserCircle /> Sign In
          </button>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={toggleSideBar}>
          <li className="navbar-toggle">
            <div className="logo-name-container">
              <BsDisplay className="logo" />
              <span className="logo-text">Dressvid</span>
            </div>
            <Link to="#" className="close-bars">
              <AiIcons.AiOutlineClose onClick={toggleSideBar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
