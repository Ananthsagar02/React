import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom/";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Body = () => {
  // Local State Variable --Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //All Restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered Restaurants

  const [searchText, setSearchText] = useState(""); // Search Text

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); //Higher Order Component

  //Whenever state variables update, react triggers a reconcilation cycle (re-renders the component)
  //Reconciliation - React will compare the previous state with the new state and update only the changed part of the DOM
  
 // console.log("Body Render", listOfRestaurants);

  //useEffect(2 params) - (callback function, [dependencies array])
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []); // useEffect is called after body is render or component is render

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // optional chaining
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your Internet connection</h1>
    );

const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="px-4 py-2 m-4 ">
          <input
            type="text"
            placeholder="Search"
            className="border search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              console.log(searchText);

              const filterRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurants(filterRestaurant);
              setFilteredRestaurants(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="px-4 py-2 font-semibold text-blue-700 bg-transparent border border-blue-500 rounded filter-btn hover:bg-blue-500 hover:text-white hover:border-transparent"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurants(filteredlist);
            // console.log(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
        <div className="search m-4 p-4 flex items-center">
          <label>UserName:</label>
          <input className="border border-black p-1" type="" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap res-container">
        {/* {listOfRestaurants.map((restaurant) => (
          //showing all the restaurants
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}  */}

        {filteredRestaurants.map((restaurant) => (
          //filtering all the restaurants
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant.info.promoted ? ( // if restaurant is promoted then add a promoted label to it
              <RestaurantCardPromoted resData={restaurant} /> //condition ? expressionIfTrue : expressionIfFalse.  isLoggedIn ? <LogoutButton /> : <LoginButton />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
