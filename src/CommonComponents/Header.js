import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/header.css";
// import logo from "../assets/logo.png"; // Desktop Logo
import logo2 from "../assets/logo2.gif"; // Mobile Logo


const Header = () => {
  return (
    <>
      {/* Always Visible Mobile Logo */}
      <div className="mobile-logo-container">
        <img src={logo2} alt="Mobile Logo" className="img_logo mobile-logo" />
      </div>

      {/* Header (Hidden on Mobile) */}
      <div className="header_sec">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href={window.location.href}>
                {/* Desktop Logo */}
                <img
                  // src={logo}
                  src={logo2}
                  alt="Desktop Logo"
                  className="img_logo1 desktop-logo"
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
