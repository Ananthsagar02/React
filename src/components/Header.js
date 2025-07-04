import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser, "context");

  //Press Control + Command + Space to open the emoji picker.

  // Subscribing to the store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems,"store")
  const bagItems = useSelector((store) => store.prod.product);
  console.log(bagItems, ' baggg');

  return (
    <div className="flex justify-between bg-blue-100 shadow-lg m-2.5 header">
      <div className="logo-img">
        <img className="logo" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
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
          <li>
            <Link to="/product">Product</Link>
          </li>
          <li className="font-bold">
            <Link to="/bag">
              MY BAG <span>({bagItems.length})</span>
            </Link>
          </li>
          <li className="font-bold text-xl">
            <Link to="/cart">
              Cart <span className="">({cartItems.length} )</span>items
            </Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName = "Logout";
              setbtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//reducers
//context API
//redux toolkit
//axios
//
