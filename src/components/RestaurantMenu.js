import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_API, ITEM_IMG_CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // Ensure this matches the route parameter
  console.log(resId, "params");

  const resInfo = useRestaurantMenu(resId);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(RESTAURANT_MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json.data);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines = [], // Provide a fallback value as an empty array
    costForTwoMessage,
    locality,
    avgRating,
    totalRatingsString,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];
  console.log(itemCards, "u");

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>{costForTwoMessage}</p>
      <p>{locality}</p>
      <p>{avgRating}</p>
      <h2>Menu</h2>
      {/* <h1>{itemCards[0].card.info.name}</h1>
      <h1>{itemCards[1].card.info.name}</h1>
      <h1>{itemCards[2].card.info.name}</h1>
      <h1>{itemCards[3].card.info.name}</h1> */}
      <ul>
        {itemCards.map((item) => (
          // <h1>{itemCards[0].card.info.name}</h1> easy way to map
          <li key={item.card.info.id}>
            <div className="name-des">
              <div className="item-name">
                {" "}
                {item.card.info.name} - {item.card.info.price / 100}{" "}
              </div>
              <div className="des">{item?.card?.info?.description}</div>
            </div>

            <img
              className="menu-item-img"
              src={ITEM_IMG_CDN_URL + item?.card?.info?.imageId}
              alt={item?.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
