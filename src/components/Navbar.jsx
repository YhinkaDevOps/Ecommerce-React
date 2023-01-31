import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <div>
      <header className="header">
        <div className="container d_flex">
          <div className="categories d_flex">
            <span>
              <i className="fa-solid fa-border-all"></i>
            </span>
            <h4>
              Categories <i className="fa-solid fa-caret-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pages">Pages</Link>
              </li>
              <li>
                <Link to="/vendor">User account</Link>
              </li>
              <li>
                <Link to="/track">My order</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fa-solid fa-xmark close home-btn"></i>
              ) : (
                <i className="fa-solid fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
