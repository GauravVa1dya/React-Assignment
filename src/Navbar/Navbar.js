import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu, IoSearch } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showBlockchainDropdown, setShowBlockchainDropdown] = useState(false);
  const [showDevelopersDropdown, setShowDevelopersDropdown] = useState(false);
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const toggleDropdown = (dropdownSetter) => {
    return () => {
      dropdownSetter(prevState => !prevState);
    };
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__left">
          <NavLink to="/" className="nav__logo">
            <img src="/images/Jiffyscan icon.png" alt="Logo" className="nav__logo-image" />
          </NavLink>
          <div className={`nav__list ${showMenu ? 'show-menu' : ''}`}>
            <ul className="nav__items">
              <li className="nav__item">
                <NavLink to="/" className="nav__link">Home</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/blockchain" className="nav__link">Blockchain</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/developers" className="nav__link">Developers</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/more" className="nav__link">More</NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/about" className="nav__link">About 4337</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="nav__right">
          <div className="nav__search-container">
            <select className="nav__search-dropdown">
              <option value="all"><img src="images/Lightning.png" /></option>
              <option value="users">Users</option>
              <option value="posts">Posts</option>
            </select>
            <input
              type="text"
              className="nav__search-input"
              placeholder="Search an userOp"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="nav__profile" onClick={toggleProfileDropdown}>
            <div className="nav__profile-pic-text">
              <img src="images/Avatar.png"/>
              {/* <div className="green-dot"></div> */}
            </div>
            <div className="nav__profile-info">
              <span className="nav__profile-name">Olivia Rhye</span>
              <span className="nav__profile-email">olivia@jiffyscan.xyz</span>
            </div>
            {showProfileDropdown && (
              <div className="profile-dropdown">
                <NavLink to="/profile" className="profile-dropdown__item">Profile</NavLink>
                <NavLink to="/settings" className="profile-dropdown__item">Settings</NavLink>
                <NavLink to="/logout" className="profile-dropdown__item">Logout</NavLink>
              </div>
            )}
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
