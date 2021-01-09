import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col">Zak.Dev &copy; 2020</div>
          <div className="col">
            <ul className="footer-links">
              <li>
                <a href=""><i className="bi-linkedin"></i> LinkedIn</a>
              </li>
              <li>
                <a href=""><i className="bi-twitter"></i> Twitter</a>
              </li>
              <li>
                <a href=""><i className="bi-github"></i> Github</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
