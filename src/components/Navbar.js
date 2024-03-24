import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [isShowing, setIsShowing] = useState(false);

  const showDropdownMenu = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-sub-container">
        <div className="left-items">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h3>Z-STORE</h3>
          </Link>
        </div>
        <div className="right-items">
          <a href="#apps">Apps</a>
          <a href="#wallpapers">Wallpapers</a>
          <a href="#games">Games</a>
          {/* <a target="_blank" href="https://zarfdev.netlify.app/">
            About Me
          </a> */}
        </div>

        <div className="menu-button-container">
          <div class="dropdown">
            <div className="menu-button-container">
              <button onClick={() => showDropdownMenu()}>
                <IoMenu size={20}></IoMenu>
              </button>
            </div>
            <div
              class="dropdown-content"
              style={{ display: isShowing ? "block" : "none" }}
            >
              <a href="#apps" onClick={() => showDropdownMenu()}>
                Apps
              </a>
              <a href="#wallpapers" onClick={() => showDropdownMenu()}>
                Wallpapers
              </a>
              <a href="#games" onClick={() => showDropdownMenu()}>
                Games
              </a>
              {/* <a
                target="_blank"
                href="https://zarfdev.netlify.app/"
                onClick={() => showDropdownMenu()}
              >
                About Me
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
