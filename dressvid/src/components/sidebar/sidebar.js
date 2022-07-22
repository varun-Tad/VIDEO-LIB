import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./sidebar.data";

import { toast } from "react-toastify";
import "./sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const toggleSideBar = () => {
    setSidebar(!sidebar);
  };

  const signInNavigate = () => {
    navigate("/signIn");
  };

  const signOutHandler = async (e) => {
    e.preventDefault();
    localStorage.removeItem("VideoLibraryToken");
    navigate("/");
    toast.success("Logout successful", {
      autoClose: 3000,
    });
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
          {localStorage.getItem("VideoLibraryToken") ? (
            <button className="user-btn signOut-btn" onClick={signOutHandler}>
              <FaRegUserCircle /> Sign Out
            </button>
          ) : (
            <button className="user-btn signIn-btn" onClick={signInNavigate}>
              <FaRegUserCircle /> Sign In
            </button>
          )}
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
          {SidebarData.map(({ title, path, altpath, icon, cName }, index) => {
            return (
              <li key={index} className={cName}>
                {localStorage.getItem("VideoLibraryToken") ? (
                  <Link to={path}>
                    {icon}
                    <span>{title}</span>
                  </Link>
                ) : (
                  <Link to={altpath}>
                    {icon}
                    <span>{title}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
