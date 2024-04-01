import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  console.log("header rendered")

  return (
    <div className="header">
      <div className="logo-container">
       <Link to="/"> <img className="logo" src={LOGO_URL} alt="FOOD LOGO" /> </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">HOME</Link> 
          </li>
          <li>
          <Link to="/about">ABOUT US</Link> 
          </li>
          <li>
          <Link to="/contact">CONTACT US</Link> 
          </li>
          <li>CART</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
