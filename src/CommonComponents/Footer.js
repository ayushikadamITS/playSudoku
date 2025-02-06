import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/footer.css";
import logo from '../assets/logo.png';
// import Rules from '../Components/Rules'

const Header = () => {
  return (
    <div className="footer_sec">
      <div className="container">
        <div className="footer_text">
          {/* <p>Powered By 
            <span><a className="navbar-brand"
              href="https://intelliatech.com/" 
            target="_blank" rel="noopener noreferrer">
       
            </a> Intelliatech Solutions PVT. Ltd.</span></p> */}
          <img
            // src={logo}
            src={logo}
            alt="Desktop Logo"
            className="img_logo desktop-logo"
          />
          <p>
            Powered By
            <span>
              <a
                className="navbar-brand"
                href="https://intelliatech.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "8px" }}
              >
                Intelliatech Solutions PVT. Ltd.
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
