import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  //Press Control + Command + Space to open the emoji picker.

  return (
    <div className="flex justify-between bg-blue-100 shadow-lg m-2.5 header">
      <div className="logo-img">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex">
          <li>
           Online Status: {onlineStatus ? "✅" : '🔴' } 
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName = "Logout";
              setbtnName(btnName === "Login" ? "Logout" : "Login");
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
