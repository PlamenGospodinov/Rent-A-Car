import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="uk-section-secondary">
      <div uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent uk-dark;top: 200">
        <nav className="uk-navbar-container">
          <div className="uk-container uk-container-expand">
            <div uk-navbar="true">
              <div class="uk-navbar-center">
                <ul className="uk-navbar-nav">
                  <li className="uk-active" >
                    <Link to={"/"}>Rent-A-Car Plovdiv</Link>
                  </li>
                  <li style={{ marginLeft: "500px" }}>
                    <Link to={"/customers"}>Our Customers</Link>
                  </li>
                  <li style={{ right: "80px" }}>
                    <Link to={"/"}>Our Vehicles</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
