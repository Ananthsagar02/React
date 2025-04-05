import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export const Body = () => {
  // Local State Variable --Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //All Restaurants
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); // Filtered Restaurants

  const [searchText, setSearchText] = useState(""); // Search Text

  console.log("Body Render");

  //useEffect(2 params) - callback function, dependencies
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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button
            className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            const filteredlist = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredlist);
            // console.log(filteredlist);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {/* {listOfRestaurants.map((restaurant) => (
          //showing all the restaurants
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}  */}

        {filteredRestaurants.map((restaurant) => (
          //filtering all the restaurants
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} 
      </div>
    </div>
  );
};

export default Body;
