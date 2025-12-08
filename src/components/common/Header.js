// src/components/common/Header.js (Bootstrap Navbar)
import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useGlobalContext();
  const navbarClass = isDarkTheme
    ? "navbar-dark bg-dark"
    : "navbar-light bg-light";
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <header
      className={`navbar navbar-expand-lg ${navbarClass} fixed-top shadow-sm`}
    >
      <div className="container">
        <a className="navbar-brand font-weight-bold" href="#">
          Vikram Mohanty
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                onClick={handleNavClick}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#education"
                onClick={handleNavClick}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={handleNavClick}>
                Skills
              </a>
            </li>
            <li className="nav-item ml-lg-3 mt-1">
              <button onClick={toggleTheme} className="btn btn-sm">
                {isDarkTheme ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Header;
